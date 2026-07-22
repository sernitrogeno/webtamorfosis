import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LogoMark } from "@/components/ui/Logo";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="final-cta-title">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-16 text-center text-white shadow-glow sm:px-12 sm:py-20">
            {/* Textura de fondo decorativa */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative">
              <LogoMark className="mx-auto h-10 w-10" />
              <h2
                id="final-cta-title"
                className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-bold leading-tight sm:text-4xl"
              >
                Tu negocio ya ha evolucionado. Ahora le toca a tu web.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-white/85">
                Cuéntanos qué necesitas y prepararemos una propuesta clara para
                transformar tu presencia digital.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  href="/#analisis"
                  size="lg"
                  variant="secondary"
                  className="border-white/30 bg-white text-brand-700 hover:bg-white hover:text-brand-800"
                >
                  Ver la nota de mi web gratis
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  href="/contacto"
                  size="lg"
                  variant="secondary"
                  className="border-white/40 bg-transparent text-white hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Hablar sobre mi proyecto
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
