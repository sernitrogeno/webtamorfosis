import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { sectors } from "@/data/sectors";

export function Sectors() {
  return (
    <section
      className="border-y border-black/5 bg-white/60 py-20 dark:border-white/5 dark:bg-white/[0.02] sm:py-28"
      aria-labelledby="sectors-title"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Sectores"
          title={
            <span id="sectors-title">
              Transformamos negocios de{" "}
              <span className="text-gradient">muchos sectores</span>
            </span>
          }
          description="Cada sector tiene sus necesidades. Adaptamos el diseño y el mensaje a las de tu negocio."
        />

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <Reveal as="li" key={sector.label} delay={(i % 6) * 0.04}>
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-black/5 bg-white p-5 text-center shadow-soft transition hover:-translate-y-1 hover:border-brand-100 hover:shadow-glow dark:border-white/5 dark:bg-white/[0.02]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-600 transition group-hover:bg-brand-gradient group-hover:text-white dark:text-brand-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium">{sector.label}</span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
