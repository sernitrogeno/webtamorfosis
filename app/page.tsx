import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Problems } from "@/components/sections/Problems";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Audit } from "@/components/sections/Audit";
import { Faq } from "@/components/sections/Faq";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * Landing enfocada: solo la secuencia que convierte.
 * El detalle (beneficios, sectores, casos completos) vive en páginas propias
 * (/servicios y /transformaciones) para reducir scroll y mejorar el SEO.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <Problems />
      <BeforeAfterSection />
      <Services />
      <Process />
      <Pricing />
      <Audit />
      <Faq />
      <FinalCTA />
    </>
  );
}
