import Image from "next/image";

import { cn } from "@/lib/utils";

type FramedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  /** Carte flottante ancrée en bas de la photo (ex. badge décennale). */
  badge?: React.ReactNode;
};

/**
 * Traitement photo signature du site : cale orange décalée derrière l'image,
 * liseré fin, badge flottant optionnel. Donne une identité aux photos de
 * chantier au lieu du simple rectangle arrondi générique.
 */
export function FramedImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  className,
  imageClassName,
  badge,
}: FramedImageProps) {
  return (
    <div className={cn("relative", badge ? "mb-8" : undefined, className)}>
      <div
        aria-hidden
        className="rounded-card absolute inset-0 -z-10 translate-x-3 translate-y-3 bg-primary/20 sm:translate-x-5 sm:translate-y-5"
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={cn("rounded-card w-full object-cover ring-1 ring-navy/10", imageClassName)}
      />
      {badge ? (
        <div className="absolute -bottom-7 left-4 sm:left-6">{badge}</div>
      ) : null}
    </div>
  );
}
