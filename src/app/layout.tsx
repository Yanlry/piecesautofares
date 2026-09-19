import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteUrl } from "@/lib/seo";
import { getLocalBusinessJsonLd } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pièces Auto Fares | Pièces automobiles",
    template: "%s | Pièces Auto Fares",
  },
  description:
    "Pièces Auto Fares vous accompagne dans la recherche de pièces automobiles adaptées à votre véhicule. Basé à Faches-Thumesnil, près de Lille, nous servons les Hauts-de-France et toute la France.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo.png",
  },
  other: {
    "geo.region": "FR-59",
    "geo.placename": "Faches-Thumesnil",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessJsonLd()) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
