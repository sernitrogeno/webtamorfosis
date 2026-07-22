"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Gauge, ArrowRight, AlertTriangle, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Ejemplo ILUSTRATIVO de cómo se ve el diagnóstico gratis: una nota general
 * (0-100) y una valoración por categorías. Incluye un toggle para ver el
 * potencial tras el rediseño. Las cifras son un ejemplo, no una medición real.
 */

interface Category {
  label: string;
  before: number; // sobre 10
  after: number;
}

const categories: Category[] = [
  { label: "Diseño e imagen", before: 5, after: 9 },
  { label: "Experiencia móvil", before: 3, after: 10 },
  { label: "Velocidad de carga", before: 4, after: 9 },
  { label: "SEO básico", before: 5, after: 9 },
  { label: "Confianza y claridad", before: 4, after: 10 },
];

const beforeScore = 48;
const afterScore = 94;

const beforeIssues = [
  "No está bien adaptada al móvil",
  "Carga por encima de 5 segundos",
  "Sin llamadas a la acción claras",
];
const afterWins = [
  "Perfecta en el móvil",
  "Carga rápida y fluida",
  "Botones claros para contactar",
];

function scoreTone(score: number) {
  if (score < 50) return { text: "text-red-500", ring: "#ef4444", label: "Mejorable" };
  if (score < 75)
    return { text: "text-amber-500", ring: "#f59e0b", label: "Aceptable" };
  return { text: "text-emerald-500", ring: "#10b981", label: "Excelente" };
}

export function DiagnosisSample() {
  const [view, setView] = useState<"antes" | "despues">("antes");
  const reduce = useReducedMotion();
  const isBefore = view === "antes";
  const score = isBefore ? beforeScore : afterScore;
  const tone = scoreTone(score);

  const R = 42;
  const CIRC = 2 * Math.PI * R;
  const offset = CIRC - (score / 100) * CIRC;

  return (
    <div className="surface-card overflow-hidden">
      {/* Cabecera del informe */}
      <div className="flex items-center justify-between gap-3 border-b border-black/5 px-5 py-3.5 dark:border-white/5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
            <Gauge className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold">Diagnóstico de tu web</p>
            <p className="text-[11px] text-muted">ejemplo · tu-negocio.es</p>
          </div>
        </div>
        {/* Toggle */}
        <div className="inline-flex rounded-full border border-black/10 bg-white/70 p-0.5 text-xs dark:border-white/10 dark:bg-white/5">
          {(["antes", "despues"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              aria-pressed={view === v}
              className={cn(
                "rounded-full px-2.5 py-1 font-semibold transition",
                view === v
                  ? v === "antes"
                    ? "bg-slate-900 text-white"
                    : "bg-brand-gradient text-white"
                  : "text-muted"
              )}
            >
              {v === "antes" ? "Ahora" : "Rediseñada"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 p-5 sm:grid-cols-[auto_1fr] sm:items-center">
        {/* Nota global */}
        <div className="flex items-center gap-4 sm:flex-col sm:gap-1">
          <div className="relative h-28 w-28">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
              <circle
                cx="50"
                cy="50"
                r={R}
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-black/[0.06] dark:text-white/10"
              />
              <motion.circle
                cx="50"
                cy="50"
                r={R}
                fill="none"
                stroke={tone.ring}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                initial={false}
                animate={{ strokeDashoffset: offset }}
                transition={reduce ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={cn("text-3xl font-extrabold tabular-nums", tone.text)}>
                {score}
              </span>
              <span className="text-[10px] font-medium text-muted">/ 100</span>
            </div>
          </div>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-bold",
              isBefore
                ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-300"
                : "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
            )}
          >
            {tone.label}
          </span>
        </div>

        {/* Barras por categoría */}
        <ul className="space-y-2.5">
          {categories.map((c) => {
            const val = isBefore ? c.before : c.after;
            const pct = val * 10;
            const good = val >= 7;
            return (
              <li key={c.label}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-medium">{c.label}</span>
                  <span className="tabular-nums text-muted">{val}/10</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/10">
                  <motion.div
                    className={cn(
                      "h-full rounded-full",
                      good
                        ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                        : val >= 5
                          ? "bg-gradient-to-r from-amber-400 to-amber-500"
                          : "bg-gradient-to-r from-red-400 to-red-500"
                    )}
                    initial={false}
                    animate={{ width: `${pct}%` }}
                    transition={reduce ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Principales hallazgos */}
      <div className="border-t border-black/5 px-5 py-4 dark:border-white/5">
        <p
          className={cn(
            "mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide",
            isBefore ? "text-red-500" : "text-emerald-600 dark:text-emerald-400"
          )}
        >
          {isBefore ? (
            <>
              <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" /> Principales
              mejoras detectadas
            </>
          ) : (
            <>
              <Check className="h-3.5 w-3.5" aria-hidden="true" /> Resueltos con el
              rediseño
            </>
          )}
        </p>
        <ul className="grid gap-1.5 sm:grid-cols-3">
          {(isBefore ? beforeIssues : afterWins).map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-[13px] text-muted">
              <span
                className={cn(
                  "mt-1 h-1.5 w-1.5 shrink-0 rounded-full",
                  isBefore ? "bg-red-400" : "bg-emerald-400"
                )}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Nota + CTA */}
      <div className="flex flex-col items-start gap-2 border-t border-black/5 bg-brand-gradient-soft px-5 py-3.5 dark:border-white/5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Ejemplo ilustrativo. Pide gratis la nota real de tu web.
        </p>
        <a
          href="#formulario"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-200"
        >
          Ver la nota de mi web
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
