"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { mainNav } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/MobileMenu";
import { cn } from "@/lib/utils";

/** Ids de las secciones observadas para resaltar la navegación activa. */
const SECTION_IDS = ["inicio", "servicios", "proceso", "precios", "faq"];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: resalta la sección visible (solo en la home).
  useEffect(() => {
    if (!isHome) return;
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-black/5 bg-[rgb(var(--background))]/80 backdrop-blur-lg dark:border-white/5"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navegación principal"
        >
          {mainNav.map((link) => {
            const id = link.href.split("#")[1];
            const active = isHome && id === activeId;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-brand-700 dark:text-brand-200"
                    : "text-muted hover:text-foreground"
                )}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-brand-50 dark:bg-brand-500/10" />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/#analisis" size="md" className="hidden sm:inline-flex">
            Diagnóstico gratis
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <MobileMenu activeId={isHome ? activeId : undefined} />
        </div>
      </div>
    </header>
  );
}
