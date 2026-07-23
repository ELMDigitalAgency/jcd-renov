import { BadgeCheck, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { DevisForm } from "@/components/devis/DevisForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { StarRating } from "@/components/ui/StarRating";
import { avisClients } from "@/content/avis";
import { processSteps } from "@/content/process";
import type { FaqItem } from "@/content/types";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const metadata = buildMetadata({
  title: "Devis Gratuit Couvreur Villemandeur | JCD Rénovation",
  description:
    "Demandez votre devis gratuit pour vos travaux de couverture, zinguerie, démoussage ou recherche de fuite à Villemandeur.",
  path: "/devis-gratuit",
});

/** FAQ propre à la page devis. Le schema FAQPage principal est émis ailleurs. */
const devisFaq: readonly FaqItem[] = [
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui : la visite sur place et le devis détaillé sont entièrement gratuits et sans engagement. Vous restez libre d'accepter ou non.",
  },
  {
    question: "Sous quel délai recevrai-je le devis ?",
    answer:
      "Vous recevez votre devis sous 24 à 48 h après la visite, chaque poste chiffré clairement, sans surprise.",
  },
  {
    question: "Dois-je préparer quelque chose ?",
    answer:
      "Non, l'accès au terrain suffit pour le diagnostic. Si vous avez des photos du problème, elles nous aident à préparer la visite.",
  },
] as const;

/** Preuves vérifiables affichées près du formulaire (confiance). */
const trustBadges = [
  {
    icon: ShieldCheck,
    title: "Garantie décennale",
    text: "Attestation d'assurance fournie avec le devis sur demande",
  },
  {
    icon: BadgeCheck,
    title: "Entreprise déclarée",
    text: `SIRET ${siteConfig.siret}`,
  },
  {
    icon: MapPin,
    title: "Artisan local",
    text: "Villemandeur et agglomération Montargoise, pas un réseau national",
  },
] as const;

export default function DevisGratuitPage() {
  // 2 avis courts et parlants pour rassurer au moment de remplir le formulaire.
  const avisRassurance = avisClients.slice(0, 2);

  return (
    <>
      <section className="bg-cream bg-dots">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs crumbs={[{ name: "Devis gratuit", path: "/devis-gratuit" }]} />
          <PageTitle className="mt-6">
            Votre devis <TitleAccent>gratuit</TitleAccent>
          </PageTitle>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Décrivez vos travaux de couverture, zinguerie, démoussage ou recherche de fuite : nous
            vous répondons sous 24 à 48 h, sans engagement.
          </p>
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-medium text-navy">
            Vous préférez en parler de vive voix ?
            <a
              href={siteConfig.phoneHref}
              className="font-bold text-primary-ink underline-offset-4 hover:underline"
            >
              Appelez le {siteConfig.phone}
            </a>
            (urgence fuite : réponse prioritaire).
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
            <div className="space-y-6">
              <DevisForm />

              {/* Engagement anti-démarchage : lever LA peur du formulaire artisan */}
              <p className="text-sm leading-relaxed">
                <span className="font-semibold text-navy">Aucun démarchage :</span> votre demande
                sert uniquement à préparer votre devis. Vos coordonnées ne sont ni revendues ni
                utilisées pour de la publicité (
                <Link
                  href="/politique-de-confidentialite"
                  className="text-primary-ink underline underline-offset-4"
                >
                  politique de confidentialité
                </Link>
                ).
              </p>
            </div>

            <aside aria-label="Informations pratiques" className="space-y-6">
              <Card variant="white" className="!p-6">
                <ul className="space-y-4">
                  {trustBadges.map((badge) => (
                    <li key={badge.title} className="flex items-start gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-cream">
                        <badge.icon className="size-5 text-primary-ink" aria-hidden />
                      </span>
                      <div>
                        <p className="font-heading font-bold text-navy">{badge.title}</p>
                        <p className="text-sm leading-relaxed">{badge.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card variant="cream">
                <h2 className="font-heading text-xl font-bold text-navy">
                  Comment ça se passe&nbsp;?
                </h2>
                <ol className="mt-5 space-y-4">
                  {processSteps.map((step, index) => (
                    <li key={step.title} className="flex gap-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-ink text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-navy">{step.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>

              <Card variant="white">
                <PhoneLink withLabel />
                <p className="mt-4 text-sm">Du lundi au samedi</p>
                <p className="mt-1 text-sm font-medium text-navy">
                  Urgence fuite&nbsp;: appelez directement.
                </p>
              </Card>

              {/* Preuve sociale au moment de la décision */}
              <Card variant="white">
                <p className="font-heading font-bold text-navy">Ils nous ont fait confiance</p>
                <ul className="mt-4 space-y-5">
                  {avisRassurance.map((avis) => (
                    <li key={avis.author} className="border-l-2 border-primary/40 pl-4">
                      <StarRating rating={avis.rating} />
                      <p className="mt-2 text-sm leading-relaxed text-navy">
                        «&nbsp;{avis.text}&nbsp;»
                      </p>
                      <p className="mt-1.5 text-xs font-semibold text-body">
                        {avis.author} · {avis.source}
                      </p>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/avis-clients"
                  className="mt-4 inline-block text-sm font-semibold text-primary-ink underline-offset-4 hover:underline"
                >
                  Lire tous les avis
                </Link>
              </Card>
            </aside>
          </div>
        </Container>
      </section>

      <FaqSection
        items={devisFaq}
        title={
          <>
            Questions fréquentes sur le <TitleAccent>devis</TitleAccent>
          </>
        }
        withSchema={false}
      />
    </>
  );
}
