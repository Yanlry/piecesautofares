import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const infoNeeded = [
  "Marque",
  "Modèle",
  "Année",
  "Motorisation",
  "Immatriculation ou référence (si disponible)",
];

export function SearchPartSection() {
  return (
    <section className="bg-navy-900 py-16 text-white lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <Search size={22} className="text-gold-300" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
              Recherche de pièce
            </p>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">
            Vous recherchez une pièce précise ?
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Contactez Pièce Auto Fares en nous communiquant les informations
            de votre véhicule. Plus les informations sont précises, plus la
            recherche de la référence adaptée sera rapide.
          </p>
          <ul className="mt-6 grid max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
            {infoNeeded.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                <span className="h-1.5 w-1.5 shrink-0 bg-gold-300" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button href="/contact" variant="primary">
            Faire une demande
          </Button>
        </div>
      </Container>
    </section>
  );
}
