"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { services, site } from "@/lib/client-data";

const leadSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email"),
  city: z.string().min(2, "Enter city"),
  pinCode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit PIN code"),
  loanProduct: z.string().min(1, "Choose a product"),
  amount: z.coerce.number().min(50000, "Enter at least Rs. 50,000"),
  income: z.coerce.number().min(10000, "Enter monthly income or turnover"),
  employmentType: z.string().min(1, "Choose employment type"),
  existingEmi: z.coerce.number().min(0),
  contactTime: z.string().min(1, "Choose preferred contact time"),
  consent: z.boolean().refine((value) => value, "Consent is required"),
  website: z.string().max(0).optional()
});

type LeadValues = z.infer<typeof leadSchema>;

export function LeadForm({ product = "" }: { product?: string }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting }
  } = useForm<LeadValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      loanProduct: product,
      existingEmi: 0,
      consent: false
    }
  });

  const stepFields = [
    ["loanProduct", "amount"],
    ["employmentType", "income", "existingEmi"],
    ["city", "pinCode", "contactTime"],
    ["fullName", "mobile", "email"],
    ["consent"]
  ] as const;

  async function nextStep() {
    const valid = await trigger([...stepFields[step - 1]]);
    if (valid && step < 5) setStep((value) => value + 1);
  }

  async function onSubmit(values: LeadValues) {
    setStatus("");
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, sourcePath: window.location.pathname, submittedAt: new Date().toISOString() })
    });
    if (!response.ok) {
      setStatus("We could not save this inquiry. Please try calling or WhatsApp instead.");
      return;
    }
    router.push("/success");
  }

  return (
    <form className="lead-form onboarding-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input className="honeypot" tabIndex={-1} autoComplete="off" {...register("website")} aria-hidden />
      <div className="form-stepper" aria-label={`Step ${step} of 2`}>
        {["Loan", "Profile", "Location", "Contact", "Consent"].map((label, index) => <span key={label} className={step === index + 1 ? "active" : ""}>{label}</span>)}
      </div>
      <h3>{["What do you need?", "Tell us your profile", "Where should we coordinate?", "How can Aura reach you?", "Confirm consent"][step - 1]}</h3>
      <p className="form-helper">Your details stay server-validated and CRM-ready. Do not share OTPs, passwords or card PINs.</p>
      {step === 1 && (
        <div className="form-grid">
          <Field label="Loan product" error={errors.loanProduct?.message}>
            <select {...register("loanProduct")}>
              <option value="">Select product</option>
              {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
            </select>
          </Field>
          <Field label="Required amount" error={errors.amount?.message}>
            <input {...register("amount")} type="number" min="50000" />
          </Field>
        </div>
      )}
      {step === 2 && (
        <div className="form-grid">
          <Field label="Monthly income / turnover" error={errors.income?.message}>
            <input {...register("income")} type="number" min="10000" />
          </Field>
          <Field label="Employment / business type" error={errors.employmentType?.message}>
            <select {...register("employmentType")}>
              <option value="">Select type</option>
              <option>Salaried</option>
              <option>Self-employed professional</option>
              <option>Business owner</option>
              <option>MSME / Manufacturer</option>
            </select>
          </Field>
          <Field label="Existing monthly EMI" error={errors.existingEmi?.message}>
            <input {...register("existingEmi")} type="number" min="0" />
          </Field>
        </div>
      )}
      {step === 3 && (
        <div className="form-grid">
          <Field label="City" error={errors.city?.message}>
            <input {...register("city")} />
          </Field>
          <Field label="PIN code" error={errors.pinCode?.message}>
            <input {...register("pinCode")} inputMode="numeric" />
          </Field>
          <Field label="Preferred contact time" error={errors.contactTime?.message}>
            <select {...register("contactTime")}>
              <option value="">Select time</option>
              <option>10 AM - 1 PM</option>
              <option>1 PM - 4 PM</option>
              <option>4 PM - 7 PM</option>
            </select>
          </Field>
        </div>
      )}
      {step === 4 && (
        <div className="form-grid">
          <Field label="Full name" error={errors.fullName?.message}>
            <input {...register("fullName")} autoComplete="name" />
          </Field>
          <Field label="Mobile number" error={errors.mobile?.message}>
            <input {...register("mobile")} inputMode="numeric" autoComplete="tel" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} type="email" autoComplete="email" />
          </Field>
        </div>
      )}
      {step === 5 && (
        <div className="form-grid">
          <label className="consent">
            <input type="checkbox" {...register("consent")} />
            <span>
              I consent to be contacted by Aura Fintec Services for my inquiry. Approval is subject to lender assessment.
            </span>
          </label>
          {errors.consent?.message && <p className="error-text">{errors.consent.message}</p>}
          <a className="whatsapp-link" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
            Continue on WhatsApp
          </a>
        </div>
      )}
      <div className="form-actions">
        {step > 1 && <button className="ghost-button" type="button" onClick={() => setStep((value) => value - 1)}>Back</button>}
        {step < 5 ? <button className="primary-button form-next" type="button" onClick={nextStep}>Continue</button> : <button className="primary-button" disabled={isSubmitting} type="submit">{isSubmitting ? "Submitting..." : "Submit Inquiry"}</button>}
      </div>
      {status && <p className="error-text">{status}</p>}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
      {error && <small>{error}</small>}
    </label>
  );
}
