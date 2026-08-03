import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Phone, MessageCircle } from "lucide-react";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/client-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Aura Fintec Services | Loan Consultant and DSA Financial Services",
    template: "%s | Aura Fintec Services"
  },
  description: site.tagline,
  openGraph: {
    title: "Aura Fintec Services",
    description: site.tagline,
    type: "website"
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const whatsappMessage = encodeURIComponent("Hello Aura Fintec Services, I want guidance for a loan or finance requirement.");
  return (
    <html lang="en-IN" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <div className="floating-actions" aria-label="Quick contact actions">
          <a href={`https://wa.me/${site.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" aria-label="WhatsApp Aura Fintec Services">
            <MessageCircle size={22} />
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} aria-label="Call Aura Fintec Services">
            <Phone size={22} />
          </a>
        </div>
        <ChatAssistant />
        <div className="mobile-sticky-cta">
          <a className="ghost-button" href={`tel:${site.phone.replace(/\s/g, "")}`}>
            Call
          </a>
          <a className="primary-button" href="/apply-now">
            Apply Now
          </a>
        </div>
      </body>
    </html>
  );
}
