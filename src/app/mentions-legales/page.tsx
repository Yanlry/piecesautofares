import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader eyebrow="Informations légales" title="Mentions légales" />
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl space-y-8 text-sm leading-relaxed text-ink-muted">
          <div className="border border-gold-300 bg-gold-100/40 p-4 text-sm text-navy-900">
            Contenu à compléter avec les informations légales exactes de
            l&apos;entreprise avant la mise en production du site.
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-navy-900">
              Éditeur du site
            </h2>
            <p className="mt-2">
              {company.name}
              {company.address ? ` — ${company.address}` : ""}
            </p>
            <p className="mt-1">
              Forme juridique, numéro SIRET et capital social à compléter.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-navy-900">
              Directeur de la publication
            </h2>
            <p className="mt-2">À compléter.</p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-navy-900">
              Hébergement
            </h2>
            <p className="mt-2">
              Nom, adresse et contact de l&apos;hébergeur à compléter.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-navy-900">
              Propriété intellectuelle
            </h2>
            <p className="mt-2">
              L&apos;ensemble des contenus présents sur ce site (textes,
              images, logo) est protégé et ne peut être reproduit sans
              autorisation préalable.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
