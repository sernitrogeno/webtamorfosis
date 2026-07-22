import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section
      id="proceso"
      className="border-y border-black/5 bg-white/60 py-20 dark:border-white/5 dark:bg-white/[0.02] sm:py-28"
      aria-labelledby="process-title"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Proceso"
          title={
            <span id="process-title">
              Una transformación clara,{" "}
              <span className="text-gradient">paso a paso</span>
            </span>
          }
          description="Sin sorpresas ni tecnicismos. Sabes en todo momento en qué punto está tu proyecto."
        />

        <ol className="relative mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Línea evolutiva de fondo (decorativa) */}
          <div
            className="pointer-events-none absolute inset-x-0 top-6 hidden h-px bg-gradient-to-r from-brand-200 via-electric-300 to-brand-200 lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={(i % 3) * 0.08}>
              <div className="relative">
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-lg font-bold text-white shadow-glow">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
