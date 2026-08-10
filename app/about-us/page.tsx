import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { FounderSection } from "@/components/FounderSection";
import { services, site } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Aura Fintec Services, a premium financial services consultancy and DSA facilitation platform."
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero"><span className="eyebrow">About Aura</span><h1>Loan syndication services and financial advisory for ambitious businesses.</h1><p>{site.tagline}</p></section>
      <section className="page-content about-experience">
        <video className="about-section-video" autoPlay muted loop playsInline preload="metadata" poster="/assets/aura-loan-syndication.jpeg" aria-hidden="true">
          <source src="/assets/video/aura-consultation-hero.mp4" type="video/mp4" />
        </video>
        <div className="section-inner sticky-story-section">
          <div className="about-story-card sticky-about-background">
            <div className="about-background-content">
              <span className="premium-eyebrow">What Aura does</span>
              <h2 className="about-glass-title">Finance made easier to see, prepare and discuss.</h2>
              <p className="about-glass-intro">Aura turns loan requirements into a clear path: profile, documents, lender fit and next action.</p>
              <div className="mission-vision-grid">
                <div><BadgeCheck size={24} /><strong>Mission</strong><span>Simplify complex finance decisions for businesses and families.</span></div>
                <div><BadgeCheck size={24} /><strong>Vision</strong><span>Help clients grow with disciplined, lender-ready financial choices.</span></div>
                <div><BadgeCheck size={24} /><strong>Principle</strong><span>Consent-led coordination and transparent lender-policy disclosures.</span></div>
                <div><BadgeCheck size={24} /><strong>Outcome</strong><span>Better prepared conversations before formal lender assessment.</span></div>
              </div>
            </div>
          </div>
          <div className="story-overlay-stack">
            {[
              ["01", "Understand", "Map borrower profile, loan purpose and repayment comfort."],
              ["02", "Prepare", "Convert KYC, financials and property or business documents into a clean file."],
              ["03", "Structure", "Review product fit, tenure, EMI, collateral and lender category."],
              ["04", "Coordinate", "Proceed only with consent and clear lender-policy expectations."]
            ].map(([step, title, text]) => (
              <article key={step} className="story-overlay-card">
                <span>{step}</span>
                <h3>{title}</h3>
                <p className="story-overlay-copy">{text}</p>
              </article>
            ))}
          </div>
        </div>
        <FounderSection />
        <div className="section-inner service-strip" aria-label="Featured loan services">
          <div>
          {[...services.slice(0, 8), ...services.slice(0, 8)].map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={`${service.slug}-${index}`} href={`/services/${service.slug}`}>
                <Icon size={18} />
                <span>{service.title}</span>
                <ArrowRight size={14} />
              </Link>
            );
          })}
          </div>
        </div>
      </section>
    </main>
  );
}
