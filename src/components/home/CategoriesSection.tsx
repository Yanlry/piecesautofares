import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/pieces/CategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export function CategoriesSection() {
  return (
    <section className="bg-surface-muted py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Nos familles de pièces"
          title="Les principaux types de pièces proposés"
          description="Un aperçu des familles de pièces automobiles pour lesquelles Pièce Auto Fares peut vous accompagner."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              href={`/pieces/${category.slug}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
