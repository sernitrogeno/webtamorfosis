"use client";

import { Settings2 } from "lucide-react";
import { openCookiePreferences } from "@/components/CookieBanner";

/** Botón para reabrir la configuración de cookies desde la política. */
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-brand-100"
    >
      <Settings2 className="h-4 w-4" aria-hidden="true" />
      Configurar cookies
    </button>
  );
}
