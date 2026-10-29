"use client";

import { BookOpenText, House, ShoppingBag, Store, LayoutGrid } from "lucide-react";

export default function BottomNav({ bagCount }: { bagCount: number }) {
  const items = [
    { label: "Home", href: "/", Icon: House },
    { label: "Shop", href: "/shop", Icon: Store },
    { label: "Our Story", href: "/story", Icon: BookOpenText },
    { label: "Bag", href: "/bag", Icon: ShoppingBag },
    { label: "Collections", href: "/collections", Icon: LayoutGrid }
  ];
  return <nav className="fixed bottom-0 left-0 right-0 z-30 flex border-t border-[#e8dfd4] bg-[#fffdfa]/95 px-1 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 backdrop-blur md:hidden">
    {items.map(({ label, href, Icon }) => <a key={label} href={href} className="relative flex flex-1 flex-col items-center gap-1 py-1 text-[9px] text-[#6f675e] transition hover:text-[#b8863b]">
      <Icon size={20} strokeWidth={1.5} />
      {label === "Bag" && bagCount > 0 && <span className="absolute right-[22%] top-[-2px] flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b8863b] px-1 text-[9px] text-white">{bagCount}</span>}
      <span>{label}</span>
    </a>)}
  </nav>;
}
