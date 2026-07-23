"use client";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useId, useState } from "react";

import type { FaqItem } from "@/content/types";
import { cn } from "@/lib/utils";

type AccordionProps = {
  items: readonly FaqItem[];
  className?: string;
};

/**
 * Accordéon FAQ de la maquette : carte blanche, icône +/− à droite, ligne de
 * séparation fine (cahier §2.3). Accessible : bouton aria-expanded + région.
 */
export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("rounded-card shadow-card divide-y divide-navy/10 bg-white", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headerId = `${baseId}-header-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-bold text-navy transition-colors hover:text-primary sm:text-lg"
              >
                {item.question}
                {isOpen ? (
                  <RemoveRoundedIcon fontSize="inherit" className="text-[20px] shrink-0 text-primary" aria-hidden />
                ) : (
                  <AddRoundedIcon fontSize="inherit" className="text-[20px] shrink-0 text-primary" aria-hidden />
                )}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className="px-6 pb-6"
            >
              <p className="leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
