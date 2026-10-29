import { notFound } from "next/navigation";
import SectionPage from "@/components/SectionPage";

const sections = [
  "collections",
  "women",
  "men",
  "accessories",
  "new-arrivals",
  "story",
  "wishlist",
  "bag",
  "account",
  "shipping-returns",
  "size-guide",
  "contact",
  "privacy",
  "terms",
  "accessibility",
  "testimonials",
  "newsletter"
];

export function generateStaticParams() {
  return sections.map(section => ({ section }));
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!sections.includes(section)) notFound();
  return <SectionPage section={section} />;
}
