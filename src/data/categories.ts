import type { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "freinage",
    slug: "freinage",
    name: "Freinage",
    shortDescription: "Plaquettes, disques, étriers",
    description:
      "Plaquettes de frein, disques, étriers et accessoires de freinage pour de nombreux modèles.",
    intro:
      "Le freinage est un poste de sécurité qui s'use progressivement avec les kilomètres parcourus. Plaquettes, disques et étriers sont les pièces les plus fréquemment remplacées, généralement par paire ou par essieu. Sélectionnez ci-dessous l'élément qui correspond à votre besoin.",
    icon: "disc",
    image: "/images/categories/freinage.jpg",
    imageAlt: "Disque de frein, étrier et plaquette de frein",
  },
  {
    id: "moteur",
    slug: "moteur",
    name: "Moteur",
    shortDescription: "Pièces mécaniques et joints",
    description:
      "Pièces mécaniques, joints, courroies et composants moteur pour l'entretien et la réparation.",
    intro:
      "Le moteur regroupe des pièces mécaniques essentielles au bon fonctionnement du véhicule, de la courroie de distribution aux bougies d'allumage. Certaines interventions, comme un embrayage ou une pompe à eau, demandent une vérification précise de la référence avant achat. Indiquez-nous la pièce recherchée pour que nous confirmions sa compatibilité.",
    icon: "cog",
    image: "/images/categories/moteur.jpg",
    imageAlt: "Piston de moteur avec bielle",
  },
  {
    id: "filtration",
    slug: "filtration",
    name: "Filtration",
    shortDescription: "Filtres à huile, air, habitacle",
    description:
      "Filtres à huile, à air, à carburant et d'habitacle adaptés à votre motorisation.",
    intro:
      "Les filtres protègent le moteur et l'habitacle en retenant les impuretés de l'huile, de l'air ou du carburant. Ils font partie des pièces à changer régulièrement, souvent à l'occasion d'une vidange. Sélectionnez le filtre concerné pour recevoir la référence adaptée à votre véhicule.",
    icon: "filter",
    image: "/images/categories/filtration.jpg",
    imageAlt: "Filtre à huile vu de dessus",
  },
  {
    id: "huiles-liquides",
    slug: "huiles-liquides",
    name: "Huiles et liquides",
    shortDescription: "Huile moteur, liquides, additifs",
    description:
      "Huile moteur, liquide de frein, liquide de refroidissement, liquide d'embrayage et additifs d'entretien pour votre véhicule.",
    intro:
      "Chaque véhicule a besoin de différents liquides pour fonctionner correctement : huile moteur, liquide de frein, liquide de refroidissement ou d'embrayage. La bonne viscosité ou la bonne norme dépend directement de votre motorisation. Précisez votre véhicule pour que nous vous indiquions la référence adaptée.",
    icon: "droplets",
    image: "/images/categories/huiles-liquides.jpg",
    imageAlt: "Trois bidons de liquides automobiles",
  },
  {
    id: "suspension",
    slug: "suspension",
    name: "Suspension",
    shortDescription: "Amortisseurs, ressorts, bras",
    description:
      "Amortisseurs, ressorts, bras de suspension et silentblocs pour le confort et la tenue de route.",
    intro:
      "La suspension assure le confort de conduite et la tenue de route du véhicule. Amortisseurs, ressorts et bras de suspension s'usent avec le temps et se remplacent généralement par paire. Indiquez-nous la pièce concernée pour vérifier sa compatibilité.",
    icon: "waves",
    image: "/images/categories/suspension.jpg",
    imageAlt: "Ressort de suspension et amortisseur",
  },
  {
    id: "direction",
    slug: "direction",
    name: "Direction",
    shortDescription: "Rotules, biellettes, crémaillère",
    description:
      "Rotules de direction, biellettes, crémaillères et composants liés à la direction du véhicule.",
    intro:
      "Les éléments de direction relient le volant aux roues et garantissent la précision de conduite. Rotules, biellettes ou crémaillère peuvent présenter du jeu ou des bruits lorsqu'ils s'usent. Contactez-nous en précisant votre véhicule pour identifier la pièce nécessaire.",
    icon: "navigation",
    image: "/images/categories/direction.jpg",
    imageAlt: "Rotule de direction avec écrou et joint",
  },
  {
    id: "batterie-accessoires",
    slug: "batterie-accessoires",
    name: "Batterie et accessoires",
    shortDescription: "Batteries, démarreurs, essuie-glaces, divers",
    description:
      "Batteries, démarreurs, alternateurs, essuie-glaces et petites fournitures pour l'entretien de votre véhicule.",
    intro:
      "Cette famille regroupe les éléments électriques essentiels au démarrage ainsi que quelques accessoires d'entretien courants comme les essuie-glaces ou les fusibles. Une batterie ou un démarreur qui faiblit peut vite immobiliser un véhicule. Dites-nous ce dont vous avez besoin, nous vérifions la référence correspondante.",
    icon: "battery-charging",
    image: "/images/categories/batterie-accessoires.jpg",
    imageAlt: "Batterie de voiture avec poignée de transport",
  },
  {
    id: "eclairage",
    slug: "eclairage",
    name: "Éclairage",
    shortDescription: "Phares, feux, ampoules",
    description:
      "Phares, feux arrière, ampoules et optiques d'éclairage pour l'ensemble du véhicule.",
    intro:
      "Un phare ou un feu défectueux se remarque vite et doit être remplacé rapidement pour rouler en toute sécurité et en conformité. Nous proposons phares, feux, ampoules et clignotants adaptés à de nombreux modèles. Précisez l'élément concerné pour connaître la référence adaptée à votre véhicule.",
    icon: "lightbulb",
    image: "/images/categories/eclairage.jpg",
    imageAlt: "Bloc optique de phare avant",
  },
  {
    id: "carrosserie",
    slug: "carrosserie",
    name: "Carrosserie",
    shortDescription: "Pare-chocs, rétroviseurs, capots",
    description:
      "Éléments de carrosserie : pare-chocs, rétroviseurs, capots et pièces de finition extérieure.",
    intro:
      "Après un choc ou une rayure, certains éléments de carrosserie doivent être remplacés plutôt que réparés. Pare-chocs, rétroviseurs ou capots sont les pièces les plus souvent demandées. Indiquez-nous le modèle concerné pour vérifier la disponibilité de la pièce.",
    icon: "car",
    image: "/images/categories/carrosserie.jpg",
    imageAlt: "Rétroviseur extérieur de voiture",
  },
  {
    id: "echappement",
    slug: "echappement",
    name: "Échappement",
    shortDescription: "Silencieux, catalyseurs, lignes",
    description:
      "Silencieux, catalyseurs et lignes d'échappement compatibles avec de nombreux modèles.",
    intro:
      "La ligne d'échappement évacue les gaz du moteur et s'use avec le temps, notamment au niveau du silencieux ou du catalyseur. Un bruit inhabituel ou une perte de puissance peut indiquer qu'un élément doit être changé. Contactez-nous avec les informations de votre véhicule pour identifier la pièce adaptée.",
    icon: "wind",
    image: "/images/categories/echappement.jpg",
    imageAlt: "Silencieux d'échappement en inox",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
