"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BrowserMockup,
  OldSitePreview,
  ModernSitePreview,
} from "@/components/BrowserMockup";

interface BeforeAfterComparisonProps {
  className?: string;
  /** Contenido de la capa "antes". Por defecto, maqueta antigua. */
  before?: React.ReactNode;
  /** Contenido de la capa "después". Por defecto, maqueta moderna. */
  after?: React.ReactNode;
  /**
   * Posición de las etiquetas "Antes/Después".
   * "top" las sitúa bajo la barra del navegador (para maquetas con marco).
   * "bottom" las sitúa en las esquinas inferiores.
   */
  labelPosition?: "top" | "bottom";
}

/**
 * Deslizador de comparación antes/después.
 * - Control con ratón (arrastrar el tirador o hacer clic en la barra).
 * - Control táctil.
 * - Control con teclado (flechas izquierda/derecha sobre el tirador, que es
 *   un slider ARIA accesible).
 * - Sin dependencias pesadas: solo estado local y eventos de puntero.
 * Reutilizable en distintos proyectos.
 */
export function BeforeAfterComparison({
  className,
  before,
  after,
  labelPosition = "bottom",
}: BeforeAfterComparisonProps) {
  const labelPos =
    labelPosition === "top" ? "top-11" : "bottom-3";
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative select-none overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft dark:border-white/10 dark:bg-[#141026]",
        className
      )}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Capa DESPUÉS (base) */}
      <div aria-hidden={false} className="relative">
        {after ?? (
          <div className="p-3 sm:p-5">
            <BrowserMockup url="tu-negocio.es" tone="modern">
              <ModernSitePreview />
            </BrowserMockup>
          </div>
        )}
        <span
          className={cn(
            "pointer-events-none absolute right-3 z-20 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300",
            labelPos
          )}
        >
          Después
        </span>
      </div>

      {/* Capa ANTES (recortada) */}
      <div
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        {before ?? (
          <div className="h-full p-3 sm:p-5">
            <BrowserMockup url="mi-negocio.es" tone="old">
              <OldSitePreview />
            </BrowserMockup>
          </div>
        )}
        <span
          className={cn(
            "pointer-events-none absolute left-3 rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500",
            labelPos
          )}
        >
          Antes
        </span>
      </div>

      {/* Barra y tirador */}
      <div
        className="absolute inset-y-0 z-30 w-0.5 bg-white shadow-[0_0_0_1px_rgba(124,58,237,0.4)]"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <button
          type="button"
          role="slider"
          aria-label="Deslizador de comparación antes y después"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`Mostrando ${Math.round(position)}% de la web antigua`}
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onKeyDown={handleKeyDown}
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-brand-100 bg-white text-brand-600 shadow-glow transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <MoveHorizontal className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
