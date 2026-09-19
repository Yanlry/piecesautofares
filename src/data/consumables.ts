import type { Consumable } from "@/types/consumable";

export const consumables: Consumable[] = [
  {
    id: "huile-moteur",
    name: "Huile moteur",
    image: "/images/consumables/huile-moteur.jpg",
    imageAlt: "Bidon d'huile moteur avec bec verseur",
    categorySlug: "huiles-liquides",
  },
  {
    id: "plaquette-frein",
    name: "Plaquettes de frein",
    image: "/images/consumables/plaquette-frein.jpg",
    imageAlt: "Plaquette de frein automobile",
    categorySlug: "freinage",
  },
  {
    id: "filtre-huile",
    name: "Filtre à huile",
    image: "/images/consumables/filtre-huile.jpg",
    imageAlt: "Filtre à huile automobile, vue du pas de vis",
    categorySlug: "filtration",
  },
  {
    id: "batterie",
    name: "Batterie",
    image: "/images/consumables/batterie.jpg",
    imageAlt: "Batterie de voiture vue de profil, bornes visibles",
    categorySlug: "batterie-accessoires",
  },
  {
    id: "essuie-glace",
    name: "Essuie-glaces",
    image: "/images/consumables/essuie-glace.jpg",
    imageAlt: "Balai d'essuie-glace, gros plan sur l'articulation",
    categorySlug: "batterie-accessoires",
  },
  {
    id: "ampoule",
    name: "Ampoules",
    image: "/images/consumables/ampoule.jpg",
    imageAlt: "Ampoule de phare avec culot métallique",
    categorySlug: "eclairage",
  },
  {
    id: "liquide-refroidissement",
    name: "Liquide de refroidissement",
    image: "/images/consumables/liquide-refroidissement.jpg",
    imageAlt: "Bidon translucide de liquide de refroidissement bleu",
    categorySlug: "huiles-liquides",
  },
  {
    id: "bougie-allumage",
    name: "Bougies d'allumage",
    image: "/images/consumables/bougie-allumage.jpg",
    imageAlt: "Bougie d'allumage, gros plan sur l'électrode",
    categorySlug: "moteur",
  },
];
