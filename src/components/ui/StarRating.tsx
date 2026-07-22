import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  className?: string;
};

/** 5 étoiles oranges (témoignages — cahier §4.10). */
export function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="img"
      aria-label={`Note : ${rating} sur 5`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn("size-4", i < rating ? "fill-primary text-primary" : "text-navy/20")}
          aria-hidden
        />
      ))}
    </div>
  );
}
