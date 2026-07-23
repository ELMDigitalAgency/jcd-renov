import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import type { Route } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { TitleAccent } from "@/components/ui/PageTitle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { communes } from "@/content/communes";
import { cn } from "@/lib/utils";

type ServiceZonesProps = {
  /** Chemin de la page courante — sa commune devient un chip actif non cliquable. */
  currentPath?: string;
};

/**
 * « Où intervenons-nous ? » (cahier §5) : chips des communes de la zone —
 * liens vers les pages villes/pilier, texte simple pour les tertiaires — puis
 * lien vers la page zone d'intervention complète.
 */
export function ServiceZones({ currentPath }: ServiceZonesProps) {
  return (
    <section aria-label="Zone d'intervention">
      <Container className="py-16 sm:py-20">
        <div className="rounded-card bg-lavender px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
          <SectionHeading
            eyebrow="Proximité"
            title={
              <>
                Où <TitleAccent>intervenons-nous</TitleAccent> ?
              </>
            }
            subtitle="Nous intervenons à Villemandeur et dans toute l’agglomération Montargoise, avec diagnostic gratuit sur place."
          />
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {communes.map((commune) => {
              const isCurrent = commune.href !== undefined && commune.href === currentPath;
              return (
                <li key={commune.name}>
                  {commune.href && !isCurrent ? (
                    <Link
                      href={commune.href as Route}
                      className="inline-block rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-primary hover:bg-primary hover:text-white"
                    >
                      {commune.name}
                    </Link>
                  ) : (
                    <span
                      className={cn(
                        "inline-block rounded-full border px-4 py-2 text-sm",
                        isCurrent
                          ? "border-primary bg-primary font-semibold text-white"
                          : "border-navy/10 bg-white/70 text-body",
                      )}
                    >
                      {commune.name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-9 text-center">
            <Link
              href="/zone-intervention"
              className="inline-flex items-center gap-2 font-semibold text-navy transition-colors hover:text-primary"
            >
              Voir toute notre zone d’intervention
              <ArrowForwardRoundedIcon fontSize="inherit" className="text-base" aria-hidden />
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
