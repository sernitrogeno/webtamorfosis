import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqItems } from "@/data/faq";

export function Faq() {
  return (
    <section
      id="faq"
      className="border-y border-black/5 bg-white/60 py-20 dark:border-white/5 dark:bg-white/[0.02] sm:py-28"
      aria-labelledby="faq-title"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title={<span id="faq-title">Resolvemos tus dudas</span>}
          description="Y si te queda alguna, escríbenos: te respondemos sin compromiso."
        />
        <div className="mt-14">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
