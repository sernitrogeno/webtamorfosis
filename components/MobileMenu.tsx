"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { mainNav } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  activeId?: string;
}

/** Menú desplegable accesible para móvil. */
export function MobileMenu({ activeId }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Bloquea el scroll del fondo y cierra con Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú de navegación"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-black/5 dark:hover:bg-white/10"
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60]"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu-panel"
            ref={panelRef}
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-[rgb(var(--background))] p-6 shadow-2xl"
          >
            <div className="mb-8 flex items-center justify-end">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                aria-label="Cerrar menú"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-black/5 dark:hover:bg-white/10"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
              {mainNav.map((link) => {
                const id = link.href.split("#")[1];
                const active = id === activeId;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "rounded-xl px-4 py-3 text-lg font-medium transition-colors",
                      active
                        ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-200"
                        : "text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-6">
              <Button
                href="/#analisis"
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Diagnóstico gratis
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
