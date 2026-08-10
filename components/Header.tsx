"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calculator, ChevronDown, Facebook, Instagram, Linkedin, Mail, Menu, MessageCircle, Phone, Twitter, X } from "lucide-react";
import { blogPosts, calculators, services, site } from "@/lib/client-data";

const mainLinks = [
  { href: "/about-us", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/lending-partners", label: "Partners" },
  { href: "/contact-us", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"services" | "calculators" | "resources" | null>(null);
  const [pinnedMenu, setPinnedMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHome = pathname === "/";

  const whatsappMessage = encodeURIComponent("Hello Aura Fintec Services, I want guidance for a loan or finance requirement.");
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${whatsappMessage}`;

  function openMenu(nextMenu: "services" | "calculators" | "resources", pinned = false) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPinnedMenu(pinned);
    setMenu(nextMenu);
  }

  function scheduleClose() {
    if (pinnedMenu) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 220);
  }

  function closeMenu() {
    setPinnedMenu(false);
    setMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${isHome && !scrolled ? "over-hero" : "is-solid"}`}>
        <div className="header-topbar">
          <div className="header-socials" aria-label="Social links">
            <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={14} />
            </a>
            <a href={site.social.twitter} aria-label="Twitter">
              <Twitter size={14} />
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn">
              <Linkedin size={14} />
            </a>
            <a href={site.social.facebook} aria-label="Facebook">
              <Facebook size={14} />
            </a>
          </div>
          <div className="header-contact">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone size={14} />
              <span>{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={14} />
              <span>{site.email}</span>
            </a>
          </div>
        </div>
        <div className="header-main">
          <Link className="logo-link" href="/" aria-label="Aura Fintec Services home">
            <Image src="/assets/logo.png" alt="Aura Fintec Services logo" width={76} height={76} priority />
            <span className="brand-wordmark">AURA FINTEC services</span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation" onMouseLeave={scheduleClose} onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}>
            {mainLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <button className="nav-menu-button" onMouseEnter={() => openMenu("services")} onFocus={() => openMenu("services")} onClick={() => menu === "services" && pinnedMenu ? closeMenu() : openMenu("services", true)} aria-expanded={menu === "services"}>
              Services <ChevronDown size={16} aria-hidden />
            </button>
            <button className="nav-menu-button" onMouseEnter={() => openMenu("calculators")} onFocus={() => openMenu("calculators")} onClick={() => menu === "calculators" && pinnedMenu ? closeMenu() : openMenu("calculators", true)} aria-expanded={menu === "calculators"}>
              Calculators <ChevronDown size={16} aria-hidden />
            </button>
            <button className="nav-menu-button" onMouseEnter={() => openMenu("resources")} onFocus={() => openMenu("resources")} onClick={() => menu === "resources" && pinnedMenu ? closeMenu() : openMenu("resources", true)} aria-expanded={menu === "resources"}>
              Resources <ChevronDown size={16} aria-hidden />
            </button>
            <AnimatePresence>{menu && <MegaMenu type={menu} close={closeMenu} keepOpen={() => closeTimer.current && clearTimeout(closeTimer.current)} scheduleClose={scheduleClose} />}</AnimatePresence>
          </nav>
          <div className="header-actions">
            <Link className="icon-link" href="/calculators/emi-calculator" aria-label="Open EMI calculator">
              <Calculator size={19} />
            </Link>
            <a className="ghost-button compact" href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone size={16} /> Call
            </a>
            <a className="ghost-button compact" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <Link className="primary-button compact" href="/apply-now">
              Apply Now
            </Link>
            <button className="mobile-toggle" onClick={() => setOpen(true)} aria-label="Open navigation">
              <Menu />
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-panel-head">
            <Link className="logo-link mobile-logo-link" href="/" onClick={() => setOpen(false)}>
              <Image src="/assets/logo.png" alt="Aura Fintec Services logo" width={64} height={64} />
              <span className="brand-wordmark">AURA FINTEC services</span>
            </Link>
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

function MegaMenu({ type, close, keepOpen, scheduleClose }: { type: "services" | "calculators" | "resources"; close: () => void; keepOpen: () => void; scheduleClose: () => void }) {
  const title = type === "services" ? "Choose a loan pathway" : type === "calculators" ? "Plan before applying" : "Read and prepare";
  return (
    <motion.div className="mega-menu premium-mega" onMouseEnter={keepOpen} onMouseLeave={scheduleClose} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>
      <div className="mega-feature">
        {type === "calculators" ? <Calculator /> : <BookOpen />}
        <h3>{title}</h3>
        <p>Built for clarity, document readiness and responsible loan decisions.</p>
        <Link className="primary-button compact" href="/apply-now" onClick={close}>Apply Now</Link>
      </div>
      <div className="mega-links">
        {type === "services" && services.map((service) => {
          const Icon = service.icon;
          return <Link key={service.slug} href={`/services/${service.slug}`} onClick={close}><Icon size={18} /><span>{service.title}<small>{service.audience}</small></span></Link>;
        })}
        {type === "calculators" && calculators.map((calculator) => <Link key={calculator.slug} href={`/calculators/${calculator.slug}`} onClick={close}><Calculator size={18} /><span>{calculator.title}<small>Indicative planning tool</small></span></Link>)}
        {type === "resources" && blogPosts.map((post) => <Link key={post.slug} href={`/resources/${post.slug}`} onClick={close}><BookOpen size={18} /><span>{post.title}<small>{post.excerpt}</small></span></Link>)}
      </div>
    </motion.div>
  );
}
