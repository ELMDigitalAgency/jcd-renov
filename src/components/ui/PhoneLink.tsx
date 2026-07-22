import { Phone } from "lucide-react";

import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  className?: string;
  /** Affichage compact (icône + numéro) ou avec libellé au-dessus. */
  withLabel?: boolean;
};

/** Numéro cliquable (tel:) — présent sur toutes les pages, priorité mobile. */
export function PhoneLink({ className, withLabel = false }: PhoneLinkProps) {
  return (
    <a
      href={siteConfig.phoneHref}
      className={cn(
        "group inline-flex items-center gap-3 font-semibold text-navy transition-colors hover:text-primary",
        className,
      )}
    >
      <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Phone className="size-5" aria-hidden />
      </span>
      <span className="flex flex-col leading-tight">
        {withLabel ? (
          <span className="text-xs font-medium text-body">Appelez-nous</span>
        ) : null}
        <span>{siteConfig.phone}</span>
      </span>
    </a>
  );
}
