import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { TransformationsGallery } from "@/components/TransformationsGallery";
import { RealCaseFeature } from "@/components/RealCase";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Transformaciones: ejemplos de rediseño web",
  description:
    "Ejemplos conceptuales de rediseño web por sectores: restauración, salud, servicios y comercio. Así abordamos una auténtica Webtamorfosis.",
  alternates: { canonical: "/transformaciones" },
};

export default function TransformacionesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transformaciones"
        title={
          <>
            Ejemplos de una auténtica{" "}
            <span className="text-gradient">Webtamorfosis</span>
          </>
        }
        description="Estos ejemplos muestran cómo enfocamos un rediseño según el tipo de negocio: qué problemas detectamos y qué decisiones de diseño tomamos."
      />

      <div className="container-page py-14 sm:py-16">
        {/* Caso real (capturas reales de una transformación) */}
        <Reveal>
          <RealCaseFeature />
        </Reveal>

        {/* Ejemplos conceptuales por sector */}
        <div className="mt-20 sm:mt-28">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Más ejemplos por sector
          </h2>
          <p className="mx-auto mt-4 mb-10 flex max-w-2xl items-center justify-center gap-2 rounded-xl border border-warm-500/20 bg-warm-500/5 px-4 py-3 text-center text-sm text-muted">
            <Info className="h-4 w-4 shrink-0 text-warm-600" aria-hidden="true" />
            Los siguientes son{" "}
            <strong className="mx-1 font-semibold text-foreground">
              ejemplos conceptuales
            </strong>{" "}
            que ilustran nuestro enfoque por sector.
          </p>

          <TransformationsGallery />
        </div>
      </div>

      <FinalCTA />
    </>
  );
}
