import Image from "next/image";
import Link from "next/link";
import { calculators, services, site } from "@/lib/client-data";

export function Footer() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Aura Fintec Services, I want guidance for a loan or finance requirement.")}`;

  return (
    <footer className="site-footer premium-footer">
      <div className="footer-grid">
        <div>
          <Link className="logo-link footer-logo-link" href="/" aria-label="Aura Fintec Services home">
            <Image src="/assets/logo.png" alt="Aura Fintec Services logo" width={72} height={72} />
            <span className="brand-wordmark">AURA FINTEC services</span>
          </Link>
          <p>{site.tagline}</p>
          <div className="newsletter-card">
            <strong>Get a consultation callback</strong>
            <span>Share your profile through the application form. No approval promises, just a cleaner next step.</span>
            <Link className="primary-button compact" href="/apply-now">Request callback</Link>
          </div>
          <p className="fineprint">{site.unverifiedNote}</p>
        </div>
        <div>
          <h2>Services</h2>
          {services.slice(0, 8).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h2>Calculators</h2>
          {calculators.map((calculator) => (
            <Link key={calculator.slug} href={`/calculators/${calculator.slug}`}>
              {calculator.title}
            </Link>
          ))}
          <Link href="/faq">FAQs</Link>
          <Link href="/sitemap">Sitemap</Link>
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/about-us">About Aura</Link>
          <Link href="/founder">Founder</Link>
          <Link href="/lending-partners">Lending Partners</Link>
          <Link href="/become-a-partner">Become a Partner</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp consultation</a>
          <p>{site.address}</p>
          <Link className="primary-button" href="/apply-now">
            Start Application
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright {new Date().getFullYear()} Aura Fintec Services. All rights reserved.</span>
        <span>
          <Link href="/privacy-policy">Privacy</Link> <Link href="/terms-and-conditions">Terms</Link>{" "}
          <Link href="/disclaimer">Disclaimer</Link> <Link href="/grievance-redressal">Grievance</Link>
        </span>
      </div>
    </footer>
  );
}
