"use client";

import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useStore } from "@/components/StoreProvider";

export default function SiteChrome({ children }: Readonly<{ children: React.ReactNode }>) {
  const { bag, notice, ready } = useStore();

  return <>
    <Navbar bagCount={bag.length} />
    {children}
    <SiteFooter />
    <BottomNav bagCount={bag.length} />
    {notice && <div role="status" className="fixed bottom-24 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-[#211e1a] px-5 py-3 text-xs text-white shadow-xl md:bottom-6">{notice}</div>}
    {!ready && <span className="sr-only" aria-live="polite">Restoring your saved bag and wishlist</span>}
  </>;
}
