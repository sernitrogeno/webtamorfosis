import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28" aria-labelledby="services-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="Servicios"
          title={
            <span id="services-title">
              Todo lo necesario para{" "}
              <span className="text-gradient">transformar tu presencia digital</span>
            </span>
          }
          description="Trabajamos cada pieza que hace que una web funcione: diseño, velocidad, claridad y conversión."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/servicios" variant="secondary" size="lg">
            Ver servicios en detalle
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
