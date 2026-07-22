"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import type { RealisationPhoto } from "@/content/types";

type GalleryLightboxProps = {
  photos: readonly RealisationPhoto[];
};

/**
 * Grille de vignettes + visionneuse plein écran (yet-another-react-lightbox).
 * Îlot client minimal : les données restent construites côté serveur (page RSC),
 * seul l'état d'ouverture (index de la photo affichée) vit ici.
 */
export function GalleryLightbox({ photos }: GalleryLightboxProps) {
  const [index, setIndex] = useState(-1);

  const slides = photos.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    alt: photo.alt,
  }));

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Agrandir : ${photo.alt}`}
              className="rounded-card group block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="rounded-card block overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1152px) 270px, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        labels={{
          Previous: "Photo précédente",
          Next: "Photo suivante",
          Close: "Fermer",
          Lightbox: "Visionneuse de photos",
          "Photo gallery": "Galerie de photos",
          "{index} of {total}": "{index} sur {total}",
        }}
      />
    </>
  );
}
