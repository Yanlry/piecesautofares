import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/config/company";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950">
      <Image
        src="/images/hero/hero-parts.jpg"
        alt="Composition de pièces automobiles : piston, disque de frein, ressort et pignon"
        fill
        sizes="100vw"
        className="object-cover object-[center_60%]"
        priority
      />
      <div className="absolute inset-0 bg-navy-950/55" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-navy-950/40"
        aria-hidden
      />

      <Container className="relative py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
            {company.name}
          </p>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Vos pièces automobiles, simplement.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/80">
            Pièce Auto Fares accompagne ses clients dans la recherche de pièces
            automobiles adaptées à leur véhicule : identification de la
            référence, conseils et mise à disposition des pièces.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/pieces" variant="primary">
              Trouver une pièce
            </Button>
            <Button href="/contact" variant="outline-light">
              Nous contacter
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
