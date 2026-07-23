import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: ComponentProps<typeof Link>["href"];
  children: React.ReactNode;
  /**
   * primary : pill marine → hover orange (bouton principal maquette)
   * accent : pill orange (bouton secondaire maquette)
   * light : pill blanche sur fond coloré
   */
  variant?: "primary" | "accent" | "light";
  withArrow?: boolean;
  className?: string;
};

/** Bouton pill du design system BuildSafe (cahier des charges §2.3). */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors sm:px-7 sm:text-base",
        variant === "primary" && "bg-navy text-white hover:bg-primary",
        variant === "accent" && "bg-primary-ink text-white hover:bg-primary-dark",
        variant === "light" && "bg-white text-navy hover:bg-cream",
        className,
      )}
    >
      {children}
      {withArrow ? (
        <ArrowForwardRoundedIcon
          fontSize="inherit"
          className="text-base transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}
