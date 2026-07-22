"use client";

import { useState } from "react";
import { CaseSlider } from "@/components/CaseSlider";
import { RealCaseSlider } from "@/components/RealCase";
import { cn } from "@/lib/utils";

const tabs = [
  { slug: "real", label: "Caso real" },
  { slug: "restaurante-local", label: "Restaurante" },
  { slug: "clinica", label: "Clínica" },
  { slug: "empresa-reformas", label: "Reformas" },
];

/** Comparador interactivo con pestañas para cambiar de sector. */
export function BeforeAfterShowcase() {
  const [active, setActive] = useState(tabs[0].slug);

  return (
    <div>
      <div
        className="mb-4 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Elegir sector para comparar"
      >
        {tabs.map((t) => {
          const isActive = t.slug === active;
          return (
            <button
              key={t.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.slug)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "border-transparent bg-brand-gradient text-white shadow-glow"
                  : "border-black/10 text-muted hover:border-brand-200 hover:text-foreground dark:border-white/10"
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {active === "real" ? <RealCaseSlider /> : <CaseSlider slug={active} />}

      <p className="mt-3 text-sm text-muted">
        {active === "real"
          ? "Transformación real hecha con nuestro análisis. Arrastra para comparar."
          : "Arrastra el control, o usa las flechas del teclado, para comparar el antes y el después."}
      </p>
    </div>
  );
}
