import type { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "freinage",
    slug: "freinage",
    name: "Freinage",
    shortDescription: "Plaquettes, disques, étriers",
    description:
      "Plaquettes de frein, disques, étriers et accessoires de freinage pour de nombreux modèles.",
    icon: "disc",
    image: "/images/categories/freinage.jpg",
  },
  {
    id: "moteur",
    slug: "moteur",
    name: "Moteur",
    shortDescription: "Pièces mécaniques et joints",
    description:
      "Pièces mécaniques, joints, courroies et composants moteur pour l'entretien et la réparation.",
    icon: "cog",
    image: "/images/categories/moteur.jpg",
  },
  {
    id: "filtration",
    slug: "filtration",
    name: "Filtration",
    shortDescription: "Filtres à huile, air, habitacle",
    description:
      "Filtres à huile, à air, à carburant et d'habitacle adaptés à votre motorisation.",
    icon: "filter",
    image: "/images/categories/filtration.jpg",
  },
  {
    id: "suspension",
    slug: "suspension",
    name: "Suspension",
    shortDescription: "Amortisseurs, ressorts, bras",
    description:
      "Amortisseurs, ressorts, bras de suspension et silentblocs pour le confort et la tenue de route.",
    icon: "waves",
    image: "/images/categories/suspension.jpg",
  },
  {
    id: "direction",
    slug: "direction",
    name: "Direction",
    shortDescription: "Rotules, biellettes, crémaillère",
    description:
      "Rotules de direction, biellettes, crémaillères et composants liés à la direction du véhicule.",
    icon: "navigation",
    image: "/images/categories/direction.jpg",
  },
  {
    id: "batterie-demarrage",
    slug: "batterie-demarrage",
    name: "Batterie et démarrage",
    shortDescription: "Batteries, démarreurs, alternateurs",
    description:
      "Batteries, démarreurs, alternateurs et accessoires électriques liés au démarrage.",
    icon: "battery-charging",
    image: "/images/categories/batterie-demarrage.jpg",
  },
  {
    id: "eclairage",
    slug: "eclairage",
    name: "Éclairage",
    shortDescription: "Phares, feux, ampoules",
    description:
      "Phares, feux arrière, ampoules et optiques d'éclairage pour l'ensemble du véhicule.",
    icon: "lightbulb",
    image: "/images/categories/eclairage.jpg",
  },
  {
    id: "carrosserie",
    slug: "carrosserie",
    name: "Carrosserie",
    shortDescription: "Pare-chocs, rétroviseurs, capots",
    description:
      "Éléments de carrosserie : pare-chocs, rétroviseurs, capots et pièces de finition extérieure.",
    icon: "car",
    image: "/images/categories/carrosserie.jpg",
  },
  {
    id: "echappement",
    slug: "echappement",
    name: "Échappement",
    shortDescription: "Silencieux, catalyseurs, lignes",
    description:
      "Silencieux, catalyseurs et lignes d'échappement compatibles avec de nombreux modèles.",
    icon: "wind",
    image: "/images/categories/echappement.jpg",
  },
  {
    id: "accessoires",
    slug: "accessoires",
    name: "Accessoires",
    shortDescription: "Essuie-glaces, tapis, divers",
    description:
      "Essuie-glaces, accessoires d'entretien et petites fournitures pour votre véhicule.",
    icon: "wrench",
    image: "/images/categories/accessoires.jpg",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
