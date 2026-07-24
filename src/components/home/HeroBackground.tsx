"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type HeroSlide = {
  src: string;
  alt: string;
};

type HeroBackgroundProps = {
  slides: readonly HeroSlide[];
};

const INTERVAL_MS = 6000;

/**
 * Fond plein écran du hero : les photos de chantier occupent tout l'arrière-plan
 * et s'enchaînent en fondu. Respecte prefers-reduced-motion (image fixe) et se
 * met en pause quand l'onglet n'est pas visible.
 */
export function HeroBackground({ slides }: HeroBackgroundProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!document.hidden) {
        setActive((current) => (current + 1) % slides.length);
      }
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div aria-hidden className="absolute inset-0 -z-20 bg-navy">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out",
            index === active ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </div>
  );
}
