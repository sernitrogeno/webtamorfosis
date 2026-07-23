import type { ReactNode } from "react";
import Image from "next/image";
import {
  Star,
  Stethoscope,
  ShieldCheck,
  HardHat,
  Ruler,
  Dumbbell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BrowserMockup } from "@/components/BrowserMockup";
import { mockupPhotos, mockupImages } from "@/data/mockups";

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

/** Miniatura real (rellena su contenedor relativo). */
function Thumb({ src, className }: { src: string; className?: string }) {
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="160px"
      className={cn("object-cover", className)}
    />
  );
}

/** Filtro CSS que da aspecto "antiguo" a una foto real (webs viejas). */
const OLD_IMG = "[filter:sepia(35%)_saturate(80%)_contrast(92%)]";

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

// "Antes": web familiar de restaurante ~2006 (serif, marrón/oro, contador).
export function RestaurantOld() {
  return (
    <div
      className="flex h-full flex-col bg-[#f3e8cf] font-serif text-[#463818]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent 0 22px, rgba(0,0,0,0.02) 22px 23px)",
      }}
    >
      <div className="bg-gradient-to-b from-[#8a1c1c] to-[#4e0d0d] px-3 py-2 text-center text-[#f2d488]">
        <p className="text-[17px] font-bold italic tracking-tight [text-shadow:1px_1px_0_#2a0606]">
          ~ Restaurante El Rincón ~
        </p>
        <p className="text-[8px] italic text-[#e6c37a]">
          Cocina casera de toda la vida · desde 1998
        </p>
      </div>
      <div className="flex justify-center gap-0.5 border-y border-[#2a0606] bg-[#3a0d0d] px-2 py-1">
        {["Inicio", "La Carta", "Fotos", "Reservas", "Contacto"].map((t) => (
          <span
            key={t}
            className="border border-[#7a1f1f] bg-gradient-to-b from-[#a83232] to-[#6e1414] px-1.5 py-0.5 text-[8px] font-bold text-[#f2d488]"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex-1 p-2.5">
        <p className="text-center text-[13px] font-black uppercase text-[#8a1c1c]">
          ¡¡ Bienvenidos !!
        </p>
        <div className="mt-1.5 flex gap-2">
          <div className="shrink-0 border-2 border-[#8a7a55] bg-white p-[2px] shadow-[2px_2px_0_#b9a76f]">
            <div className="relative h-[74px] w-24 overflow-hidden">
              <Thumb src={mockupImages.restaurant.old} className={OLD_IMG} />
            </div>
          </div>
          <div className="text-[8.5px] leading-snug">
            <p>
              Bienvenidos a nuestra página web. Somos un restaurante familiar
              donde disfrutar de la mejor comida casera.
            </p>
            <p className="mt-1.5 text-[#12419e] underline">» Descargar carta (PDF)</p>
            <p className="text-[#12419e] underline">» Ver fotos del local</p>
            <p className="text-[#12419e] underline">» Cómo llegar (mapa)</p>
          </div>
        </div>
        <div className="mt-2 text-center">
          <span className="inline-block border border-[#2a6a2a] bg-gradient-to-b from-[#9ad19a] to-[#4f9e4f] px-3 py-1 text-[10px] font-bold text-[#123312] shadow-[1px_1px_0_#2a6a2a]">
            RESERVAR MESA
          </span>
        </div>
      </div>
      <div className="border-t border-[#c9b98a] bg-[#e6d9b3] px-2 py-1 text-center text-[7px] text-[#6b5a35]">
        Visitas:{" "}
        <span className="bg-black px-1 font-mono text-[#39ff14]">0042138</span> ·
        Optimizado para 800×600 · Última act.: 12/03/2011
      </div>
    </div>
  );
}

// Estilo: alta cocina, oscuro y con la fotografía a pantalla completa.
export function RestaurantNew() {
  const dishes = [
    { name: "Arroz meloso", price: "18€" },
    { name: "Steak tartar", price: "16€" },
    { name: "Tarta de queso", price: "7€" },
  ];
  return (
    <div className="flex h-full flex-col bg-neutral-950 text-white">
      {/* Héroe a pantalla completa */}
      <div className="relative flex-1 overflow-hidden">
        <HeroPhoto src={mockupPhotos.restaurant} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/45" />

        {/* Navegación superpuesta */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-2.5">
          <span className="text-[14px] font-black tracking-tight">
            El Rincón<span className="text-amber-400">.</span>
          </span>
          <div className="flex items-center gap-3 text-[10px] font-medium text-white/85">
            <span className="hidden sm:inline">Carta</span>
            <span className="hidden sm:inline">Reservas</span>
            <span className="rounded-full bg-amber-400 px-3 py-1 font-bold text-neutral-900">
              Reservar
            </span>
          </div>
        </div>

        {/* Titular */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-amber-300">
            Cocina de mercado · Madrid
          </span>
          <p className="mt-1 text-[26px] font-bold leading-[0.92]">
            Sabores que se recuerdan
          </p>
          <div className="mt-1.5 flex items-center gap-1.5 text-[9px]">
            <Stars className="text-amber-400" />
            <span className="text-white/80">4,9 · 320 reseñas</span>
          </div>
          <div className="mt-2.5 flex gap-2">
            <span className="rounded-full bg-amber-400 px-4 py-1.5 text-[10px] font-bold text-neutral-900">
              Reservar mesa
            </span>
            <span className="rounded-full border border-white/40 px-4 py-1.5 text-[10px] font-semibold">
              Ver carta
            </span>
          </div>
        </div>
      </div>

      {/* Franja de platos (secundaria) */}
      <div className="flex gap-2 px-3 py-2.5">
        {dishes.map((dish, i) => (
          <div
            key={dish.name}
            className="flex-1 overflow-hidden rounded-lg bg-white/[0.04]"
          >
            <div className="relative h-9 w-full overflow-hidden">
              <Thumb src={mockupImages.restaurant.dishes[i]} />
            </div>
            <div className="flex items-center justify-between px-1.5 py-1">
              <span className="text-[8px] font-medium text-white/80">
                {dish.name}
              </span>
              <span className="text-[8px] font-bold text-amber-400">
                {dish.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===================================================================== */
/* CLÍNICA                                                                */
/* ===================================================================== */

// "Antes": web de clínica ~2010 (azul clínico, pestañas biseladas, teléfono).
export function ClinicOld() {
  return (
    <div className="flex h-full flex-col bg-white font-sans text-[#333]">
      <div className="border-b-4 border-[#0b3d91] bg-gradient-to-b from-[#5aa0e0] to-[#1f5fa8] px-3 py-2 text-white">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1f5fa8] bg-white text-[14px] font-black text-[#1f5fa8]">
            ✚
          </span>
          <div>
            <p className="text-[14px] font-bold [text-shadow:1px_1px_0_#0b3d91]">
              Clínica Dental Sonrisa
            </p>
            <p className="text-[8px] text-[#dbe8f6]">
              Su salud bucodental es lo primero
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-0.5 border-b border-[#b8c8dc] bg-[#dfe8f2] px-2 py-1">
        {["Inicio", "Servicios", "El equipo", "Tarifas", "Contacto"].map((t) => (
          <span
            key={t}
            className="border border-[#9fb4cc] bg-gradient-to-b from-white to-[#cdd9e8] px-1.5 py-0.5 text-[8px] font-bold text-[#1f5fa8]"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex-1 p-2.5">
        <div className="flex gap-2">
          <div className="shrink-0 border border-[#8aa] bg-white p-[2px] shadow-[2px_2px_0_#b8c4d2]">
            <div className="relative h-[82px] w-[88px] overflow-hidden">
              <Thumb src={mockupImages.clinic.old} className={OLD_IMG} />
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold text-[#1f5fa8]">
              Bienvenido a nuestra clínica
            </p>
            <ul className="mt-1 space-y-0.5 text-[8px] text-[#444]">
              {[
                "Odontología general",
                "Ortodoncia",
                "Implantes dentales",
                "Estética dental",
                "Endodoncia",
              ].map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#e0d000] bg-[#ffffcc] px-3 py-1.5 text-center text-[12px] font-bold text-[#cc0000]">
        ☎ PIDA SU CITA: 91 555 44 33
      </div>
      <div className="bg-[#1f5fa8] px-2 py-1 text-center text-[7px] text-white/80">
        © 2010 Clínica Dental Sonrisa · Web optimizada para Internet Explorer 6
      </div>
    </div>
  );
}

// Estilo: sanitario, luminoso y espacioso. Composición partida (texto + foto).
export function ClinicNew() {
  return (
    <div className="flex h-full flex-col bg-white text-slate-900">
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

      {/* Héroe partido: texto + fotografía grande */}
      <div className="grid flex-1 grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col justify-center gap-1.5 py-3 pl-4 pr-1">
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-teal-600">
            Clínica dental · Madrid
          </span>
          <p className="text-[20px] font-bold leading-[1.02]">
            Tu sonrisa, en las mejores manos
          </p>
          <p className="text-[9px] leading-snug text-slate-500">
            Odontología cercana y sin sorpresas.
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <span className="rounded-full bg-teal-500 px-3 py-1.5 text-[9px] font-bold text-white">
              Pedir cita online
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2 py-1 text-[8px] font-semibold text-teal-700">
              <ShieldCheck className="h-2.5 w-2.5" aria-hidden="true" /> 1ª visita gratis
            </span>
          </div>
        </div>
        <div className="relative m-2 overflow-hidden rounded-2xl bg-teal-100">
          <HeroPhoto src={mockupPhotos.clinic} />
          <span className="absolute bottom-1.5 left-1.5 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[8px] font-bold text-slate-800 shadow-sm">
            <Stars className="text-amber-500" /> 4,9
          </span>
        </div>
      </div>

      {/* Barra de confianza */}
      <div className="flex items-center justify-between gap-2 border-t border-slate-100 bg-teal-50/70 px-4 py-2 text-[8.5px] font-semibold text-teal-800">
        <span>★ 4,9 · 210 opiniones</span>
        <span className="hidden sm:inline">+2.000 pacientes</span>
        <span>Financiación 0%</span>
      </div>
    </div>
  );
}

/* ===================================================================== */
/* REFORMAS                                                               */
/* ===================================================================== */

// "Antes": web de reformas ~2008 (negro/amarillo obra, teléfono, galería).
export function ReformsOld() {
  const gallery = [
    mockupImages.reform.old[0],
    mockupImages.reform.old[1],
    mockupImages.reform.projects[0],
    mockupImages.reform.projects[1],
    mockupImages.reform.projects[2],
    mockupImages.reform.old[0],
    mockupImages.reform.old[1],
    mockupImages.reform.projects[2],
  ];
  return (
    <div className="flex h-full flex-col bg-[#2b2b2b] font-sans text-[#dcdcdc]">
      <div className="flex items-center justify-between border-b-4 border-[#f2c200] bg-black px-3 py-2">
        <div>
          <span className="text-[14px] font-black uppercase italic tracking-tight text-[#f2c200] [text-shadow:1px_1px_0_#7a6200]">
            Reformas Pérez
          </span>
          <p className="text-[7px] text-[#bbb]">
            Construcción · Albañilería · Reformas integrales
          </p>
        </div>
        <div className="text-right leading-tight text-[#f2c200]">
          <p className="text-[7px] text-[#ccc]">Llámenos:</p>
          <p className="text-[13px] font-black">600 11 22 33</p>
        </div>
      </div>
      <div className="flex gap-2 border-b-2 border-[#7a6200] bg-[#f2c200] px-3 py-1 text-[9px] font-black uppercase text-black">
        <span>Inicio</span>
        <span>Trabajos</span>
        <span>Servicios</span>
        <span>Presupuesto</span>
        <span>Contacto</span>
      </div>
      <div className="flex-1 p-2.5">
        <p className="text-center text-[12px] font-black uppercase text-[#f2c200]">
          Reformas integrales y albañilería
        </p>
        <p className="mt-0.5 text-center text-[7px] text-[#aaa]">
          Más de 20 años de experiencia · Presupuesto SIN COMPROMISO
        </p>
        <div className="mt-2 grid grid-cols-4 gap-1">
          {gallery.map((src, i) => (
            <div
              key={i}
              className="relative h-9 overflow-hidden border-2 border-[#555]"
            >
              <Thumb src={src} className={OLD_IMG} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black px-2 py-1 text-center text-[7px] font-bold text-[#f2c200]">
        ¡Visítenos sin compromiso! · © 2008 Reformas Pérez S.L.
      </div>
    </div>
  );
}

// Estilo: arquitectónico e industrial. Hero grande + portfolio de proyectos.
export function ReformsNew() {
  const projects = ["Cocinas", "Baños", "Integrales"];
  return (
    <div className="flex h-full flex-col bg-[#0e1116] text-slate-100">
      {/* Navegación */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-orange-500 text-white">
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

      {/* Héroe grande */}
      <div className="relative flex-1 overflow-hidden">
        <HeroPhoto src={mockupPhotos.reform} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/35" />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[8px] font-bold text-slate-800">
          <Ruler className="h-2.5 w-2.5" aria-hidden="true" /> +150 proyectos
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-orange-400">
            Reformas integrales
          </span>
          <p className="mt-1 text-[22px] font-bold leading-[0.95]">
            Acabados de calidad, sin sorpresas
          </p>
          <span className="mt-2.5 inline-flex rounded-full bg-orange-500 px-4 py-1.5 text-[10px] font-bold text-white">
            Pide presupuesto
          </span>
        </div>
      </div>

      {/* Portfolio de proyectos (fotos edge-to-edge) */}
      <div className="grid grid-cols-3 gap-1.5 px-3 py-2.5">
        {projects.map((label, i) => (
          <div key={label} className="relative h-12 overflow-hidden rounded-lg">
            <Thumb src={mockupImages.reform.projects[i]} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-1.5 pb-1 pt-3">
              <span className="text-[8px] font-bold uppercase tracking-wide text-white">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===================================================================== */
/* GIMNASIO                                                               */
/* ===================================================================== */

// "Antes": web de gimnasio ~2007 (negro y verde neón, agresiva).
export function GymOld() {
  return (
    <div className="flex h-full flex-col bg-[#0d0d0d] font-sans text-[#ccc]">
      <div className="flex items-center justify-between border-b-2 border-[#c8ff00] bg-gradient-to-r from-black to-[#1a1a1a] px-3 py-2">
        <span className="text-[15px] font-black uppercase italic tracking-tighter text-[#c8ff00] [text-shadow:0_0_6px_#c8ff00]">
          Gym Power
        </span>
        <span className="text-[8px] text-[#888]">☎ 91 777 88 99</span>
      </div>
      <div className="flex gap-2 bg-[#1c1c1c] px-3 py-1 text-[9px] font-black uppercase text-[#c8ff00]">
        <span>Inicio</span>
        <span>Tarifas</span>
        <span>Clases</span>
        <span>Horarios</span>
        <span>Contacto</span>
      </div>
      <div className="flex-1 p-2.5 text-center">
        <p className="text-[16px] font-black uppercase italic text-[#c8ff00] [text-shadow:0_0_6px_#c8ff00]">
          ¡Ponte en forma YA!
        </p>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {mockupImages.gym.old.map((src, i) => (
            <div
              key={i}
              className="relative h-14 overflow-hidden border-2 border-[#c8ff00]/40"
            >
              <Thumb src={src} className={OLD_IMG} />
            </div>
          ))}
        </div>
        <p className="mt-2 text-[8px] leading-snug text-[#999]">
          Musculación · Cardio · Clases dirigidas · Abierto de L a D
        </p>
        <div className="mt-2 inline-block border-2 border-[#c8ff00] bg-black px-3 py-1 text-[10px] font-black uppercase text-[#c8ff00]">
          ★ Matrícula GRATIS ★
        </div>
      </div>
      <div className="bg-black px-2 py-1 text-center text-[7px] text-[#666]">
        © 2007 Gym Power · Web optimizada para 1024×768
      </div>
    </div>
  );
}

// Estilo: energía máxima. Fotografía a sangre completa + acento neón lima.
export function GymNew() {
  return (
    <div className="relative h-full overflow-hidden bg-black text-white">
      <HeroPhoto src={mockupPhotos.gym} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/55" />

      {/* Navegación superpuesta */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-lime-400 text-neutral-900">
            <Dumbbell className="h-3 w-3" aria-hidden="true" />
          </span>
          <span className="text-[13px] font-black tracking-tight">
            GYM<span className="text-lime-400">POWER</span>
          </span>
        </div>
        <span className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold text-neutral-900">
          Prueba gratis
        </span>
      </div>

      {/* Titular grande */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-lime-400">
          Entrena a tu ritmo
        </span>
        <p className="mt-1 text-[30px] font-black uppercase italic leading-[0.85]">
          Tu mejor
          <br />
          versión
        </p>
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <span className="rounded-full bg-lime-400 px-4 py-1.5 text-[10px] font-bold text-neutral-900">
            Apúntate online
          </span>
          <span className="rounded-full border border-lime-400/60 px-3 py-1.5 text-[9px] font-bold text-lime-300">
            29€/mes
          </span>
          <span className="rounded-full border border-white/25 px-3 py-1.5 text-[9px] font-semibold text-white/85">
            Sin matrícula
          </span>
        </div>
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
  gimnasio: {
    url: "gympower.es",
    Old: GymOld,
    New: GymNew,
  },
};
