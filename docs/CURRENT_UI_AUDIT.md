# Current UI Audit

## Summary

The existing Aura Fintec website is functionally complete but visually basic. It has the required pages, calculators, forms and SEO routes, but many areas feel like a generic corporate template rather than a premium FinTech platform.

## Homepage Issues

- Hero uses company name as the whole headline and lacks a strong value proposition.
- Right-side dashboard exists but is simple and static.
- Service cards are visually similar and read as a standard grid.
- Audience section is static instead of interactive.
- Process section lacks motion or journey storytelling.
- EMI preview is not sufficiently differentiated from ordinary form/card UI.
- Founder section lacks a premium trust layout.
- Documents, testimonials and resources need stronger editorial/interactive design.

## Header And Navigation

- Header has only a simple product dropdown.
- Calculators and resources are not surfaced as premium navigation groups.
- Mega menu lacks descriptions, icons and featured CTA.
- Mobile menu works but needs a more intentional full-screen product structure.

## Service Pages

- Service pages share a basic two-section template.
- Hero does not vary enough by service.
- Missing service-specific visual storytelling, use cases, embedded calculator preview and final CTA.
- Lead form is present but visually plain.

## Calculator Pages

- Calculator logic is strong, but presentation feels utilitarian.
- Results panel is not sticky on desktop.
- Formula and explanatory context need more premium framing.
- Calculator workspace lacks a distinctive FinTech tool feel.

## Lead Form

- Existing form is two steps with many fields grouped together.
- It needs a guided onboarding flow, step titles, reassurance copy and better mobile rhythm.

## Footer

- Footer is functional but standard.
- Needs a stronger consultation CTA, richer company/resource grouping and more premium dark layout.

## Components Needing Redesign

- `components/Header.tsx`
- `components/Footer.tsx`
- `components/LeadForm.tsx`
- `components/CalculatorSuite.tsx`
- `app/page.tsx`
- `app/services/[slug]/page.tsx`
- `app/globals.css`

## Pages Inspected

Home, Business Loan, Personal Loan, Home Loan, Loan Against Property, MSME Loan, EMI Calculator, Eligibility Calculator, Balance Transfer Calculator, Apply Now, Contact, About, Founder, Lending Partners, Resources, FAQ and 404.
