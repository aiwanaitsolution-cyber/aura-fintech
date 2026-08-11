import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, FileCheck2, Handshake } from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { LeadForm } from "@/components/LeadForm";
import { CalculatorSuite } from "@/components/CalculatorSuite";
import { PremiumCTA } from "@/components/PremiumSections";
import { services, site } from "@/lib/client-data";
import { getServiceImage } from "@/lib/service-assets";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} Consultant`,
    description: `${service.short} Aura Fintec Services helps with document readiness, eligibility discussion and lender facilitation.`,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;
  const serviceImage = getServiceImage(service.slug);
  const serviceBackgroundStyle = { "--service-page-bg": `url(${serviceImage})` } as CSSProperties;
  return (
    <main>
      <section className={`page-hero service-hero service-${service.slug}`}>
        <div>
          <span className="eyebrow">Financial service</span>
          <h1>{service.title}</h1>
          <p>{service.short}</p>
          <div className="hero-badges">
            <span>Indicative eligibility</span>
            <span>Document checklist</span>
            <span>Lender-policy disclaimer</span>
          </div>
        </div>
        <div className="service-visual-card">
          <Image src={serviceImage} alt={`${service.title} visual`} fill sizes="330px" priority />
          <Icon size={46} />
          <strong>{service.title}</strong>
          <span>{service.audience}</span>
          <i />
        </div>
      </section>
      <section className="page-content service-floating-content" style={serviceBackgroundStyle}>
        <div className="section-inner service-detail-layout">
          <article className="page-panel service-decision-panel">
            <Icon size={38} />
            <div className="service-meta">
              <div><span>Audience</span><strong>{service.audience}</strong></div>
              <div><span>Amount</span><strong>{service.amount}</strong></div>
              <div><span>Tenure</span><strong>{service.tenure}</strong></div>
            </div>
            <div className="service-flow-diagram" aria-label="Service decision flow">
              {[
                ["Profile", service.audience],
                ["Documents", `${service.documents.length} groups`],
                ["Structure", service.tenure],
                ["Next step", "Apply with consent"]
              ].map(([label, value]) => (
                <div key={label}>
                  <strong>{label}</strong>
                  <small>{value}</small>
                </div>
              ))}
            </div>
            <div className="service-visual-columns">
              <div className="visual-list-card">
                <h3>Highlights</h3>
                {service.highlights.map((item) => <p key={item}><span />{item}</p>)}
              </div>
              <div className="visual-list-card">
                <h3>Documents</h3>
                {service.documents.map((item) => <p key={item}><span />{item}</p>)}
              </div>
            </div>
            <div className="service-disclosure-visual" aria-label="Loan facilitation disclosure">
              <div>
                <Handshake size={24} />
                <strong>Facilitation</strong>
                <span>Coordination support</span>
              </div>
              <div>
                <FileCheck2 size={24} />
                <strong>Documents</strong>
                <span>Profile readiness</span>
              </div>
              <div>
                <BadgeCheck size={24} />
                <strong>Lender review</strong>
                <span>Policy-led decision</span>
              </div>
            </div>
            <FAQ items={service.faqs} />
          </article>
          <aside className="service-sticky-aside">
            <LeadForm product={service.title} />
            <div className="card" style={{ marginTop: 18 }}>
              <h3>Useful tools</h3>
              <Link className="blue-action small-action" href="/calculators/emi-calculator">EMI Calculator</Link>
              <Link className="blue-action small-action" href="/calculators/loan-eligibility-calculator">Eligibility Calculator</Link>
              <Link className="blue-action small-action" href="/calculators/balance-transfer-calculator">Balance Transfer</Link>
              <p className="fineprint">{site.unverifiedNote}</p>
            </div>
          </aside>
        </div>
        <div className="section-inner service-calculator-band">
          <CalculatorSuite type="emi" title={`${service.title} EMI Preview`} product={service.title} />
        </div>
      </section>
      <PremiumCTA />
    </main>
  );
}
