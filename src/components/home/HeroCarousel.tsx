"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type HeroSlide = {
  src: string;
  alt: string;
};

type HeroCarouselProps = {
  slides: readonly HeroSlide[];
};

const AUTOPLAY_MS = 5000;

/**
 * Carrousel photo du hero : fait défiler les chantiers réels. Avance
 * automatique douce, en pause au survol/focus et désactivée si l'utilisateur
 * préfère réduire les animations (prefers-reduced-motion).
 */
export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const paused = useRef(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Avance automatique respectueuse (reduced-motion, survol, onglet caché).
  useEffect(() => {
    if (!emblaApi) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!paused.current && !document.hidden) {
        emblaApi.scrollNext();
      }
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [emblaApi]);

  return (
    <div
      role="region"
      aria-roledescription="carrousel"
      aria-label="Photos de nos chantiers"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
      onFocusCapture={() => {
        paused.current = true;
      }}
      onBlurCapture={() => {
        paused.current = false;
      }}
    >
      <div ref={emblaRef} className="rounded-card overflow-hidden ring-1 ring-navy/10">
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              role="group"
              aria-roledescription="diapositive"
              aria-label={`Photo ${index + 1} sur ${slides.length}`}
              className="relative min-w-0 flex-[0_0_100%]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 520px, calc(100vw - 2rem)"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Points de navigation */}
      <div className="mt-4 flex justify-center gap-1.5">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Voir la photo ${index + 1}`}
            aria-current={index === selectedIndex ? "true" : undefined}
            className="group flex size-6 items-center justify-center"
          >
            <span
              aria-hidden
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "w-5 bg-primary-ink"
                  : "w-2 bg-navy/20 group-hover:bg-navy/40",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
