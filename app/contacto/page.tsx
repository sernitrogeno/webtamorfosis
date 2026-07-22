import type { Metadata } from "next";
import { Mail, Phone, Clock, ListChecks, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { AuditForm } from "@/components/AuditForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué necesitas y prepararemos una propuesta clara para transformar tu web. Descubre gratis la nota de tu web, sin compromiso.",
  alternates: { canonical: "/contacto" },
};

const initialQuestions = [
  "¿Tienes ya una web o partimos de cero?",
  "¿Qué es lo que más te gustaría mejorar?",
  "¿Cuál es el objetivo principal de tu web (contactos, reservas, ventas…)?",
  "¿Tienes una fecha o un plazo en mente?",
];

const nextSteps = [
  "Revisamos tu solicitud y tu web actual, si la tienes.",
  "Te enviamos un primer análisis con las oportunidades de mejora.",
  "Preparamos una propuesta clara con alcance y presupuesto.",
];

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title={
          <>
            Hablemos de tu{" "}
            <span className="text-gradient">próxima web</span>
          </>
        }
        description="Puedes enviarnos tu web aunque todavía no tengas claro qué necesitas. Revisamos tu caso antes de preparar cualquier propuesta."
      />

      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Información y contexto */}
          <Reveal>
            <div className="space-y-8 lg:sticky lg:top-28">
              <div>
                <h2 className="text-lg font-bold">Datos de contacto</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="inline-flex items-center gap-2.5 text-muted transition hover:text-foreground"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient-soft text-brand-600 dark:text-brand-300">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {site.contact.email}
                    </a>
                  </li>
                  <li>
                    {/* TODO: sustituir por el teléfono real. */}
                    <a
                      href={site.contact.phoneHref}
                      className="inline-flex items-center gap-2.5 text-muted transition hover:text-foreground"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient-soft text-brand-600 dark:text-brand-300">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {site.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 text-muted">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient-soft text-brand-600 dark:text-brand-300">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {/* TODO: tiempo de respuesta editable en data/site.ts */}
                    {site.contact.responseTime}
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-lg font-bold">
                  <ListChecks className="h-5 w-5 text-brand-500" aria-hidden="true" />
                  Preguntas para empezar
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {initialQuestions.map((q) => (
                    <li key={q} className="flex items-start gap-2 text-sm text-muted">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient"
                        aria-hidden="true"
                      />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-black/5 bg-white/60 p-5 dark:border-white/5 dark:bg-white/[0.02]">
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  Qué pasa después
                </h2>
                <ol className="mt-4 space-y-3">
                  {nextSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-muted">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={0.1}>
            <AuditForm />
          </Reveal>
        </div>
      </div>
    </>
  );
}
