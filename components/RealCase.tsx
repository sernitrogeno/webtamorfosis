import Image from "next/image";
import { Check, X, Wand2, BadgeCheck } from "lucide-react";
import { BeforeAfterComparison } from "@/components/BeforeAfterComparison";
import { BrowserMockup } from "@/components/BrowserMockup";
import { Badge } from "@/components/ui/Badge";

/**
 * CASO REAL: usa capturas reales de una transformación (antes/después)
 * generadas con nuestra herramienta de análisis. El nombre se muestra de
 * forma neutra ("restaurante local"); las imágenes viven en
 * public/mockups/nara/.
 */
const REAL = {
  label: "Restaurante local",
  sector: "Restauración",
  beforeUrl: "restaurante · antes",
  afterUrl: "restaurante · después",
  before: "/mockups/nara/home.png",
  after: "/mockups/nara/new-full.png",
  problems: [
    "Diseño poco actual que no invita a entrar",
    "Carta y reservas poco visibles",
    "Jerarquía confusa: cuesta encontrar lo importante",
    "Experiencia mejorable en el móvil",
  ],
  wins: [
    "Diseño moderno y apetecible desde el primer vistazo",
    "Reserva y carta como acciones principales",
    "Estructura clara con foto de producto cuidada",
    "Perfecta en el móvil",
  ],
  decisions: [
    "Nuevo hero con propuesta clara y llamada a reservar",
    "Carta visual y navegable en lugar de un bloque denso",
    "Jerarquía y espacios que guían la mirada",
    "Optimización de imágenes y velocidad",
  ],
};

function RealFrame({
  src,
  url,
  tone,
}: {
  src: string;
  url: string;
  tone: "old" | "modern";
}) {
  return (
    <BrowserMockup tone={tone} url={url} bare>
      <div className="relative h-[300px] w-full sm:h-[400px]">
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover object-top"
        />
      </div>
    </BrowserMockup>
  );
}

/** Comparador interactivo del caso real (antes/después con capturas reales). */
export function RealCaseSlider() {
  return (
    <BeforeAfterComparison
      labelPosition="top"
      before={<RealFrame src={REAL.before} url={REAL.beforeUrl} tone="old" />}
      after={<RealFrame src={REAL.after} url={REAL.afterUrl} tone="modern" />}
    />
  );
}

/** Bloque destacado completo del caso real (comparador + detalle). */
export function RealCaseFeature() {
  return (
    <div className="overflow-hidden rounded-3xl border bg-[rgb(var(--card))] shadow-soft">
      <div className="grid gap-8 p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge tone="brand" icon={<BadgeCheck className="h-3.5 w-3.5" />}>
              Caso real
            </Badge>
            <span className="text-sm text-muted">
              {REAL.label} · {REAL.sector}
            </span>
          </div>
          <RealCaseSlider />
          <p className="mt-3 text-center text-sm text-muted">
            Transformación real hecha con nuestro análisis. Arrastra para comparar.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold tracking-tight">
            De una web anticuada a una que da ganas de reservar
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-black/[0.015] p-4 dark:bg-white/[0.02]">
              <h4 className="mb-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted">
                <X className="h-3.5 w-3.5" aria-hidden="true" /> Antes
              </h4>
              <ul className="space-y-1.5">
                {REAL.problems.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/[0.06]">
              <h4 className="mb-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                <Check className="h-3.5 w-3.5" aria-hidden="true" /> Después
              </h4>
              <ul className="space-y-1.5">
                {REAL.wins.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-sm font-medium">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50/40 p-4 dark:border-brand-500/20 dark:bg-brand-500/[0.06]">
            <h4 className="mb-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-700 dark:text-brand-200">
              <Wand2 className="h-3.5 w-3.5" aria-hidden="true" /> Cambios que aplicamos
            </h4>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {REAL.decisions.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
