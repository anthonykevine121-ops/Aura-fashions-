import type { Metadata } from "next";
import SearchResults from "@/components/SearchResults";

export const metadata: Metadata = {
  title: "Search | AURA Haute Couture",
  description: "Search the AURA Haute Couture collection."
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const query = q.slice(0, 100);

  return <main className="mobile-safe-bottom min-h-[55vh]">
    <header className="border-b border-[#e8dfd4] bg-[#f8f4ee] py-12 sm:py-16">
      <div className="section-wrap">
        <p className="mb-3 text-[9px] font-semibold tracking-[.22em] text-[#b8863b]">THE AURA COLLECTION</p>
        <h1 className="serif max-w-3xl text-4xl leading-tight sm:text-6xl">Search</h1>
        {query && <p className="mt-4 text-sm text-[#71695f]">Results for “{query}”</p>}
      </div>
    </header>
    <section className="section-wrap py-9 sm:py-14"><SearchResults query={query} /></section>
  </main>;
}
