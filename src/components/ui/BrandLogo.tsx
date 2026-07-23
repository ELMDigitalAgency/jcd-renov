import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Taille rendue (px) : sert au srcset ET au cadre. */
  size?: number;
  priority?: boolean;
};

/**
 * Logo officiel JCD Rénovation (badge circulaire fourni par le client,
 * public/images/logo-jcd-renovation.png, fond transparent).
 */
export function BrandLogo({ className, size = 48, priority }: BrandLogoProps) {
  return (
    <Image
      src="/images/logo-jcd-renovation.png"
      alt="JCD Rénovation, couverture et zinguerie"
      width={size}
      height={size}
      priority={priority}
      className={cn("rounded-full object-contain", className)}
    />
  );
}
