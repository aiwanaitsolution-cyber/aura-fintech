import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Become a Partner",
  description: "Referral partner inquiry page for Aura Fintec Services."
};

export default function BecomePartnerPage() {
  return (
    <main>
      <section className="page-hero"><span className="eyebrow">Referral partner</span><h1>Become a referral partner.</h1><p>For professionals and businesses who want to refer finance inquiries with a transparent, compliant handoff.</p></section>
      <section className="page-content"><div className="section-inner grid-2"><div className="page-panel"><h2>Partner flow</h2><ol><li>Submit partner interest.</li><li>Aura verifies fit, scope and compliance requirements.</li><li>Referral process and client-consent norms are documented.</li></ol><p className="disclaimer">Commercial terms, referral eligibility and compliance responsibilities must be confirmed by the client.</p></div><LeadForm product="Referral Partner" /></div></section>
    </main>
  );
}
