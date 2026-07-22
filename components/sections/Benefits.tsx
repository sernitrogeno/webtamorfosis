import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { benefits } from "@/data/benefits";

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28" aria-labelledby="benefits-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="Beneficios"
          title={
            <span id="benefits-title">
              Una web mejor cambia{" "}
              <span className="text-gradient">la percepción de todo tu negocio</span>
            </span>
          }
          description="Tu web debe estar a la altura de tu negocio. Cuando lo está, todo lo demás mejora."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Reveal as="li" key={benefit.title} delay={(i % 3) * 0.05}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-soft transition hover:border-brand-100 dark:border-white/5 dark:bg-white/[0.02]">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-600 dark:text-brand-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
