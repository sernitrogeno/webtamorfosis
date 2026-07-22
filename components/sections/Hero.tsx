import { ArrowRight, Play, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroDiagnostic } from "@/components/HeroDiagnostic";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 md:pt-36"
      aria-labelledby="hero-title"
    >
      {/* Fondo minimal: un único acento muy sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-[-12%] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand-gradient-soft opacity-70 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-12 pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:pb-24">
        {/* Columna de texto */}
        <div className="max-w-xl">
          <Badge tone="brand" icon={<Zap className="h-3.5 w-3.5" />}>
            Rediseño web para negocios
          </Badge>
          <h1
            id="hero-title"
            className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-[3.4rem]"
          >
            Tu web debería ser tu mejor{" "}
            <span className="text-gradient">comercial</span>.
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
            Rediseñamos páginas web lentas, anticuadas o poco claras y las
            convertimos en herramientas modernas que transmiten confianza y
            generan clientes. Empieza viendo, gratis, la nota de tu web y todo
            lo que puedes mejorar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#analisis" size="lg">
              Ver la nota de mi web gratis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/transformaciones" size="lg" variant="secondary">
              <Play className="h-4 w-4" aria-hidden="true" />
              Ver transformaciones
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted">
            Sin compromiso · Diagnóstico claro · Propuesta personalizada
          </p>
        </div>

        {/* Columna visual: diagnóstico interactivo */}
        <div className="relative">
          <HeroDiagnostic />
        </div>
      </div>
    </section>
  );
}
