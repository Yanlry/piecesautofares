export const partOptionsByCategory: Record<string, string[]> = {
  freinage: [
    "Plaquettes de frein avant",
    "Plaquettes de frein arrière",
    "Disques de frein avant",
    "Disques de frein arrière",
    "Étrier de frein",
    "Flexible de frein",
  ],
  moteur: [
    "Courroie de distribution",
    "Kit d'embrayage",
    "Joint de culasse",
    "Pompe à eau",
    "Support moteur",
    "Bougies d'allumage",
  ],
  filtration: [
    "Filtre à huile",
    "Filtre à air",
    "Filtre à carburant",
    "Filtre d'habitacle",
  ],
  "huiles-liquides": [
    "Huile moteur",
    "Liquide de frein",
    "Liquide de refroidissement",
    "Liquide de direction assistée",
    "Liquide d'embrayage",
    "Additif ou nettoyant moteur",
  ],
  suspension: [
    "Amortisseur avant",
    "Amortisseur arrière",
    "Ressort de suspension",
    "Bras de suspension",
    "Silentbloc",
  ],
  direction: [
    "Rotule de direction",
    "Biellette de direction",
    "Crémaillère de direction",
    "Soufflet de direction",
  ],
  "batterie-accessoires": [
    "Batterie",
    "Démarreur",
    "Alternateur",
    "Câble de batterie",
    "Essuie-glace avant",
    "Essuie-glace arrière",
    "Tapis de sol",
    "Ampoule d'appoint",
    "Fusible",
  ],
  eclairage: [
    "Phare avant",
    "Feu arrière",
    "Ampoule",
    "Clignotant",
    "Feu antibrouillard",
  ],
  carrosserie: [
    "Pare-chocs avant",
    "Pare-chocs arrière",
    "Rétroviseur",
    "Capot",
    "Aile",
  ],
  echappement: [
    "Silencieux arrière",
    "Catalyseur",
    "Ligne d'échappement",
    "Collecteur d'échappement",
  ],
};

export function getPartOptions(categoryId: string): string[] {
  return partOptionsByCategory[categoryId] ?? [];
}
