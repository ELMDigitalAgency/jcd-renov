import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/site.config";

type CtaBannerProps = {
  title?: string;
  buttonLabel?: string;
};

/**
 * Bandeau CTA orange arrondi : titre blanc à gauche, bouton marine à droite
 * (cahier §4.9). Message orienté urgence/perte évitée (aversion à la perte).
 */
export function CtaBanner({
  title = "Une fuite ? Une toiture envahie par la mousse ? On s'occupe de tout.",
  buttonLabel = "Devis Gratuit",
}: CtaBannerProps) {
  return (
    <section aria-label="Demander un devis">
      <Container className="py-8">
        <div className="rounded-card flex flex-col items-start justify-between gap-6 bg-primary-ink px-8 py-10 sm:px-12 lg:flex-row lg:items-center">
          <p className="font-heading max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
            {title}
          </p>
          <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
            <ButtonLink href="/devis-gratuit" variant="primary" withArrow>
              {buttonLabel}
            </ButtonLink>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-white transition-opacity hover:opacity-80"
            >
              <PhoneRoundedIcon fontSize="inherit" className="text-base" aria-hidden />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
