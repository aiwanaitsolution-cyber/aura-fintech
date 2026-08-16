import type { Metadata } from "next";
import Image from "next/image";
import { ContactInquiryForm } from "@/components/ContactInquiryForm";
import { site } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Aura Fintec Services for loan advisory and financial services inquiries."
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero media-hero media-hero-contact">
        <div className="media-hero-media" aria-hidden="true">
          <Image src="/assets/abouthero.png" alt="" fill priority sizes="100vw" className="media-hero-image" />
          <div className="media-hero-overlay" />
        </div>
        <div className="media-hero-copy">
          <span className="eyebrow">Contact</span>
          <h1>Talk to Aura Fintec Services.</h1>
          <p>Share a short enquiry and we’ll guide the next step with clarity.</p>
        </div>
      </section>
      <section className="page-content"><div className="section-inner grid-2"><div className="page-panel"><h2>Contact information</h2><p><strong>Phone:</strong> {site.phone}</p><p><strong>Email:</strong> {site.email}</p><p><strong>Consultations:</strong> {site.address}</p><p><strong>Hours:</strong> By appointment</p></div><ContactInquiryForm /></div></section>
    </main>
  );
}
