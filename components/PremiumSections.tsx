"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from "lucide-react";
import {
  audienceSolutions,
  blogPosts,
  clientPlaceholders,
  documentSets,
  partners,
  services,
  site,
  testimonials
} from "@/lib/client-data";
import { calculateEmi, formatInr } from "@/lib/calculators";

export function PremiumHero() {
  const reduced = useReducedMotion();
  return (
    <section className="premium-hero cinematic-hero">
      <div className="hero-video-fallback" aria-hidden />
      {!reduced && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/aura-loan-syndication.jpeg"
          aria-hidden="true"
        >
          <source src="/assets/video/aura-consultation-hero.mp4" type="video/mp4" />
        </video>
      )}
      <div className="hero-cinematic-overlay" aria-hidden />
      <div className="hero-grid-bg" aria-hidden />
      <motion.div
        className="hero-copy cinematic-copy"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="premium-eyebrow"><Sparkles size={16} /> CA-led loan syndication and advisory</span>
        <h1>
          Finance decisions need <span>structure, not noise.</span>
        </h1>
        <p>
          CA-led loan syndication, structured finance and advisory for businesses, professionals and families.
        </p>
        <div className="hero-badges">
          {["14+ years founder experience", "Structured finance guidance"].map((badge) => (
            <span key={badge}><BadgeCheck size={15} /> {badge}</span>
          ))}
        </div>
        <div className="hero-actions">
          <Link className="primary-button magnetic" href="/apply-now">Start Application <ArrowRight size={18} /></Link>
          <Link className="ghost-button magnetic" href="/calculators/emi-calculator">Calculate EMI</Link>
        </div>
      </motion.div>
      <div className="hero-scroll-indicator" aria-hidden><span /></div>
    </section>
  );
}

export function FloatingFinanceDashboard() {
  const emi = calculateEmi(3200000, 10.25, 120);
  const points = [18, 28, 25, 44, 39, 58, 52, 69, 64, 82];
  return (
    <motion.div className="fin-dashboard" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
      <div className="dashboard-top">
        <span>Loan readiness</span>
        <strong>76%</strong>
      </div>
      <div className="score-ring" aria-hidden><span>Rs.</span></div>
      <div className="dash-metrics">
        <div><small>Indicative EMI</small><strong>{formatInr(emi.emi)}</strong></div>
        <div><small>Documents</small><strong>4/6 ready</strong></div>
      </div>
      <div className="mini-chart" aria-label="Indicative eligibility trend">
        {points.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
      </div>
      <motion.div className="float-chip chip-one" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
        <FileCheck2 size={18} /> KYC verified
      </motion.div>
      <motion.div className="float-chip chip-two" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
        <TrendingUp size={18} /> Better tenure fit
      </motion.div>
    </motion.div>
  );
}

export function TrustLogoMarquee() {
  return (
    <section className="trust-marquee">
      <div className="marquee-fade" />
      <div className="trust-track">
        {[...partners, ...partners].map((partner, index) => (
          <span key={`${partner}-${index}`}>{partner}</span>
        ))}
      </div>
      <p>Lender network categories shown for service clarity. Confirmed institution logos can be added after client approval.</p>
    </section>
  );
}

export function AnimatedMetrics() {
  return (
    <section className="premium-section compact-section">
      <div className="metrics-rail">
        {clientPlaceholders.stats.map((stat) => (
          <motion.div whileHover={{ y: -5 }} className="metric-tile" key={stat.label}>
            <strong>{stat.value}{stat.suffix}</strong>
            <span>{stat.label}</span>
            <small>{stat.note}</small>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function BentoServiceGrid() {
  const featured = services.filter((service) =>
    ["business-loan", "home-loan", "loan-against-property", "msme-loan", "working-capital-loan", "project-finance"].includes(service.slug)
  );
  return (
    <section className="premium-section">
      <div className="section-head split">
        <div><span className="premium-eyebrow">Loan services</span><h2>Start with the finance pathway that matches the decision.</h2></div>
        <Link className="blue-action" href="/financial-services">View all services <ArrowRight size={17} /></Link>
      </div>
      <div className="bento-grid">
        {featured.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div whileHover={{ y: -8 }} className={`bento-card bento-${index % 5}`} key={service.slug}>
              <Icon size={30} />
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <small>{service.audience}</small>
              <Link className="blue-action small-action" href={`/services/${service.slug}`}>Learn more <ArrowRight size={15} /></Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function AudienceTabs() {
  const [active, setActive] = useState(0);
  const item = audienceSolutions[active];
  const selectedServices = item.recommended
    .map((title) => services.find((service) => service.title === title))
    .filter(Boolean)
    .slice(0, 3);
  return (
    <section className="premium-section dark-fin-panel audience-redesign">
      <div className="section-head">
        <span className="premium-eyebrow">Audience solutions</span>
        <h2>Choose a profile. See the finance route instantly.</h2>
      </div>
      <div className="audience-shell advanced-tabs">
        <div className="segment-tabs" role="tablist" aria-label="Borrower profile">
          {audienceSolutions.map((solution, index) => (
            <button key={solution.label} onClick={() => setActive(index)} className={active === index ? "active" : ""} role="tab" aria-selected={active === index}>
              {solution.label}
            </button>
          ))}
        </div>
        <motion.div className="audience-card" key={item.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <div className="audience-visual-top">
            <div>
              <span className="profile-chip">Active profile</span>
              <h3>{item.label}</h3>
            </div>
            <div className="readiness-meter" aria-label="Readiness score">
              <span>{78 + active * 3}%</span>
            </div>
          </div>
          <div className="profile-pathway" aria-label="Recommended finance pathway">
            {selectedServices.map((service, index) => {
              if (!service) return null;
              const Icon = service.icon;
              return (
                <Link href={`/services/${service.slug}`} className="pathway-node" key={service.slug}>
                  <Icon size={22} />
                  <strong>{service.title}</strong>
                  <small>{index === 0 ? "Best first check" : "Also review"}</small>
                </Link>
              );
            })}
          </div>
          <div className="visual-check-grid">
            <div>
              <h4>What works</h4>
              {item.benefits.map((text) => <p key={text}><CheckCircle2 size={16} /> {text}</p>)}
            </div>
            <div>
              <h4>Keep ready</h4>
              {item.requirements.map((text) => <p key={text}><FileCheck2 size={16} /> {text}</p>)}
            </div>
          </div>
          <Link className="blue-action" href="/apply-now">Check this profile <ArrowRight size={17} /></Link>
        </motion.div>
      </div>
    </section>
  );
}

export function ProcessTimeline() {
  const steps = [
    ["Select product", Layers3],
    ["Submit profile", BriefcaseBusiness],
    ["Verify documents", FileCheck2],
    ["Compare lender fit", BarChart3],
    ["Proceed with clarity", ShieldCheck]
  ] as const;
  return (
    <section className="premium-section">
      <div className="section-head"><span className="premium-eyebrow">How it works</span><h2>A guided loan journey with fewer surprises.</h2></div>
      <div className="timeline">
        {steps.map(([label, Icon], index) => (
          <motion.div className="timeline-step" key={label} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <span>{index + 1}</span><Icon size={22} /><h3>{label}</h3><p>Clear next action, consent-led follow-up and no misleading promises.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function EmiPreview() {
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(10.5);
  const [years, setYears] = useState(10);
  const result = useMemo(() => calculateEmi(amount, rate, years * 12), [amount, rate, years]);
  const interestShare = Math.min(78, Math.max(18, (result.totalInterest / result.totalPayable) * 100));
  return (
    <section className="premium-section">
      <div className="calculator-preview">
        <div>
          <span className="premium-eyebrow">EMI workspace</span>
          <h2>Model repayment before a lender conversation.</h2>
          <p>Use the premium preview here, then open the full calculator for amortization and detailed planning.</p>
          <CalcMini label="Loan amount" value={amount} min={100000} max={10000000} step={50000} setValue={setAmount} />
          <CalcMini label="Interest rate" value={rate} min={6} max={24} step={0.1} setValue={setRate} suffix="%" />
          <CalcMini label="Tenure" value={years} min={1} max={30} step={1} setValue={setYears} suffix=" years" />
        </div>
        <div className="result-orb">
          <div className="donut" style={{ background: `conic-gradient(var(--orange) ${interestShare}%, rgba(255,255,255,.18) 0)` }}><span>{formatInr(result.emi)}</span></div>
          <div className="result-list">
            <p><span>Total interest</span><strong>{formatInr(result.totalInterest)}</strong></p>
            <p><span>Total payable</span><strong>{formatInr(result.totalPayable)}</strong></p>
          </div>
          <Link className="primary-button" href="/calculators/emi-calculator">Open full calculator</Link>
        </div>
      </div>
    </section>
  );
}

function CalcMini({ label, value, min, max, step, setValue, suffix = "" }: { label: string; value: number; min: number; max: number; step: number; suffix?: string; setValue: (value: number) => void }) {
  return (
    <label className="mini-control"><span>{label}<strong>{value.toLocaleString("en-IN")}{suffix}</strong></span><input type="range" min={min} max={max} step={step} value={value} onChange={(event) => setValue(Number(event.target.value))} /></label>
  );
}

export function FounderSpotlight() {
  return (
    <section className="premium-section founder-spotlight">
      <div className="portrait-card founder-photo-card">
        <Image src="/assets/ankita-garg.png" alt="CA Ankita Garg, Founder of Aura Fintec Services" width={720} height={900} />
        <div><span>Founder</span><strong>CA Ankita Garg</strong></div>
      </div>
      <div>
        <span className="premium-eyebrow">Founder trust</span>
        <h2>CA Ankita Garg</h2>
        <p>{clientPlaceholders.founderBio}</p>
        <p>{clientPlaceholders.founderExtended}</p>
        <blockquote>Financial guidance should simplify complexity and help businesses grow with discipline.</blockquote>
        <Link className="primary-button" href="/about-us#founder">Read founder profile</Link>
      </div>
    </section>
  );
}

export function DocumentChecklist() {
  const [active, setActive] = useState(0);
  const set = documentSets[active];
  return (
    <section className="premium-section docs-redesign">
      <div className="section-head split"><div><span className="premium-eyebrow">Document readiness</span><h2>Tap a profile. Build the lender file visually.</h2></div></div>
      <div className="docs-shell advanced-tabs">
        <div className="segment-tabs">{documentSets.map((item, index) => <button key={item.label} className={active === index ? "active" : ""} onClick={() => setActive(index)}>{item.label}</button>)}</div>
        <motion.div className="doc-list" key={set.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="doc-progress">
            <strong>{set.docs.length}</strong>
            <span>document groups</span>
          </div>
          <div className="doc-card-grid">
            {set.docs.map((doc, index) => (
              <p key={doc} style={{ ["--delay" as string]: `${index * 70}ms` }}>
                <FileCheck2 size={18} />
                <span>{doc}</span>
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TestimonialCarousel() {
  return (
    <section className="premium-section">
      <div className="section-head split"><div><span className="premium-eyebrow">Success stories</span><h2>Proof area prepared for client-approved stories.</h2></div><p>Sample content stays marked until client approval.</p></div>
      <div className="testimonial-row">
        {testimonials.map((item, index) => (
          <motion.article className="testimonial-card" key={item.name} whileHover={{ y: -6 }}>
            <div>{"★".repeat(5)}</div><p>{item.text}</p><strong>{item.name}</strong><span>{item.role} · Sample city</span><small>{item.status}</small>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function BlogShowcase() {
  return (
    <section className="premium-section editorial-section">
      <div className="section-head split">
        <div>
          <span className="premium-eyebrow">Financial insights</span>
          <h2>Editorial resources with practical loan guidance.</h2>
        </div>
        <Link className="blue-action" href="/resources">View all resources <ArrowRight size={17} /></Link>
      </div>
      <div className="blog-layout">
        {blogPosts.map((post, index) => (
          <Link className={index === 0 ? "blog-card featured-blog" : "blog-card"} href={`/resources/${post.slug}`} key={post.slug}>
            {index === 0 && (
              <video autoPlay muted loop playsInline preload="metadata" poster="/assets/aura-loan-syndication.jpeg" aria-hidden="true">
                <source src="/assets/video/aura-consultation-hero.mp4" type="video/mp4" />
              </video>
            )}
            <span>Guide - 4 min read</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span className="blue-action small-action card-action">Read guide <ArrowRight size={15} /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function PremiumCTA() {
  return (
    <section className="premium-cta">
      <span className="premium-eyebrow">Ready when you are</span>
      <h2>Move from loan confusion to a lender-ready conversation.</h2>
      <p>Share your details with consent. Aura will review the inquiry without promising approval or final lender terms.</p>
      <div className="hero-actions">
        <Link className="primary-button" href="/apply-now">Apply Now</Link>
        <a className="ghost-button" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
        <a className="ghost-button" href={`tel:${site.phone.replace(/\s/g, "")}`}><Clock3 size={18} /> Call</a>
      </div>
    </section>
  );
}
