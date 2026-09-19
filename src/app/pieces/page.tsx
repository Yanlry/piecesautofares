import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/pieces/CategoryCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Nos pièces",
  description:
    "Découvrez toutes les pièces pour lesquelles nous pouvons vous accompagner : freinage, moteur, filtration, suspension et plus.",
  alternates: {
    canonical: "/pieces",
  },
};

export default function PiecesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos pièces"
        title="Toutes les rubriques"
        description="Un aperçu des principales familles de pièces pour lesquelles Pièces Auto Fares peut vous conseiller et vous fournir la référence adaptée à votre véhicule."
      />
      <section className="py-16 lg:py-20">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-navy-900">
            Sélectionnez une famille de pièces
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
