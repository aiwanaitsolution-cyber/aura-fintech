"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calculator, ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { blogPosts, calculators, services, site } from "@/lib/client-data";

const mainLinks = [
  { href: "/about-us", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/financial-services", label: "Services" },
  { href: "/lending-partners", label: "Partners" },
  { href: "/resources", label: "Resources" },
  { href: "/contact-us", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"services" | "calculators" | "resources" | null>(null);

  return (
    <>
      <div className="trust-bar">
        <span>Loan facilitation by profile, documents and lender policy</span>
        <Link href="/disclaimer">Read disclosures</Link>
      </div>
      <header className="site-header">
        <Link className="logo-link" href="/" aria-label="Aura Fintec Services home">
          <Image src="/assets/aura-logo.svg" alt="Aura Fintec Services logo" width={210} height={58} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation" onMouseLeave={() => setMenu(null)}>
          {mainLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <button className="nav-menu-button" onMouseEnter={() => setMenu("services")} onFocus={() => setMenu("services")} onClick={() => setMenu(menu === "services" ? null : "services")} aria-expanded={menu === "services"}>
            Services <ChevronDown size={16} aria-hidden />
          </button>
          <button className="nav-menu-button" onMouseEnter={() => setMenu("calculators")} onFocus={() => setMenu("calculators")} onClick={() => setMenu(menu === "calculators" ? null : "calculators")} aria-expanded={menu === "calculators"}>
            Calculators <ChevronDown size={16} aria-hidden />
          </button>
          <button className="nav-menu-button" onMouseEnter={() => setMenu("resources")} onFocus={() => setMenu("resources")} onClick={() => setMenu(menu === "resources" ? null : "resources")} aria-expanded={menu === "resources"}>
            Resources <ChevronDown size={16} aria-hidden />
          </button>
          <AnimatePresence>{menu && <MegaMenu type={menu} close={() => setMenu(null)} />}</AnimatePresence>
        </nav>
        <div className="header-actions">
          <Link className="icon-link" href="/calculators/emi-calculator" aria-label="Open EMI calculator">
            <Calculator size={19} />
          </Link>
          <a className="ghost-button compact" href={`tel:${site.phone.replace(/\s/g, "")}`}>
            <Phone size={16} /> Call
          </a>
          <a className="ghost-button compact" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <Link className="primary-button compact" href="/apply-now">
            Apply Now
          </Link>
          <button className="mobile-toggle" onClick={() => setOpen(true)} aria-label="Open navigation">
            <Menu />
          </button>
        </div>
      </header>
      {open && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-panel-head">
            <Image src="/assets/aura-logo.svg" alt="Aura Fintec Services logo" width={190} height={52} />
            <button onClick={() => setOpen(false)} aria-label="Close navigation">
              <X />
            </button>
          </div>
          {[...mainLinks, { href: "/apply-now", label: "Apply Now" }].map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="mobile-section-title">Loan Products</div>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setOpen(false)}>
              {service.title}
            </Link>
          ))}
          <div className="mobile-section-title">Calculators</div>
          {calculators.map((calculator) => (
            <Link key={calculator.slug} href={`/calculators/${calculator.slug}`} onClick={() => setOpen(false)}>
              {calculator.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function MegaMenu({ type, close }: { type: "services" | "calculators" | "resources"; close: () => void }) {
  const title = type === "services" ? "Choose a loan pathway" : type === "calculators" ? "Plan before applying" : "Read and prepare";
  return (
    <motion.div className="mega-menu premium-mega" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>
      <div className="mega-feature">
        {type === "calculators" ? <Calculator /> : <BookOpen />}
        <h3>{title}</h3>
        <p>Built for clarity, document readiness and responsible loan decisions.</p>
        <Link className="primary-button compact" href="/apply-now" onClick={close}>Apply Now</Link>
      </div>
      <div className="mega-links">
        {type === "services" && services.slice(0, 12).map((service) => {
          const Icon = service.icon;
          return <Link key={service.slug} href={`/services/${service.slug}`} onClick={close}><Icon size={18} /><span>{service.title}<small>{service.audience}</small></span></Link>;
        })}
        {type === "calculators" && calculators.map((calculator) => <Link key={calculator.slug} href={`/calculators/${calculator.slug}`} onClick={close}><Calculator size={18} /><span>{calculator.title}<small>Indicative planning tool</small></span></Link>)}
        {type === "resources" && blogPosts.map((post) => <Link key={post.slug} href={`/resources/${post.slug}`} onClick={close}><BookOpen size={18} /><span>{post.title}<small>{post.excerpt}</small></span></Link>)}
      </div>
    </motion.div>
  );
}
