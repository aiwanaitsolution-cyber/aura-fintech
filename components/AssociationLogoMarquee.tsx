import Image from "next/image";

export const associationLogos = [
  { name: "Bank of Baroda", src: "/assets/partners/bank-of-baroda.png", href: "https://bankofbaroda.bank.in/" },
  { name: "Canara Bank", src: "/assets/partners/canara-bank.png", href: "https://www.canarabank.bank.in/" },
  { name: "State Bank of India", src: "/assets/partners/state-bank-of-india.png", href: "https://sbi.bank.in/" },
  { name: "HDFC Bank", src: "/assets/partners/hdfc-bank.png", href: "https://www.hdfcbank.com/" },
  { name: "ICICI Bank", src: "/assets/partners/icici-bank.png", href: "https://www.icicibank.com/" },
  { name: "Axis Bank", src: "/assets/partners/axis-bank.jpg", href: "https://www.axisbank.com/" },
  { name: "Kotak Mahindra Bank", src: "/assets/partners/kotak-mahindra-bank.jpg", href: "https://www.kotak.com/" },
  { name: "IDFC First Bank", src: "/assets/partners/idfc-first-bank.jpg", href: "https://www.idfcfirstbank.com/" },
  { name: "IndusInd Bank", src: "/assets/partners/indusind-bank.jpg", href: "https://www.indusind.com/" },
  { name: "Deutsche Bank", src: "/assets/partners/deutsche-bank.png", href: "https://www.db.com/" },
  { name: "Saraswat Bank", src: "/assets/partners/saraswat-bank.png", href: "https://www.saraswatbank.com/" },
  { name: "AU Small Finance Bank", src: "/assets/partners/au-small-finance-bank.png", href: "https://www.au.bank.in/" },
  { name: "Bajaj Finserv", src: "/assets/partners/bajaj-finserv.png", href: "https://www.bajajfinserv.in/" },
  { name: "Aditya Birla Finance", src: "/assets/partners/aditya-birla-finance.jpg", href: "https://finance.adityabirlacapital.com/" },
  { name: "Ambit Finvest", src: "/assets/partners/ambit-finvest.webp", href: "https://finvest.ambit.co/about-us" },
  { name: "Jio Credit", src: "/assets/partners/jio-credit.jpg", href: "https://www.jiocredit.in/" }
];

export function AssociationLogoMarquee({ compact = false }: { compact?: boolean }) {
  const logos = [...associationLogos, ...associationLogos];

  return (
    <section className={`association-section${compact ? " compact-association" : ""}`} aria-labelledby={compact ? "about-association-title" : "association-title"}>
      <div className="section-head split association-head">
        <div>
          <span className="premium-eyebrow">Our associations</span>
          <h2 id={compact ? "about-association-title" : "association-title"}>Lender names clients recognise.</h2>
        </div>
        <p>Logo strip shown from the client-supplied association list. Final publication should follow approved relationship and logo-usage confirmation.</p>
      </div>
      <div className="association-marquee" aria-label="Association logo carousel">
        <div className="association-track">
          {logos.map((logo, index) => (
            <a href={logo.href} target="_blank" rel="noreferrer" className="association-logo-card" key={`${logo.name}-${index}`}>
              <Image className="association-logo-image" src={logo.src} alt={`${logo.name} logo`} width={152} height={64} />
              <span>{logo.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
