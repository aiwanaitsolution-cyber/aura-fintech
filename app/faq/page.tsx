import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { faqs, services } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about loan facilitation, eligibility, calculators, documentation and compliance."
};

export default function FaqPage() {
  return (
    <main>
      <section className="page-hero"><span className="eyebrow">FAQs</span><h1>Clear answers before applying.</h1><p>Loan approval, pricing and documentation are controlled by lender policy and applicant profile.</p></section>
      <section className="page-content"><div className="section-inner"><FAQ items={[...faqs, ...services.flatMap((service) => service.faqs).slice(0, 12)]} /></div></section>
    </main>
  );
}
