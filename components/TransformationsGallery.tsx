"use client";

import { useState } from "react";
import { Check, X, Wand2, ArrowRight } from "lucide-react";
import { CaseSlider } from "@/components/CaseSlider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cases } from "@/data/cases";
import type { CaseSector, CaseStudy } from "@/types";
import { cn } from "@/lib/utils";

const filters: { value: CaseSector | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "restauracion", label: "Restauración" },
  { value: "salud", label: "Salud" },
  { value: "servicios", label: "Servicios" },
  { value: "deporte", label: "Gimnasios" },
];

export function TransformationsGallery() {
  const [active, setActive] = useState<CaseSector | "todos">("todos");
  const filtered =
    active === "todos" ? cases : cases.filter((c) => c.sector === active);

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filtrar transformaciones por sector"
      >
        {filters.map((f) => {
          const isActive = active === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setActive(f.value)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "border-transparent bg-brand-gradient text-white shadow-glow"
                  : "border-black/10 text-muted hover:border-brand-200 hover:text-foreground dark:border-white/10"
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-muted">
          No hay ejemplos para este sector todavía.
        </p>
      ) : (
        <div className="mt-12 space-y-16 sm:space-y-24">
          {filtered.map((study, i) => (
            <TransformationItem key={study.slug} study={study} flip={i % 2 === 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function TransformationItem({
  study,
  flip,
}: {
  study: CaseStudy;
  flip: boolean;
}) {
  const Icon = study.icon;
  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Comparador interactivo */}
      <div className={cn(flip && "lg:order-2")}>
        <CaseSlider slug={study.slug} />
        <p className="mt-3 text-center text-sm text-muted">
          Arrastra para comparar el antes y el después.
        </p>
      </div>

      {/* Detalle */}
      <div className={cn(flip && "lg:order-1")}>
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-2xl font-bold leading-tight">{study.name}</h2>
            <span className="text-sm text-muted">{study.sectorLabel}</span>
          </div>
          <Badge tone="warm" className="ml-auto">
            Ejemplo conceptual
          </Badge>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/[0.02]">
            <h3 className="mb-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">
              <X className="h-3.5 w-3.5" aria-hidden="true" /> El problema
            </h3>
            <ul className="space-y-1.5">
              {study.before.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/[0.06]">
            <h3 className="mb-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              <Check className="h-3.5 w-3.5" aria-hidden="true" /> El resultado
            </h3>
            <ul className="space-y-1.5">
              {study.after.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-medium">
                  <Check
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {study.decisions && (
          <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-gradient-soft p-4 dark:border-brand-500/20">
            <h3 className="mb-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-700 dark:text-brand-200">
              <Wand2 className="h-3.5 w-3.5" aria-hidden="true" /> Cambios que aplicamos
            </h3>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {study.decisions.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient"
                    aria-hidden="true"
                  />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5">
          <Button href="/#analisis" variant="secondary">
            Quiero una transformación así
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </article>
  );
}
