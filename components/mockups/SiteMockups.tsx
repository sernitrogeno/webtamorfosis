import type { ReactNode } from "react";
import Image from "next/image";
import {
  CalendarCheck,
  MapPin,
  Star,
  Stethoscope,
  ShieldCheck,
  Clock,
  HardHat,
  Ruler,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BrowserMockup } from "@/components/BrowserMockup";
import { mockupPhotos } from "@/data/mockups";

/** Foto real opcional que cubre el degradado del héroe (si está configurada). */
function HeroPhoto({ src }: { src: string }) {
  if (!src) return null;
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="(max-width: 640px) 90vw, 340px"
      className="object-cover"
    />
  );
}

/**
 * Maquetas realistas de webs "antes" (anticuadas) y "después" (rediseñadas),
 * por sector. Se renderizan como mini-webs reales dentro del marco de
 * navegador. Usan colores propios (representan capturas de sitios reales), por
 * lo que no cambian con el modo oscuro de nuestra web.
 */

type MockupSize = "sm" | "md";

const bodyHeights: Record<MockupSize, string> = {
  sm: "h-[214px] sm:h-[236px]",
  md: "h-[272px] sm:h-[320px]",
};

/** Marco de navegador con altura de contenido FIJA (para alinear el slider). */
export function MockupFrame({
  tone,
  url,
  size = "md",
  bare = false,
  className,
  children,
}: {
  tone: "old" | "modern";
  url: string;
  size?: MockupSize;
  bare?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <BrowserMockup tone={tone} url={url} bare={bare} className={className}>
      <div className={cn("overflow-hidden", bodyHeights[size])}>{children}</div>
    </BrowserMockup>
  );
}

function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex", className)} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-2.5 w-2.5 fill-current" />
      ))}
    </span>
  );
}

/* ===================================================================== */
/* RESTAURANTE                                                            */
/* ===================================================================== */

export function RestaurantOld() {
  return (
    <div className="h-full bg-[#f3ead1] font-serif text-[#5b4a2f]">
      <div className="flex items-center justify-between bg-[#7a1f1f] px-3 py-1.5 text-white">
        <span className="text-[13px] font-bold tracking-wide">
          Restaurante El Rincón
        </span>
        <span className="text-[9px]">Tel. 91 234 56 78</span>
      </div>
      <div className="flex gap-3 border-b-2 border-[#7a1f1f] bg-[#e7d9b6] px-3 py-1 text-[10px] text-[#12419e] underline">
        <span>Inicio</span>
        <span>La Carta</span>
        <span>Fotos</span>
        <span>Contacto</span>
      </div>
      <div className="p-3 text-center">
        <p className="text-[15px] font-bold uppercase text-[#7a1f1f]">
          ¡Bienvenidos a nuestra web!
        </p>
        <div className="mt-2 flex gap-2">
          <div className="flex h-16 w-24 shrink-0 items-center justify-center border border-[#8a7a55] bg-[#cdbf9c] text-[8px] text-[#8a7a55]">
            foto_local.jpg
          </div>
          <p className="text-left text-[9px] leading-snug">
            Somos un restaurante familiar fundado en 1998. Ofrecemos comida
            casera de toda la vida en un ambiente acogedor para toda la familia.
          </p>
        </div>
        <div className="mt-2.5 inline-block border border-[#2a6a2a] bg-[#86c586] px-2 py-1 text-[10px] text-black">
          &gt;&gt; Descargar carta (PDF) &lt;&lt;
        </div>
        <p className="mt-2 text-[8px] text-[#8a7a55]">
          Visitas: 0042138 · Última actualización: 12/03/2011
        </p>
      </div>
    </div>
  );
}

export function RestaurantNew() {
  return (
    <div className="flex h-full flex-col bg-[#faf7f2] text-slate-800">
      {/* Barra de navegación */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <span className="text-[13px] font-black tracking-tight">
          El Rincón<span className="text-amber-500">.</span>
        </span>
        <div className="flex items-center gap-3 text-[10px] font-medium text-slate-500">
          <span className="hidden sm:inline">Carta</span>
          <span className="hidden sm:inline">Reservas</span>
          <span className="hidden sm:inline">Nosotros</span>
          <span className="rounded-full bg-slate-900 px-3 py-1 font-semibold text-white">
            Reservar
          </span>
        </div>
      </div>

      {/* Héroe con "fotografía" */}
      <div className="relative mx-3 h-[118px] overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a1d12] via-[#7c3b1e] to-[#b5561f]" />
        {/* Reflejos que simulan un plato iluminado */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(60% 55% at 72% 30%, rgba(255,196,120,0.55), transparent 60%), radial-gradient(45% 40% at 25% 80%, rgba(120,20,10,0.6), transparent 70%)",
          }}
        />
        <HeroPhoto src={mockupPhotos.restaurant} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold text-slate-800 shadow-sm">
          <Stars className="text-amber-500" /> 4,9
        </span>
        <div className="absolute inset-x-0 bottom-0 p-3.5 text-white">
          <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-amber-200">
            Cocina de mercado · Madrid
          </span>
          <p className="mt-0.5 text-[19px] font-bold leading-[1.05]">
            Sabores que se
            <br />
            recuerdan
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="rounded-full bg-amber-400 px-2.5 py-1 text-[9px] font-bold text-slate-900">
              Reservar mesa
            </span>
            <span className="rounded-full border border-white/50 px-2.5 py-1 text-[9px] font-semibold">
              Ver carta
            </span>
          </div>
        </div>
      </div>

      {/* Platos destacados con "foto" y precio */}
      <div className="grid grow grid-cols-3 gap-2 px-3 py-3">
        {[
          { name: "Arroz meloso", price: "18€", from: "from-amber-300", to: "to-orange-400" },
          { name: "Steak tartar", price: "16€", from: "from-rose-300", to: "to-red-400" },
          { name: "Tarta de queso", price: "7€", from: "from-yellow-200", to: "to-amber-300" },
        ].map((dish) => (
          <div
            key={dish.name}
            className="overflow-hidden rounded-xl bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
          >
            <div className={cn("h-9 bg-gradient-to-br", dish.from, dish.to)} />
            <div className="px-2 py-1.5">
              <p className="text-[9px] font-semibold leading-tight text-slate-700">
                {dish.name}
              </p>
              <p className="text-[9px] font-bold text-amber-600">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pie con info práctica */}
      <div className="flex items-center gap-3 border-t border-black/[0.06] px-3.5 py-2 text-[8.5px] text-slate-500">
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-2.5 w-2.5 text-amber-600" aria-hidden="true" /> C/ Mayor 12
        </span>
        <span className="inline-flex items-center gap-1">
          <CalendarCheck className="h-2.5 w-2.5 text-amber-600" aria-hidden="true" /> Abierto · 13-16h
        </span>
      </div>
    </div>
  );
}

/* ===================================================================== */
/* CLÍNICA                                                                */
/* ===================================================================== */

export function ClinicOld() {
  return (
    <div className="h-full bg-white font-serif text-[#333]">
      <div className="border-b-4 border-[#1f5fa8] bg-gradient-to-b from-[#3f8fd8] to-[#1f5fa8] px-3 py-2 text-center text-white">
        <p className="text-[14px] font-bold uppercase tracking-wide">
          Clínica Dental Sonrisa
        </p>
        <p className="text-[8px]">Su salud bucodental es lo primero</p>
      </div>
      <div className="flex justify-center gap-1 bg-[#dfe8f2] px-2 py-1">
        {["Inicio", "Servicios", "El equipo", "Contacto"].map((t) => (
          <span
            key={t}
            className="border border-[#9fb4cc] bg-gradient-to-b from-white to-[#cdd9e8] px-1.5 py-0.5 text-[8px] text-[#1f5fa8]"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-2 p-3">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-[#aaa] bg-[#d8d8d8] text-[8px] text-[#888]">
          equipo.jpg
        </div>
        <div>
          <p className="text-[11px] font-bold text-[#1f5fa8]">
            Bienvenido a nuestra clínica dental
          </p>
          <p className="mt-1 text-[8px] leading-snug text-[#555]">
            Ofrecemos tratamientos de odontología general, ortodoncia, implantes,
            estética dental, endodoncia y periodoncia con la última tecnología y
            un trato personalizado para cada paciente.
          </p>
        </div>
      </div>
      <div className="bg-[#ffffcc] px-3 py-1.5 text-center text-[11px] font-bold text-[#cc0000]">
        ☎ PIDA SU CITA: 91 555 44 33
      </div>
    </div>
  );
}

export function ClinicNew() {
  return (
    <div className="flex h-full flex-col bg-white text-slate-800">
      {/* Navegación */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-sky-500 text-white">
            <Stethoscope className="h-3 w-3" aria-hidden="true" />
          </span>
          <span className="text-[12px] font-bold tracking-tight">
            Clínica Sonrisa
          </span>
        </div>
        <div className="flex items-center gap-2.5 text-[10px] font-medium text-slate-500">
          <span className="hidden sm:inline">Servicios</span>
          <span className="hidden sm:inline">Equipo</span>
          <span className="rounded-full bg-teal-500 px-3 py-1 font-semibold text-white">
            Pedir cita
          </span>
        </div>
      </div>

      {/* Héroe con texto + tarjeta de cita */}
      <div className="relative mx-3 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 via-white to-sky-50 p-3.5">
        <div
          className="absolute right-0 top-0 h-24 w-24 rounded-full opacity-40 blur-2xl"
          style={{ background: "radial-gradient(circle,#5eead4,transparent 70%)" }}
        />
        <div className="relative flex items-start justify-between gap-2">
          <div className="max-w-[62%]">
            <p className="text-[16px] font-bold leading-[1.1] text-slate-900">
              Tu sonrisa, en las mejores manos
            </p>
            <p className="mt-1 text-[9px] leading-snug text-slate-500">
              Odontología cercana y sin sorpresas en el centro de Madrid.
            </p>
            <span className="mt-2 inline-flex rounded-full bg-teal-500 px-3 py-1 text-[9px] font-bold text-white">
              Pedir cita online
            </span>
          </div>
          {/* Tarjetita de confianza */}
          <div className="w-[34%] rounded-xl border border-teal-100 bg-white p-2 shadow-sm">
            <div className="flex items-center gap-1">
              <Stars className="text-amber-400" />
            </div>
            <p className="mt-1 text-[8px] font-semibold leading-tight text-slate-700">
              4,9 · 210 opiniones
            </p>
            <p className="mt-1 text-[7.5px] leading-tight text-slate-400">
              “Trato excelente y sin dolor.”
            </p>
          </div>
        </div>
        <div className="relative mt-2.5 flex gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[8px] font-medium text-teal-700 shadow-sm">
            <ShieldCheck className="h-2.5 w-2.5" aria-hidden="true" /> 1ª visita gratis
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[8px] font-medium text-teal-700 shadow-sm">
            <Clock className="h-2.5 w-2.5" aria-hidden="true" /> Cita en 24 h
          </span>
        </div>
      </div>

      {/* Servicios */}
      <div className="grid grow grid-cols-3 gap-2 p-3">
        {[
          { s: "Limpieza", d: "desde 45€" },
          { s: "Ortodoncia", d: "invisible" },
          { s: "Implantes", d: "financiables" },
        ].map(({ s, d }) => (
          <div
            key={s}
            className="rounded-xl border border-slate-100 bg-slate-50/70 p-2"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
              <Stethoscope className="h-3 w-3" aria-hidden="true" />
            </span>
            <p className="mt-1.5 text-[9px] font-semibold text-slate-700">{s}</p>
            <p className="text-[8px] text-slate-400">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===================================================================== */
/* REFORMAS                                                               */
/* ===================================================================== */

export function ReformsOld() {
  return (
    <div className="h-full bg-[#2b2b2b] font-sans text-[#dcdcdc]">
      <div className="flex items-center justify-between border-b-4 border-[#f2c200] bg-[#1c1c1c] px-3 py-2">
        <span className="text-[12px] font-black uppercase italic tracking-tight text-[#f2c200]">
          Reformas Pérez
        </span>
        <span className="text-[8px] text-[#bbb]">☎ 600 11 22 33</span>
      </div>
      <div className="flex gap-2 bg-[#f2c200] px-3 py-1 text-[9px] font-bold text-[#1c1c1c]">
        <span>INICIO</span>
        <span>TRABAJOS</span>
        <span>PRESUPUESTO</span>
      </div>
      <div className="p-3">
        <p className="text-center text-[12px] font-bold uppercase text-[#f2c200]">
          Reformas integrales y albañilería
        </p>
        <div className="mt-2 grid grid-cols-4 gap-1">
          {["obra1", "obra2", "img_03", "foto4", "DSC091", "reforma", "p1", "casa"].map(
            (t) => (
              <div
                key={t}
                className="flex h-8 items-center justify-center border border-[#555] bg-[#444] text-[7px] text-[#999]"
              >
                {t}.jpg
              </div>
            )
          )}
        </div>
        <p className="mt-2 text-center text-[8px] text-[#aaa]">
          Presupuesto sin compromiso. Llámenos y le atenderemos.
        </p>
      </div>
    </div>
  );
}

export function ReformsNew() {
  return (
    <div className="flex h-full flex-col bg-[#0f172a] text-slate-100">
      {/* Navegación */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-orange-500 text-white">
            <HardHat className="h-3 w-3" aria-hidden="true" />
          </span>
          <span className="text-[12px] font-black tracking-tight">
            PÉREZ<span className="font-light text-slate-400"> reformas</span>
          </span>
        </div>
        <div className="flex items-center gap-2.5 text-[10px] font-medium text-slate-400">
          <span className="hidden sm:inline">Proyectos</span>
          <span className="hidden sm:inline">Servicios</span>
          <span className="rounded-full bg-orange-500 px-3 py-1 font-semibold text-white">
            Presupuesto
          </span>
        </div>
      </div>

      {/* Héroe con foto antes/después */}
      <div className="relative mx-3 h-[104px] overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(50% 60% at 78% 25%, rgba(251,146,60,0.35), transparent 60%)",
          }}
        />
        <HeroPhoto src={mockupPhotos.reform} />
        {/* Franja tipo comparación (solo cuando no hay foto real) */}
        {!mockupPhotos.reform && (
          <>
            <div className="absolute right-3 top-3 bottom-3 w-[42%] rounded-lg border border-white/15 bg-gradient-to-br from-amber-100/90 to-slate-200/80" />
            <div className="absolute left-3 top-3 bottom-3 w-[42%] rounded-lg bg-gradient-to-br from-slate-600 to-slate-500" />
          </>
        )}
        <span className="absolute right-2.5 top-2 inline-flex items-center gap-1 rounded-full bg-white/95 px-1.5 py-0.5 text-[7px] font-bold text-slate-800">
          <Ruler className="h-2.5 w-2.5" aria-hidden="true" /> +150 proyectos
        </span>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-orange-300">
            Reformas integrales
          </span>
          <p className="text-[13px] font-bold leading-tight">
            Acabados de calidad, sin sorpresas
          </p>
        </div>
      </div>

      {/* Servicios / confianza */}
      <div className="grid grow grid-cols-3 gap-2 p-3">
        {[
          { s: "Cocinas", d: "llave en mano" },
          { s: "Baños", d: "en 2 semanas" },
          { s: "Integrales", d: "proyecto + obra" },
        ].map(({ s, d }) => (
          <div
            key={s}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" />
            <p className="mt-1 text-[9px] font-semibold text-slate-100">{s}</p>
            <p className="text-[8px] text-slate-400">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===================================================================== */
/* Registro por slug de caso                                              */
/* ===================================================================== */

export interface MockupPair {
  url: string;
  Old: () => JSX.Element;
  New: () => JSX.Element;
}

export const caseMockups: Record<string, MockupPair> = {
  "restaurante-local": {
    url: "restaurante-elrincon.es",
    Old: RestaurantOld,
    New: RestaurantNew,
  },
  clinica: {
    url: "clinicadentalsonrisa.es",
    Old: ClinicOld,
    New: ClinicNew,
  },
  "empresa-reformas": {
    url: "reformasperez.es",
    Old: ReformsOld,
    New: ReformsNew,
  },
};
