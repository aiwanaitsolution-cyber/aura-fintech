import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Banknote, Building2, FileCheck2, HandCoins, Landmark, Network, TrendingUp } from "lucide-react";
import { AssociationLogoMarquee, associationLogos } from "@/components/AssociationLogoMarquee";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Lending Partners",
  description: "Aura Fintec Services lending partner ecosystem across banks, NBFCs and specialist finance channels."
};

const partnerTiers = [
  {
    label: "Public sector banks",
    count: "04",
    names: ["Bank of Baroda", "Canara Bank", "State Bank of India", "Saraswat Bank"],
    icon: Landmark
  },
  {
    label: "Private and global banks",
    count: "07",
    names: ["HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra Bank", "IDFC First Bank", "IndusInd Bank", "Deutsche Bank"],
    icon: Building2
  },
  {
    label: "NBFC and specialist finance",
    count: "05",
    names: ["AU Small Finance Bank", "Bajaj Finserv", "Aditya Birla Finance", "Ambit Finvest", "Jio Credit"],
    icon: Network
  }
];

const financeRoutes = [
  {
    title: "Business growth funding",
    text: "Term loans, working capital, project funding and structured finance conversations prepared around business cash flow.",
    icon: TrendingUp
  },
  {
    title: "Retail and property finance",
    text: "Home loans, loan against property, vehicle finance and personal borrowing discussions organized with documents first.",
    icon: Banknote
  },
  {
    title: "Collateral and asset routes",
    text: "Machinery, equipment, secured property and receivable-backed cases mapped to the right lender category.",
    icon: HandCoins
  },
  {
    title: "Credit-ready documentation",
    text: "KYC, banking, ITR, GST, financials and purpose notes shaped into a clearer lender-review file.",
    icon: FileCheck2
  }
];

export default function PartnersPage() {
  const featuredLogos = associationLogos.slice(0, 16);

  return (
    <main>
      <section className="page-hero lender-hero partner-hero-redesign">
        <div className="partner-hero-copy">
          <span className="eyebrow">Lending ecosystem</span>
          <h1>Recognised finance names, organized into a clearer borrower pathway.</h1>
          <p>Aura helps clients prepare profile, documents and funding discussions across banks, NBFCs and specialist finance channels.</p>
          <div className="partner-hero-actions">
            <a href="#partner-logo-wall">View institutions <ArrowRight size={17} /></a>
            <a href="/apply-now">Start a loan discussion</a>
          </div>
        </div>
        <div className="partner-hero-orbit" aria-label="Featured lending associations">
          <div className="partner-orbit-ring">
            {featuredLogos.slice(0, 8).map((logo, index) => (
              <div className={`partner-orbit-logo orbit-logo-${index + 1}`} key={logo.name}>
                <Image src={logo.src} alt={`${logo.name} logo`} width={104} height={52} />
              </div>
            ))}
          </div>
          <div className="partner-orbit-core">
            <Image src="/assets/logo.png" alt="Aura Fintec Services logo" width={126} height={126} />
            <strong>Aura</strong>
            <span>Lender-ready coordination</span>
          </div>
        </div>
      </section>
      <section className="page-content lender-section">
        <div className="section-inner lender-visual-hero">
          <div>
            <span className="premium-eyebrow">Association map</span>
            <h2>Partners shown visually, not buried in placeholder text.</h2>
            <p>Borrowers can quickly see the finance ecosystem Aura works around: public banks, private banks, NBFCs and specialist finance names.</p>
          </div>
          <div className="lender-image-stage">
            <video autoPlay muted loop playsInline preload="metadata" poster="/assets/aura-fintec-profile.jpeg" aria-label="Business meeting video representing lender partner coordination">
              <source src="/assets/video/aura-consultation-hero.mp4" type="video/mp4" />
            </video>
            <div className="orbit orbit-one">Profile</div>
            <div className="orbit orbit-two">Documents</div>
            <div className="orbit orbit-three">Lender fit</div>
          </div>
        </div>

        <div id="partner-logo-wall" className="section-inner partner-logo-wall">
          <div className="partner-wall-head">
            <span className="premium-eyebrow">Our lending associations</span>
            <h2>Banking and finance brands displayed with clear visual hierarchy.</h2>
          </div>
          <div className="partner-logo-grid" aria-label="Aura lending partner logos">
            {featuredLogos.map((logo, index) => (
              <Reveal className={`partner-logo-tile partner-tile-${index % 4}`} key={logo.name}>
                <a href={logo.href} target="_blank" rel="noreferrer">
                  <Image src={logo.src} alt={`${logo.name} logo`} width={156} height={78} />
                  <strong>{logo.name}</strong>
                  <span>{index < 12 ? "Banking channel" : "Finance channel"}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="section-inner partner-tier-grid">
          {partnerTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <Reveal className="partner-tier-card" key={tier.label}>
                <div>
                  <Icon size={28} />
                  <span>{tier.count}</span>
                </div>
                <h2>{tier.label}</h2>
                <p>{tier.names.join("  |  ")}</p>
              </Reveal>
            );
          })}
        </div>

        <div className="section-inner partner-route-section">
          <div className="partner-wall-head">
            <span className="premium-eyebrow">How Aura uses the network</span>
            <h2>Every case starts with fit, documents and repayment comfort.</h2>
          </div>
          <div className="partner-route-grid">
            {financeRoutes.map((route, index) => {
              const Icon = route.icon;
              return (
                <Reveal className="partner-route-card" key={route.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={30} />
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="section-inner partner-page-marquee">
          <AssociationLogoMarquee compact />
        </div>
      </section>
    </main>
  );
}
