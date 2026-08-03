import {
  BadgeIndianRupee,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Car,
  CreditCard,
  Factory,
  GraduationCap,
  Handshake,
  Home,
  Landmark,
  Scale,
  ShieldCheck,
  TrendingUp,
  UserRoundCheck
} from "lucide-react";

export const site = {
  name: "Aura Fintec Services",
  founder: "CA Ankita Garg",
  baseUrl: "https://aurafintec.example",
  phone: "+91 96500 23854",
  whatsapp: "919650023854",
  email: "aurafintecservices@gmail.com",
  city: "India",
  address: "Consultations available by appointment",
  tagline: "Loan syndication services, structured finance and strategic financial advisory for businesses ready to grow.",
  logoStatus: "Launch assets supplied by client are stored locally in /public/assets. Replace the SVG logo with the final transparent master logo if available.",
  unverifiedNote: "Partner logos, client testimonials, registered address, GSTIN, CIN and DSA details still require client confirmation before publication.",
  social: {
    linkedin: "#",
    instagram: "#"
  }
};

export const clientPlaceholders = {
  stats: [
    { label: "Years of banking and financial services experience", value: 14, suffix: "+", note: "Founder experience provided by client" },
    { label: "Loan and advisory categories", value: 10, suffix: "+", note: "Based on supplied service profile" },
    { label: "Core finance focus areas", value: 3, suffix: "", note: "Syndication, structured finance and advisory" },
    { label: "Client-first relationship model", value: 1, suffix: "", note: "Personalized advisory and long-term support" }
  ],
  founderBio:
    "CA Ankita Garg is the Founder of Aura Fintec Services and a qualified Chartered Accountant with over 14 years of extensive banking and financial services experience. She has worked closely with businesses across diverse industries, with deep expertise in corporate banking, structured finance, credit assessment, financial analysis and strategic financial advisory.",
  founderExtended:
    "Her strong banking background enables her to understand the unique financial requirements of businesses and deliver practical, growth-oriented solutions. She specializes in arranging structured finance, facilitating loan syndication and providing strategic financial advisory to MSMEs, startups and corporates, helping them achieve sustainable growth while maintaining financial discipline.",
  founderVision:
    "At Aura Fintec Services, CA Ankita Garg is committed to building long-term client relationships by offering personalized financial solutions with professionalism, integrity and excellence. Her vision is to simplify complex financial decisions and empower businesses with the right strategies to achieve their growth ambitions.",
  officeHours: "By appointment"
};

export const colors = {
  primaryNavy: "#082D5C",
  deepNavy: "#041B38",
  brandOrange: "#E56A00",
  accentAmber: "#F28C18",
  offWhite: "#FAFAF7",
  surfaceBlueGrey: "#F2F6FA",
  textDark: "#10243E"
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  audience: string;
  amount: string;
  tenure: string;
  rate: string;
  icon: typeof Banknote;
  highlights: string[];
  documents: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "personal-loan",
    title: "Personal Loan",
    short: "Flexible unsecured finance for planned expenses, emergencies, travel, education support and debt consolidation.",
    audience: "Salaried and self-employed applicants",
    amount: "Indicative lender range: Rs. 50,000 to Rs. 50 lakh",
    tenure: "Typically 12 to 84 months",
    rate: "Rates vary by lender, credit profile and income stability",
    icon: UserRoundCheck,
    highlights: ["Profile-led lender matching", "Transparent document checklist", "Balance transfer review available"],
    documents: ["PAN and Aadhaar", "Salary slips or income proof", "Bank statements", "Employment or business proof"],
    faqs: [
      { q: "Does Aura guarantee approval?", a: "No. Approval is subject to lender policy, documentation, credit assessment and applicable terms." },
      { q: "Will checking eligibility affect my credit score?", a: "The website estimate does not access credit bureaus. A lender application may involve bureau checks with consent." }
    ]
  },
  {
    slug: "business-loan",
    title: "Business Loan",
    short: "Structured funding support for growth, inventory, cash-flow gaps, expansion and business consolidation.",
    audience: "Proprietors, partnerships, LLPs and companies",
    amount: "Indicative lender range depends on turnover and bankability",
    tenure: "Typically 12 to 60 months",
    rate: "Based on financials, vintage, cash flow and lender program",
    icon: BriefcaseBusiness,
    highlights: ["Bank statement and GST-led assessment", "Secured and unsecured options", "CA-aware documentation guidance"],
    documents: ["KYC and entity proof", "GST returns or sales records", "ITR and financial statements", "Bank statements"],
    faqs: [
      { q: "Can a new business apply?", a: "Some lenders consider young businesses, but vintage, cash flow and collateral can affect eligibility." },
      { q: "Are collateral-free options available?", a: "They may be available for eligible applicants, subject to lender policy." }
    ]
  },
  {
    slug: "home-loan",
    title: "Home Loan",
    short: "Home purchase, construction and renovation finance guidance with affordability and eligibility planning.",
    audience: "Home buyers, families and property owners",
    amount: "Linked to property value, income and lender LTV policy",
    tenure: "Usually up to 30 years where eligible",
    rate: "Floating and fixed options depend on lender terms",
    icon: Home,
    highlights: ["Eligibility and EMI planning", "Property-document readiness", "Co-applicant structuring guidance"],
    documents: ["KYC and income documents", "Property papers", "Bank statements", "ITR/Form 16 where applicable"],
    faqs: [
      { q: "Can Aura help compare home-loan offers?", a: "Aura can help organize lender options and explain indicative differences. Final terms come from lenders." },
      { q: "Is property verification required?", a: "Yes, lenders usually conduct legal and technical checks before sanction and disbursement." }
    ]
  },
  {
    slug: "term-loan",
    title: "Term Loan",
    short: "Medium and long-term finance support for expansion, asset purchase and structured business growth needs.",
    audience: "Businesses planning expansion or capital expenditure",
    amount: "Based on project cost, cash flow and lender assessment",
    tenure: "Typically structured around repayment capacity and asset life",
    rate: "Depends on lender policy, borrower profile, security and repayment structure",
    icon: BadgeIndianRupee,
    highlights: ["Expansion finance planning", "Repayment structuring", "Documentation and lender coordination"],
    documents: ["Business KYC", "Financial statements", "Bank statements", "Loan purpose note", "Collateral papers where applicable"],
    faqs: [
      { q: "What can a term loan be used for?", a: "Common uses include expansion, asset purchase, project needs and long-term business funding, subject to lender policy." },
      { q: "Is collateral always required?", a: "Collateral requirements depend on lender program, amount, profile and the proposed loan structure." }
    ]
  },
  {
    slug: "loan-against-property",
    title: "Loan Against Property",
    short: "Secured finance against residential, commercial or industrial property for business or personal use cases.",
    audience: "Property owners and business borrowers",
    amount: "Based on property value and repayment capacity",
    tenure: "Often longer-tenure secured repayment structures",
    rate: "Depends on property type, profile and lender policy",
    icon: Landmark,
    highlights: ["LTV scenario planning", "Mortgage documentation support", "Balance transfer opportunities"],
    documents: ["Property title documents", "KYC", "Income documents", "Bank statements"],
    faqs: [
      { q: "Can commercial property be considered?", a: "Many lenders consider commercial property, subject to valuation and title checks." },
      { q: "Can existing LAP be transferred?", a: "Yes, a balance transfer may be evaluated if savings justify costs." }
    ]
  },
  {
    slug: "surety-bonds",
    title: "Surety Bonds",
    short: "Facilitation support for performance, bid, advance payment and other surety-style business requirements.",
    audience: "Contractors, vendors and businesses participating in projects or tenders",
    amount: "Requirement-specific and subject to issuer/lender assessment",
    tenure: "Linked to contract or project requirement",
    rate: "Charges vary by issuer, applicant profile and obligation type",
    icon: ShieldCheck,
    highlights: ["Bid and performance support", "Contract requirement review", "Documentation coordination"],
    documents: ["Business KYC", "Tender or contract documents", "Financial statements", "Banking records", "Issuer-specific documents"],
    faqs: [
      { q: "Does Aura issue surety bonds directly?", a: "No. Aura facilitates advisory and coordination where applicable; issuance is subject to the relevant issuer's assessment." },
      { q: "What types of surety support may be reviewed?", a: "Bid, performance, advance payment and other contract-linked requirements may be evaluated based on the case." }
    ]
  },
  {
    slug: "bills-discounting",
    title: "Bills Discounting",
    short: "Receivables and invoice-financing support to improve cash flow with quicker access to business funds.",
    audience: "Businesses with invoices, receivables or buyer-led payment cycles",
    amount: "Invoice, buyer and lender policy dependent",
    tenure: "Short-tenure facility linked to receivable cycle",
    rate: "Discounting charges vary by buyer quality, tenure and financier terms",
    icon: Banknote,
    highlights: ["Receivables financing review", "Cash-flow timing support", "Buyer and invoice documentation"],
    documents: ["Invoices", "Purchase orders", "Buyer details", "Business KYC", "Bank statements"],
    faqs: [
      { q: "Is bills discounting a loan?", a: "It is a receivables-based financing arrangement where terms depend on invoice, buyer and financier assessment." },
      { q: "Can it help working capital?", a: "Yes, it can improve cash-flow timing when eligible invoices and buyer documentation are available." }
    ]
  },
  {
    slug: "vehicle-loan",
    title: "Vehicle Loan",
    short: "Finance assistance for cars and commercial vehicles with repayment planning and document readiness.",
    audience: "Individuals, businesses and fleet owners",
    amount: "Based on vehicle cost, margin and lender policy",
    tenure: "Typically 12 to 84 months",
    rate: "New and used vehicle rates vary by lender",
    icon: Car,
    highlights: ["New and used vehicle scenarios", "Commercial vehicle support", "EMI comparison"],
    documents: ["KYC", "Income proof", "Vehicle quotation", "Bank statements"],
    faqs: [
      { q: "Can used vehicles be financed?", a: "Some lenders finance used vehicles subject to age, valuation and applicant profile." },
      { q: "Is down payment required?", a: "Usually yes. The amount depends on lender LTV policy and vehicle category." }
    ]
  },
  {
    slug: "education-loan",
    title: "Education Loan",
    short: "Funding support for higher education in India or abroad with co-applicant and collateral planning.",
    audience: "Students and families",
    amount: "Depends on course, institute, collateral and co-applicant profile",
    tenure: "Moratorium and repayment terms vary by lender",
    rate: "Education-loan pricing varies by course and risk profile",
    icon: GraduationCap,
    highlights: ["Course-cost planning", "Co-applicant review", "Collateral readiness where needed"],
    documents: ["Admission proof", "Fee structure", "Student and co-applicant KYC", "Income documents"],
    faqs: [
      { q: "Can overseas education be covered?", a: "Several lenders support eligible overseas courses, subject to documentation and assessment." },
      { q: "Is collateral mandatory?", a: "It depends on loan amount, institute, lender and applicant profile." }
    ]
  },
  {
    slug: "working-capital-loan",
    title: "Working Capital Loan",
    short: "Cash-flow finance, OD/CC assistance and short-tenure facilities for operational business needs.",
    audience: "SMEs, traders and manufacturers",
    amount: "Based on turnover, bank statements and drawing-power norms",
    tenure: "Facility type determines renewal and repayment",
    rate: "Depends on secured/unsecured structure and lender policy",
    icon: TrendingUp,
    highlights: ["OD/CC/DOD guidance", "Cash-flow mapping", "Renewal and enhancement support"],
    documents: ["GST returns", "Financial statements", "Stock/debtor data where required", "Bank statements"],
    faqs: [
      { q: "Is OD different from a term loan?", a: "Yes. OD/CC facilities support revolving working capital, while term loans have fixed repayment schedules." },
      { q: "Can limits be enhanced?", a: "Enhancement depends on lender policy, repayment conduct, turnover and collateral." }
    ]
  },
  {
    slug: "msme-loan",
    title: "MSME Loan",
    short: "Finance facilitation for micro, small and medium enterprises with GST, ITR and banking-led assessment.",
    audience: "MSMEs and owner-led businesses",
    amount: "Lender-led range based on business profile",
    tenure: "Usually 12 to 84 months",
    rate: "Program and profile dependent",
    icon: Building2,
    highlights: ["MSME-focused eligibility review", "Scheme-fit guidance", "Document gap checklist"],
    documents: ["Udyam registration if available", "GST/ITR", "KYC and entity proof", "Bank statements"],
    faqs: [
      { q: "Is Udyam registration compulsory?", a: "It may not be compulsory for every product, but it helps identify MSME status." },
      { q: "Can GST data support eligibility?", a: "Yes, many lenders use GST turnover and bank statements as key assessment inputs." }
    ]
  },
  {
    slug: "professional-loan",
    title: "Professional Loan",
    short: "Loan assistance for doctors, CAs, architects, consultants and other qualified professionals.",
    audience: "Qualified professionals and practices",
    amount: "Depends on qualification, practice income and banking",
    tenure: "Typically 12 to 84 months",
    rate: "Profile and lender-program specific",
    icon: BadgeIndianRupee,
    highlights: ["Qualification-led lender matching", "Practice expansion finance", "Equipment add-on review"],
    documents: ["Professional qualification proof", "KYC", "ITR/bank statements", "Practice proof"],
    faqs: [
      { q: "Can professionals apply without collateral?", a: "Some programs may be unsecured, subject to profile and lender terms." },
      { q: "Can clinic expansion be financed?", a: "Yes, business use cases such as clinic expansion can be evaluated." }
    ]
  },
  {
    slug: "machinery-loan",
    title: "Machinery Loan",
    short: "Equipment and machinery funding support for manufacturers, workshops and asset-heavy businesses.",
    audience: "Manufacturers and production-led SMEs",
    amount: "Based on machinery cost and business cash flow",
    tenure: "Asset-life and lender policy driven",
    rate: "Secured asset-finance terms vary by lender",
    icon: Factory,
    highlights: ["Quotation-led assessment", "New and used equipment scenarios", "Cash-flow fit review"],
    documents: ["Machinery quotation", "Business KYC", "Financials/GST", "Bank statements"],
    faqs: [
      { q: "Can imported machinery be financed?", a: "Some lenders consider it with adequate invoices, duties, valuation and business documentation." },
      { q: "Is margin money required?", a: "Most asset finance requires borrower contribution based on lender policy." }
    ]
  },
  {
    slug: "project-finance",
    title: "Project Finance",
    short: "Structured finance support for expansion, new units, infrastructure and large-ticket business projects.",
    audience: "SMEs, manufacturers, developers and growth-stage businesses",
    amount: "Project cost, promoter contribution and viability led",
    tenure: "Customized to project cash flows",
    rate: "Depends on security, risk and lender appetite",
    icon: Scale,
    highlights: ["Project viability checklist", "Promoter contribution planning", "Term-loan documentation"],
    documents: ["Project report", "Financial projections", "Promoter KYC/net worth", "Approvals and collateral papers"],
    faqs: [
      { q: "Is a project report required?", a: "Usually yes. Lenders need cost, timelines, assumptions and projected cash flows." },
      { q: "Can Aura prepare projections?", a: "Aura can coordinate finance-ready inputs; exact CA or advisory scope must be confirmed with the client." }
    ]
  },
  {
    slug: "balance-transfer",
    title: "Balance Transfer",
    short: "Review existing loans for possible rate reduction, EMI relief, top-up options or lender switching.",
    audience: "Borrowers with existing loans",
    amount: "Based on outstanding amount and new lender eligibility",
    tenure: "Remaining or restructured tenure options",
    rate: "Savings depend on new rate, costs and remaining tenure",
    icon: Handshake,
    highlights: ["Savings and break-even calculation", "Top-up possibility review", "Cost-benefit comparison"],
    documents: ["Loan statement", "Sanction letter", "Repayment track", "Income and KYC documents"],
    faqs: [
      { q: "When does balance transfer make sense?", a: "Usually when interest savings exceed processing, legal, valuation and foreclosure costs." },
      { q: "Can EMI reduce after transfer?", a: "It may reduce if rate or tenure changes, but total cost must be reviewed carefully." }
    ]
  },
  {
    slug: "credit-card-assistance",
    title: "Credit Card Assistance",
    short: "Credit-card selection and application support based on profile, spends and eligibility.",
    audience: "Salaried, self-employed and business users",
    amount: "Card limit is lender and profile dependent",
    tenure: "Revolving credit product, not a term loan",
    rate: "Charges vary by issuer and usage behavior",
    icon: CreditCard,
    highlights: ["Profile and use-case matching", "Document readiness", "Responsible usage guidance"],
    documents: ["KYC", "Income proof", "Bank statements", "Existing card details if any"],
    faqs: [
      { q: "Does Aura issue credit cards?", a: "No. Cards are issued by banks or issuers subject to their approval." },
      { q: "Can rejected applicants reapply?", a: "Yes, but after understanding rejection reasons and improving eligibility where possible." }
    ]
  },
  {
    slug: "insurance-assistance",
    title: "Insurance Assistance",
    short: "Placeholder page for insurance support; publish only after the client confirms this service is offered.",
    audience: "Client confirmation required",
    amount: "Not applicable",
    tenure: "Policy-specific",
    rate: "Premium depends on insurer and product",
    icon: ShieldCheck,
    highlights: ["Service requires confirmation", "No insurer partnership claimed", "Disclosure-led guidance"],
    documents: ["Client to confirm requirements"],
    faqs: [
      { q: "Is this service confirmed?", a: "No. This page is intentionally marked client-dependent until Aura confirms insurance assistance." },
      { q: "Are insurer partnerships claimed?", a: "No partnerships are claimed on this website without confirmation." }
    ]
  }
];

export const calculators = [
  { slug: "emi-calculator", title: "EMI Calculator", type: "emi" },
  { slug: "loan-eligibility-calculator", title: "Loan Eligibility Calculator", type: "eligibility" },
  { slug: "balance-transfer-calculator", title: "Balance Transfer Calculator", type: "balance" },
  { slug: "business-loan-calculator", title: "Business Loan Calculator", type: "emi", product: "Business Loan" },
  { slug: "home-loan-calculator", title: "Home Loan Calculator", type: "emi", product: "Home Loan" }
] as const;

export const partners = [
  "Banks",
  "NBFCs",
  "Private Lenders",
  "Structured Finance Desks",
  "Working Capital Providers",
  "Asset Finance Providers",
  "Project Finance Teams",
  "Credit Assessment Partners"
];

export const audienceSolutions = [
  {
    label: "Salaried Professionals",
    recommended: ["Personal Loan", "Home Loan", "Credit Card Assistance"],
    benefits: ["Salary-led eligibility review", "EMI comfort planning", "Balance-transfer opportunities"],
    requirements: ["PAN/Aadhaar", "Salary slips", "Bank statements", "Employer details"]
  },
  {
    label: "Self-Employed Professionals",
    recommended: ["Professional Loan", "Business Loan", "Vehicle Loan"],
    benefits: ["Practice-income assessment", "Qualification-led lender fit", "Expansion-use planning"],
    requirements: ["Qualification proof", "ITR", "Bank statements", "Practice proof"]
  },
  {
    label: "SMEs",
    recommended: ["Business Loan", "MSME Loan", "Working Capital Loan"],
    benefits: ["GST and banking review", "Cash-flow fit", "Secured/unsecured options"],
    requirements: ["GST returns", "ITR/financials", "Bank statements", "Entity KYC"]
  },
  {
    label: "Manufacturers",
    recommended: ["Machinery Loan", "Working Capital Loan", "Project Finance"],
    benefits: ["Asset finance planning", "Stock/debtor cycle review", "Project viability checklist"],
    requirements: ["Machinery quotation", "Financials", "GST", "Collateral papers where required"]
  },
  {
    label: "Startups",
    recommended: ["Business Loan", "Professional Loan", "Credit Card Assistance"],
    benefits: ["Founder-profile review", "Banking-led readiness", "Responsible debt sizing"],
    requirements: ["Entity proof", "Bank statements", "Founder KYC", "Revenue proof if available"]
  },
  {
    label: "Property Owners",
    recommended: ["Loan Against Property", "Home Loan", "Balance Transfer"],
    benefits: ["Property-value planning", "LTV scenario review", "Top-up and transfer assessment"],
    requirements: ["Property papers", "Income documents", "Loan statements", "KYC"]
  }
];

export const documentSets = [
  { label: "Salaried", docs: ["PAN and Aadhaar", "Latest salary slips", "6-month bank statement", "Form 16 or ITR", "Employment proof"] },
  { label: "Self-employed", docs: ["KYC", "ITR with computation", "Bank statements", "Professional qualification", "Practice or office proof"] },
  { label: "Business owner", docs: ["Entity KYC", "GST returns", "Financial statements", "Current-account statement", "Udyam registration if available"] },
  { label: "Property-backed loan", docs: ["Title documents", "Property tax receipt", "Approved plan where applicable", "Income proof", "Existing loan statement if transfer"] }
];

export const faqs = [
  { q: "What does Aura Fintec Services do?", a: "Aura facilitates loan advisory and DSA-style assistance by helping applicants understand options, prepare documents and connect with suitable lenders where applicable." },
  { q: "Is loan approval guaranteed?", a: "No. Loan approval is always subject to lender policies, credit assessment, documentation, eligibility and applicable terms." },
  { q: "Are calculator results final offers?", a: "No. Calculators are indicative planning tools and do not represent lender sanction, approval or final pricing." },
  { q: "What information is still pending from the client?", a: "Legal name, address, contact details, registrations, confirmed service locations, founder biography, lender relationships, testimonials and statistics must be verified." }
];

export const testimonials = [
  { name: "Business owner", role: "MSME borrower", text: "Aura helped us understand the documents lenders usually ask for and compare repayment scenarios before applying.", status: "Placeholder testimonial - client approval required" },
  { name: "Salaried professional", role: "Personal loan applicant", text: "The advisory conversation made the EMI and tenure trade-offs much clearer.", status: "Placeholder testimonial - client approval required" },
  { name: "Property owner", role: "LAP inquiry", text: "The balance-transfer estimate helped us decide whether switching lenders was worth exploring.", status: "Placeholder testimonial - client approval required" }
];

export const blogPosts = [
  {
    slug: "how-to-prepare-for-a-business-loan",
    title: "How to Prepare for a Business Loan Application",
    excerpt: "A practical checklist for Indian SMEs before approaching lenders.",
    body: "Start with clean banking, updated KYC, GST returns, ITRs, financial statements and a clear explanation of the loan purpose. Lenders assess repayment ability, business vintage, cash flow, obligations and credit conduct. Preparing these inputs before applying reduces back-and-forth and helps advisors map the right lender category."
  },
  {
    slug: "emi-vs-tenure-tradeoff",
    title: "EMI vs Tenure: What Borrowers Should Compare",
    excerpt: "Lower EMI can feel comfortable, but total interest may rise with longer tenure.",
    body: "A longer tenure lowers the monthly installment but increases the total interest paid over time. A shorter tenure raises EMI but can reduce borrowing cost. Use an EMI calculator to test scenarios, then choose a repayment amount that remains comfortable even during slower income months."
  },
  {
    slug: "balance-transfer-break-even",
    title: "When a Loan Balance Transfer May Make Sense",
    excerpt: "Compare rate savings, charges and remaining tenure before switching.",
    body: "Balance transfer decisions should include processing fees, legal or valuation charges, foreclosure costs, remaining tenure and new-rate savings. A transfer is more attractive when the break-even point arrives early enough to justify the effort and charges."
  }
];

export const allRoutes = [
  "/",
  "/about-us",
  "/founder",
  "/financial-services",
  ...services.map((service) => `/services/${service.slug}`),
  ...calculators.map((calculator) => `/calculators/${calculator.slug}`),
  "/resources",
  ...blogPosts.map((post) => `/resources/${post.slug}`),
  "/faq",
  "/lending-partners",
  "/become-a-partner",
  "/contact-us",
  "/apply-now",
  "/success",
  "/privacy-policy",
  "/terms-and-conditions",
  "/disclaimer",
  "/grievance-redressal",
  "/sitemap"
];

export const IconCalculator = Calculator;
