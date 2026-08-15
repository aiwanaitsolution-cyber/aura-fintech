"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

export function ContactInquiryForm() {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    enquiry: ""
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        sourcePath: window.location.pathname,
        submittedAt: new Date().toISOString()
      })
    });
    if (!response.ok) {
      setStatus("We could not save this inquiry right now. Please try again.");
      return;
    }
    router.push("/success");
  }

  return (
    <form className="simple-contact-form page-panel" onSubmit={onSubmit}>
      <h2>Send an enquiry</h2>
      <div className="simple-form-grid">
        <label className="field">
          <span>Name</span>
          <input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} />
        </label>
        <label className="field">
          <span>Contact no</span>
          <input
            inputMode="numeric"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            pattern="[6-9][0-9]{9}"
            value={form.mobile}
            onChange={(event) => setForm((current) => ({ ...current, mobile: event.target.value.replace(/\D/g, "").slice(0, 10) }))}
          />
        </label>
        <label className="field simple-enquiry">
          <span>Enquiry</span>
          <textarea rows={6} value={form.enquiry} onChange={(event) => setForm((current) => ({ ...current, enquiry: event.target.value }))} />
        </label>
      </div>
      <button className="primary-button" type="submit">Submit enquiry</button>
      {status && <p className="error-text">{status}</p>}
    </form>
  );
}
