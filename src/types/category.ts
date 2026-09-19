export type CategoryIcon =
  | "disc"
  | "cog"
  | "filter"
  | "waves"
  | "navigation"
  | "battery-charging"
  | "lightbulb"
  | "car"
  | "wind"
  | "wrench"
  | "droplets";

export type Category = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  intro: string;
  icon: CategoryIcon;
  image?: string;
  imageAlt: string;
};
