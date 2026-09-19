import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        title="Politique de confidentialité"
      />
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl space-y-8 text-sm leading-relaxed text-ink-muted">
          <div className="border border-gold-300 bg-gold-100/40 p-4 text-sm text-navy-900">
            Contenu à compléter avec la politique de confidentialité réelle
            de l&apos;entreprise avant la mise en production du site.
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-navy-900">
              Données collectées
            </h2>
            <p className="mt-2">
              Le formulaire de contact de ce site peut collecter des
              informations telles que le nom, le téléphone, l&apos;email et
              les informations de véhicule communiquées volontairement par
              le visiteur. Le détail exact du traitement de ces données sera
              précisé ici avant la mise en ligne définitive.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-navy-900">
              Utilisation des données
            </h2>
            <p className="mt-2">
              Les informations transmises via le formulaire sont utilisées
              uniquement pour répondre à la demande de l&apos;utilisateur.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-navy-900">
              Droits des utilisateurs
            </h2>
            <p className="mt-2">
              Modalités d&apos;exercice des droits d&apos;accès, de
              rectification et de suppression à compléter.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
