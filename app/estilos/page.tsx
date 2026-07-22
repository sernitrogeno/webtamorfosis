import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { ArrowRight, Sparkles, Zap, Check, Star } from "lucide-react";

/**
 * Página interna de PROTOTIPADO: muestra 4 direcciones de diseño renderizadas
 * de verdad para que el cliente elija cuál aplicar a toda la web.
 * No se indexa. Se puede borrar una vez elegido el estilo.
 */

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Estilos (interno)",
  robots: { index: false, follow: false },
};

const options = [
  { id: "aurora", label: "A · Aurora Glass" },
  { id: "midnight", label: "B · Midnight Neon" },
  { id: "boutique", label: "C · Warm Boutique" },
  { id: "bento", label: "D · Bento Pop" },
];

export default function EstilosPage() {
  return (
    <div className={fraunces.variable}>
      {/* Barra de selección */}
      <div className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3">
          <p className="text-sm font-bold text-neutral-900">
            Elige un estilo para Webtamorfosis
          </p>
          <nav className="flex flex-wrap gap-1.5">
            {options.map((o) => (
              <a
                key={o.id}
                href={`#${o.id}`}
                className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-semibold text-neutral-700 transition hover:border-black/30"
              >
                {o.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <AuroraGlass />
      <MidnightNeon />
      <WarmBoutique />
      <BentoPop />

      {/* Cierre */}
      <div className="bg-neutral-950 px-6 py-16 text-center text-white">
        <p className="text-lg font-semibold">
          ¿Cuál te encaja? Dime la letra (A, B, C o D)
        </p>
        <p className="mt-2 text-sm text-white/60">
          La aplico a toda la web (home, servicios, transformaciones, contacto…)
          y afinamos los detalles.
        </p>
      </div>
    </div>
  );
}

/* Etiqueta superior de cada opción */
function Tag({ n, name, desc }: { n: string; name: string; desc: string }) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-end justify-between gap-2 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
            Opción {n}
          </span>
          <h2 className="text-2xl font-bold">{name}</h2>
        </div>
        <p className="max-w-sm text-sm opacity-70">{desc}</p>
      </div>
      <div className="h-px w-full bg-current opacity-20" aria-hidden="true" />
    </div>
  );
}

/* ===================== A · AURORA GLASS ===================== */
function AuroraGlass() {
  return (
    <section
      id="aurora"
      className="relative overflow-hidden bg-[#f6f6fb] px-6 py-16 text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-violet-400/40 blur-3xl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-sky-400/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-300/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <Tag
          n="A"
          name="Aurora Glass"
          desc="Claro y premium. Gradientes suaves tipo aurora y tarjetas de cristal (glassmorphism). Moderno y amable."
        />
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs font-semibold text-violet-700 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Rediseño web para negocios
            </span>
            <h3 className="mt-4 text-5xl font-extrabold leading-[1.02] tracking-tight">
              Tu web debería ser tu mejor{" "}
              <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                comercial
              </span>
              .
            </h3>
            <p className="mt-4 max-w-md text-lg text-slate-600">
              Rediseñamos webs lentas y anticuadas en herramientas modernas que
              generan clientes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-sky-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/30">
                Diagnóstico gratis <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-bold text-slate-700 backdrop-blur">
                Ver transformaciones
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/50 p-5 shadow-xl backdrop-blur-md">
            <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 p-4 text-white">
              <p className="text-xs uppercase tracking-widest text-white/70">
                Tu web
              </p>
              <p className="text-2xl font-extrabold">48 → 94</p>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["Diseño", "Móvil", "Velocidad"].map((c) => (
                <div key={c} className="rounded-xl border border-white/70 bg-white/70 p-3 text-center text-xs font-semibold text-slate-600 backdrop-blur">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {["Diseño moderno", "Más contactos", "Perfecta en móvil"].map((f) => (
            <div key={f} className="rounded-2xl border border-white/70 bg-white/60 p-5 backdrop-blur">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-sky-500 text-white">
                <Check className="h-4 w-4" />
              </div>
              <p className="font-bold">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== B · MIDNIGHT NEON ===================== */
function MidnightNeon() {
  return (
    <section
      id="midnight"
      className="relative overflow-hidden bg-[#08070f] px-6 py-16 text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-10 top-0 h-80 w-80 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <Tag
          n="B"
          name="Midnight Neon"
          desc="Oscuro y de alto impacto. Brillos violeta-cian, cristal con bordes luminosos. Vibra de agencia top."
        />
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-300">
              <Zap className="h-3.5 w-3.5" /> Rediseño web para negocios
            </span>
            <h3 className="mt-4 text-5xl font-extrabold leading-[1.02] tracking-tight">
              Tu web debería ser tu mejor{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                comercial
              </span>
              .
            </h3>
            <p className="mt-4 max-w-md text-lg text-slate-400">
              Rediseñamos webs lentas y anticuadas en herramientas modernas que
              generan clientes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-bold text-neutral-950 shadow-[0_0_30px_-6px_rgba(139,92,246,0.8)]">
                Diagnóstico gratis <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white">
                Ver transformaciones
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_60px_-20px_rgba(34,211,238,0.5)]">
            <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-600/30 to-cyan-500/20 p-4">
              <p className="text-xs uppercase tracking-widest text-cyan-300/80">
                Tu web
              </p>
              <p className="text-2xl font-extrabold text-white">48 → 94</p>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["Diseño", "Móvil", "Velocidad"].map((c) => (
                <div key={c} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center text-xs font-semibold text-slate-300">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {["Diseño moderno", "Más contactos", "Perfecta en móvil"].map((f) => (
            <div key={f} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-neutral-950">
                <Check className="h-4 w-4" />
              </div>
              <p className="font-bold text-white">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== C · WARM BOUTIQUE ===================== */
function WarmBoutique() {
  const serif = { fontFamily: "var(--font-fraunces), serif" };
  return (
    <section
      id="boutique"
      className="relative overflow-hidden bg-[#f5efe4] px-6 py-16 text-[#2b2620]"
    >
      <div className="relative mx-auto max-w-6xl">
        <Tag
          n="C"
          name="Warm Boutique"
          desc="Cálido y editorial. Crema, acento terracota y tipografía serif elegante. Cercano, humano y muy premium."
        />
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8c9b0] bg-[#efe6d5] px-3 py-1 text-xs font-semibold text-[#b25a35]">
              Rediseño web para negocios
            </span>
            <h3 style={serif} className="mt-4 text-6xl font-semibold leading-[0.98] tracking-tight">
              Tu web debería ser tu mejor{" "}
              <span className="italic text-[#c2603f]">comercial</span>.
            </h3>
            <p className="mt-5 max-w-md text-lg text-[#5c5346]">
              Rediseñamos webs lentas y anticuadas en herramientas modernas que
              generan clientes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#c2603f] px-6 py-3 text-sm font-bold text-white">
                Diagnóstico gratis <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-full border border-[#2b2620]/25 px-6 py-3 text-sm font-bold text-[#2b2620]">
                Ver transformaciones
              </button>
            </div>
          </div>
          <div className="rounded-[28px] border border-[#e2d6c1] bg-[#fffdf8] p-6 shadow-[0_20px_50px_-24px_rgba(80,60,30,0.35)]">
            <div className="flex items-center gap-1 text-[#c2603f]">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p style={serif} className="mt-3 text-2xl font-medium leading-snug">
              “Nuestra web por fin transmite lo que somos.”
            </p>
            <p className="mt-3 text-sm text-[#8a7f6c]">Negocio local · ejemplo</p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {["Diseño moderno", "Más contactos", "Perfecta en móvil"].map((f) => (
            <div key={f} className="rounded-2xl border border-[#e2d6c1] bg-[#fffdf8] p-5">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#c2603f] text-white">
                <Check className="h-4 w-4" />
              </div>
              <p style={serif} className="text-lg font-semibold">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== D · BENTO POP ===================== */
function BentoPop() {
  return (
    <section
      id="bento"
      className="relative overflow-hidden bg-white px-6 py-16 text-neutral-900"
    >
      <div className="relative mx-auto max-w-6xl">
        <Tag
          n="D"
          name="Bento Pop"
          desc="Colorido y dinámico. Rejilla 'bento' de paneles grandes con color controlado y tipografía rotunda. Tendencia 2025."
        />
        <h3 className="max-w-3xl text-5xl font-extrabold leading-[1] tracking-tight sm:text-6xl">
          Tu web debería ser tu mejor{" "}
          <span className="rounded-xl bg-violet-600 px-2 text-white">comercial</span>.
        </h3>
        <p className="mt-4 max-w-md text-lg text-neutral-500">
          Rediseñamos webs lentas y anticuadas en herramientas modernas que
          generan clientes.
        </p>
        <div className="mt-8 grid auto-rows-[130px] grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-3xl bg-violet-600 p-6 text-white">
            <span className="text-sm font-bold uppercase tracking-widest text-white/70">
              Diagnóstico
            </span>
            <div>
              <p className="text-5xl font-extrabold">48→94</p>
              <button className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-violet-700">
                Empezar gratis <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-lime-300 p-5">
            <p className="text-3xl font-extrabold">+60%</p>
            <p className="text-sm font-semibold text-lime-900">visitas móvil</p>
          </div>
          <div className="rounded-3xl bg-amber-300 p-5">
            <p className="text-3xl font-extrabold">3s</p>
            <p className="text-sm font-semibold text-amber-900">carga máx.</p>
          </div>
          <div className="col-span-2 flex items-center gap-3 rounded-3xl bg-sky-500 p-5 text-white">
            <Star className="h-8 w-8 shrink-0 fill-current" />
            <p className="text-lg font-bold leading-tight">Diseño que da confianza a primera vista</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold text-white">
            Diagnóstico gratis <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-full border-2 border-neutral-900 px-6 py-3 text-sm font-bold">
            Ver transformaciones
          </button>
        </div>
      </div>
    </section>
  );
}
