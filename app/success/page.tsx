import Link from "next/link";

export default function SuccessPage() {
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Inquiry submitted</span>
        <h1>Thank you</h1>
        <p>Your inquiry has been recorded. Aura Fintec Services will contact you after reviewing the details.</p>
        <Link className="primary-button" href="/calculators/emi-calculator">Plan EMI While You Wait</Link>
      </section>
    </main>
  );
}
