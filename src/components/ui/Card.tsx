import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  /** Fonds de la maquette BuildSafe : blanc, crème, rose pâle, lavande, orange, marine. */
  variant?: "white" | "cream" | "blush" | "lavender" | "orange" | "navy";
  className?: string;
};

/** Carte du design system : radius 24px + ombre douce (cahier §2.3). */
export function Card({ children, variant = "white", className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card shadow-card p-6 sm:p-8",
        variant === "white" && "bg-white",
        variant === "cream" && "bg-cream",
        variant === "blush" && "bg-blush",
        variant === "lavender" && "bg-lavender",
        variant === "orange" && "bg-primary text-white",
        variant === "navy" && "bg-navy text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
