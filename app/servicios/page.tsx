import type { Metadata } from "next";
import { Check, ArrowRight, Target, Package, Users, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Benefits } from "@/components/sections/Benefits";
import { Sectors } from "@/components/sections/Sectors";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicios de rediseño y diseño web",
  description:
    "Rediseño web, web desde cero, optimización de velocidad, diseño responsive, SEO básico, mantenimiento, migración y conversión para negocios.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title={
          <>
            Servicios pensados para{" "}
            <span className="text-gradient">hacer crecer tu negocio</span>
          </>
        }
        description="Cada rediseño parte de los objetivos reales del negocio. Estos son los servicios con los que podemos ayudarte, por separado o combinados."
      >
        <Button href="/#analisis" size="lg">
          Diagnóstico gratis
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </PageHeader>

      <div className="container-page py-16 sm:py-20">
        <div className="space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const d = service.detail;
            return (
              <Reveal key={service.slug}>
                <article
                  id={service.slug}
                  className="surface-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
                >
                  {/* Presentación */}
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 text-2xl font-bold">{service.title}</h2>
                    <p className="mt-2 text-muted">{service.description}</p>

                    {d && (
                      <div className="mt-6 space-y-4 text-sm">
                        <DetailRow
                          icon={<Target className="h-4 w-4" />}
                          label="Qué problema resuelve"
                          text={d.problem}
                        />
                        <DetailRow
                          icon={<Users className="h-4 w-4" />}
                          label="Para quién está pensado"
                          text={d.forWho}
                        />
                        <DetailRow
                          icon={<Sparkles className="h-4 w-4" />}
                          label="Resultado esperado"
                          text={d.result}
                        />
                      </div>
                    )}
                  </div>

                  {/* Qué incluye + CTA */}
                  <div className="flex flex-col rounded-2xl border border-black/5 bg-white/60 p-6 dark:border-white/5 dark:bg-white/[0.02]">
                    <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                      <Package className="h-4 w-4" aria-hidden="true" />
                      Qué incluye
                    </h3>
                    <ul className="mt-4 flex-1 space-y-2.5">
                      {d?.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                            <Check className="h-3 w-3" aria-hidden="true" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button href="/#analisis" variant="secondary">
                        Me interesa este servicio
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Benefits />
      <Sectors />
      <FinalCTA />
    </>
  );
}

function DetailRow({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-gradient-soft text-brand-600 dark:text-brand-300">
        {icon}
      </span>
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-muted">{text}</p>
      </div>
    </div>
  );
}
