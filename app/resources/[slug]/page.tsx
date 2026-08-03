import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  return (
    <main>
      <section className="page-hero"><span className="eyebrow">Resource</span><h1>{post.title}</h1><p>{post.excerpt}</p></section>
      <section className="page-content"><article className="section-inner page-panel"><p>{post.body}</p><p className="disclaimer">Educational content only. Loan terms depend on lender policy and applicant profile.</p></article></section>
    </main>
  );
}
