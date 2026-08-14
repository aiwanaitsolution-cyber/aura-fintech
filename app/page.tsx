import { unstable_noStore as noStore } from "next/cache";
import { FAQ } from "@/components/FAQ";
import { AssociationLogoMarquee } from "@/components/AssociationLogoMarquee";
import {
  AudienceTabs,
  BentoServiceGrid,
  BlogShowcase,
  DocumentChecklist,
  IndependenceDayBanner,
  EmiPreview,
  PremiumCTA,
  PremiumHero,
} from "@/components/PremiumSections";
import { faqs } from "@/lib/client-data";

export default function HomePage() {
  noStore();

  return (
    <main className="home-page">
      <PremiumHero />
      <IndependenceDayBanner />
      <BentoServiceGrid />
      <AudienceTabs />
      <EmiPreview />
      <DocumentChecklist />
      <BlogShowcase />
      <AssociationLogoMarquee />
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
