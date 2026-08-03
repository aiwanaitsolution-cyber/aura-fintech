import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalculatorSuite } from "@/components/CalculatorSuite";
import { calculators } from "@/lib/client-data";

export function generateStaticParams() {
  return calculators.map((calculator) => ({ slug: calculator.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const calculator = calculators.find((item) => item.slug === slug);
  if (!calculator) return {};
  return {
    title: calculator.title,
    description: `${calculator.title} for indicative Indian loan planning with synchronized sliders, outputs and disclosures.`,
    alternates: { canonical: `/calculators/${calculator.slug}` }
  };
}

export default async function CalculatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const calculator = calculators.find((item) => item.slug === slug);
  if (!calculator) notFound();
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Financial calculator</span>
        <h1>{calculator.title}</h1>
        <p>Estimate repayment, affordability or savings before starting a formal lender conversation.</p>
      </section>
      <section className="page-content">
        <div className="section-inner">
          <CalculatorSuite type={calculator.type} title={calculator.title} product={"product" in calculator ? calculator.product : undefined} />
        </div>
      </section>
    </main>
  );
}
