"use client";

import ProductCard from "@/components/ProductCard";
import { useStore } from "@/components/StoreProvider";
import { products } from "@/data/products";

type Props = { query: string };

export default function SearchResults({ query }: Props) {
  const { wishlist, addToBag, toggleWishlist } = useStore();
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matches = normalizedQuery
    ? products.filter(product => [product.name, product.category, product.badge]
      .some(value => value?.toLocaleLowerCase().includes(normalizedQuery)))
    : [];

  if (!normalizedQuery) return <div className="rounded-xl border border-dashed border-[#d7c7b4] bg-white px-5 py-14 text-center">
    <p className="serif text-2xl">What are you looking for?</p>
    <p className="mt-2 text-sm text-[#81796f]">Enter a product name or category in the search bar.</p>
    <a href="/shop" className="gold-button mt-5">Browse the collection</a>
  </div>;

  if (!matches.length) return <div className="rounded-xl border border-dashed border-[#d7c7b4] bg-white px-5 py-14 text-center">
    <p className="serif text-2xl">No pieces found for “{query}”.</p>
    <p className="mt-2 text-sm text-[#81796f]">Try another product name or category, or explore the full collection.</p>
    <a href="/shop" className="gold-button mt-5">Browse all pieces</a>
  </div>;

  return <>
    <p className="mb-5 text-xs text-[#81796f]">{matches.length} {matches.length === 1 ? "piece" : "pieces"} found</p>
    <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">
      {matches.map(product => <ProductCard key={product.id} product={product} isWishlisted={wishlist.includes(product.id)} onWishlist={toggleWishlist} onAdd={addToBag} />)}
    </div>
  </>;
}
