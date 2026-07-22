import {
  BadgeCheck,
  Palette,
  Mailbox,
  Smartphone,
  Gauge,
  MessageSquare,
  Search,
  Pencil,
  LogOut,
  HeartHandshake,
} from "lucide-react";
import type { Benefit } from "@/types";

export const benefits: Benefit[] = [
  {
    icon: BadgeCheck,
    title: "Mayor credibilidad",
    description:
      "Una web cuidada respalda lo que cuentas y refuerza la seriedad de tu negocio.",
  },
  {
    icon: Palette,
    title: "Mejor imagen de marca",
    description:
      "Un diseño coherente hace que tu negocio se perciba más profesional y actual.",
  },
  {
    icon: Mailbox,
    title: "Más contactos",
    description:
      "Con mensajes claros y llamadas a la acción visibles, es más fácil que te escriban.",
  },
  {
    icon: Smartphone,
    title: "Mejor experiencia móvil",
    description:
      "Tus clientes navegan cómodos desde el móvil, que es desde donde más te visitan.",
  },
  {
    icon: Gauge,
    title: "Mayor velocidad",
    description:
      "Una web rápida mejora la experiencia y reduce el abandono de visitas.",
  },
  {
    icon: MessageSquare,
    title: "Mensaje más claro",
    description:
      "El visitante entiende en segundos qué ofreces y por qué elegirte.",
  },
  {
    icon: Search,
    title: "Mejor posicionamiento",
    description:
      "Una base técnica sólida ayuda a que te encuentren cuando buscan lo que haces.",
  },
  {
    icon: Pencil,
    title: "Más fácil de actualizar",
    description:
      "Cambiar textos, fotos o servicios deja de ser un problema técnico.",
  },
  {
    icon: LogOut,
    title: "Menos abandonos",
    description:
      "Una navegación clara y rápida retiene a más visitantes en tu web.",
  },
  {
    icon: HeartHandshake,
    title: "Más confianza antes del primer contacto",
    description:
      "Cuando llegan a hablar contigo, ya han tenido una buena impresión.",
  },
];
