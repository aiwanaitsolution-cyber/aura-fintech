import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, BarChart3, Calculator, FileCheck2, ShieldCheck } from "lucide-react";
import { blogPosts } from "@/lib/client-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const study = getStudy(slug);
  return (
    <main>
      <section className="page-hero resource-study-hero">
        <div>
          <span className="eyebrow">Financial insight</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <Link className="blue-action" href="/apply-now">Discuss this with Aura <ArrowRight size={17} /></Link>
        </div>
        <div className="study-visual">
          <BarChart3 size={44} />
          <strong>{study.metric}</strong>
          <span>{study.metricLabel}</span>
        </div>
      </section>
      <section className="page-content resource-study-page">
        <article className="section-inner study-layout">
          <div className="study-main">
            <div className="study-summary">
              {study.summary.map((item) => <p key={item}><BadgeCheck size={18} /> {item}</p>)}
            </div>
            <div className="study-diagram">
              {study.flow.map((item) => (
                <div key={item}>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
            <div className="study-cards">
              {study.cards.map(({ title, text, Icon }) => (
                <section key={title}>
                  <Icon size={24} />
                  <h2>{title}</h2>
                  <p>{text}</p>
                </section>
              ))}
            </div>
          </div>
          <aside className="study-sidebar">
            <h2>Quick action checklist</h2>
            {study.checklist.map((item) => <p key={item}><FileCheck2 size={16} /> {item}</p>)}
            <Link className="blue-action small-action" href="/calculators/emi-calculator"><Calculator size={15} /> Run EMI scenario</Link>
          </aside>
          <p className="disclaimer study-disclaimer">Educational content only. Loan terms depend on lender policy, applicant profile, documentation and credit assessment.</p>
        </article>
      </section>
    </main>
  );
}

function getStudy(slug: string) {
  const studies = {
    "how-to-prepare-for-a-business-loan": {
      metric: "5-step",
      metricLabel: "lender-ready file",
      summary: ["Business loan decisions become easier when banking, GST/ITR and loan purpose tell the same story.", "The goal is not more paperwork; it is a cleaner case for assessment."],
      flow: ["Purpose", "KYC", "Banking", "Financials", "Lender fit"],
      checklist: ["Latest bank statements", "GST/ITR and financials", "Clear loan purpose", "Existing loan obligations"],
      cards: [
        { title: "Cash-flow picture", text: "Show sales, deposits, expenses and repayment comfort without forcing the lender to guess.", Icon: BarChart3 },
        { title: "Document gaps", text: "Identify missing KYC, entity papers, GST returns or financial statements before application.", Icon: FileCheck2 },
        { title: "Responsible next step", text: "Move ahead only after understanding likely tenure, charges and lender conditions.", Icon: ShieldCheck }
      ]
    },
    "emi-vs-tenure-tradeoff": {
      metric: "EMI",
      metricLabel: "comfort vs total cost",
      summary: ["A lower EMI can improve monthly comfort but may increase total interest.", "The best tenure is the one that keeps repayment comfortable without hiding long-term cost."],
      flow: ["Amount", "Rate", "Tenure", "EMI", "Total interest"],
      checklist: ["Compare 3 tenure options", "Check total interest", "Keep emergency buffer", "Avoid EMI stress"],
      cards: [
        { title: "Short tenure", text: "Higher EMI, faster closure and usually lower total interest.", Icon: BarChart3 },
        { title: "Long tenure", text: "Lower EMI, better monthly comfort and usually higher total interest.", Icon: Calculator },
        { title: "Balanced choice", text: "Pick a repayment level that survives slower income months.", Icon: ShieldCheck }
      ]
    },
    "balance-transfer-break-even": {
      metric: "Break-even",
      metricLabel: "savings after charges",
      summary: ["A lower rate is useful only when savings beat transfer costs.", "Balance transfer needs a break-even view, not just an interest-rate comparison."],
      flow: ["Outstanding", "New rate", "Charges", "Monthly saving", "Break-even"],
      checklist: ["Current loan statement", "Foreclosure charges", "Processing/legal costs", "Remaining tenure"],
      cards: [
        { title: "Rate saving", text: "Estimate monthly EMI relief or total interest reduction.", Icon: BarChart3 },
        { title: "Switching cost", text: "Include processing, legal, valuation and foreclosure charges.", Icon: FileCheck2 },
        { title: "Top-up review", text: "Check whether extra funds improve or weaken the decision.", Icon: ShieldCheck }
      ]
    }
  };
  return studies[slug as keyof typeof studies] ?? studies["how-to-prepare-for-a-business-loan"];
}
