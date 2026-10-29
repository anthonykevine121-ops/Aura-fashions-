import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import { StoreProvider } from "@/components/StoreProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURA Haute Couture | Timeless Luxury",
  description: "Discover timeless luxury fashion, elevated essentials, and signature collections at AURA Haute Couture."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><StoreProvider><SiteChrome>{children}</SiteChrome></StoreProvider></body>
    </html>
  );
}
