import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";

type CtaEncartProps = {
  title?: string;
  children?: React.ReactNode;
};

/**
 * Encart CTA inséré dans le corps des articles MDX :
 * `<CtaEncart title="…">texte…</CtaEncart>`. Carte marine + bouton orange
 * vers /devis-gratuit (conversion au cœur de la lecture, sans popup).
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
      <ButtonLink href="/devis-gratuit" variant="accent" withArrow className="mt-6">
        Devis gratuit
      </ButtonLink>
    </Card>
  );
}
