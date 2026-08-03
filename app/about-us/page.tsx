import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clientPlaceholders, services, site } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Aura Fintec Services, a premium financial services consultancy and DSA facilitation platform."
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero"><span className="eyebrow">About Aura</span><h1>Loan syndication services and financial advisory for ambitious businesses.</h1><p>{site.tagline}</p></section>
      <section className="page-content">
        <div className="section-inner grid-2">
          <div className="page-panel">
            <h2>Simplifying the complexity of business finance</h2>
            <p>Aura Fintec Services helps businesses access suitable funding through loan syndication services, structured finance support and strategic financial advisory. The firm works with MSMEs, startups and corporates that need practical, growth-oriented finance solutions.</p>
            <p>{clientPlaceholders.founderVision}</p>
            <h2>Operating principles</h2>
            <ul><li>Responsible borrowing first.</li><li>Transparent lender-policy disclosures.</li><li>Clear consent before follow-up.</li><li>Professionalism, integrity and long-term client relationships.</li></ul>
          </div>
          <div className="page-panel brand-visual-panel">
            <Image src="/assets/aura-loan-syndication.jpeg" alt="Aura Fintec Services loan syndication and financial advisory profile" width={1536} height={1024} />
            <h2>Services covered</h2>
            <div className="grid-2">
              {services.slice(0, 12).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
