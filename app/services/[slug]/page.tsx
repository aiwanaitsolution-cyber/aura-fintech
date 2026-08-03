import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQ } from "@/components/FAQ";
import { LeadForm } from "@/components/LeadForm";
import { CalculatorSuite } from "@/components/CalculatorSuite";
import { PremiumCTA } from "@/components/PremiumSections";
import { services, site } from "@/lib/client-data";

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
          <Icon size={46} />
          <strong>{service.title}</strong>
          <span>{service.audience}</span>
          <i />
        </div>
      </section>
      <section className="page-content">
        <div className="section-inner grid-2">
          <article className="page-panel">
            <Icon size={38} />
            <div className="service-meta">
              <div><span>Audience</span><strong>{service.audience}</strong></div>
              <div><span>Amount</span><strong>{service.amount}</strong></div>
              <div><span>Tenure</span><strong>{service.tenure}</strong></div>
            </div>
            <h2>How Aura helps</h2>
            <p>{service.rate}. Aura helps you understand indicative eligibility, documentation gaps and the next lender-ready steps.</p>
            <div className="premium-mini-grid">
              {["Who it suits", "Loan features", "Use cases"].map((heading, index) => (
                <div className="mini-proof" key={heading}>
                  <h3>{heading}</h3>
                  <p>{index === 0 ? service.audience : index === 1 ? service.amount : service.highlights.join(", ")}</p>
                </div>
              ))}
            </div>
            <div className="grid-2">
              <div>
                <h3>Highlights</h3>
                <ul>{service.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h3>Documents generally required</h3>
                <ul>{service.documents.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
            <h2>Application process</h2>
            <ol>
              <li>Share your requirement and basic profile with consent.</li>
              <li>Review indicative EMI, FOIR and document readiness.</li>
              <li>Match the case to suitable lender categories where applicable.</li>
              <li>Proceed only after lender terms, charges and disclosures are clear.</li>
            </ol>
            <p className="disclaimer">
              Aura Fintec Services acts as a facilitator or DSA where applicable and is not itself the lender. Approval is subject to lender policies, eligibility, documentation, credit assessment and terms.
            </p>
            <FAQ items={service.faqs} />
          </article>
          <aside>
            <LeadForm product={service.title} />
            <div className="card" style={{ marginTop: 18 }}>
              <h3>Useful tools</h3>
              <Link href="/calculators/emi-calculator">EMI Calculator</Link>
              <Link href="/calculators/loan-eligibility-calculator">Eligibility Calculator</Link>
              <Link href="/calculators/balance-transfer-calculator">Balance Transfer Calculator</Link>
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
