import Image from "next/image";

const associationLogos = [
  { name: "Bank of Baroda", src: "https://logo.clearbit.com/bankofbaroda.bank.in", href: "https://bankofbaroda.bank.in/" },
  { name: "Canara Bank", src: "https://logo.clearbit.com/canarabank.bank.in", href: "https://www.canarabank.bank.in/" },
  { name: "State Bank of India", src: "https://logo.clearbit.com/sbi.co.in", href: "https://sbi.bank.in/" },
  { name: "HDFC Bank", src: "https://logo.clearbit.com/hdfcbank.com", href: "https://www.hdfcbank.com/" },
  { name: "ICICI Bank", src: "https://logo.clearbit.com/icicibank.com", href: "https://www.icicibank.com/" },
  { name: "Axis Bank", src: "https://logo.clearbit.com/axisbank.com", href: "https://www.axisbank.com/" },
  { name: "Kotak Mahindra Bank", src: "https://logo.clearbit.com/kotak.com", href: "https://www.kotak.com/" },
  { name: "IDFC First Bank", src: "https://logo.clearbit.com/idfcfirstbank.com", href: "https://www.idfcfirstbank.com/" },
  { name: "IndusInd Bank", src: "https://logo.clearbit.com/indusind.com", href: "https://www.indusind.com/" },
  { name: "Deutsche Bank", src: "https://logo.clearbit.com/db.com", href: "https://www.db.com/" },
  { name: "Saraswat Bank", src: "https://logo.clearbit.com/saraswatbank.com", href: "https://www.saraswatbank.com/" },
  { name: "AU Small Finance Bank", src: "https://logo.clearbit.com/au.bank.in", href: "https://www.au.bank.in/" },
  { name: "Bajaj Finserv", src: "https://logo.clearbit.com/bajajfinserv.in", href: "https://www.bajajfinserv.in/" },
  { name: "Aditya Birla Finance", src: "https://logo.clearbit.com/adityabirlacapital.com", href: "https://finance.adityabirlacapital.com/" },
  { name: "Ambit Finvest", src: "https://logo.clearbit.com/ambit.co", href: "https://finvest.ambit.co/about-us" },
  { name: "Jio Credit", src: "https://logo.clearbit.com/jiocredit.in", href: "https://www.jiocredit.in/" }
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
