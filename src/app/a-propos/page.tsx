import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Pièces Auto Fares, votre interlocuteur pour la recherche de pièces automobiles adaptées à votre véhicule, basé à Faches-Thumesnil près de Lille.",
  alternates: {
    canonical: "/a-propos",
  },
};

export default function AProposPage() {
  return (
    <>
      <PageHeader eyebrow="À propos" title="Pièces Auto Fares" />

      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <div className="relative aspect-[16/9] w-full border border-border">
            <Image
              src="/images/a-propos/hero.jpg"
              alt="Rayonnages de pièces automobiles organisées"
              fill
              sizes="(min-width: 1024px) 768px, 90vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-muted">
            <p>
              Pièces Auto Fares est une entreprise spécialisée dans la vente de
              pièces automobiles. Notre rôle est d&apos;accompagner nos clients
              dans l&apos;identification et l&apos;obtention des pièces
              adaptées à leur véhicule, quelle que soit la marque ou le
              modèle concerné.
            </p>
            <p>
              Nous travaillons avec de nombreuses familles de pièces
              automobiles : freinage, moteur, filtration, suspension,
              direction, éclairage, carrosserie et bien d&apos;autres. Notre
              objectif est de simplifier la recherche de pièces pour nos
              clients, qu&apos;il s&apos;agisse de particuliers ou de
              professionnels.
            </p>
            <p>
              Chaque demande est traitée avec attention afin de proposer une
              réponse adaptée aux besoins réels du véhicule concerné.
            </p>
            <p>
              Pièces Auto Fares est basé à Faches-Thumesnil, à proximité
              immédiate de Lille. Nous accueillons nos clients en magasin et
              accompagnons également des demandes dans les Hauts-de-France et
              partout en France.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16 lg:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-navy-900">
              Notre approche
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted">
              <li className="border-l-2 border-gold-500 pl-4">
                Un échange direct avec le client pour bien comprendre le
                besoin avant de proposer une pièce.
              </li>
              <li className="border-l-2 border-gold-500 pl-4">
                Une recherche rigoureuse de la référence correspondant au
                véhicule.
              </li>
              <li className="border-l-2 border-gold-500 pl-4">
                Une communication claire sur la disponibilité et les
                modalités d&apos;achat.
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/5] w-full border border-border">
            <Image
              src="/images/a-propos/approche.jpg"
              alt="Inspection minutieuse d'une pièce automobile"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Une question sur notre activité ?"
        description="N'hésitez pas à nous contacter."
      />
    </>
  );
}
