import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import type { Avis } from "@/content/types";

type ReviewCardProps = {
  avis: Avis;
};

/**
 * Carte avis client (page /avis-clients) : citation complète, étoiles,
 * initiale de l'auteur, nom et source — texte repris mot pour mot (cahier §4.10).
 */
export function ReviewCard({ avis }: ReviewCardProps) {
  return (
    <Card className="h-full">
      <figure className="flex h-full flex-col gap-4">
        <StarRating rating={avis.rating} />
        <blockquote className="flex-1 leading-relaxed text-navy">
          «&nbsp;{avis.text}&nbsp;»
        </blockquote>
        <figcaption className="flex items-center gap-3 border-t border-navy/10 pt-4">
          <span
            aria-hidden
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading font-bold text-primary"
          >
            {avis.author.charAt(0).toUpperCase()}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-navy">{avis.author}</span>
            <span className="text-sm">{avis.source}</span>
          </span>
        </figcaption>
      </figure>
    </Card>
  );
}
