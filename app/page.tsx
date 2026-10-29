"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, ShieldCheck, Truck, RotateCcw, Sparkles } from "lucide-react";
import HeroImageSlider from "@/components/HeroImageSlider";
import ProductCard from "@/components/ProductCard";
import { useStore } from "@/components/StoreProvider";
import { collections, products } from "@/data/products";

export default function HomePage() {
  const { wishlist, addToBag, toggleWishlist } = useStore();
  const [newsletterJoined, setNewsletterJoined] = useState(false);

  return <main id="home" className="mobile-safe-bottom">
    <section className="section-wrap pt-4 sm:pt-6">
      <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-[#d8c4ad] sm:min-h-[590px] lg:min-h-[650px]">
        <HeroImageSlider slides={[
          { src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2000&q=90", alt: "Model wearing a refined neutral luxury outfit" },
          { src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=90", alt: "Timeless fashion editorial in warm natural light" },
          { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=90", alt: "A considered edit of contemporary fashion" },
          { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=90", alt: "Elegant wardrobe pieces in soft neutral tones" }
        ]} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#eee0ce]/95 via-[#eee0ce]/75 to-transparent sm:from-[#eee0ce]/90 sm:via-[#eee0ce]/45 sm:to-transparent" />
        <div className="relative z-10 flex min-h-[520px] max-w-[570px] flex-col justify-center px-6 py-12 sm:min-h-[590px] sm:px-12 lg:min-h-[650px] lg:px-16">
          <div className="mb-5 flex items-center gap-2 text-[9px] font-semibold tracking-[.22em] text-[#4f4437] sm:text-[11px]"><span className="h-px w-7 bg-[#b8863b]" /> SPRING / SUMMER 2026</div>
          <h1 className="serif max-w-[440px] text-5xl leading-[1.04] tracking-[-.035em] sm:text-6xl lg:text-7xl">Luminous<br />Simplicity</h1>
          <p className="mt-5 max-w-[330px] text-sm leading-6 text-[#453d34] sm:text-base">Fluid silk silhouettes, natural linen tailoring, and golden accents crafted for modern summer sophistication.</p>
          <div className="mt-7"><a href="#shop" className="gold-button">Shop Collection <ArrowRight size={16} /></a></div>
        </div>
        <div className="absolute bottom-5 right-5 hidden rounded-full border border-white/70 bg-white/30 px-4 py-2 text-[9px] tracking-[.18em] text-[#453d34] backdrop-blur sm:block">THE ART OF LESS, DONE BEAUTIFULLY</div>
      </div>
    </section>

    <section className="section-wrap grid grid-cols-2 gap-3 py-7 sm:grid-cols-4 sm:gap-5 sm:py-9">
      {[
        { Icon: Truck, title: "Complimentary Shipping", sub: "On orders over $350" },
        { Icon: ShieldCheck, title: "Secure Payments", sub: "Protected checkout" },
        { Icon: RotateCcw, title: "Easy Returns", sub: "Within 30 days" },
        { Icon: Sparkles, title: "Considered Quality", sub: "Made to be cherished" }
      ].map(({ Icon, title, sub }) => <div key={title} className="flex items-center gap-3 rounded-lg bg-[#faf6f0] p-3 sm:flex-col sm:bg-transparent sm:p-2 sm:text-center">
        <Icon size={21} strokeWidth={1.4} className="shrink-0 text-[#8b6a3c]" />
        <div><h3 className="text-[10px] font-semibold sm:text-xs">{title}</h3><p className="mt-1 text-[9px] text-[#81796f] sm:text-[10px]">{sub}</p></div>
      </div>)}
    </section>

    <section id="collections" className="section-wrap py-7 sm:py-12">
      <div className="mb-5 flex items-end justify-between sm:mb-7">
        <div><p className="mb-2 text-[9px] font-semibold tracking-[.22em] text-[#b8863b]">CURATED FOR YOU</p><h2 className="serif text-3xl sm:text-4xl">Signature Capsules</h2></div>
        <a href="/shop" className="mb-1 flex items-center gap-1 text-[11px] text-[#8b6a3c] hover:underline">View all <ArrowUpRight size={14} /></a>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:gap-5">
        {collections.map(collection => <a href="/collections" key={collection.title} className="group">
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-[#eee5da]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={collection.image} alt={collection.title} className="product-image h-full w-full object-cover" />
          </div>
          <div className="flex items-start justify-between gap-1 pt-3"><div><h3 className="serif text-base sm:text-xl">{collection.title}</h3><p className="mt-1 hidden text-[10px] text-[#81796f] sm:block">{collection.subtitle}</p></div><ArrowUpRight size={15} className="mt-1 text-[#b8863b] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
        </a>)}
      </div>
    </section>

    <section id="shop" className="bg-[#f8f4ee] py-10 sm:py-16">
      <div className="section-wrap">
        <div className="mb-6 flex items-end justify-between sm:mb-8">
          <div><p className="mb-2 text-[9px] font-semibold tracking-[.22em] text-[#b8863b]">THE AURA EDIT</p><h2 className="serif text-3xl sm:text-4xl">The Most Loved</h2><p className="mt-2 text-xs text-[#81796f] sm:text-sm">Thoughtful pieces. Effortless elegance.</p></div>
          <a href="/shop" className="mb-1 hidden items-center gap-1 text-xs text-[#8b6a3c] sm:flex">Explore all <ArrowRight size={14} /></a>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-4 sm:gap-x-5 sm:gap-y-10">
          {products.slice(0, 4).map(product => <ProductCard key={product.id} product={product} isWishlisted={wishlist.includes(product.id)} onWishlist={toggleWishlist} onAdd={addToBag} />)}
        </div>
        <div className="mt-8 text-center sm:mt-10"><a href="/shop" className="inline-flex items-center gap-2 border-b border-[#b8863b] pb-1 text-xs font-semibold tracking-[.06em]">Discover the collection <ArrowRight size={14} /></a></div>
      </div>
    </section>

    <section id="story" className="section-wrap grid items-center gap-7 py-12 sm:grid-cols-2 sm:gap-12 sm:py-20">
      <div className="relative">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#e8d8c4]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85" alt="Timeless editorial fashion" className="h-full w-full object-cover" />
        </div>
        <div className="absolute -bottom-3 -right-2 rounded-xl bg-[#fffdfa] px-4 py-3 shadow-lg sm:-right-4 sm:px-6 sm:py-4"><p className="serif text-xl">Less, but better.</p><p className="mt-1 text-[9px] tracking-[.12em] text-[#81796f]">THE AURA PHILOSOPHY</p></div>
      </div>
      <div className="py-4 sm:py-0">
        <p className="mb-3 text-[9px] font-semibold tracking-[.22em] text-[#b8863b]">OUR POINT OF VIEW</p>
        <h2 className="serif max-w-lg text-4xl leading-tight sm:text-5xl">Style that speaks softly. And stays.</h2>
        <p className="mt-5 text-sm leading-7 text-[#71695f]">AURA is a study in considered luxury. We bring together beautiful fabrics, thoughtful details, and timeless silhouettes to create pieces that feel as good as they look.</p>
        <p className="mt-3 text-sm leading-7 text-[#71695f]">Designed for the way you live now, and made to remain part of your story for years to come.</p>
        <a href="/story" className="gold-button mt-7">Discover our story <ArrowRight size={15} /></a>
      </div>
    </section>

    <section id="new-arrivals" className="relative overflow-hidden bg-[#211e1a] text-white">
      <div className="absolute inset-0 opacity-35">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="section-wrap relative z-10 flex min-h-[300px] flex-col items-start justify-center py-12 sm:min-h-[370px]">
        <p className="mb-3 text-[9px] font-semibold tracking-[.24em] text-[#e0bd7c]">A NEW SEASON, CONSIDERED</p>
        <h2 className="serif max-w-xl text-4xl leading-tight sm:text-6xl">A little more luxury<br />in the everyday.</h2>
        <p className="mt-4 max-w-md text-sm leading-6 text-white/75">Discover the new-season edit: natural textures, warm neutrals, and forever pieces.</p>
        <a href="/new-arrivals" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#e0bd7c] px-5 py-3 text-xs font-semibold text-[#211e1a] transition hover:bg-white">Explore new arrivals <ArrowRight size={15} /></a>
      </div>
    </section>

    <section className="section-wrap py-12 sm:py-16">
      <div className="text-center"><p className="mb-2 text-[9px] font-semibold tracking-[.22em] text-[#b8863b]">KIND WORDS</p><h2 className="serif text-3xl sm:text-4xl">AURA, through your eyes</h2><a href="/testimonials" className="mt-3 inline-flex items-center gap-1 text-xs text-[#8b6a3c] hover:underline">Read more kind words <ArrowRight size={13} /></a></div>
      <div className="mt-7 grid gap-4 sm:mt-9 sm:grid-cols-3">
        {[
          ["“Beautifully made and even more beautiful in person. The quality is exceptional.”", "Amelia R.", "London, UK"],
          ["“Every detail feels considered. This is the kind of piece I know I’ll keep forever.”", "Sofia M.", "New York, USA"],
          ["“Elegant, effortless, and the service was wonderful from start to finish.”", "Nneka O.", "Lagos, Nigeria"]
        ].map(([quote, name, place]) => <figure key={name} className="rounded-xl border border-[#eee5da] bg-white p-5 sm:p-6"><div className="mb-3 flex gap-1 text-[#b8863b]">★★★★★</div><blockquote className="serif text-lg leading-7">{quote}</blockquote><figcaption className="mt-5 border-t border-[#eee5da] pt-4"><p className="text-xs font-semibold">{name}</p><p className="mt-1 text-[10px] text-[#81796f]">{place}</p></figcaption></figure>)}
      </div>
    </section>

    <section className="bg-[#efe5d8] py-10 sm:py-14">
      <div className="section-wrap grid items-center gap-6 sm:grid-cols-2">
        <div><p className="mb-2 text-[9px] font-semibold tracking-[.22em] text-[#946a2e]">A NOTE FROM AURA</p><h2 className="serif text-3xl sm:text-4xl">A considered inbox.</h2><p className="mt-2 max-w-md text-sm leading-6 text-[#71695f]">Be first to discover new collections, private offers, and notes on the art of dressing well.</p><a href="/newsletter" className="mt-3 inline-flex items-center gap-1 text-xs text-[#8b6a3c] hover:underline">About the AURA letter <ArrowRight size={13} /></a></div>
        <form onSubmit={e => { e.preventDefault(); setNewsletterJoined(true); }} className="flex gap-2">
          <label className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-[#d7c7b4] bg-white px-3"><Mail size={17} className="shrink-0 text-[#81796f]" /><input type="email" required placeholder="Your email address" className="w-full min-w-0 bg-transparent py-3 text-xs outline-none" /></label>
          <button className="gold-button shrink-0 px-4">Join <ArrowRight size={14} /></button>
        </form>
        {newsletterJoined && <p role="status" className="text-xs text-[#6f675e]">Thank you for joining the AURA list.</p>}
      </div>
    </section>
  </main>;
}
