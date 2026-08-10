"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, Facebook, Instagram, Linkedin, Mail, Menu, Phone, Twitter, X } from "lucide-react";
import { blogPosts, services, site } from "@/lib/client-data";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"about" | "services" | "resources" | null>(null);
  const [pinnedMenu, setPinnedMenu] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMenu(nextMenu: "about" | "services" | "resources", pinned = false) {
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
      <header className="site-header is-solid">
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
          <Link className="logo-link brand-lockup" href="/" aria-label="Aura Fintec Services home">
            <Image src="/assets/logo.png" alt="Aura Fintec Services logo" width={64} height={64} priority className="brand-icon" />
            <span className="brand-wordmark" aria-label="Aura Fintec Services">
              <span className="brand-name">AURA FINTEC</span>
              <span className="brand-services">services</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation" onMouseLeave={scheduleClose} onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}>
            <Link href="/" aria-current={isHome ? "page" : undefined}>Home</Link>
            <button className="nav-menu-button" onMouseEnter={() => openMenu("about")} onFocus={() => openMenu("about")} onClick={() => menu === "about" && pinnedMenu ? closeMenu() : openMenu("about", true)} aria-expanded={menu === "about"}>
              About <ChevronDown size={16} aria-hidden />
            </button>
            <Link href="/lending-partners">Partners</Link>
            <button className="nav-menu-button" onMouseEnter={() => openMenu("services")} onFocus={() => openMenu("services")} onClick={() => menu === "services" && pinnedMenu ? closeMenu() : openMenu("services", true)} aria-expanded={menu === "services"}>
              Services <ChevronDown size={16} aria-hidden />
            </button>
            <button className="nav-menu-button" onMouseEnter={() => openMenu("resources")} onFocus={() => openMenu("resources")} onClick={() => menu === "resources" && pinnedMenu ? closeMenu() : openMenu("resources", true)} aria-expanded={menu === "resources"}>
              Resources <ChevronDown size={16} aria-hidden />
            </button>
            <Link href="/contact-us">Contact</Link>
            <AnimatePresence>{menu && <MegaMenu type={menu} close={closeMenu} keepOpen={() => closeTimer.current && clearTimeout(closeTimer.current)} scheduleClose={scheduleClose} />}</AnimatePresence>
          </nav>
          <div className="header-actions">
            <Link className="ghost-button compact" href="/financial-services#calculators">
              Calculator
            </Link>
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
            <Link className="logo-link mobile-logo-link brand-lockup" href="/" onClick={() => setOpen(false)}>
              <Image src="/assets/logo.png" alt="Aura Fintec Services logo" width={56} height={56} className="brand-icon" />
              <span className="brand-wordmark" aria-label="Aura Fintec Services">
                <span className="brand-name">AURA FINTEC</span>
                <span className="brand-services">services</span>
              </span>
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Close navigation">
              <X />
            </button>
          </div>
          {[{ href: "/", label: "Home" }, { href: "/lending-partners", label: "Partners" }, { href: "/contact-us", label: "Contact" }, { href: "/apply-now", label: "Apply Now" }].map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="mobile-section-title">About</div>
          <Link href="/about-us" onClick={() => setOpen(false)}>About Aura</Link>
          <Link href="/founder" onClick={() => setOpen(false)}>Founder</Link>
          <div className="mobile-section-title">Loan Products</div>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setOpen(false)}>
              {service.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function MegaMenu({ type, close, keepOpen, scheduleClose }: { type: "about" | "services" | "resources"; close: () => void; keepOpen: () => void; scheduleClose: () => void }) {
  const title = type === "services" ? "Choose a loan pathway" : type === "about" ? "Meet the story behind Aura" : "Read and prepare";
  return (
    <motion.div className="mega-menu premium-mega" onMouseEnter={keepOpen} onMouseLeave={scheduleClose} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>
      <div className="mega-feature">
        <BookOpen />
        <h3>{title}</h3>
        <p>Built for clarity, document readiness and responsible loan decisions.</p>
        <Link className="primary-button compact" href="/apply-now" onClick={close}>Apply Now</Link>
      </div>
      <div className="mega-links">
        {type === "about" && (
          <>
            <Link href="/about-us" onClick={close}><BookOpen size={18} /><span>About Aura<small>Company story and service approach</small></span></Link>
            <Link href="/founder" onClick={close}><BookOpen size={18} /><span>Founder<small>CA Ankita Garg profile</small></span></Link>
          </>
        )}
        {type === "services" && services.map((service) => {
          const Icon = service.icon;
          return <Link key={service.slug} href={`/services/${service.slug}`} onClick={close}><Icon size={18} /><span>{service.title}<small>{service.audience}</small></span></Link>;
        })}
        {type === "resources" && blogPosts.map((post) => <Link key={post.slug} href={`/resources/${post.slug}`} onClick={close}><BookOpen size={18} /><span>{post.title}<small>{post.excerpt}</small></span></Link>)}
      </div>
    </motion.div>
  );
}
