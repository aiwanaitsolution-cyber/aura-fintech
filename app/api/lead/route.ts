import { NextResponse } from "next/server";
import { z } from "zod";

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

const recent = new Map<string, number>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "local";
  const last = recent.get(ip) ?? 0;
  if (Date.now() - last < 20_000) {
    return NextResponse.json({ ok: false, error: "Please wait before submitting again." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success || parsed.data.website) {
    return NextResponse.json({ ok: false, error: "Invalid inquiry." }, { status: 400 });
  }
  recent.set(ip, Date.now());

  const lead = {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
    utmReady: true,
    crmReady: true
  };

  console.info("Aura lead received", lead);
  return NextResponse.json({ ok: true });
}
