import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Mentions Légales | JCD Rénovation",
  description: "Mentions légales du site JCD Rénovation, couvreur zingueur à Villemandeur.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="bg-cream">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs crumbs={[{ name: "Mentions légales", path: "/mentions-legales" }]} />
          <PageTitle className="mt-6">
            Mentions <TitleAccent>légales</TitleAccent>
          </PageTitle>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <div className="prose prose-neutral max-w-3xl prose-headings:font-heading prose-headings:text-navy prose-p:text-body prose-li:text-body prose-strong:text-navy prose-a:text-primary">
          <h2>Éditeur du site</h2>
          <p>
            Le site <strong>{siteConfig.url.replace("https://", "")}</strong> est édité par{" "}
            <strong>{siteConfig.legalName}</strong>, entreprise artisanale de couverture et de
            zinguerie.
          </p>
          <ul>
            <li>
              Adresse : {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
              {siteConfig.address.city}
            </li>
            <li>SIRET : {siteConfig.siret}</li>
            <li>
              Téléphone : <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </li>
            <li>
              Email : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
          <p>Directeur de la publication : le gérant de {siteConfig.legalName}.</p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA
            91789, États-Unis (
            <a href="https://vercel.com" rel="noopener noreferrer">
              vercel.com
            </a>
            ).
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus de ce site (textes, photos de chantiers, logo, structure) est la
            propriété de {siteConfig.legalName}. Toute reproduction, représentation ou diffusion,
            totale ou partielle, est interdite sans l’accord écrit préalable de{" "}
            {siteConfig.legalName}.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations publiées sur ce site, en particulier les fourchettes de prix, sont
            données à titre indicatif et ne constituent pas un engagement contractuel. Seules les
            conditions figurant sur le devis signé font foi. {siteConfig.legalName} ne saurait être
            tenue responsable d’une décision prise sur la seule base des informations de ce site.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le traitement de vos données personnelles est détaillé dans notre{" "}
            <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
          </p>
        </div>
      </Container>
    </>
  );
}
