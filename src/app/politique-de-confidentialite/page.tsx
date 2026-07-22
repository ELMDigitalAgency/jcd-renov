import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Politique de Confidentialité | JCD Rénovation",
  description:
    "Protection de vos données personnelles sur le site JCD Rénovation : formulaire de devis, cookies, vos droits RGPD.",
  path: "/politique-de-confidentialite",
});

export default function PolitiqueDeConfidentialitePage() {
  return (
    <>
      <div className="bg-cream">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            crumbs={[
              { name: "Politique de confidentialité", path: "/politique-de-confidentialite" },
            ]}
          />
          <PageTitle className="mt-6">
            Politique de <TitleAccent>confidentialité</TitleAccent>
          </PageTitle>
          <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
            Ce site collecte le strict minimum de données, uniquement pour répondre à votre demande
            de devis. Voici, en toute transparence, ce que nous faisons (et ne faisons pas) de vos
            informations.
          </p>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <div className="prose prose-neutral max-w-3xl prose-headings:font-heading prose-headings:text-navy prose-p:text-body prose-li:text-body prose-strong:text-navy prose-a:text-primary">
          <h2>Données collectées</h2>
          <p>
            Les seules données personnelles collectées sur ce site sont celles que vous saisissez
            dans le formulaire de demande de devis : nom, téléphone, email, ville, prestation
            souhaitée, message et photo éventuelle de votre toiture. Aucune donnée n’est collectée à
            votre insu lors de la simple navigation.
          </p>

          <h2>Finalité et base légale</h2>
          <p>
            Ces données servent exclusivement à traiter votre demande de devis : vous recontacter,
            comprendre votre besoin et vous adresser une proposition. La base légale de ce
            traitement est l’exécution de mesures précontractuelles prises à votre demande
            (article 6.1.b du RGPD).
          </p>

          <h2>Destinataires des données</h2>
          <p>
            Vos données sont destinées à {siteConfig.legalName} uniquement. Elles ne sont ni
            vendues, ni louées, ni transmises à des tiers à des fins commerciales. Deux
            sous-traitants techniques y ont accès pour le seul fonctionnement du site, sur
            instruction de {siteConfig.legalName} :
          </p>
          <ul>
            <li>
              <strong>Vercel</strong> : hébergement du site ;
            </li>
            <li>
              <strong>Resend</strong> : acheminement des emails du formulaire de devis.
            </li>
          </ul>

          <h2>Durée de conservation</h2>
          <p>
            Les données issues du formulaire sont conservées 12 mois après le dernier contact, puis
            supprimées, sauf si une relation contractuelle est engagée (devis signé), auquel cas
            elles sont conservées le temps requis par les obligations légales et comptables.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site ne dépose <strong>aucun cookie de suivi</strong> sans votre consentement. Si une
            mesure d’audience venait à être activée, un bandeau de consentement s’afficherait
            préalablement à tout dépôt de cookie non essentiel.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement
            et d’opposition sur vos données personnelles. Pour l’exercer, écrivez-nous à{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Si vous estimez que vos
            droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (
            <a href="https://www.cnil.fr" rel="noopener noreferrer">
              cnil.fr
            </a>
            ).
          </p>

          <p>
            <em>Dernière mise à jour : juillet 2026.</em>
          </p>
        </div>
      </Container>
    </>
  );
}
