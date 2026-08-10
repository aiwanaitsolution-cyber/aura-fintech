import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CalculatorSuite } from "@/components/CalculatorSuite";
import { calculators, services } from "@/lib/client-data";
import { getServiceImage } from "@/lib/service-assets";

export const metadata: Metadata = {
  title: "All Financial Services",
  description: "Browse all loan and financial services offered by Aura Fintec Services."
};

export default function FinancialServicesPage() {
  return (
    <main>
      <section className="page-hero service-overview-hero">
        <div><span className="eyebrow">All services</span><h1>Loan syndication, structured finance and advisory solutions.</h1><p>Explore finance pathways for housing loans, LAP, business loans, surety-style support, working capital, project finance and MSME growth.</p></div>
        <div className="service-overview-image"><Image src="/assets/aura-fintec-profile.jpeg" alt="Aura Fintec Services profile and loan products" width={1254} height={1254} priority /></div>
      </section>
      <section className="page-content services-showcase">
        <div className="section-inner section-title">
          <span className="eyebrow">Service pathways</span>
          <h2>Every product page now works like a guided finance pathway.</h2>
          <p>Each service combines plain-language positioning, document readiness, indicative planning and a clear route to apply or speak with Aura.</p>
        </div>
        <div className="section-inner service-showcase-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            const accent = index % 4;
            return (
              <Reveal className={`service-showcase-card accent-${accent}`} key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  <Image className="service-card-bg" src={getServiceImage(service.slug)} alt="" fill sizes="(max-width: 980px) 50vw, 33vw" />
                  <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="service-icon"><Icon size={28} /></span>
                  <h2>{service.title}</h2>
                  <p>{service.short}</p>
                  <div className="service-chip-row">
                    <span><BadgeCheck size={14} /> {service.audience}</span>
                    <span><Clock size={14} /> {service.tenure}</span>
                    <span><FileCheck2 size={14} /> {service.documents.length} document groups</span>
                  </div>
                  <strong className="blue-action small-action">Explore pathway <ArrowRight size={17} /></strong>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="section-inner calculator-hub" id="calculators">
          <div className="section-head">
            <span className="eyebrow">Planning tools</span>
            <h2>Calculator tools now live inside the services area.</h2>
            <p>Use these within the services section instead of the header navigation.</p>
          </div>
          <div className="calculator-chip-grid">
            {calculators.map((calculator) => (
              <Link key={calculator.slug} className="calculator-chip-card" href={`/calculators/${calculator.slug}`}>
                <strong>{calculator.title}</strong>
                <span>Open calculator</span>
              </Link>
            ))}
          </div>
          <div className="service-calculator-band">
            <CalculatorSuite type="emi" title="Quick EMI Preview" />
          </div>
        </div>
      </section>
    </main>
  );
}
