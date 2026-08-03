import type { Metadata } from "next";
import Link from "next/link";
import { allRoutes } from "@/lib/client-data";

export const metadata: Metadata = { title: "Sitemap", description: "HTML sitemap for Aura Fintec Services." };

export default function SitemapPage() {
  return <main><section className="page-hero"><span className="eyebrow">Sitemap</span><h1>All pages</h1><p>Browse every public route on the Aura Fintec Services website.</p></section><section className="page-content"><div className="section-inner page-panel grid-3">{allRoutes.map((route) => <Link key={route} href={route}>{route === "/" ? "Home" : route}</Link>)}</div></section></main>;
}
