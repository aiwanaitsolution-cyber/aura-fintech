import type { Metadata } from "next";
import { site } from "@/lib/client-data";

export const metadata: Metadata = { title: "Grievance Redressal", description: "Grievance redressal mechanism template for Aura Fintec Services." };

export default function GrievancePage() {
  return (
    <main><section className="page-hero"><span className="eyebrow">Customer care</span><h1>Grievance Redressal</h1><p>A clear escalation structure prepared for client-confirmed contact details.</p></section><section className="page-content"><article className="section-inner page-panel"><h2>How to raise a grievance</h2><p>Email {site.email} or call {site.phone}. Include your name, registered mobile number, product inquiry and a short description.</p><h2>Response timeline</h2><p>Production policy should define acknowledgement and resolution timelines after client legal review.</p><h2>Nodal contact</h2><p>Nodal grievance officer details are pending client confirmation.</p><h2>External resources</h2><p>Where relevant, users may refer to official regulator portals such as RBI Sachet for financial fraud awareness.</p></article></section></main>
  );
}
