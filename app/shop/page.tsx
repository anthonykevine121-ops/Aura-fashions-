import type { Metadata } from "next";
import Shope from "@/components/Shope";

export const metadata: Metadata = {
  title: "Shop the Collection | AURA Haute Couture",
  description: "Explore considered luxury, timeless silhouettes, and elevated essentials from AURA Haute Couture."
};

export default function ShopPage() {
  return <Shope />;
}
