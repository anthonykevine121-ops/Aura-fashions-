import { Check, Instagram } from "lucide-react";

export default function SiteFooter() {
  return <footer className="bg-[#171614] pb-24 pt-10 text-white md:pb-10">
    <div className="section-wrap">
      <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
        <div><div className="serif text-3xl tracking-[.3em]">AURA</div><div className="mt-1 text-[9px] tracking-[.3em] text-[#d4af75]">HAUTE COUTURE</div><p className="mt-4 max-w-xs text-xs leading-6 text-white/55">Timeless pieces for a life beautifully lived. Thoughtful design, enduring quality, effortless elegance.</p><a href="/" className="mt-4 inline-flex items-center gap-2 text-xs text-[#e0bd7c]"><Instagram size={15} /> Follow our world</a></div>
        <div><h3 className="mb-4 text-xs font-semibold tracking-[.15em]">EXPLORE</h3><div className="space-y-3 text-xs text-white/60"><a className="block hover:text-white" href="/shop">Shop all</a><a className="block hover:text-white" href="/collections">Collections</a><a className="block hover:text-white" href="/new-arrivals">New arrivals</a><a className="block hover:text-white" href="/story">Our story</a></div></div>
        <div><h3 className="mb-4 text-xs font-semibold tracking-[.15em]">CLIENT CARE</h3><div className="space-y-3 text-xs text-white/60"><a className="block hover:text-white" href="/account">My account</a><a className="block hover:text-white" href="/shipping-returns">Shipping & returns</a><a className="block hover:text-white" href="/size-guide">Size guide</a><a className="block hover:text-white" href="/contact">Contact concierge</a></div></div>
        <div><h3 className="mb-4 text-xs font-semibold tracking-[.15em]">THE AURA PROMISE</h3><p className="text-xs leading-6 text-white/60">Personal service. Thoughtful craftsmanship. Pieces worth keeping.</p><div className="mt-4 flex items-center gap-2 text-[10px] text-white/70"><Check size={14} className="text-[#e0bd7c]" /> Secure checkout</div><div className="mt-2 flex items-center gap-2 text-[10px] text-white/70"><Check size={14} className="text-[#e0bd7c]" /> Complimentary shipping over $350</div></div>
      </div>
      <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 AURA Haute Couture. All rights reserved.</span><div className="flex gap-4"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/accessibility">Accessibility</a></div></div>
    </div>
  </footer>;
}
