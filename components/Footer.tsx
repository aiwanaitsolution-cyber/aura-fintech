import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { site } from "@/lib/client-data";

export function Footer() {
  return (
    <footer className="site-footer premium-footer">
      <div className="footer-grid">
        <div>
          <Link className="logo-link footer-logo-link brand-lockup" href="/" aria-label="Aura Fintec Services home">
            <Image src="/assets/logo.png" alt="Aura Fintec Services logo" width={64} height={64} className="brand-icon" />
            <span className="brand-wordmark" aria-label="Aura Fintec Services">
              <span className="brand-name">AURA</span>
              <span className="brand-services">FINTEC SERVICES</span>
            </span>
          </Link>
          <div className="footer-socials" aria-label="Social links">
            <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /><span>Instagram</span></a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /><span>LinkedIn</span></a>
            <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={16} /><span>Facebook</span></a>
            <a href={site.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={16} /><span>Twitter</span></a>
          </div>
          <p>{site.tagline}</p>
          <div className="newsletter-card">
            <strong>Get a consultation callback</strong>
            <span>Share your profile through the application form. No approval promises, just a cleaner next step.</span>
            <Link className="primary-button compact" href="/apply-now">Request callback</Link>
          </div>
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/about-us">About Aura</Link>
          <Link href="/founder">Founder</Link>
          <Link href="/lending-partners">Lending Partners</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/sitemap">Sitemap</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link className="primary-button" href="/apply-now">
            Start Application
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright {new Date().getFullYear()} Aura Fintec Services. All rights reserved.</span>
        <span className="footer-legal-links">
          <Link href="/privacy-policy">Privacy</Link> <Link href="/terms-and-conditions">Terms</Link>{" "}
          <Link href="/disclaimer">Disclaimer</Link> <Link href="/grievance-redressal">Grievance</Link>
        </span>
      </div>
    </footer>
  );
}
