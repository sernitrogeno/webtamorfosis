import {
  UtensilsCrossed,
  Stethoscope,
  Dumbbell,
  Scissors,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Wrench,
  BedDouble,
  Scale,
  HardHat,
  Store,
} from "lucide-react";
import type { Sector } from "@/types";

export const sectors: Sector[] = [
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Stethoscope, label: "Clínicas" },
  { icon: Dumbbell, label: "Gimnasios" },
  { icon: Scissors, label: "Peluquerías" },
  { icon: ShoppingBag, label: "Tiendas" },
  { icon: Briefcase, label: "Profesionales" },
  { icon: GraduationCap, label: "Academias" },
  { icon: Wrench, label: "Empresas de servicios" },
  { icon: BedDouble, label: "Alojamientos" },
  { icon: Scale, label: "Despachos" },
  { icon: HardHat, label: "Construcción y reformas" },
  { icon: Store, label: "Negocios locales" },
];
