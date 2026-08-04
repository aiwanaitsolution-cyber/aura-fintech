import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, BarChart3, Building2, FileSearch, Handshake, Landmark, ShieldCheck, Sparkles, Target, TrendingUp } from "lucide-react";
import { clientPlaceholders, site } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "Our Founder CA Ankita Garg",
  description: "Founder profile page for CA Ankita Garg of Aura Fintec Services."
};

export default function FounderPage() {
  const journey = [
    { title: "Corporate Banking", text: "Deep exposure to business finance requirements.", Icon: Landmark },
    { title: "Credit Assessment", text: "Understanding documents, cash flow and repayment capacity.", Icon: FileSearch },
    { title: "Structured Finance", text: "Arranging finance routes for growth and working capital.", Icon: BarChart3 },
    { title: "Client Advisory", text: "Long-term relationships built on professionalism and clarity.", Icon: Handshake }
  ];
  const expertise = [
    { label: "Corporate banking", Icon: Building2 },
    { label: "Structured finance", Icon: BarChart3 },
    { label: "Credit assessment", Icon: FileSearch },
    { label: "Financial analysis", Icon: BadgeCheck },
    { label: "Strategic advisory", Icon: ShieldCheck },
    { label: "Loan syndication", Icon: Handshake }
  ];
  const founderProof = [
    { value: "14+ years", label: "Banking and financial services exposure", Icon: TrendingUp },
    { value: "CA-led", label: "Finance discipline with credit assessment thinking", Icon: BadgeCheck },
    { value: "Business first", label: "Structured support for MSMEs, startups and corporates", Icon: Target }
  ];

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
        <div className="section-inner founder-brand-board">
          <div>
            <span className="premium-eyebrow"><Sparkles size={16} /> Founder advantage</span>
            <h2>Why CA Ankita Garg is built for this advisory desk.</h2>
          </div>
          <div className="founder-proof-grid">
            {founderProof.map(({ value, label, Icon }) => (
              <div key={value}>
                <Icon size={24} />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="section-inner founder-visual-story">
          <article className="founder-manifesto">
            <span className="premium-eyebrow">About the founder</span>
            <h2>Banking insight. Structured finance discipline. Relationship-led advisory.</h2>
            <p>{clientPlaceholders.founderBio}</p>
            <blockquote>Financial guidance should simplify complexity and help businesses grow with discipline.</blockquote>
          </article>
          <div className="founder-journey-map">
            {journey.map(({ title, text, Icon }, index) => (
              <div className="journey-node" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={24} />
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-inner expertise-board">
          {expertise.map(({ label, Icon }) => (
            <div key={label}>
              <Icon size={22} />
              <strong>{label}</strong>
            </div>
          ))}
          <Link className="blue-action" href="/contact-us">Contact Aura</Link>
        </div>
      </section>
    </main>
  );
}
