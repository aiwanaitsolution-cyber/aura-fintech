import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Apply Now",
  description: "Submit a loan inquiry to Aura Fintec Services with consent and clear disclosures."
};

export default function ApplyNowPage() {
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Loan inquiry</span>
        <h1>Apply Now</h1>
        <p>Share your requirement. Aura will review the profile information and guide the next steps without promising approval.</p>
      </section>
      <section className="page-content">
        <div className="section-inner grid-2">
          <div className="page-panel">
            <h2>What happens after submission?</h2>
            <ol>
              <li>Your inquiry is validated and source-tagged.</li>
              <li>Aura reviews product fit, repayment capacity and document readiness.</li>
              <li>You are contacted at the preferred time for the next step.</li>
            </ol>
            <p className="disclaimer">Never share OTPs, passwords or card PINs. Aura does not ask for sensitive credentials through this website.</p>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
