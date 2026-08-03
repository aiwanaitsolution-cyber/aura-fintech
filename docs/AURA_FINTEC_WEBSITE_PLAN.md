# Aura Fintec Services Website Plan

## Reference Audit

Parker's Consultings is a WordPress corporate DSA website. Its hierarchy includes Home, About, Managing Director, Core Team, Services, Home Loan, Business Loan, Personal Loan, Mortgage Loan, Car Loan, Credit Card, Education Loan, OD/CC/DOD, Insta Loan, L&T, Protium, Become a DSA, Career, Contact, EMI Calculator, Privacy Policy and Grievance Redressal. The homepage uses a traditional hero, service grid, growth statistics, association logos, gallery/slider, Contact Form 7 inquiry form, repeated header/footer links and pan-India contact claims. Service pages include Apply Now anchors and forms asking for name, email, mobile, DOB, profession, occupation, income, city and requirement. Contact includes office/branch listings. Legal coverage includes privacy and grievance pages.

Weaknesses observed: dated visual style, repeated navigation content, thin service copy, unclear mobile hierarchy, basic form UX, weak calculator experience, sparse SEO depth, unverified claim risk, and insufficient modern trust/disclosure treatment.

## Final Sitemap

Home, About Us, Founder, All Financial Services, Personal Loan, Business Loan, Home Loan, Loan Against Property, Vehicle Loan, Education Loan, Working Capital Loan, MSME Loan, Professional Loan, Machinery Loan, Project Finance, Balance Transfer, Credit Card Assistance, Insurance Assistance placeholder, EMI Calculator, Loan Eligibility Calculator, Balance Transfer Calculator, Business Loan Calculator, Home Loan Calculator, Resources, Blog posts, FAQ, Lending Partners, Become a Partner, Contact, Apply Now, Success, Privacy Policy, Terms, Disclaimer, Grievance Redressal, Sitemap and 404.

## Architecture

Next.js App Router with TypeScript, reusable service template, reusable calculator suite, centralized `lib/client-data.ts`, reusable FAQ, lead form, header/footer, SEO sitemap and robots routes. Client-dependent content is centralized in `site`, `partners`, testimonials and service notes.

## Design System

Primary navy `#082D5C`, deep navy `#041B38`, orange `#E56A00`, amber `#F28C18`, off-white `#FAFAF7`, blue-grey `#F2F6FA`, dark text `#10243E`. Inter is used for the interface with a prepared display font token. UI uses 8px radii, crisp cards, restrained gradients, clear focus states, compact financial controls, sticky header, floating contact actions and mobile sticky CTA.

## Pages And Sections

Homepage includes trust bar, sticky header, hero, partner marquee, stats, products, why choose Aura, process, lead form, founder section, documents, borrower segments, testimonials, resources, FAQ and final CTA. Service pages include hero, metadata, benefits, documents, process, disclaimers, FAQs and lead form. Calculators include EMI, eligibility and balance transfer modes.

## Calculators

EMI uses reducing-balance formula `P * R * (1 + R)^N / ((1 + R)^N - 1)`, synchronized sliders and number inputs, Indian currency formatting, chart, amortization preview and print. Eligibility uses FOIR-style available EMI and reverse EMI principal estimate. Balance transfer compares current vs new EMI, savings, costs and break-even.

## Lead Flow

Two-step inquiry form with full name, mobile, email, city, PIN, product, amount, income/turnover, employment type, existing EMI, preferred contact time, consent and honeypot. API route validates with Zod, rate-limits lightly in memory, logs a CRM-ready lead object and avoids exposed secrets.

## SEO And Local SEO

Unique metadata for pages, canonical route metadata where relevant, sitemap.xml, robots.txt, semantic headings, FAQ content, internal linking and route-ready schema opportunities. Local SEO awaits verified city, address, phone, GST/CIN/DSA details and service locations.

## Accessibility And Responsiveness

Semantic HTML, visible focus states, labels, aria-live calculator output, keyboard-friendly controls, reduced-motion support, responsive grids and mobile sticky CTA. Target breakpoints include 320, 375, 390, 430, 768, 1024, 1280 and 1440.

## Performance, Security And Compliance

Server-rendered content, optimized font loading, local SVG logo placeholder, limited dependencies, lazy visual animation, no API keys in frontend, server validation, honeypot and rate-limit architecture. Disclaimers avoid guaranteed approval, lowest-rate and false partnership claims.

## Admin / Content Approach

Current approach is code-driven content in `lib/client-data.ts`. For production, this can be migrated to a headless CMS or Google Sheet-backed editorial workflow after client content is finalized.

## Implementation Sequence

Inspect reference, create plan, scaffold Next.js, define data and design system, build components, implement pages, implement calculators/forms/API, add legal/SEO routes, write final audit, run typecheck/lint/build, inspect locally and fix issues.
