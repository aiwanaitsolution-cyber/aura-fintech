import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clientPlaceholders, site } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "Our Founder CA Ankita Garg",
  description: "Founder profile page for CA Ankita Garg of Aura Fintec Services."
};

export default function FounderPage() {
  return (
    <main>
      <section className="page-hero founder-page-hero">
        <div>
          <span className="eyebrow">Our Founder</span>
          <h1>{site.founder}</h1>
          <p>Qualified Chartered Accountant with over 14 years of extensive banking and financial services experience.</p>
          <Link className="primary-button" href="/apply-now">Book a Financial Discussion</Link>
        </div>
        <div className="founder-hero-image">
          <Image src="/assets/ankita-garg.png" alt="CA Ankita Garg, Founder of Aura Fintec Services" width={760} height={920} priority />
        </div>
      </section>
      <section className="page-content">
        <div className="section-inner founder-profile-layout">
          <article className="page-panel founder-profile-copy">
            <span className="premium-eyebrow">About the founder</span>
            <h2>Banking insight. Structured finance discipline. Relationship-led advisory.</h2>
            <p>{clientPlaceholders.founderBio}</p>
            <p>{clientPlaceholders.founderExtended}</p>
            <p>{clientPlaceholders.founderVision}</p>
          </article>
          <aside className="page-panel founder-credentials">
            <h2>Core expertise</h2>
            <ul>
              <li>Corporate banking</li>
              <li>Structured finance</li>
              <li>Credit assessment</li>
              <li>Financial analysis</li>
              <li>Strategic financial advisory</li>
              <li>Loan syndication facilitation</li>
            </ul>
            <Link className="primary-button" href="/contact-us">Contact Aura</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
