import { Check, X, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BeforeAfterShowcase } from "@/components/BeforeAfterShowcase";

const beforeList = [
  "Diseño anticuado",
  "Navegación confusa",
  "Mala experiencia móvil",
  "Textos poco claros",
  "Carga lenta",
  "Imagen poco profesional",
  "Pocas conversiones",
];

const afterList = [
  "Diseño moderno",
  "Mensaje claro",
  "Experiencia móvil excelente",
  "Llamadas a la acción visibles",
  "Mayor velocidad",
  "Más confianza",
  "Más oportunidades de contacto",
];

export function BeforeAfterSection() {
  return (
    <section
      className="border-y border-black/5 bg-white/60 py-20 dark:border-white/5 dark:bg-white/[0.02] sm:py-28"
      aria-labelledby="before-after-title"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Antes y después"
          title={
            <span id="before-after-title">
              No hacemos pequeños retoques. Cambiamos{" "}
              <span className="text-gradient">cómo se percibe tu negocio</span>
            </span>
          }
          description="Arrastra el control para comparar. Un rediseño no es cambiar cuatro colores: es mejorar cómo el usuario entiende y utiliza tu web."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <BeforeAfterShowcase />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-2xl border border-black/5 bg-slate-50 p-5 dark:border-white/5 dark:bg-white/[0.02]">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                  Antes
                </h3>
                <ul className="space-y-2">
                  {beforeList.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <X
                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-brand-100 bg-brand-gradient-soft p-5 dark:border-brand-500/20">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                  Después
                </h3>
                <ul className="space-y-2">
                  {afterList.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-medium"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Button href="/transformaciones" variant="secondary">
                Ver todas las transformaciones
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
