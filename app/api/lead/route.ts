import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  fullName: z.string().min(2),
  mobile: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email(),
  city: z.string().min(2),
  pinCode: z.string().regex(/^\d{6}$/),
  loanProduct: z.string().min(1),
  amount: z.number().min(50000),
  income: z.number().min(10000),
  employmentType: z.string().min(1),
  existingEmi: z.number().min(0),
  contactTime: z.string().min(1),
  consent: z.literal(true),
  website: z.string().optional(),
  sourcePath: z.string().optional(),
  submittedAt: z.string().optional()
});

const simpleSchema = z.object({
  name: z.string().min(2),
  mobile: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email(),
  enquiry: z.string().min(5),
  website: z.string().optional(),
  sourcePath: z.string().optional(),
  submittedAt: z.string().optional()
});

const recent = new Map<string, number>();

type LeadPayload =
  | (z.infer<typeof schema> & { kind: "full"; receivedAt: string; utmReady: boolean; crmReady: boolean })
  | (z.infer<typeof simpleSchema> & { kind: "simple"; receivedAt: string; utmReady: boolean; crmReady: boolean });

function env(name: string) {
  return process.env[name]?.trim();
}

function isConfigured(...names: string[]) {
  return names.every((name) => Boolean(env(name)));
}

function supabaseBaseUrl() {
  const value = env("SUPABASE_URL");
  if (!value) return undefined;

  try {
    const url = new URL(value);
    if (url.hostname === "unjurecwbodtqvrmoqjd.supabase.co") {
      url.hostname = "unjurecwbotdqvrmoqjd.supabase.co";
      console.warn("Normalized typo in SUPABASE_URL hostname", { original: value, fixed: url.toString() });
    }
    return url.toString().replace(/\/$/, "");
  } catch {
    return value.replace(/\/$/, "");
  }
}

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : value;
}

function normalizeMobile(value: unknown) {
  if (typeof value !== "string") return value;
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) return digits;
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  return value.trim();
}

function normalizeLeadBody(body: unknown) {
  if (!body || typeof body !== "object") return body;
  const record = body as Record<string, unknown>;
  return {
    ...record,
    fullName: cleanString(record.fullName),
    name: cleanString(record.name),
    mobile: normalizeMobile(record.mobile),
    email: cleanString(record.email),
    city: cleanString(record.city),
    pinCode: cleanString(record.pinCode),
    loanProduct: cleanString(record.loanProduct),
    employmentType: cleanString(record.employmentType),
    contactTime: cleanString(record.contactTime),
    enquiry: cleanString(record.enquiry),
    website: cleanString(record.website),
    sourcePath: cleanString(record.sourcePath),
    submittedAt: cleanString(record.submittedAt)
  };
}

function leadSubject(lead: LeadPayload) {
  return lead.kind === "full"
    ? `New ${lead.loanProduct} inquiry from ${lead.fullName}`
    : `New website enquiry from ${lead.name}`;
}

function leadRows(lead: LeadPayload) {
  const baseRows = lead.kind === "full"
    ? [
        ["Name", lead.fullName],
        ["Mobile", lead.mobile],
        ["Email", lead.email],
        ["Loan product", lead.loanProduct],
        ["Required amount", `Rs. ${lead.amount.toLocaleString("en-IN")}`],
        ["Income / turnover", `Rs. ${lead.income.toLocaleString("en-IN")}`],
        ["Employment type", lead.employmentType],
        ["Existing EMI", `Rs. ${lead.existingEmi.toLocaleString("en-IN")}`],
        ["City", lead.city],
        ["PIN code", lead.pinCode],
        ["Preferred contact time", lead.contactTime]
      ]
    : [
        ["Name", lead.name],
        ["Mobile", lead.mobile],
        ["Email", lead.email],
        ["Enquiry", lead.enquiry]
      ];

  return [
    ...baseRows,
    ["Source page", lead.sourcePath || "Website"],
    ["Submitted at", lead.submittedAt || lead.receivedAt],
    ["Received at", lead.receivedAt]
  ];
}

function leadEmailHtml(lead: LeadPayload) {
  const rows = leadRows(lead)
    .map(([label, value]) => `<tr><td style="padding:10px 12px;border-bottom:1px solid #e7edf5;color:#65758b;font-weight:700;">${label}</td><td style="padding:10px 12px;border-bottom:1px solid #e7edf5;color:#041b38;font-weight:800;">${String(value)}</td></tr>`)
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;background:#f6f8fb;padding:24px;">
      <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #dbe5ef;border-radius:14px;overflow:hidden;">
        <div style="background:#041b38;color:#fff;padding:20px 24px;">
          <p style="margin:0 0 6px;color:#f28c18;font-weight:800;text-transform:uppercase;letter-spacing:.08em;">Aura Fintec Services</p>
          <h1 style="margin:0;font-size:24px;line-height:1.2;">New website lead received</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
      </div>
    </div>
  `;
}

async function saveLeadToSupabase(lead: LeadPayload) {
  const baseUrl = supabaseBaseUrl();
  if (!baseUrl || !isConfigured("SUPABASE_SERVICE_ROLE_KEY")) {
    console.warn("Supabase is not configured. Lead was validated but not saved.");
    return;
  }

  const response = await fetch(`${baseUrl}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: env("SUPABASE_SERVICE_ROLE_KEY")!,
      Authorization: `Bearer ${env("SUPABASE_SERVICE_ROLE_KEY")}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify({
      kind: lead.kind,
      full_name: lead.kind === "full" ? lead.fullName : lead.name,
      mobile: lead.mobile,
      email: lead.email,
      loan_product: lead.kind === "full" ? lead.loanProduct : null,
      amount: lead.kind === "full" ? lead.amount : null,
      income: lead.kind === "full" ? lead.income : null,
      employment_type: lead.kind === "full" ? lead.employmentType : null,
      existing_emi: lead.kind === "full" ? lead.existingEmi : null,
      city: lead.kind === "full" ? lead.city : null,
      pin_code: lead.kind === "full" ? lead.pinCode : null,
      contact_time: lead.kind === "full" ? lead.contactTime : null,
      enquiry: lead.kind === "simple" ? lead.enquiry : null,
      source_path: lead.sourcePath || null,
      submitted_at: lead.submittedAt || null,
      raw_payload: lead
    })
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Supabase lead save failed: ${response.status} ${detail}`);
  }
}

async function sendLeadEmail(lead: LeadPayload) {
  if (!isConfigured("RESEND_API_KEY", "LEAD_NOTIFY_EMAIL", "LEAD_FROM_EMAIL")) {
    console.warn("Resend is not configured. Lead was validated but email was not sent.");
    return { ok: false as const, reason: "Resend is not configured." };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env("RESEND_API_KEY")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: env("LEAD_FROM_EMAIL"),
      to: [env("LEAD_NOTIFY_EMAIL")],
      subject: leadSubject(lead),
      html: leadEmailHtml(lead),
      reply_to: lead.email
    })
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.warn("Resend email failed", { status: response.status, detail });
    return { ok: false as const, reason: `Resend email failed: ${response.status}` };
  }

  return { ok: true as const };
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "local";
  const last = recent.get(ip) ?? 0;
  if (Date.now() - last < 20_000) {
    return NextResponse.json({ ok: false, error: "Please wait before submitting again." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const normalizedBody = normalizeLeadBody(body);
  const parsed = schema.safeParse(normalizedBody);
  const simpleParsed = simpleSchema.safeParse(normalizedBody);
  if ((!parsed.success && !simpleParsed.success) || (parsed.success && parsed.data.website) || (simpleParsed.success && simpleParsed.data.website)) {
    return NextResponse.json({ ok: false, error: "Invalid inquiry." }, { status: 400 });
  }
  recent.set(ip, Date.now());

  let lead: LeadPayload;
  if (parsed.success) {
    lead = {
      ...parsed.data,
      receivedAt: new Date().toISOString(),
      utmReady: true,
      crmReady: true,
      kind: "full"
    };
  } else if (simpleParsed.success) {
    lead = {
      ...simpleParsed.data,
      receivedAt: new Date().toISOString(),
      utmReady: true,
      crmReady: true,
      kind: "simple"
    };
  } else {
    return NextResponse.json({ ok: false, error: "Invalid inquiry." }, { status: 400 });
  }

  try {
    await saveLeadToSupabase(lead);
    const emailResult = await sendLeadEmail(lead);
    if (!emailResult.ok) {
      console.warn("Aura lead email skipped or failed", emailResult.reason);
    }
  } catch (error) {
    console.error("Aura lead processing failed", error);
    return NextResponse.json({ ok: false, error: "We could not save this inquiry. Please try again." }, { status: 500 });
  }

  console.info("Aura lead received", { kind: lead.kind, email: lead.email, receivedAt: lead.receivedAt });
  return NextResponse.json({ ok: true });
}
