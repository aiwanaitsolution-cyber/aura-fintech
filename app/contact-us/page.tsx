import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Aura Fintec Services for loan advisory and financial services inquiries."
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero"><span className="eyebrow">Contact</span><h1>Speak with Aura Fintec Services.</h1><p>Use the inquiry form, call, email or WhatsApp for loan syndication, structured finance and financial advisory discussions.</p></section>
      <section className="page-content"><div className="section-inner grid-2"><div className="page-panel"><h2>Contact information</h2><p><strong>Phone:</strong> {site.phone}</p><p><strong>Email:</strong> {site.email}</p><p><strong>Consultations:</strong> {site.address}</p><p><strong>Hours:</strong> By appointment</p></div><LeadForm /></div></section>
    </main>
  );
}
