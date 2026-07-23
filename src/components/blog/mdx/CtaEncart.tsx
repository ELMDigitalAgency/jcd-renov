import { Phone } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/site.config";

type CtaEncartProps = {
  title?: string;
  children?: React.ReactNode;
};

/**
 * Encart CTA inséré dans le corps des articles MDX :
 * `<CtaEncart title="…">texte…</CtaEncart>`. Carte marine, bouton devis ET
 * numéro cliquable : le trafic SEO du blog doit se transformer en appels.
 */
export function CtaEncart({
  title = "Besoin de l'avis d'un couvreur ?",
  children,
}: CtaEncartProps) {
  return (
    <Card variant="navy" className="my-10">
      <p className="font-heading text-xl font-extrabold text-white sm:text-2xl">{title}</p>
      {children ? (
        <div className="mt-3 leading-relaxed text-white/80">{children}</div>
      ) : null}
      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
        <ButtonLink href="/devis-gratuit" variant="accent" withArrow>
          Devis gratuit
        </ButtonLink>
        <a
          href={siteConfig.phoneHref}
          className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-primary"
        >
          <Phone className="size-4 text-primary" aria-hidden />
          ou appelez le {siteConfig.phone}
        </a>
      </div>
    </Card>
  );
}
