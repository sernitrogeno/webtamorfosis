import { Timer, ThumbsUp, Smartphone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/Marquee";

/**
 * Franja de datos GENERALES de usabilidad web (hechos del sector, no
 * resultados garantizados ni métricas inventadas sobre un cliente concreto).
 */
const stats = [
  {
    icon: Timer,
    stat: "≈ 3 s",
    text: "Si tu web tarda más de 3 segundos en cargar, buena parte de los visitantes se marcha antes de verla.",
  },
  {
    icon: ThumbsUp,
    stat: "75 %",
    text: "de las personas juzga la credibilidad de un negocio por el diseño de su web.",
  },
  {
    icon: Smartphone,
    stat: "+60 %",
    text: "de las visitas a webs de negocios locales llegan desde el móvil.",
  },
];

const marqueeItems = [
  "Restaurantes",
  "Clínicas",
  "Gimnasios",
  "Peluquerías",
  "Tiendas",
  "Reformas",
  "Alojamientos",
  "Despachos",
  "Academias",
  "Profesionales",
];

export function ImpactStats() {
  return (
    <section
      className="border-y border-black/5 bg-white/60 py-12 dark:border-white/5 dark:bg-white/[0.02]"
      aria-label="Por qué importa tu web"
    >
      <div className="container-page">
        <Marquee items={marqueeItems} className="mb-10" />

        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.stat} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-600 dark:text-brand-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-2xl font-extrabold tracking-tight">
                      {s.stat}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Datos generales de usabilidad web del sector. No representan resultados
          garantizados.
        </p>
      </div>
    </section>
  );
}
