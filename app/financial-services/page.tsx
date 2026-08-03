import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "All Financial Services",
  description: "Browse all loan and financial services offered by Aura Fintec Services."
};

export default function FinancialServicesPage() {
  return (
    <main>
      <section className="page-hero service-overview-hero">
        <div><span className="eyebrow">All services</span><h1>Loan syndication, structured finance and advisory solutions.</h1><p>Explore finance pathways for housing loans, LAP, business loans, surety-style support, working capital, project finance, equipment funding and MSME growth.</p></div>
        <div className="service-overview-image"><Image src="/assets/aura-fintec-profile.jpeg" alt="Aura Fintec Services profile and loan products" width={1254} height={1254} priority /></div>
      </section>
      <section className="page-content"><div className="section-inner grid-3">{services.map((service) => { const Icon = service.icon; return <Link className="service-card" key={service.slug} href={`/services/${service.slug}`}><Icon size={30}/><h2>{service.title}</h2><p>{service.short}</p></Link>; })}</div></section>
    </main>
  );
}
