import { MessageCircle, Layers, Zap, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const advantages = [
  {
    icon: MessageCircle,
    title: "Conseil personnalisé",
    description: "Nous vous aidons à identifier la pièce adaptée à votre véhicule.",
  },
  {
    icon: Layers,
    title: "Large choix de références",
    description: "Pièces pour de nombreuses marques et modèles.",
  },
  {
    icon: Zap,
    title: "Recherche rapide",
    description: "Nous vous aidons à trouver rapidement la bonne référence.",
  },
  {
    icon: Users,
    title: "Service de proximité",
    description: "Un interlocuteur disponible pour vous accompagner.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Pourquoi Pièce Auto Fares"
          title="Un accompagnement sérieux à chaque étape"
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-surface p-6">
              <Icon size={22} className="text-gold-600" aria-hidden />
              <h3 className="mt-4 font-heading text-base font-semibold text-navy-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
