import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/data/products";

type Props = { params: Promise<{ id: string }> };

function findProduct(id: string) {
  if (!/^\d+$/.test(id)) return undefined;
  return products.find(product => product.id === Number(id));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) return { title: "Piece not found | AURA Haute Couture" };

  return {
    title: `${product.name} | AURA Haute Couture`,
    description: `${product.name}, a considered piece from the AURA ${product.category.toLowerCase()} collection.`
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
