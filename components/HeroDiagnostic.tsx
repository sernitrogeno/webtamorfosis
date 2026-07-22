"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { AlertTriangle, Check, Sparkles } from "lucide-react";
import {
  MockupFrame,
  RestaurantOld,
  RestaurantNew,
} from "@/components/mockups/SiteMockups";
import { cn } from "@/lib/utils";

interface Pin {
  x: number;
  y: number;
  n: number;
}

// Chinchetas de PROBLEMAS sobre la web antigua (coordenadas en %).
const beforePins: Pin[] = [
  { x: 30, y: 20, n: 1 },
  { x: 50, y: 34, n: 2 },
  { x: 24, y: 52, n: 3 },
  { x: 52, y: 72, n: 4 },
  { x: 50, y: 88, n: 5 },
];
const beforeLegend = [
  "Diseño anticuado que resta credibilidad",
  "Mensaje genérico: no se entiende qué te diferencia",
  "Imágenes de baja calidad",
  "Carta en PDF, incómoda de leer en el móvil",
  "Contenido sin actualizar desde hace años",
];

// Chinchetas de MEJORAS sobre la web rediseñada.
const afterPins: Pin[] = [
  { x: 82, y: 18, n: 1 },
  { x: 50, y: 42, n: 2 },
  { x: 40, y: 60, n: 3 },
  { x: 50, y: 86, n: 4 },
];
const afterLegend = [
  "Botón de reserva siempre visible",
  "Diseño moderno que da confianza y apetece",
  "Reseñas y valoración a la vista",
  "Carta, reservas y cómo llegar en un vistazo",
];

export function HeroDiagnostic() {
  const [view, setView] = useState<"antes" | "despues">("antes");
  const reduce = useReducedMotion();
  const isBefore = view === "antes";
  const pins = isBefore ? beforePins : afterPins;
  const legend = isBefore ? beforeLegend : afterLegend;

  return (
    <div className="relative">
      {/* Toggle */}
      <div className="mb-4 inline-flex rounded-full border border-black/10 bg-white/70 p-1 backdrop-blur dark:border-white/10 dark:bg-white/5">
        {(["antes", "despues"] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            aria-pressed={view === v}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-semibold transition",
              view === v
                ? v === "antes"
                  ? "bg-slate-900 text-white"
                  : "bg-brand-gradient text-white shadow-glow"
                : "text-muted hover:text-foreground"
            )}
          >
            {v === "antes" ? "Tu web hoy" : "Con Webtamorfosis"}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-[1.3fr_1fr] sm:items-center">
        {/* Maqueta con chinchetas */}
        <div className="relative">
          {/* halo */}
          <div
            className={cn(
              "absolute -inset-4 -z-10 rounded-3xl blur-2xl transition-colors duration-500",
              isBefore ? "bg-slate-400/20" : "bg-brand-gradient-soft"
            )}
            aria-hidden="true"
          />
          <div className="relative overflow-visible rounded-xl shadow-soft">
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                <MockupFrame
                  tone={isBefore ? "old" : "modern"}
                  url="restaurante-elrincon.es"
                  size="md"
                >
                  {isBefore ? <RestaurantOld /> : <RestaurantNew />}
                </MockupFrame>
              </motion.div>
            </AnimatePresence>

            {/* Chinchetas */}
            {pins.map((pin) => (
              <span
                key={`${view}-${pin.n}`}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                aria-hidden="true"
              >
                <span className="relative flex h-6 w-6 items-center justify-center">
                  {!reduce && (
                    <span
                      className={cn(
                        "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
                        isBefore ? "bg-red-400" : "bg-emerald-400"
                      )}
                    />
                  )}
                  <span
                    className={cn(
                      "relative inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-md ring-2 ring-white",
                      isBefore ? "bg-red-500" : "bg-emerald-500"
                    )}
                  >
                    {pin.n}
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Leyenda numerada */}
        <div>
          <div
            className={cn(
              "mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold",
              isBefore
                ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-300"
                : "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
            )}
          >
            {isBefore ? (
              <>
                <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" /> Lo que
                frena tu web
              </>
            ) : (
              <>
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Lo que
                mejoramos
              </>
            )}
          </div>
          <ul className="space-y-2.5">
            {legend.map((item, i) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <span
                  className={cn(
                    "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white",
                    isBefore ? "bg-red-500" : "bg-emerald-500"
                  )}
                >
                  {isBefore ? i + 1 : <Check className="h-3 w-3" aria-hidden="true" />}
                </span>
                <span className={isBefore ? "text-muted" : "font-medium"}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">
            {isBefore
              ? "Y esto es solo lo que se ve por encima."
              : "El mismo negocio, contado como merece."}
          </p>
        </div>
      </div>
    </div>
  );
}
