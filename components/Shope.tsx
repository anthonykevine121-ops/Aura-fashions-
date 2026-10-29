import SectionPage from "@/components/SectionPage";
import HeroImageSlider from "@/components/HeroImageSlider";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Shope() {
  return <>
    <section className="section-wrap pt-4 sm:pt-6">
      <div className="relative min-h-[400px] overflow-hidden rounded-2xl bg-[#d8c4ad] sm:min-h-[500px] lg:min-h-[560px]">
        <HeroImageSlider darkControls slides={[
          { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=90", alt: "A fashion editorial celebrating timeless personal style" },
          { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2000&q=90", alt: "Contemporary couture styled with understated elegance" },
          { src: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=2000&q=90", alt: "A refined seasonal fashion collection" },
          { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=90", alt: "Elegant wardrobe pieces in soft neutral tones" }
        ]} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211e1a]/75 via-[#211e1a]/40 to-transparent" />
        <div className="relative z-10 flex min-h-[400px] max-w-[620px] flex-col justify-center px-6 py-12 text-white sm:min-h-[500px] sm:px-12 lg:min-h-[560px] lg:px-16">
          <p className="mb-5 flex items-center gap-2 text-[9px] font-semibold tracking-[.24em] text-[#e0bd7c] sm:text-[11px]">
            <span className="h-px w-7 bg-[#e0bd7c]" /> THE AURA COLLECTION
          </p>
          <h1 className="serif max-w-[500px] text-5xl leading-[1.04] tracking-[-.035em] sm:text-6xl lg:text-7xl">
            A wardrobe<br />to return to.
          </h1>
          <p className="mt-5 max-w-[360px] text-sm leading-6 text-white/85 sm:text-base">
            Considered silhouettes, beautiful textures, and lasting essentials for wherever the day takes you.
          </p>
          <a href="#shop-products" className="gold-button mt-7 w-fit">
            Explore the collection <ArrowRight size={16} />
          </a>
          <a href="#shop-products" aria-label="Scroll to the shop collection" className="mt-8 flex w-fit items-center gap-2 text-[10px] tracking-[.14em] text-white/75 hover:text-white">
            DISCOVER YOUR NEXT FAVORITE <ArrowDown size={14} />
          </a>
        </div>
        <div className="absolute bottom-5 right-5 hidden rounded-full border border-white/50 bg-black/15 px-4 py-2 text-[9px] tracking-[.18em] text-white backdrop-blur sm:block">
          TIMELESS BY DESIGN
        </div>
      </div>
    </section>
    <div id="shop-products"><SectionPage section="shop" /></div>
  </>;
}
