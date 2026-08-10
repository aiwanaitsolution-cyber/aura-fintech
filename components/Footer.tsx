import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/client-data";

export function Footer() {
  return (
    <footer className="site-footer premium-footer">
      <div className="footer-grid">
        <div>
          <Link className="logo-link footer-logo-link brand-lockup" href="/" aria-label="Aura Fintec Services home">
            <Image src="/assets/logo.png" alt="Aura Fintec Services logo" width={56} height={56} className="brand-icon" />
            <span className="brand-wordmark" aria-label="Aura Fintec Services">
              <span className="brand-name">AURA</span>
              <span className="brand-services">FINTEC SERVICES</span>
            </span>
          </Link>
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
          <p>{site.address}</p>
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
