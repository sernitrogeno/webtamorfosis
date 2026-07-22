import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { problems } from "@/data/problems";

export function Problems() {
  return (
    <section
      id="problemas"
      className="py-20 sm:py-28"
      aria-labelledby="problems-title"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="El problema"
          title={
            <span id="problems-title">
              Tu web puede estar{" "}
              <span className="text-gradient">alejando clientes</span> sin que lo
              sepas
            </span>
          }
          description="Muchos negocios pierden oportunidades cada día por detalles que no se ven a simple vista. Estos son los más habituales."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <Reveal as="li" key={problem.title} delay={(i % 5) * 0.05}>
                <div className="group h-full rounded-2xl border border-black/5 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-glow dark:border-white/5 dark:bg-white/[0.02]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-gradient group-hover:text-white dark:bg-brand-500/10 dark:text-brand-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{problem.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {problem.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
