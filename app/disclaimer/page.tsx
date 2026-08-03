import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer", description: "Loan facilitation and calculator disclaimer for Aura Fintec Services." };

export default function DisclaimerPage() {
  return (
    <main><section className="page-hero"><span className="eyebrow">Disclosures</span><h1>Disclaimer</h1><p>Important disclosures for borrowers and business applicants.</p></section><section className="page-content"><article className="section-inner page-panel"><h2>No approval guarantee</h2><p>Loan approval is subject to lender policies, eligibility, documentation, credit assessment and applicable terms.</p><h2>Indicative calculators</h2><p>Calculator results are estimates only and may not include all fees, taxes, charges or lender-specific terms.</p><h2>DSA / facilitator role</h2><p>Aura Fintec Services acts as a facilitator or DSA where applicable and is not itself the lender unless separately documented.</p><h2>Partner logos</h2><p>Bank and NBFC names or logos must be used only after genuine relationships and usage permissions are confirmed.</p></article></section></main>
  );
}
