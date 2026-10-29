"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type HeroSlide = {
  src: string;
  alt: string;
};

type Props = {
  slides: HeroSlide[];
  darkControls?: boolean;
};

export default function HeroImageSlider({ slides, darkControls = false }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveSlide(current => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  function showSlide(index: number) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  const controlStyle = darkControls
    ? "border-white/50 bg-black/20 text-white hover:bg-black/40"
    : "border-[#81796f]/40 bg-white/45 text-[#453d34] hover:bg-white/75";
  const dotStyle = darkControls ? "bg-white/50" : "bg-[#81796f]/60";

  return <div
    role="region"
    aria-label="Hero image slides"
    aria-roledescription="carousel"
    className="absolute inset-0 overflow-hidden"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onFocusCapture={() => setPaused(true)}
    onBlurCapture={event => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
    }}
  >
    <div
      className="flex h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
      style={{ transform: `translateX(-${activeSlide * 100}%)` }}
    >
      {slides.map((slide, index) => <div key={slide.src} className="relative h-full min-w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.src}
          alt={slide.alt}
          aria-hidden={index !== activeSlide}
          className="h-full w-full object-cover object-center"
        />
      </div>)}
    </div>
    {slides.length > 1 && <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 sm:left-8">
      <button
        type="button"
        aria-label="Previous hero image"
        onClick={() => showSlide(activeSlide - 1)}
        className={`flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur transition ${controlStyle}`}
      >
        <ChevronLeft size={16} />
      </button>
      {slides.map((slide, index) => <button
        key={slide.src}
        type="button"
        aria-label={`Show hero image ${index + 1}`}
        aria-current={activeSlide === index ? "true" : undefined}
        onClick={() => showSlide(index)}
        className={`h-1.5 rounded-full transition-all ${activeSlide === index ? "w-6 bg-[#b8863b]" : `w-1.5 ${dotStyle}`}`}
      />)}
      <button
        type="button"
        aria-label="Next hero image"
        onClick={() => showSlide(activeSlide + 1)}
        className={`flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur transition ${controlStyle}`}
      >
        <ChevronRight size={16} />
      </button>
    </div>}
  </div>;
}
