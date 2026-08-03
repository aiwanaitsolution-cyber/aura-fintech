import type { Metadata } from "next";
import { partners, site } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "Lending Partners",
  description: "Indicative lender configuration page for Aura Fintec Services."
};

export default function PartnersPage() {
  return (
    <main>
      <section className="page-hero"><span className="eyebrow">Lending ecosystem</span><h1>Lender names ready for verification.</h1><p>Use this page only with confirmed relationships and approved logo usage.</p></section>
      <section className="page-content"><div className="section-inner"><div className="grid-3">{partners.map((partner) => <div className="card" key={partner}><h2>{partner}</h2><p>Placeholder lender entry. Replace with official approved logo and remove if relationship is unconfirmed.</p></div>)}</div><p className="disclaimer">{site.unverifiedNote}</p></div></section>
    </main>
  );
}
