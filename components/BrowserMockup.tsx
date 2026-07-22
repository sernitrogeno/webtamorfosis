import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BrowserMockupProps {
  url?: string;
  children: ReactNode;
  className?: string;
  tone?: "old" | "modern";
  /** Sin bordes/redondeo/sombra propios (para encajar dentro de un contenedor). */
  bare?: boolean;
}

/**
 * Marco de navegador reutilizable. Sirve de contenedor para las maquetas
 * "antes" (old) y "después" (modern) usadas en el hero y las comparaciones.
 */
export function BrowserMockup({
  url = "tu-negocio.es",
  children,
  className,
  tone = "modern",
  bare = false,
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        bare
          ? "h-full"
          : "rounded-xl border shadow-soft",
        tone === "modern"
          ? bare
            ? "bg-white dark:bg-[#141026]"
            : "border-brand-100 bg-white dark:border-white/10 dark:bg-[#141026]"
          : bare
            ? "bg-slate-50"
            : "border-slate-300 bg-slate-50",
        className
      )}
    >
      {/* Barra del navegador */}
      <div
        className={cn(
          "flex items-center gap-2 border-b px-3 py-2",
          tone === "modern"
            ? "border-brand-50 bg-brand-50/50 dark:border-white/5 dark:bg-white/[0.03]"
            : "border-slate-200 bg-slate-200/70"
        )}
      >
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
        <div
          className={cn(
            "ml-2 flex-1 truncate rounded-md px-2 py-1 text-[11px]",
            tone === "modern"
              ? "bg-white text-muted dark:bg-white/5"
              : "bg-white/60 text-slate-400"
          )}
        >
          {tone === "modern" ? "https://" : "http://"}
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

/** Maqueta interior de una web ANTIGUA (apagada, desordenada). */
export function OldSitePreview() {
  return (
    <div className="bg-slate-100 p-4 font-serif text-slate-500">
      <div className="mb-3 flex items-center justify-between border-b-2 border-slate-300 pb-2">
        <div className="text-sm font-bold text-slate-600">Mi Negocio S.L.</div>
        <div className="hidden gap-2 text-[10px] underline sm:flex">
          <span>Inicio</span>
          <span>Nosotros</span>
          <span>Servicios</span>
          <span>Contacto</span>
        </div>
      </div>
      <div className="mb-3 rounded border border-slate-300 bg-slate-300/60 p-3 text-center text-[11px]">
        <div className="mx-auto mb-2 h-12 w-12 rounded bg-slate-400/60" />
        BIENVENIDOS A NUESTRA PÁGINA WEB
      </div>
      <div className="space-y-1.5">
        <div className="h-2 w-full rounded bg-slate-300" />
        <div className="h-2 w-11/12 rounded bg-slate-300" />
        <div className="h-2 w-4/5 rounded bg-slate-300" />
        <div className="h-2 w-full rounded bg-slate-300" />
      </div>
      <div className="mt-3 inline-block border border-slate-400 bg-slate-200 px-2 py-1 text-[10px] text-slate-500">
        Click aquí
      </div>
    </div>
  );
}

/** Maqueta interior de una web MODERNA (limpia, premium). */
export function ModernSitePreview() {
  return (
    <div className="bg-white p-4 dark:bg-[#141026]">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded-md bg-brand-gradient" />
          <span className="text-xs font-bold">Tu Negocio</span>
        </div>
        <div className="hidden items-center gap-2 text-[10px] text-muted sm:flex">
          <span>Servicios</span>
          <span>Sobre nosotros</span>
          <span className="rounded-full bg-brand-gradient px-2.5 py-1 font-semibold text-white">
            Reservar
          </span>
        </div>
      </div>
      <div className="mb-4 rounded-lg bg-brand-gradient-soft p-4">
        <div className="mb-2 h-2.5 w-2/3 rounded-full bg-brand-400/80" />
        <div className="mb-1.5 h-2 w-11/12 rounded-full bg-brand-200" />
        <div className="mb-3 h-2 w-3/4 rounded-full bg-brand-200" />
        <div className="inline-block rounded-full bg-brand-gradient px-3 py-1.5 text-[10px] font-semibold text-white">
          Pedir cita
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-brand-50 p-2 dark:border-white/10"
          >
            <div className="mb-1.5 h-4 w-4 rounded bg-electric-100 dark:bg-electric-400/20" />
            <div className="mb-1 h-1.5 w-full rounded-full bg-slate-200 dark:bg-white/10" />
            <div className="h-1.5 w-2/3 rounded-full bg-slate-200 dark:bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
