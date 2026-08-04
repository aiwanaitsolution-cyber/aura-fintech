import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "Financial Resources",
  description: "Loan guides and financial education resources from Aura Fintec Services."
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="page-hero"><span className="eyebrow">Resources</span><h1>Borrowing guides for informed decisions.</h1><p>Original educational content for Indian borrowers and business owners.</p></section>
      <section className="page-content">
        <div className="section-inner grid-3">
          {blogPosts.map((post) => (
            <Link className="card resource-card" href={`/resources/${post.slug}`} key={post.slug}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="blue-action small-action card-action">Read guide <ArrowRight size={15} /></span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
