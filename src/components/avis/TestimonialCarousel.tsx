"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { StarRating } from "@/components/ui/StarRating";
import type { Avis } from "@/content/types";
import { cn } from "@/lib/utils";

type TestimonialCarouselProps = {
  avis: readonly Avis[];
};

/**
 * Carrousel de témoignages (accueil, cahier §4.10) : un avis visible à la
 * fois, flèches + points synchronisés. Pas d'autoplay (accessibilité) —
 * la navigation reste entièrement au contrôle de l'utilisateur.
 */
export function TestimonialCarousel({ avis }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <div role="region" aria-roledescription="carrousel" aria-label="Témoignages clients">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {avis.map((item, index) => (
            <div
              key={item.author}
              role="group"
              aria-roledescription="diapositive"
              aria-label={`Avis ${index + 1} sur ${avis.length}`}
              className="min-w-0 flex-[0_0_100%] px-4"
            >
              <figure className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
                <blockquote className="text-lg leading-relaxed text-navy sm:text-xl">
                  «&nbsp;{item.text}&nbsp;»
                </blockquote>
                <StarRating rating={item.rating} />
                <figcaption className="flex flex-col items-center gap-2">
                  <span
                    aria-hidden
                    className="flex size-12 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-bold text-primary"
                  >
                    {item.author.charAt(0).toUpperCase()}
                  </span>
                  <span className="font-heading font-bold text-navy">{item.author}</span>
                  <span className="text-sm">{item.source}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Avis précédent"
          className="inline-flex size-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>

        <div className="flex items-center gap-2">
          {scrollSnaps.map((snap, index) => (
            <button
              key={snap}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Aller à l’avis ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : undefined}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "w-6 bg-primary"
                  : "w-2.5 bg-navy/20 hover:bg-navy/40",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Avis suivant"
          className="inline-flex size-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
