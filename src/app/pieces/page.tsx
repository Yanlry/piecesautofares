import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/pieces/CategoryCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Nos pièces",
  description:
    "Découvrez les familles de pièces automobiles pour lesquelles Pièce Auto Fares peut vous accompagner : freinage, moteur, filtration, suspension et plus.",
  alternates: {
    canonical: "/pieces",
  },
};

export default function PiecesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos pièces"
        title="Les familles de pièces automobiles"
        description="Un aperçu des principales familles de pièces pour lesquelles Pièce Auto Fares peut vous conseiller et vous fournir la référence adaptée à votre véhicule."
      />
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                variant="detailed"
                href={`/pieces/${category.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner
        title="Vous ne trouvez pas votre pièce ?"
        description="Contactez-nous en nous précisant votre véhicule, nous vous aiderons à identifier la référence adaptée."
        buttonLabel="Contactez-nous"
        href="/contact"
      />
    </>
  );
}
