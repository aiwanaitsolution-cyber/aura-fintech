import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms and Conditions", description: "Terms and conditions template for Aura Fintec Services." };

export default function TermsPage() {
  return (
    <main><section className="page-hero"><span className="eyebrow">Legal</span><h1>Terms and Conditions</h1><p>Use of this website is subject to these template terms and client legal review.</p></section><section className="page-content"><article className="section-inner page-panel"><h2>Website use</h2><p>Website content is for general information and inquiry facilitation. It is not a loan sanction, financial guarantee or legal advice.</p><h2>Applications</h2><p>All applications are subject to lender policies, eligibility, documentation, credit assessment, charges and applicable terms.</p><h2>Accuracy</h2><p>Users are responsible for providing accurate information. False or incomplete information can delay or prevent lender assessment.</p><h2>Third-party lenders</h2><p>Aura Fintec Services may facilitate discussions where applicable but final lender terms are controlled by the lender.</p></article></section></main>
  );
}
