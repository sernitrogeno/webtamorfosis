"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

interface FAQAccordionProps {
  items: FaqItem[];
}

/** Acordeón accesible (patrón WAI-ARIA con botones y regiones). */
export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="mx-auto max-w-3xl divide-y divide-black/5 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft dark:divide-white/5 dark:border-white/5 dark:bg-white/[0.02]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const btnId = `${uid}-faq-btn-${i}`;
        const panelId = `${uid}-faq-panel-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-black/[0.02] dark:hover:bg-white/5 sm:px-6"
              >
                <span className="text-base font-semibold sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-5 sm:px-6"
            >
              <p className="text-pretty leading-relaxed text-muted">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
