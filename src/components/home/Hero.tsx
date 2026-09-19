import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/config/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-16 pt-32 text-white lg:pb-20 lg:pt-40">
      <Image
        src="/images/banniere.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy-950/25" aria-hidden />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
           Bienvenue
          </p>
          <h1 className="mt-5 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
            Pièces automobiles à Lille – {company.name}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/80">
            Vous y trouverez tout ce dont vous avez besoin : freinage,
            huiles et liquides, filtration, batterie et bien plus encore.
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
