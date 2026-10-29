"use client";

import { ArrowLeft, Heart, ShoppingBag, Truck } from "lucide-react";
import { Product } from "@/data/products";
import { useStore } from "@/components/StoreProvider";

const descriptions: Record<string, string> = {
  Dresses: "A refined silhouette from the AURA dress collection, created for moments that call for effortless elegance.",
  Outerwear: "A considered layer from the AURA outerwear collection, designed to bring quiet sophistication to your wardrobe.",
  Handbags: "An everyday icon from the AURA handbag collection, balancing understated style with thoughtful design.",
  Clothing: "A timeless essential from the AURA collection, designed to bring ease and elegance to everyday dressing.",
  Knitwear: "A refined knitwear piece from AURA, made to be a lasting part of your considered wardrobe.",
  Shoes: "A considered finishing touch from the AURA shoe collection, bringing understated elegance to every step.",
  Accessories: "A thoughtful finishing touch from the AURA accessories collection, designed to complement your personal style."
};

export default function ProductDetail({ product }: { product: Product }) {
  const { wishlist, addToBag, toggleWishlist } = useStore();
  const isWishlisted = wishlist.includes(product.id);

  return <main className="section-wrap py-7 sm:py-12">
    <a href="/shop" className="mb-6 inline-flex items-center gap-2 text-xs text-[#81796f] transition hover:text-[#211e1a]">
      <ArrowLeft size={15} /> Back to the collection
    </a>
    <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-2">
      <div className="overflow-hidden rounded-2xl bg-[#eee5da]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} className="aspect-[4/5] h-full w-full object-cover" />
      </div>
      <section className="py-2 sm:py-8">
        {product.badge && <p className="mb-4 text-[9px] font-semibold tracking-[.2em] text-[#b8863b]">{product.badge}</p>}
        <p className="text-[10px] uppercase tracking-[.16em] text-[#81796f]">{product.category}</p>
        <h1 className="serif mt-2 text-3xl leading-tight sm:text-5xl">{product.name}</h1>
        <p className="mt-5 text-lg font-medium">${product.price.toLocaleString("en-US")}</p>
        <p className="mt-5 max-w-lg text-sm leading-7 text-[#71695f]">{descriptions[product.category] ?? "A considered piece from the AURA collection, designed to bring understated elegance to your wardrobe."}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => addToBag(product.id)} className="gold-button w-full sm:flex-1">
            <ShoppingBag size={16} /> Add to Bag
          </button>
          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            aria-pressed={isWishlisted}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d7c7b4] px-5 py-3 text-xs font-semibold transition hover:border-[#b8863b] hover:bg-[#f8f4ee]"
          >
            <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} className={isWishlisted ? "text-[#b8863b]" : ""} />
            {isWishlisted ? "Saved to Wishlist" : "Add to Wishlist"}
          </button>
        </div>

        <div className="mt-8 border-t border-[#e8dfd4] pt-5">
          <p className="flex items-center gap-2 text-xs font-medium"><Truck size={16} className="text-[#8b6a3c]" /> Complimentary shipping on orders over $350</p>
          <p className="mt-3 text-xs leading-5 text-[#81796f]">Need a hand? Our client care team is here to help with your order.</p>
          <a href="/contact" className="mt-2 inline-block text-xs text-[#8b6a3c] underline underline-offset-4">Contact the concierge</a>
        </div>
      </section>
    </div>
  </main>;
}
