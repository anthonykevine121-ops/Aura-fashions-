"use client";

import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star, Trash2 } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useStore } from "@/components/StoreProvider";
import { collections, products } from "@/data/products";

const testimonials = [
  ["Beautifully made and even more beautiful in person. The quality is exceptional.", "Amelia R.", "London, UK"],
  ["Every detail feels considered. This is the kind of piece I know I’ll keep forever.", "Sofia M.", "New York, USA"],
  ["Elegant, effortless, and the service was wonderful from start to finish.", "Nneka O.", "Lagos, Nigeria"]
];

const pageDetails: Record<string, { eyebrow: string; title: string; description: string }> = {
  shop: { eyebrow: "THE AURA EDIT", title: "Shop all", description: "Thoughtful pieces. Effortless elegance." },
  collections: { eyebrow: "CURATED FOR YOU", title: "Signature capsules", description: "Discover a considered wardrobe for every part of your day." },
  women: { eyebrow: "THE WOMEN'S EDIT", title: "For her, in every moment.", description: "Considered silhouettes and lasting essentials for the modern woman." },
  men: { eyebrow: "THE MEN'S EDIT", title: "Quiet confidence.", description: "Refined layers and everyday essentials, considered down to the detail." },
  accessories: { eyebrow: "THE FINISHING TOUCH", title: "Accessories", description: "Thoughtful finishing touches, designed to go wherever you do." },
  "new-arrivals": { eyebrow: "A NEW SEASON, CONSIDERED", title: "New arrivals", description: "Natural textures, warm neutrals, and forever pieces." },
  story: { eyebrow: "OUR POINT OF VIEW", title: "Style that speaks softly. And stays.", description: "A study in considered luxury, made to remain part of your story." },
  wishlist: { eyebrow: "YOUR AURA EDIT", title: "Wishlist", description: "The pieces you love, gathered in one place." },
  bag: { eyebrow: "YOUR SELECTION", title: "Shopping bag", description: "A closer look at the pieces you have chosen." },
  account: { eyebrow: "WELCOME TO AURA", title: "Your account", description: "A more personal way to experience considered luxury." },
  "shipping-returns": { eyebrow: "CLIENT CARE", title: "Shipping & returns", description: "Everything you need to know about receiving and returning your order." },
  "size-guide": { eyebrow: "CLIENT CARE", title: "Size guide", description: "Find the considered fit for your AURA piece." },
  contact: { eyebrow: "HERE FOR YOU", title: "Contact the concierge", description: "Our team is pleased to help with styling, orders, and anything in between." },
  privacy: { eyebrow: "THE DETAILS", title: "Privacy", description: "How we respect and protect your personal information." },
  terms: { eyebrow: "THE DETAILS", title: "Terms of service", description: "The terms that apply when you explore and shop with AURA." },
  accessibility: { eyebrow: "THE DETAILS", title: "Accessibility", description: "We want every visitor to have a welcoming experience." },
  testimonials: { eyebrow: "KIND WORDS", title: "AURA, through your eyes", description: "A few notes from the people who wear and love AURA." },
  newsletter: { eyebrow: "A NOTE FROM AURA", title: "A considered inbox", description: "Notes on the art of dressing well, new collections, and private offers." }
};

function PageIntro({ section }: { section: string }) {
  const details = pageDetails[section];
  return <header className="border-b border-[#e8dfd4] bg-[#f8f4ee] py-12 sm:py-16">
    <div className="section-wrap">
      <p className="mb-3 text-[9px] font-semibold tracking-[.22em] text-[#b8863b]">{details.eyebrow}</p>
      <h1 className="serif max-w-3xl text-4xl leading-tight sm:text-6xl">{details.title}</h1>
      <p className="mt-4 max-w-xl text-sm leading-6 text-[#71695f] sm:text-base">{details.description}</p>
    </div>
  </header>;
}

function ProductGrid({ items }: { items: typeof products }) {
  const { wishlist, addToBag, toggleWishlist } = useStore();
  if (!items.length) return <div className="rounded-xl border border-dashed border-[#d7c7b4] bg-white px-5 py-14 text-center">
    <p className="serif text-2xl">Nothing here just yet.</p>
    <p className="mt-2 text-sm text-[#81796f]">Explore the collection and find something to cherish.</p>
    <a className="gold-button mt-5" href="/shop">Explore the collection <ArrowRight size={15} /></a>
  </div>;

  return <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">
    {items.map(product => <ProductCard key={product.id} product={product} isWishlisted={wishlist.includes(product.id)} onWishlist={toggleWishlist} onAdd={addToBag} />)}
  </div>;
}

function ShopCatalog() {
  const [page, setPage] = useState(1);
  const productsPerPage = 6;
  const pageCount = Math.ceil(products.length / productsPerPage);
  const pageItems = products.slice((page - 1) * productsPerPage, page * productsPerPage);

  return <div>
    <div className="mb-5 flex items-center justify-between text-xs text-[#81796f]">
      <span>Showing {(page - 1) * productsPerPage + 1}–{Math.min(page * productsPerPage, products.length)} of {products.length} pieces</span>
      <span>Page {page} of {pageCount}</span>
    </div>
    <ProductGrid items={pageItems} />
    <nav aria-label="Shop product pages" className="mt-9 flex items-center justify-center gap-2">
      <button type="button" onClick={() => setPage(current => Math.max(1, current - 1))} disabled={page === 1} aria-label="Previous page" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8dfd4] text-[#6f675e] transition hover:border-[#b8863b] disabled:cursor-not-allowed disabled:opacity-40">
        <ArrowLeft size={16} />
      </button>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map(pageNumber => <button key={pageNumber} type="button" onClick={() => setPage(pageNumber)} aria-label={`Page ${pageNumber}`} aria-current={page === pageNumber ? "page" : undefined} className={`h-10 w-10 rounded-full text-xs transition ${page === pageNumber ? "bg-[#211e1a] text-white" : "border border-[#e8dfd4] text-[#6f675e] hover:border-[#b8863b]"}`}>{pageNumber}</button>)}
      <button type="button" onClick={() => setPage(current => Math.min(pageCount, current + 1))} disabled={page === pageCount} aria-label="Next page" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8dfd4] text-[#6f675e] transition hover:border-[#b8863b] disabled:cursor-not-allowed disabled:opacity-40">
        <ArrowRight size={16} />
      </button>
    </nav>
  </div>;
}

function CollectionGrid() {
  return <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
    {collections.map(collection => {
      const href = collection.title === "Women" ? "/women" : collection.title === "Men" ? "/men" : "/accessories";
      return <article key={collection.title} className="group">
      <a href={href} className="block aspect-[4/5] overflow-hidden rounded-xl bg-[#eee5da]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={collection.image} alt={collection.title} className="product-image h-full w-full object-cover" />
      </a>
      <div className="flex items-start justify-between pt-3"><div><h2 className="serif text-2xl">{collection.title}</h2><p className="mt-1 text-xs text-[#81796f]">{collection.subtitle}</p></div><a href={href} aria-label={`Shop ${collection.title}`} className="mt-1 text-[#b8863b]"><ArrowUpRight size={18} /></a></div>
    </article>;
    })}
  </div>;
}

function StoryContent() {
  const [rating, setRating] = useState(0);
  const [requestMessage, setRequestMessage] = useState("");

  return <div className="space-y-14 sm:space-y-20">
    <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-14">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#e8d8c4]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85" alt="Timeless editorial fashion" className="h-full w-full object-cover" />
      </div>
      <div className="space-y-5 text-sm leading-7 text-[#71695f]">
        <h2 className="serif text-3xl leading-tight text-[#211e1a] sm:text-4xl">Less, but better.</h2>
        <p>AURA is a study in considered luxury. We bring together beautiful fabrics, thoughtful details, and timeless silhouettes to create pieces that feel as good as they look.</p>
        <p>Designed for the way you live now, and made to remain part of your story for years to come. Our point of view is simple: buy less, choose well, and make it last.</p>
        <p>From the first sketch to the final stitch, every detail has a purpose. The result is a wardrobe of enduring essentials that feel quietly, unmistakably yours.</p>
        <a href="/shop" className="gold-button">Discover the collection <ArrowRight size={15} /></a>
      </div>
    </div>

    <section aria-labelledby="story-rating-title" className="rounded-2xl bg-[#f8f4ee] px-5 py-8 text-center sm:px-8 sm:py-10">
      <p className="mb-2 text-[9px] font-semibold tracking-[.22em] text-[#b8863b]">YOUR THOUGHTS</p>
      <h2 id="story-rating-title" className="serif text-3xl">How was your AURA experience?</h2>
      <p className="mt-2 text-sm text-[#81796f]">Choose a rating from one to five stars.</p>
      <div role="group" aria-label="Rate your AURA experience" className="mt-5 flex justify-center gap-2">
        {[1, 2, 3, 4, 5].map(value => <button
          key={value}
          type="button"
          aria-label={`${value} ${value === 1 ? "star" : "stars"}`}
          aria-pressed={rating === value}
          onClick={() => setRating(value)}
          className="rounded-md p-1 text-[#b8863b] transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#946a2e]"
        >
          <Star size={28} fill={rating >= value ? "currentColor" : "none"} strokeWidth={1.5} />
        </button>)}
      </div>
      <p aria-live="polite" className="mt-3 min-h-5 text-xs text-[#81796f]">
        {rating ? `You selected ${rating} ${rating === 1 ? "star" : "stars"}. Ratings are not submitted or saved yet.` : "Ratings are not submitted or saved yet."}
      </p>
    </section>

    <section aria-labelledby="story-testimonials-title">
      <div className="text-center">
        <p className="mb-2 text-[9px] font-semibold tracking-[.22em] text-[#b8863b]">KIND WORDS</p>
        <h2 id="story-testimonials-title" className="serif text-3xl sm:text-4xl">AURA, through your eyes</h2>
      </div>
      <div className="mt-7 grid gap-4 sm:mt-9 sm:grid-cols-3">
        {testimonials.map(([quote, name, place]) => <figure key={name} className="rounded-xl border border-[#eee5da] bg-white p-5 sm:p-6">
          <div aria-label="5 out of 5 stars" className="mb-3 flex gap-1 text-[#b8863b]">★★★★★</div>
          <blockquote className="serif text-lg leading-7">“{quote}”</blockquote>
          <figcaption className="mt-5 border-t border-[#eee5da] pt-4"><p className="text-xs font-semibold">{name}</p><p className="mt-1 text-[10px] text-[#81796f]">{place}</p></figcaption>
        </figure>)}
      </div>
    </section>

    <section aria-labelledby="story-request-title" className="mx-auto max-w-2xl rounded-2xl border border-[#e8dfd4] bg-white p-6 sm:p-9">
      <p className="mb-2 text-[9px] font-semibold tracking-[.22em] text-[#b8863b]">WE’RE HERE FOR YOU</p>
      <h2 id="story-request-title" className="serif text-3xl">Send us a request</h2>
      <p className="mt-2 text-sm leading-6 text-[#81796f]">Share a question or note with our team.</p>
      <form onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setRequestMessage("Your request form is ready, but message delivery is not connected yet. Your details have not been sent.");
      }} className="mt-6 space-y-4">
        <label className="block text-xs font-medium">Name
          <input name="name" type="text" autoComplete="name" required className="mt-2 w-full rounded-lg border border-[#e8dfd4] bg-[#fffdfa] px-3 py-3 text-sm outline-none focus:border-[#b8863b]" />
        </label>
        <label className="block text-xs font-medium">Email
          <input name="email" type="email" autoComplete="email" required className="mt-2 w-full rounded-lg border border-[#e8dfd4] bg-[#fffdfa] px-3 py-3 text-sm outline-none focus:border-[#b8863b]" />
        </label>
        <label className="block text-xs font-medium">Details
          <textarea name="details" rows={5} required className="mt-2 w-full resize-y rounded-lg border border-[#e8dfd4] bg-[#fffdfa] px-3 py-3 text-sm outline-none focus:border-[#b8863b]" />
        </label>
        <button type="submit" className="gold-button">Send request <ArrowRight size={15} /></button>
      </form>
      {requestMessage && <p role="status" className="mt-4 text-xs leading-5 text-[#81796f]">{requestMessage}</p>}
    </section>
  </div>;
}

function BagContent() {
  const { bag, ready, removeFromBag } = useStore();
  const items = bag.map((id, index) => ({ product: products.find(product => product.id === id), key: `${id}-${index}` })).filter(item => item.product);
  const subtotal = items.reduce((sum, item) => sum + (item.product?.price ?? 0), 0);

  if (!ready) return <p className="py-12 text-center text-sm text-[#81796f]">Restoring your shopping bag…</p>;
  if (!items.length) return <div className="rounded-xl border border-dashed border-[#d7c7b4] bg-white px-5 py-14 text-center">
    <p className="serif text-2xl">Your bag is waiting.</p><p className="mt-2 text-sm text-[#81796f]">A considered piece is just around the corner.</p>
    <a className="gold-button mt-5" href="/shop">Continue shopping <ArrowRight size={15} /></a>
  </div>;

  return <div className="grid items-start gap-8 lg:grid-cols-[1fr_340px]">
    <div className="divide-y divide-[#e8dfd4] rounded-xl border border-[#e8dfd4] bg-white px-4 sm:px-6">
      {items.map(({ product, key }) => product && <article key={key} className="flex gap-4 py-5">
        <div className="h-28 w-24 shrink-0 overflow-hidden rounded-lg bg-[#eee5da] sm:h-32 sm:w-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
          <div><p className="text-[9px] uppercase tracking-[.12em] text-[#81796f]">{product.category}</p><h2 className="mt-1 text-sm font-medium">{product.name}</h2><p className="mt-2 text-sm font-semibold">${product.price.toLocaleString("en-US")}</p><p className="mt-3 text-[10px] text-[#81796f]">Quantity: 1</p></div>
          <button aria-label={`Remove ${product.name} from bag`} onClick={() => removeFromBag(product.id)} className="rounded-full p-2 text-[#81796f] hover:bg-[#f8f4ee] hover:text-[#211e1a]"><Trash2 size={16} /></button>
        </div>
      </article>)}
    </div>
    <aside className="rounded-xl border border-[#e8dfd4] bg-white p-5">
      <h2 className="serif text-2xl">Order summary</h2><div className="mt-5 flex justify-between text-sm"><span>Subtotal</span><span>${subtotal.toLocaleString("en-US")}</span></div>
      <p className="mt-3 text-xs leading-5 text-[#81796f]">Complimentary shipping on orders over $350. Taxes and shipping are calculated at checkout.</p>
      <button type="button" disabled className="mt-6 w-full rounded-lg bg-[#211e1a] px-4 py-3 text-xs font-semibold text-white/60">Checkout coming soon</button>
      <a href="/shop" className="mt-4 block text-center text-xs text-[#8b6a3c] hover:underline">Continue shopping</a>
    </aside>
  </div>;
}

function StaticContent({ section }: { section: string }) {
  const [message, setMessage] = useState("");
  const [accountMode, setAccountMode] = useState<"sign-in" | "sign-up">("sign-in");

  if (section === "account") {
    const signingUp = accountMode === "sign-up";
    return <div className="mx-auto max-w-lg rounded-xl border border-[#e8dfd4] bg-white p-6 sm:p-9">
      <h2 className="serif text-2xl">{signingUp ? "Create your AURA account" : "Sign in to your account"}</h2>
      <p className="mt-2 text-sm leading-6 text-[#81796f]">Enjoy a more personal way to experience considered luxury.</p>
      <div className="mt-6 grid grid-cols-2 rounded-lg bg-[#f8f4ee] p-1" aria-label="Choose account action">
        <button type="button" onClick={() => { setAccountMode("sign-in"); setMessage(""); }} aria-pressed={!signingUp} className={`rounded-md px-3 py-2.5 text-xs font-medium transition ${!signingUp ? "bg-white text-[#211e1a] shadow-sm" : "text-[#81796f] hover:text-[#211e1a]"}`}>Sign in</button>
        <button type="button" onClick={() => { setAccountMode("sign-up"); setMessage(""); }} aria-pressed={signingUp} className={`rounded-md px-3 py-2.5 text-xs font-medium transition ${signingUp ? "bg-white text-[#211e1a] shadow-sm" : "text-[#81796f] hover:text-[#211e1a]"}`}>Sign up</button>
      </div>
      <form onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage(signingUp
          ? "Account creation is not connected yet. Please contact our concierge for assistance."
          : "Account sign-in is not connected yet. Please contact our concierge for assistance.");
      }} className="mt-6 space-y-4">
        {signingUp && <label className="block text-xs font-medium">Full name<input type="text" autoComplete="name" required className="mt-2 w-full rounded-lg border border-[#e8dfd4] bg-[#fffdfa] px-3 py-3 text-sm outline-none focus:border-[#b8863b]" /></label>}
        <label className="block text-xs font-medium">Email address<input type="email" autoComplete="email" required className="mt-2 w-full rounded-lg border border-[#e8dfd4] bg-[#fffdfa] px-3 py-3 text-sm outline-none focus:border-[#b8863b]" /></label>
        <label className="block text-xs font-medium">Password<input type="password" autoComplete={signingUp ? "new-password" : "current-password"} minLength={8} required className="mt-2 w-full rounded-lg border border-[#e8dfd4] bg-[#fffdfa] px-3 py-3 text-sm outline-none focus:border-[#b8863b]" />{signingUp && <span className="mt-1 block text-[10px] font-normal text-[#81796f]">Use at least 8 characters.</span>}</label>
        <button className="gold-button w-full">{signingUp ? "Create account" : "Sign in"} <ArrowRight size={15} /></button>
      </form>
      {message && <p role="status" className="mt-4 text-xs leading-5 text-[#81796f]">{message}</p>}
    </div>;
  }

  if (section === "newsletter") return <div className="mx-auto max-w-2xl rounded-2xl bg-[#efe5d8] p-6 sm:p-10">
    <p className="serif text-2xl">A little more AURA, occasionally.</p>
    <p className="mt-2 text-sm leading-6 text-[#71695f]">Be first to discover new collections, private offers, and notes on the art of dressing well.</p>
    <form onSubmit={(event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setMessage("Thank you for your interest. Newsletter subscriptions are not connected yet."); }} className="mt-5 flex flex-col gap-2 sm:flex-row">
      <input aria-label="Email address" type="email" required placeholder="Your email address" className="min-w-0 flex-1 rounded-lg border border-[#d7c7b4] bg-white px-4 py-3 text-sm outline-none focus:border-[#b8863b]" />
      <button className="gold-button">Join the list <ArrowRight size={15} /></button>
    </form>
    {message && <p role="status" className="mt-3 text-xs text-[#71695f]">{message}</p>}
  </div>;

  if (section === "testimonials") return <div className="grid gap-4 sm:grid-cols-3">
    {testimonials.map(([quote, name, place]) => <figure key={name} className="rounded-xl border border-[#eee5da] bg-white p-5 sm:p-6"><div className="mb-3 text-[#b8863b]">★★★★★</div><blockquote className="serif text-lg leading-7">“{quote}”</blockquote><figcaption className="mt-5 border-t border-[#eee5da] pt-4"><p className="text-xs font-semibold">{name}</p><p className="mt-1 text-[10px] text-[#81796f]">{place}</p></figcaption></figure>)}
  </div>;

  const content: Record<string, { title: string; paragraphs: string[] }> = {
    "shipping-returns": { title: "Delivery, made considered.", paragraphs: ["Complimentary standard shipping is available on orders over $350. Orders are prepared with care and tracking details are sent once your parcel is on its way.", "If a piece is not quite right, unworn items may be returned within 30 days of delivery in their original condition and packaging. Please contact our concierge to arrange a return.", "Custom and made-to-order pieces may have different delivery and return terms; our team will confirm these details before your order is placed."] },
    "size-guide": { title: "A thoughtful fit.", paragraphs: ["Our pieces are designed with ease and movement in mind. Product descriptions include fit notes to help you choose the silhouette that feels right for you.", "For a more personal recommendation, contact our concierge with the style you are considering and your usual measurements. We will be happy to assist.", "Please note that fit can vary between styles and fabrics. If you are between sizes, our team can provide guidance for the individual piece."] },
    contact: { title: "Personal service, always.", paragraphs: ["For styling guidance, order questions, or help choosing a gift, our client concierge is here for you.", "Email us at concierge@aura.example or call +1 (800) 492-AURA. Our team is available Monday to Friday, 9:00–17:00 Eastern Time.", "We aim to respond to every enquiry within one business day."] },
    privacy: { title: "Your information belongs to you.", paragraphs: ["We use the information you provide only to support your shopping experience, respond to enquiries, and—if you choose—share AURA updates.", "We do not sell personal information. You may request access to, correction of, or deletion of your information by contacting our concierge.", "This demonstration storefront does not process payments, create customer accounts, or store newsletter subscriptions."] },
    terms: { title: "A considered experience.", paragraphs: ["Product descriptions and prices are presented for information and may change. An order is not confirmed until the relevant checkout and payment process is complete.", "All content on this demonstration storefront is provided for browsing purposes. No payment, order fulfilment, or account service is currently connected.", "For questions about these terms, please contact our concierge."] },
    accessibility: { title: "Designed to welcome.", paragraphs: ["AURA is committed to making this storefront accessible to as many visitors as possible. We aim to use clear language, responsive layouts, and keyboard-accessible controls.", "If you experience a barrier while using the site, please contact our concierge and describe the page and issue. We welcome your feedback and will do our best to help.", "We continue to improve the experience as the site evolves."] }
  };
  const details = content[section];
  return <article className="mx-auto max-w-3xl rounded-xl border border-[#e8dfd4] bg-white p-6 sm:p-10">
    <h2 className="serif text-2xl sm:text-3xl">{details.title}</h2>
    <div className="mt-5 space-y-4 text-sm leading-7 text-[#71695f]">{details.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    {section === "contact" && <a href="mailto:concierge@aura.example" className="gold-button mt-6">Email the concierge <ArrowRight size={15} /></a>}
  </article>;
}

export default function SectionPage({ section }: { section: string }) {
  const { wishlist, ready } = useStore();

  let content;
  if (section === "shop") content = <ShopCatalog />;
  else if (section === "women") content = <ProductGrid items={products.filter(product => ["Dresses", "Clothing", "Knitwear"].includes(product.category))} />;
  else if (section === "men") content = <ProductGrid items={products.filter(product => [3, 6, 10, 11, 12, 19].includes(product.id))} />;
  else if (section === "accessories") content = <ProductGrid items={products.filter(product => ["Handbags", "Accessories", "Shoes"].includes(product.category))} />;
  else if (section === "new-arrivals") content = <ProductGrid items={products.filter(product => product.badge === "NEW ARRIVAL")} />;
  else if (section === "wishlist") content = ready
    ? <ProductGrid items={products.filter(product => wishlist.includes(product.id))} />
    : <p className="py-12 text-center text-sm text-[#81796f]">Restoring your wishlist…</p>;
  else if (section === "collections") content = <CollectionGrid />;
  else if (section === "story") content = <StoryContent />;
  else if (section === "bag") content = <BagContent />;
  else content = <StaticContent section={section} />;

  return <main className="mobile-safe-bottom min-h-[55vh]">
    <PageIntro section={section} />
    <section className="section-wrap py-9 sm:py-14">{content}</section>
  </main>;
}
