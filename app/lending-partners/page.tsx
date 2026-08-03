import type { Metadata } from "next";
import { BadgeCheck, Building2, FileSearch, Handshake, Landmark, Network, ShieldCheck, WalletCards } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { partners, site } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "Lending Partners",
  description: "Lender ecosystem categories for Aura Fintec Services loan syndication and financial advisory."
};

const partnerIcons = [Landmark, Building2, Handshake, Network, WalletCards, ShieldCheck, FileSearch, BadgeCheck];
const partnerDescriptions = [
  "Public and private banking channels that may fit eligible retail, mortgage and business cases.",
  "Non-banking finance companies for profile-led, asset-led and business lending programs.",
  "Private credit or specialist funding routes considered only where compliant and suitable.",
  "Specialist desks for structured borrowings, syndication support and larger business requirements.",
  "Providers aligned to OD, CC, receivables and operational liquidity use cases.",
  "Asset and equipment finance channels for machinery, vehicles and productive business assets.",
  "Teams that review project viability, promoter contribution, collateral and cash-flow assumptions.",
  "Assessment support categories that help organize documents, banking data and risk inputs."
];

export default function PartnersPage() {
  return (
    <main>
      <section className="page-hero lender-hero">
        <span className="eyebrow">Lending ecosystem</span>
        <h1>Finance channels organized by business need, profile and documentation.</h1>
        <p>Aura presents lender categories only. Official institution names and logos should be added after relationship confirmation and usage approval.</p>
      </section>
      <section className="page-content lender-section">
        <div className="section-inner lender-intro">
          <div>
            <span className="eyebrow">Verification-safe</span>
            <h2>Built for clarity without claiming unverified partnerships.</h2>
          </div>
          <p>Use these categories to explain the finance ecosystem while Aura finalizes approved lender relationships, logo permissions and partner disclosures.</p>
        </div>
        <div className="section-inner lender-grid">
          {partners.map((partner, index) => {
            const Icon = partnerIcons[index] ?? Handshake;
            return (
              <Reveal className="lender-card" key={partner}>
                <Icon size={30} />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{partner}</h2>
                <p>{partnerDescriptions[index]}</p>
              </Reveal>
            );
          })}
        </div>
        <div className="section-inner lender-note">
          <strong>Compliance note</strong>
          <p>{site.unverifiedNote}</p>
        </div>
      </section>
    </main>
  );
}
