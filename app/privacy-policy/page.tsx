import type { Metadata } from "next";
import { site } from "@/lib/client-data";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy template for Aura Fintec Services." };

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" sections={[
    ["Information we collect", "We may collect contact details, city, PIN code, loan requirement, income or turnover range, employment type, existing EMI, consent status, source page and UTM parameters for inquiry handling."],
    ["How information is used", "Information is used to respond to inquiries, understand product fit, prepare lender-ready discussion and maintain consent logs."],
    ["Sharing", "Information may be shared with lenders, CRM, email or service providers only where required for the inquiry and subject to consent and applicable law."],
    ["Security", "Do not submit OTPs, passwords, account credentials or card PINs. Production deployment should connect secure CRM/email systems through server-side environment variables."],
    ["Client confirmation", site.unverifiedNote]
  ]} />;
}

function LegalPage({ title, sections }: { title: string; sections: [string, string][] }) {
  return <main><section className="page-hero"><span className="eyebrow">Legal</span><h1>{title}</h1><p>Template for client legal review before production.</p></section><section className="page-content"><article className="section-inner page-panel">{sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}</article></section></main>;
}
