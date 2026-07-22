import type { Metadata } from "next";

import { GalleryLightbox } from "@/components/realisations/GalleryLightbox";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { realisationsPhotos } from "@/content/realisations";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nos Réalisations : Toitures & Zinguerie | JCD Rénovation",
  description:
    "Découvrez nos chantiers de couverture, zinguerie et démoussage réalisés à Villemandeur et dans le Loiret.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <div className="bg-cream">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs crumbs={[{ name: "Réalisations", path: "/realisations" }]} />
          <PageTitle className="mt-6">
            Nos <TitleAccent>réalisations</TitleAccent>
          </PageTitle>
          <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
            {realisationsPhotos.length} photos de chantiers réels (rénovation de toiture, pose de
            tuiles, zinguerie, démoussage) réalisés dans le Loiret et l’agglomération Montargoise.
            Cliquez sur une vignette pour l’agrandir.
          </p>
        </Container>
      </div>

      <section aria-label="Galerie de nos chantiers">
        <Container className="py-12 sm:py-16">
          <GalleryLightbox photos={realisationsPhotos} />
        </Container>
      </section>

      <CtaBanner title="Votre toiture mérite le même soin. Parlons de votre projet." />
    </>
  );
}
