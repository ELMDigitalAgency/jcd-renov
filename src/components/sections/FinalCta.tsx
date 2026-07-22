import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PhoneLink } from "@/components/ui/PhoneLink";

type FinalCtaProps = {
  title?: string;
  text?: string;
};

/** CTA final des pages internes : devis + téléphone (réduction de friction). */
export function FinalCta({
  title = "Parlons de votre toiture",
  text = "Diagnostic sur place et devis détaillé sous 24-48 h, gratuits et sans engagement.",
}: FinalCtaProps) {
  return (
    <section aria-label="Contact" className="bg-navy">
      <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-white/75">{text}</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <ButtonLink href="/devis-gratuit" variant="accent" withArrow>
            Demander mon devis gratuit
          </ButtonLink>
          <PhoneLink className="text-white hover:text-primary [&_span:last-child]:text-white" withLabel />
        </div>
      </Container>
    </section>
  );
}
