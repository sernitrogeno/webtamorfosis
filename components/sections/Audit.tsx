import { Lock, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AuditForm } from "@/components/AuditForm";
import { Button } from "@/components/ui/Button";
import { DiagnosisSample } from "@/components/DiagnosisSample";
import { fullAnalysisIncludes } from "@/data/form";

const microcopy = [
  "Revisamos tu caso antes de preparar nada",
  "Respuesta personalizada, sin plantillas",
  "Puedes enviárnosla aunque no tengas claro qué necesitas",
];

export function Audit() {
  return (
    <section id="analisis" className="py-20 sm:py-28" aria-labelledby="audit-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="Diagnóstico gratis"
          title={
            <span id="audit-title">
              Descubre la <span className="text-gradient">nota de tu web</span>,
              gratis
            </span>
          }
          description="Te decimos qué nota tiene tu web y los principales puntos que deberías mejorar. Al instante y sin compromiso. Si quieres el detalle exacto de qué cambiar y por qué, ese es el Análisis Completo."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* Qué es gratis / qué es de pago */}
          <Reveal>
            <div className="space-y-4 lg:sticky lg:top-28">
              {/* Ejemplo del diagnóstico gratis */}
              <div>
                <p className="mb-2.5 text-sm font-semibold text-muted">
                  Así se ve tu diagnóstico gratis:
                </p>
                <DiagnosisSample />
              </div>

              {/* Análisis completo (de pago) — teaser bloqueado */}
              <div className="relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-5 dark:border-brand-500/20 dark:bg-white/[0.02]">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
                      <Lock className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-bold">Análisis Completo</h3>
                  </div>
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
                    Desde 149 €
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted">
                  El detalle que marca la diferencia (solo en la versión completa):
                </p>
                <ul className="mt-3 space-y-2">
                  {fullAnalysisIncludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <Lock
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button href="/#precios" variant="secondary" size="md">
                    Ver el Análisis Completo
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
                <p className="mt-3 text-xs text-muted">
                  Se descuenta del rediseño si decides dar el paso.
                </p>
              </div>

              <ul className="space-y-2.5 pt-1">
                {microcopy.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-muted">
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                      aria-hidden="true"
                    />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={0.1}>
            <div id="formulario">
              <AuditForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
