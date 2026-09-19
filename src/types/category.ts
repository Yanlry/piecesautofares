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
  | "wrench";

export type Category = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: CategoryIcon;
  image?: string;
};
