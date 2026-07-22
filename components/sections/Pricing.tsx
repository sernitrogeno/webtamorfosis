import {
  Check,
  ArrowRight,
  ShieldCheck,
  Star,
  Plus,
  Info,
  Gift,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  freeDiagnosis,
  pricingPlans,
  pricingExtras,
  marketPriceNote,
  pricingReassurance,
} from "@/data/pricing";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="precios" className="py-20 sm:py-28" aria-labelledby="pricing-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="Precios"
          title={
            <span id="pricing-title">
              Empieza gratis. Rediseña{" "}
              <span className="text-gradient">solo si te convence</span>
            </span>
          }
          description="Primero descubres, gratis, la nota de tu web. Si quieres el detalle exacto de qué cambiar, tienes el Análisis Completo. Y si das el paso, el rediseño con precio cerrado."
        />

        {/* Gancho: diagnóstico gratis */}
        <Reveal>
          <div className="mt-12 flex flex-col items-start gap-5 rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 dark:border-emerald-500/20 dark:bg-emerald-500/[0.06] sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
                <Gift className="h-3.5 w-3.5" aria-hidden="true" />
                {freeDiagnosis.name}
              </span>
              <h3 className="mt-3 text-xl font-bold">{freeDiagnosis.tagline}</h3>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                {freeDiagnosis.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-1.5 text-sm text-muted"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-emerald-500"
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {freeDiagnosis.price}
              </p>
              <p className="mb-3 text-xs text-muted">{freeDiagnosis.priceNote}</p>
              <Button href="/#analisis" size="lg">
                {freeDiagnosis.ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Planes */}
        <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={(i % 3) * 0.08}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-7 transition",
                  plan.featured
                    ? "border-transparent bg-neutral-950 text-white shadow-soft lg:-mt-4 lg:mb-4"
                    : "border bg-white shadow-soft hover:border-brand-200 dark:bg-white/[0.02]"
                )}
              >
                {plan.highlightLabel && (
                  <span
                    className={cn(
                      "absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full px-3 py-1 text-xs font-bold shadow-soft",
                      plan.featured
                        ? "bg-white text-brand-700"
                        : "bg-brand-gradient text-white"
                    )}
                  >
                    {plan.featured ? (
                      <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    ) : (
                      <Gift className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    {plan.highlightLabel}
                  </span>
                )}

                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    plan.featured ? "text-white/80" : "text-muted"
                  )}
                >
                  {plan.tagline}
                </p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      "text-3xl font-extrabold tracking-tight",
                      plan.id === "analisis" && !plan.featured && "text-gradient"
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.featured ? "text-white/70" : "text-muted"
                    )}
                  >
                    {plan.priceNote}
                  </span>
                </div>

                <p
                  className={cn(
                    "mt-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium",
                    plan.featured
                      ? "bg-white/15 text-white"
                      : "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-200"
                  )}
                >
                  Ideal para: {plan.ideal}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.featured ? "text-white" : "text-brand-500"
                        )}
                        aria-hidden="true"
                      />
                      <span className={plan.featured ? "text-white/90" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Button
                    href="/#analisis"
                    size="lg"
                    variant={
                      plan.featured || plan.id === "mantenimiento"
                        ? "secondary"
                        : "primary"
                    }
                    className={cn(
                      "w-full",
                      plan.featured &&
                        "border-white/30 bg-white text-brand-700 hover:bg-white hover:text-brand-800"
                    )}
                  >
                    {plan.ctaLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Extras / complementos */}
        <Reveal>
          <div className="mt-8 rounded-3xl border border-black/5 bg-white/60 p-7 dark:border-white/5 dark:bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-600 dark:text-brand-300">
                <Plus className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold">Añade solo lo que necesites</h3>
                <p className="text-sm text-muted">
                  Complementos opcionales para tu rediseño, con precios de partida.
                </p>
              </div>
            </div>

            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {pricingExtras.map((extra) => (
                <li
                  key={extra.label}
                  className="flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-[rgb(var(--card))] px-3.5 py-3 dark:border-white/5"
                >
                  <span className="text-sm font-medium">{extra.label}</span>
                  <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
                    {extra.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Ancla de precio de mercado + confianza */}
        <Reveal>
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-brand-100 bg-brand-gradient-soft p-6 dark:border-brand-500/20 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2.5 text-sm text-muted">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                aria-hidden="true"
              />
              {marketPriceNote}
            </p>
            <ul className="flex shrink-0 flex-wrap gap-x-5 gap-y-2">
              {pricingReassurance.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-sm font-medium"
                >
                  <ShieldCheck
                    className="h-4 w-4 text-brand-500"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
