import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <div className="container-page text-center">
        <LogoMark className="mx-auto h-12 w-12" />
        <p className="mt-6 text-6xl font-extrabold text-gradient sm:text-7xl">404</p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
          Esta página no ha completado su metamorfosis
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          La página que buscas no existe o se ha movido. Volvamos a un lugar
          conocido.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            <Home className="h-4 w-4" aria-hidden="true" />
            Volver al inicio
          </Button>
          <Button href="/#analisis" size="lg" variant="secondary">
            Diagnóstico gratis
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
