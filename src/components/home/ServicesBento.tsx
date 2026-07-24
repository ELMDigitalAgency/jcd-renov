import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/ServiceIcon";
import { getPrestation } from "@/content/prestations";

/** Ligne de lien interne d'une carte bento (ancre de maillage + flèche). */
function CardLinkLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={
        light
          ? "mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-white"
          : "mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-navy transition-colors group-hover:text-primary"
      }
    >
      {children}
      <ArrowForwardRoundedIcon
        fontSize="inherit"
        className="text-base transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
    </span>
  );
}

/**
 * Grille bento « Nos prestations » (cahier §4.6, maquette BuildSafe) :
 * 6 cartes pilotées par content/prestations — 1 colonne mobile, 2 tablette,
 * 4 desktop (les cartes démoussage et recherche de fuite s'étendent sur 2).
 * Chaque carte prestation est entièrement cliquable.
 */
export function ServicesBento() {
  const demoussage = getPrestation("demoussage-toiture-villemandeur");
  const zinguerie = getPrestation("zinguerie-villemandeur");
  const fuite = getPrestation("recherche-de-fuite-toiture-villemandeur");
  const couverture = getPrestation("couvreur-villemandeur");
  const peinture = getPrestation("peinture-villemandeur");
  const charpente = getPrestation("charpente-villemandeur");

  return (
    <section aria-label="Nos prestations" className="bg-cream">
      <Container className="py-16 sm:py-20">
        <SectionHeading title="Nos prestations" />

        <div className="mt-12 grid grid-flow-dense grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 — Démoussage (blush, photo) */}
          <Link
            href={`/${demoussage.slug}`}
            className="group block sm:col-span-2"
          >
            <Card
              variant="blush"
              className="flex h-full flex-col gap-4 transition-transform duration-300 group-hover:-translate-y-1"
            >
              <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                Démoussage &amp; traitement de toiture
              </h3>
              <p className="max-w-md text-sm leading-relaxed">
                Nettoyage, traitement anti-mousse et hydrofuge : un entretien qui prolonge la
                durée de vie de vos tuiles.
              </p>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={demoussage.heroImage}
                  alt={demoussage.heroImageAlt}
                  width={1179}
                  height={655}
                  sizes="(min-width: 1024px) 512px, calc(100vw - 5rem)"
                  className="aspect-[2/1] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardLinkLabel>Découvrir le démoussage de couverture</CardLinkLabel>
            </Card>
          </Link>

          {/* 2 — Couverture */}
          <Link href={`/${couverture.slug}`} className="group block">
            <Card
              variant="white"
              className="flex h-full flex-col gap-4 transition-transform duration-300 group-hover:-translate-y-1"
            >
              <IconBadge icon={couverture.icon} />
              <h3 className="font-heading text-xl font-bold text-navy">Couverture</h3>
              <p className="text-sm leading-relaxed">
                Pose, rénovation et réparation de toiture, en tuile comme en ardoise.
              </p>
              <CardLinkLabel>Voir la couverture de toiture</CardLinkLabel>
            </Card>
          </Link>

          {/* 3 — Zinguerie (lavender) */}
          <Link
            href={`/${zinguerie.slug}`}
            className="group block"
          >
            <Card
              variant="lavender"
              className="flex h-full flex-col gap-4 transition-transform duration-300 group-hover:-translate-y-1"
            >
              <IconBadge icon={zinguerie.icon} tone="white" />
              <h3 className="font-heading text-xl font-bold text-navy">Zinguerie</h3>
              <p className="text-sm leading-relaxed">
                Gouttières, solins, chéneaux et noues : les ouvrages métalliques qui gardent
                votre maison au sec.
              </p>
              <CardLinkLabel>Voir nos travaux de zinguerie</CardLinkLabel>
            </Card>
          </Link>

          {/* 4 — Peinture */}
          <Link href={`/${peinture.slug}`} className="group block">
            <Card
              variant="white"
              className="flex h-full flex-col gap-4 transition-transform duration-300 group-hover:-translate-y-1"
            >
              <IconBadge icon={peinture.icon} />
              <h3 className="font-heading text-xl font-bold text-navy">Peinture &amp; façade</h3>
              <p className="text-sm leading-relaxed">
                Ravalement de façade et peinture intérieure, préparation soignée et finitions
                nettes.
              </p>
              <CardLinkLabel>Voir la peinture et le ravalement</CardLinkLabel>
            </Card>
          </Link>

          {/* 5 — Recherche de fuite (orange, large, photo portrait) */}
          <Link
            href={`/${fuite.slug}`}
            className="group block sm:col-span-2"
          >
            <Card
              variant="orange"
              className="flex h-full flex-col overflow-hidden p-0 transition-transform duration-300 group-hover:-translate-y-1 sm:flex-row sm:p-0"
            >
              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                <h3 className="font-heading text-xl font-bold sm:text-2xl">Recherche de fuite</h3>
                <p className="text-sm leading-relaxed text-white">
                  Une tache au plafond signale rarement le point d’entrée réel de l’eau. Nous
                  localisons l’origine exacte de l’infiltration avant de réparer.
                </p>
                <CardLinkLabel light>Découvrir la recherche de fuite</CardLinkLabel>
              </div>
              <div className="aspect-[2/1] w-full sm:aspect-auto sm:w-2/5">
                <Image
                  src={fuite.heroImage}
                  alt={fuite.heroImageAlt}
                  width={738}
                  height={1600}
                  sizes="(min-width: 640px) 224px, calc(100vw - 2rem)"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Card>
          </Link>

          {/* 6 — Charpente */}
          <Link href={`/${charpente.slug}`} className="group block">
            <Card
              variant="white"
              className="flex h-full flex-col gap-4 transition-transform duration-300 group-hover:-translate-y-1"
            >
              <IconBadge icon={charpente.icon} />
              <h3 className="font-heading text-xl font-bold text-navy">Charpente</h3>
              <p className="text-sm leading-relaxed">
                Diagnostic, réparation, renfort et traitement du bois de charpente.
              </p>
              <CardLinkLabel>Voir les travaux de charpente</CardLinkLabel>
            </Card>
          </Link>

          {/* 7 — Contact */}
          <Link href="/devis-gratuit" className="group block">
            <Card
              variant="navy"
              className="flex h-full flex-col justify-between gap-6 transition-transform duration-300 group-hover:-translate-y-1"
            >
              <h3 className="font-heading text-xl font-bold text-white">
                Une question ?<span className="block">Contactez-nous</span>
              </h3>
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary text-white">
                <ArrowForwardRoundedIcon fontSize="inherit" className="text-[20px]" aria-hidden />
              </span>
            </Card>
          </Link>
        </div>
      </Container>
    </section>
  );
}
