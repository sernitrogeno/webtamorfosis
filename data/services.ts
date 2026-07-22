import {
  Sparkles,
  Smartphone,
  Gauge,
  MousePointerClick,
  Search,
  ArrowRightLeft,
  Wrench,
  LayoutTemplate,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "rediseno-web",
    icon: Sparkles,
    title: "Rediseño web completo",
    description:
      "Modernización visual y estructural de una web existente, de arriba a abajo.",
    benefit: "Una imagen actual que está a la altura de tu negocio.",
    detail: {
      problem:
        "Tu web funciona, pero se ve anticuada, transmite poca confianza o ya no representa lo que eres.",
      includes: [
        "Nuevo diseño visual moderno y coherente con tu marca",
        "Reorganización de la estructura y los contenidos",
        "Mejora de textos para que se entiendan en segundos",
        "Adaptación completa a móvil, tablet y escritorio",
        "Optimización de velocidad y accesibilidad",
      ],
      forWho:
        "Negocios que ya tienen web pero sienten que se ha quedado atrás.",
      result:
        "Una web que genera mejor primera impresión y facilita el contacto.",
    },
  },
  {
    slug: "web-nueva",
    icon: LayoutTemplate,
    title: "Web nueva desde cero",
    description:
      "Para negocios que todavía no tienen una presencia digital profesional.",
    benefit: "Empiezas con una base sólida, moderna y preparada para crecer.",
    detail: {
      problem:
        "No tienes web, o la que tienes es tan limitada que es mejor empezar de nuevo.",
      includes: [
        "Estructura pensada desde los objetivos del negocio",
        "Diseño a medida, sin apariencia de plantilla genérica",
        "Textos y secciones orientados a conseguir contactos",
        "Base técnica rápida, responsive y accesible",
        "Preparada para añadir más páginas o funciones más adelante",
      ],
      forWho:
        "Negocios nuevos o que dan el paso a tener por fin una web seria.",
      result: "Una presencia digital profesional desde el primer día.",
    },
  },
  {
    slug: "responsive",
    icon: Smartphone,
    title: "Diseño responsive",
    description: "Adaptación perfecta a móvil, tablet y escritorio.",
    benefit: "Una experiencia impecable venga de donde venga tu cliente.",
    detail: {
      problem:
        "Tu web se ve bien en ordenador, pero en el móvil los textos, botones o imágenes se descolocan.",
      includes: [
        "Diseño con enfoque «primero el móvil»",
        "Menús, botones y formularios cómodos con el dedo",
        "Imágenes y tipografía que se adaptan a cada pantalla",
        "Revisión en móvil pequeño, grande, tablet y escritorio",
      ],
      forWho:
        "Cualquier negocio cuyos clientes lleguen sobre todo desde el móvil.",
      result: "Menos abandonos y una experiencia coherente en todos los dispositivos.",
    },
  },
  {
    slug: "velocidad",
    icon: Gauge,
    title: "Mejora de velocidad",
    description: "Optimización de rendimiento, imágenes y carga.",
    benefit: "Una web rápida que no hace esperar a nadie.",
    detail: {
      problem:
        "Tu web tarda en cargar y notas que la gente se marcha antes de tiempo.",
      includes: [
        "Optimización y compresión de imágenes",
        "Carga diferida de elementos pesados",
        "Reducción de código y recursos innecesarios",
        "Mejora de las métricas de experiencia (Core Web Vitals)",
      ],
      forWho:
        "Webs que cargan lento y pierden visitas por el camino.",
      result: "Una carga ágil que mejora la experiencia y el posicionamiento.",
    },
  },
  {
    slug: "conversion",
    icon: MousePointerClick,
    title: "Conversión y llamadas a la acción",
    description:
      "Mejora de formularios, mensajes y recorridos del usuario.",
    benefit: "Convierte más visitas en contactos y oportunidades reales.",
    detail: {
      problem:
        "Recibes visitas, pero casi nadie te llama, reserva o rellena el formulario.",
      includes: [
        "Botones y llamadas a la acción claras y visibles",
        "Formularios sencillos que la gente sí completa",
        "Mensajes que guían al visitante hacia el contacto",
        "Recorridos pensados para reducir la fricción",
      ],
      forWho:
        "Negocios con tráfico que no se traduce en contactos.",
      result: "Más solicitudes de contacto a partir de las mismas visitas.",
    },
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO básico",
    description:
      "Estructura, títulos, metadatos y contenido preparado para buscadores.",
    benefit: "Bases sólidas para que te encuentren en Google.",
    detail: {
      problem:
        "Tu web apenas aparece cuando buscan lo que ofreces.",
      includes: [
        "Estructura de encabezados y URLs limpias",
        "Títulos y descripciones optimizados por página",
        "Datos estructurados básicos de tu negocio",
        "Contenido preparado para las búsquedas de tu sector",
      ],
      forWho:
        "Negocios locales que quieren ser encontrados por clientes cercanos.",
      result: "Una base técnica sólida sobre la que mejorar tu visibilidad.",
    },
  },
  {
    slug: "migracion",
    icon: ArrowRightLeft,
    title: "Migración de contenido",
    description: "Traslado de textos, imágenes y páginas importantes.",
    benefit: "Estrenas web sin perder lo que ya tenías.",
    detail: {
      problem:
        "Quieres renovar la web, pero te preocupa perder contenidos o tu posición en Google.",
      includes: [
        "Traslado ordenado de textos, imágenes y páginas clave",
        "Mantenimiento de las URLs importantes",
        "Redirecciones para no perder posicionamiento",
        "Revisión final de que todo funciona tras el cambio",
      ],
      forWho:
        "Webs con contenido o posicionamiento que conviene conservar.",
      result: "Un cambio de web cuidado, con las mínimas interrupciones.",
    },
  },
  {
    slug: "mantenimiento",
    icon: Wrench,
    title: "Mantenimiento web",
    description: "Actualizaciones, copias de seguridad y soporte.",
    benefit: "Tu web siempre al día, sin que tengas que preocuparte.",
    detail: {
      problem:
        "No tienes tiempo ni ganas de estar pendiente de actualizaciones y problemas técnicos.",
      includes: [
        "Actualizaciones técnicas y de seguridad",
        "Copias de seguridad periódicas",
        "Pequeños cambios de textos e imágenes",
        "Soporte ante incidencias",
      ],
      forWho:
        "Negocios que prefieren delegar el cuidado técnico de su web.",
      result: "Tranquilidad y una web que se mantiene rápida y segura.",
    },
  },
];
