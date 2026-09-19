import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { SearchPartSection } from "@/components/home/SearchPartSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Pièce Auto Fares | Pièces automobiles",
  description:
    "Pièce Auto Fares vous accompagne dans la recherche de pièces automobiles adaptées à votre véhicule. Basé à Faches-Thumesnil, près de Lille, nous servons les Hauts-de-France et toute la France.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <SearchPartSection />
      <WhyUsSection />
      <BrandsSection />
      <ContactSection />
    </>
  );
}
