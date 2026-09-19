import type { Metadata } from "next";
import Image from "next/image";
import { Search, ClipboardCheck, Package, MessageSquare, FileQuestion } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Les services proposés par Pièce Auto Fares : recherche de références, accompagnement, vente de pièces et conseils avant achat.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    icon: Search,
    title: "Recherche de références",
    description:
      "Nous vous aidons à identifier la référence exacte de la pièce correspondant à votre véhicule.",
    image: "/images/services/recherche-references.jpg",
  },
  {
    icon: ClipboardCheck,
    title: "Accompagnement pour identifier une pièce",
    description:
      "Un échange avec nos équipes pour préciser vos besoins et éviter les erreurs de commande.",
    image: "/images/services/accompagnement.jpg",
  },
  {
    icon: Package,
    title: "Vente de pièces automobiles",
    description:
      "Mise à disposition des pièces automobiles correspondant à votre demande.",
    image: "/images/services/vente-pieces.jpg",
  },
  {
    icon: MessageSquare,
    title: "Conseils avant achat",
    description:
      "Des conseils pour vous orienter avant de valider votre choix de pièce.",
    image: "/images/services/conseils-achat.jpg",
  },
  {
    icon: FileQuestion,
    title: "Demande spécifique",
    description:
      "Une pièce particulière à rechercher ? Contactez-nous pour formuler votre demande.",
    image: "/images/services/demande-specifique.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Nos services"
        description="Pièce Auto Fares vous accompagne à chaque étape de votre recherche de pièces automobiles."
      />
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description, image }) => (
              <div key={title} className="border border-border bg-surface">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 flex h-10 w-10 items-center justify-center bg-navy-900 text-gold-300">
                    <Icon size={18} aria-hidden />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-lg font-semibold text-navy-900">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner
        title="Une question sur nos services ?"
        description="Contactez-nous, nous vous répondrons dans les meilleurs délais."
      />
    </>
  );
}
