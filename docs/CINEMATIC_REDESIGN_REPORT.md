# Cinematic Redesign Report

Date: August 4, 2026

## What Changed

- Rebuilt the homepage first impression around a cinematic business-consultation video hero.
- Changed the header to transparent over the homepage hero and solid after scroll.
- Reduced homepage crowding by removing the metrics rail, process timeline and placeholder testimonial band from the main flow.
- Refocused the homepage service grid on the main high-intent pathways: Business Loan, Personal Loan, Home Loan, Loan Against Property, MSME Loan and Working Capital Loan.
- Kept the full service catalogue available on `/financial-services` and individual service pages.
- Added global horizontal overflow protection for small mobile screens.
- Updated the production SEO base URL to `https://aura-fintech.vercel.app`.
- Added a visual asset inventory for launch handoff and future logo/lender approvals.

## QA Evidence

Screenshots are stored in `docs/cinematic-audit/`.

Post-redesign screenshots captured:

- `home-desktop-after.png`
- `home-mobile-after.png`
- `services-desktop-after.png`
- `founder-mobile-after.png`

Responsive route sweep:

- Routes checked: homepage, financial services, founder, business loan, EMI calculator, apply now, contact, lending partners, FAQ and 404.
- Widths checked: 320, 390, 768, 1440 and 1920.
- Result: no horizontal overflow, no broken images and no missing H1s.
- Homepage video source present at all checked widths.

Interaction checks:

- Services dropdown opens on click and exposes all service links.
- Mobile menu opens, locks body scroll, closes correctly and restores body scroll.
- Chat assistant is present.
- WhatsApp links are present and point to the configured Aura number.
- Header switches from transparent-over-hero to solid after scrolling.

## Build Validation

- `npm run lint` passed.
- `npm run typecheck` passed.
- `npm run build` passed and generated 46 static routes plus the dynamic lead API route.

## Launch Notes

- The hero video is currently MP4 only because the verified stock source supplied MP4. A WebM source can be added later if a verified commercial-use WebM version is provided.
- Lender names remain category placeholders. Replace them with approved lender logos only after Aura confirms relationships and logo usage rights.
- Placeholder testimonials remain outside the homepage launch flow until the client approves real proof content.
