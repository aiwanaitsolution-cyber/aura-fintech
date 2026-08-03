import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">404</span>
        <h1>This page is not available</h1>
        <p>The page may have moved. Use the sitemap or start a fresh loan inquiry.</p>
        <Link className="primary-button" href="/sitemap">Open Sitemap</Link>
      </section>
    </main>
  );
}
