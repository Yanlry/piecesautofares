import {
  Disc,
  Cog,
  Filter,
  Waves,
  Navigation,
  BatteryCharging,
  Lightbulb,
  Car,
  Wind,
  Wrench,
  Droplets,
  type LucideProps,
} from "lucide-react";
import type { CategoryIcon } from "@/types/category";

export function CategoryIconGlyph({
  icon,
  ...props
}: { icon: CategoryIcon } & LucideProps) {
  switch (icon) {
    case "disc":
      return <Disc {...props} />;
    case "cog":
      return <Cog {...props} />;
    case "filter":
      return <Filter {...props} />;
    case "waves":
      return <Waves {...props} />;
    case "navigation":
      return <Navigation {...props} />;
    case "battery-charging":
      return <BatteryCharging {...props} />;
    case "lightbulb":
      return <Lightbulb {...props} />;
    case "car":
      return <Car {...props} />;
    case "wind":
      return <Wind {...props} />;
    case "wrench":
      return <Wrench {...props} />;
    case "droplets":
      return <Droplets {...props} />;
  }
}
