import Link from "next/link";
import Image from "next/image";
import { consumables } from "@/data/consumables";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export function ConsumablesSection() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Les consommables"
          title="Les recherches les plus fréquentes"
          description="Les pièces d'usure courantes, à renouveler régulièrement pour l'entretien de votre véhicule."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {consumables.map((item) => (
            <Link
              key={item.id}
              href={`/pieces/${item.categorySlug}`}
              className="block border border-border bg-surface transition-colors hover:border-navy-900"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover"
                />
              </div>
              <p className="px-4 py-3 text-center text-sm font-medium text-navy-900">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
