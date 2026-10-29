"use client";

import { useState } from "react";
import { Menu, Search, ShoppingBag, X, UserRound, ArrowRight } from "lucide-react";

type Props = { bagCount: number };

export default function Navbar({ bagCount }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const links = [
    ["Home", "/"], ["Shop", "/shop"], ["Collections", "/collections"],
    ["New Arrivals", "/new-arrivals"], ["Our Story", "/story"]
  ];

  return (
    <>
      <div className="bg-[#211e1a] px-4 py-2 text-center text-[10px] tracking-[.18em] text-white sm:text-[11px]">
        COMPLIMENTARY SHIPPING ON ORDERS OVER $350
      </div>
      <header className="sticky top-0 z-40 border-b border-[#e8dfd4] bg-[#fffdfa]/95 backdrop-blur">
        <div className="section-wrap flex h-[70px] items-center justify-between gap-3">
          <button className="icon-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={21} strokeWidth={1.5} /></button>
          <a href="/" className="min-w-0 text-center leading-none">
            <span className="serif block text-[25px] tracking-[.36em] sm:text-[29px]">AURA</span>
            <span className="mt-1 block text-[8px] tracking-[.28em] text-[#b8863b]">HAUTE COUTURE</span>
          </a>
          <div className="flex items-center gap-0.5">
            <button className="icon-button" aria-label={searchOpen ? "Close search" : "Open search"} aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)}><Search size={19} strokeWidth={1.5} /></button>
            <a href="/bag" className="icon-button" aria-label="Shopping bag"><ShoppingBag size={19} strokeWidth={1.5} />{bagCount > 0 && <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b8863b] px-1 text-[9px] text-white">{bagCount}</span>}</a>
            <a href="/account" className="icon-button hidden sm:inline-flex" aria-label="My account"><UserRound size={19} strokeWidth={1.5} /></a>
          </div>
        </div>
        <nav className="hidden items-center justify-center gap-8 border-t border-[#f0e9e0] py-3 text-[11px] tracking-[.08em] md:flex">
          {links.map(([label, href]) => <a key={label} className="transition hover:text-[#b8863b]" href={href}>{label}</a>)}
        </nav>
        {searchOpen && <form action="/search" method="get" role="search" className="section-wrap flex gap-2 pb-4">
          <label htmlFor="site-search" className="sr-only">Search products</label>
          <input id="site-search" name="q" type="search" required autoFocus placeholder="Search pieces, collections, and more..." className="min-w-0 flex-1 rounded-lg border border-[#e8dfd4] bg-white px-4 py-3 text-sm outline-none focus:border-[#b8863b]" />
          <button type="submit" aria-label="Submit search" className="gold-button px-4"><Search size={16} /><span className="hidden sm:inline">Search</span><ArrowRight size={14} /></button>
        </form>}
      </header>

      {menuOpen && <div className="fixed inset-0 z-50">
        <button className="absolute inset-0 bg-black/45" aria-label="Close menu overlay" onClick={() => setMenuOpen(false)} />
        <aside className="relative flex h-full w-[min(360px,88vw)] flex-col bg-[#171614] px-6 py-7 text-white shadow-2xl">
          <div className="mb-12 flex items-start justify-between">
            <div><div className="serif text-3xl tracking-[.3em]">AURA</div><div className="mt-1 text-[9px] tracking-[.3em] text-[#d4af75]">HAUTE COUTURE</div></div>
            <button className="icon-button text-white hover:bg-white/10" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
          </div>
          <div className="space-y-1">
            {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 text-sm transition hover:bg-white/10 hover:text-[#d4af75]">{label}</a>)}
            <a href="/bag" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 text-sm hover:bg-white/10">Shopping Bag ({bagCount})</a>
            <a href="/account" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 text-sm hover:bg-white/10">My Account</a>
          </div>
          <div className="mt-auto border-t border-white/15 pt-5 text-xs leading-6 text-white/60">Personal styling, considered details, and timeless pieces.<br />Client concierge: +1 (800) 492-AURA</div>
        </aside>
      </div>}
    </>
  );
}
