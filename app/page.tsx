import { FAQ } from "@/components/FAQ";
import {
  AudienceTabs,
  BentoServiceGrid,
  BlogShowcase,
  DocumentChecklist,
  EmiPreview,
  PremiumCTA,
  PremiumHero,
} from "@/components/PremiumSections";
import { faqs } from "@/lib/client-data";

export default function HomePage() {
  return (
    <main>
      <PremiumHero />
      <BentoServiceGrid />
      <AudienceTabs />
      <EmiPreview />
      <DocumentChecklist />
      <BlogShowcase />
      <section className="premium-section faq-premium">
        <div className="section-head split">
          <div>
            <span className="premium-eyebrow">FAQ</span>
            <h2>Answers that reduce uncertainty before applying.</h2>
          </div>
        </div>
        <FAQ items={faqs} />
      </section>
      <PremiumCTA />
    </main>
  );
}
