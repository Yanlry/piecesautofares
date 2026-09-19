import { Car } from "lucide-react";
import { brands } from "@/data/brands";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function BrandsSection() {
  return (
    <section className="border-t border-border bg-surface-muted py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Marques"
          title="Des pièces pour de nombreuses marques automobiles"
          align="center"
        />
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand) => (
            <li
              key={brand.id}
              className="flex flex-col items-center justify-center gap-2 bg-surface px-4 py-6"
            >
              <span className="flex h-10 w-10 items-center justify-center bg-navy-900 text-gold-300">
                <Car size={18} aria-hidden />
              </span>
              <span className="text-sm font-medium text-navy-900">{brand.name}</span>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-ink-muted">
            Cette liste n&apos;est pas exhaustive. Pièce Auto Fares travaille
            avec de nombreuses autres marques automobiles : contactez-nous
            pour vérifier la compatibilité avec votre véhicule.
          </p>
          <Button href="/contact" variant="outline-dark" className="mt-5">
            Vérifier ma marque
          </Button>
        </div>
      </Container>
    </section>
  );
}
