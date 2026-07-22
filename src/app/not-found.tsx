import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";

export default function NotFound() {
  return (
    <div className="bg-cream">
      <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-6 px-4 py-24 text-center">
        <p className="font-heading text-7xl font-extrabold text-primary">404</p>
        <PageTitle>
          Cette page <TitleAccent>n&apos;existe pas</TitleAccent>
        </PageTitle>
        <p className="max-w-xl leading-relaxed">
          La page que vous cherchez a peut-être été déplacée lors de la refonte du site. Retrouvez
          nos prestations de couverture, zinguerie et démoussage depuis l&apos;accueil.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" withArrow>
            Retour à l&apos;accueil
          </ButtonLink>
          <ButtonLink href="/devis-gratuit" variant="accent">
            Devis gratuit
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
