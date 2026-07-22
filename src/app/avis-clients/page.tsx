import { ReviewCard } from "@/components/avis/ReviewCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { avisClients } from "@/content/avis";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Avis Clients JCD Rénovation | Couvreur Villemandeur",
  description:
    "Découvrez les avis de nos clients à Villemandeur et dans le Loiret sur nos travaux de couverture et zinguerie.",
  path: "/avis-clients",
});

export default function AvisClientsPage() {
  return (
    <>
      <div className="bg-cream">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs crumbs={[{ name: "Avis clients", path: "/avis-clients" }]} />
          <PageTitle className="mt-6">
            Avis de <TitleAccent>nos clients</TitleAccent>
          </PageTitle>
          <p className="mt-6 max-w-2xl leading-relaxed">
            Voici les {avisClients.length} avis authentiques laissés par nos clients, repris mot
            pour mot de notre précédent site. Ils portent sur des chantiers réels de couverture,
            de démoussage et de zinguerie menés à Villemandeur et dans le Loiret.
          </p>
        </Container>
      </div>

      <section aria-label="Tous les avis clients" className="bg-white">
        <Container className="py-16 sm:py-20">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {avisClients.map((avis) => (
              <li key={avis.author}>
                <ReviewCard avis={avis} />
              </li>
            ))}
          </ul>

          <Card variant="cream" className="mx-auto mt-12 max-w-3xl text-center">
            <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">
              Vous avez fait appel à JCD Rénovation ?
            </h2>
            <p className="mt-3 leading-relaxed">
              Votre retour aide les habitants de l’agglomération Montargoise à choisir un
              artisan de confiance.
            </p>
          </Card>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
