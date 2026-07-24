import type { SvgIconComponent } from "@mui/icons-material";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BrushRoundedIcon from "@mui/icons-material/BrushRounded";
import CarpenterRoundedIcon from "@mui/icons-material/CarpenterRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import EuroRoundedIcon from "@mui/icons-material/EuroRounded";
import FormatPaintRoundedIcon from "@mui/icons-material/FormatPaintRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";

import type { IconKey } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Map clé → composant Material UI. Les données (content/) ne référencent
 * JAMAIS de composant React (non sérialisable vers les îlots client) —
 * uniquement des clés IconKey résolues ici, côté UI.
 */
const iconMap: Record<IconKey, SvgIconComponent> = {
  search: SearchRoundedIcon,
  "file-text": DescriptionRoundedIcon,
  brush: BrushRoundedIcon,
  shield: ShieldRoundedIcon,
  droplets: WaterDropRoundedIcon,
  home: HomeRoundedIcon,
  wrench: HandymanRoundedIcon,
  phone: PhoneRoundedIcon,
  clock: ScheduleRoundedIcon,
  euro: EuroRoundedIcon,
  building: ApartmentRoundedIcon,
  "map-pin": PlaceRoundedIcon,
  sparkles: AutoAwesomeRoundedIcon,
  "alert-triangle": WarningAmberRoundedIcon,
  paint: FormatPaintRoundedIcon,
  carpenter: CarpenterRoundedIcon,
};

type ServiceIconProps = {
  icon: IconKey;
  className?: string;
};

export function ServiceIcon({ icon, className }: ServiceIconProps) {
  const Icon = iconMap[icon];
  return <Icon fontSize="inherit" className={cn("text-2xl", className)} aria-hidden />;
}

/** Icône orange dans une pastille arrondie fond clair (cahier §2.3). */
export function IconBadge({
  icon,
  className,
  tone = "cream",
}: ServiceIconProps & { tone?: "cream" | "white" }) {
  return (
    <span
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-2xl",
        tone === "cream" ? "bg-cream" : "bg-white",
        className,
      )}
    >
      <ServiceIcon icon={icon} className="text-primary" />
    </span>
  );
}
