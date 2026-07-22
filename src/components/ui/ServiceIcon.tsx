import {
  AlertTriangle,
  Brush,
  Building2,
  Clock,
  Droplets,
  Euro,
  FileText,
  Home,
  MapPin,
  Phone,
  Search,
  Shield,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { IconKey } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Map clé → composant lucide. Les données (content/) ne référencent JAMAIS de
 * composant React (non sérialisable vers les îlots client) — uniquement des
 * clés IconKey résolues ici, côté UI.
 */
const iconMap: Record<IconKey, LucideIcon> = {
  search: Search,
  "file-text": FileText,
  brush: Brush,
  shield: Shield,
  droplets: Droplets,
  home: Home,
  wrench: Wrench,
  phone: Phone,
  clock: Clock,
  euro: Euro,
  building: Building2,
  "map-pin": MapPin,
  sparkles: Sparkles,
  "alert-triangle": AlertTriangle,
};

type ServiceIconProps = {
  icon: IconKey;
  className?: string;
};

export function ServiceIcon({ icon, className }: ServiceIconProps) {
  const Icon = iconMap[icon];
  return <Icon className={cn("size-6", className)} aria-hidden strokeWidth={1.8} />;
}

/** Icône outline orange dans une pastille arrondie fond clair (cahier §2.3). */
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
