"use client";

import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/data/products";

type Props = {
  product: Product;
  isWishlisted: boolean;
  onWishlist: (id: number) => void;
  onAdd: (id: number) => void;
};

export default function ProductCard({ product, isWishlisted, onWishlist, onAdd }: Props) {
  return <article className="product-card group min-w-0">
    <div className="relative overflow-hidden rounded-xl bg-[#eee5da]">
      <a href={`/products/${product.id}`} aria-label={`View ${product.name}`} className="block aspect-[3/4] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} className="product-image h-full w-full object-cover" />
      </a>
      {product.badge && <span className="absolute left-2 top-2 rounded bg-[#fffdfa]/90 px-2 py-1 text-[8px] font-semibold tracking-[.12em]">{product.badge}</span>}
      <button onClick={() => onWishlist(product.id)} aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"} className={`absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 transition hover:bg-white ${isWishlisted ? "text-[#b8863b]" : "text-[#29251f]"}`}>
        <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={1.5} />
      </button>
      <div className="absolute bottom-2 left-2 right-2 grid grid-cols-2 gap-1.5 sm:translate-y-14 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
        <a href={`/products/${product.id}`} className="flex items-center justify-center rounded-lg bg-white/95 px-2 py-2.5 text-[9px] font-semibold transition hover:bg-[#f1e8dc] sm:text-[10px]">
          View detail
        </a>
        <button onClick={() => onAdd(product.id)} className="flex items-center justify-center gap-1 rounded-lg bg-white/95 px-2 py-2.5 text-[9px] font-semibold transition hover:bg-[#b8863b] hover:text-white sm:gap-2 sm:text-[10px]">
          <ShoppingBag size={14} /> Add to Bag
        </button>
      </div>
    </div>
    <div className="pt-3">
      <div className="text-[9px] uppercase tracking-[.12em] text-[#81796f]">{product.category}</div>
      <h3 className="mt-1 text-xs font-medium leading-5 sm:text-sm"><a href={`/products/${product.id}`} className="transition hover:text-[#8b6a3c]">{product.name}</a></h3>
      <div className="mt-1.5 flex items-center justify-between gap-2">
        <span className="text-sm font-semibold">${product.price.toLocaleString("en-US")}</span>
        <span className="flex items-center gap-0.5 text-[10px] text-[#b8863b]"><Star size={11} fill="currentColor" /> 4.9</span>
      </div>
    </div>
  </article>;
}
