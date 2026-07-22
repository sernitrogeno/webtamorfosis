import { NextResponse } from "next/server";
import { validateContactForm, type ContactFormValues } from "@/lib/validation";
import { isSupabaseConfigured, insertSolicitud } from "@/lib/supabase";

/**
 * Endpoint del formulario de diagnóstico / contacto.
 * =====================================================================
 * Guarda cada solicitud en la tabla `solicitudes` de Supabase.
 *
 * PUESTA EN MARCHA (ver README, sección "Base de datos"):
 *  1. Crea un proyecto en https://supabase.com
 *  2. Ejecuta el SQL de `supabase/schema.sql` en el editor SQL de Supabase.
 *  3. Copia en `.env.local` (y en Vercel):
 *       SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *  4. Las solicitudes se ven/gestionan en el panel de Supabase (Table Editor).
 *
 * Si esas variables no están definidas, el formulario funciona en modo
 * SIMULADO (útil en local sin BD): valida y responde OK, pero no guarda.
 *
 * TODO opcional: enviar además un email de aviso con Resend (https://resend.com).
 * =====================================================================
 */

// Sanitiza una cadena: recorta y limita longitud para evitar abusos.
function clean(value: unknown, max = 2000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: Partial<ContactFormValues>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Protección anti-spam: si el honeypot viene relleno, es un bot.
  // Respondemos 200 para no dar pistas, pero no procesamos nada.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const data: ContactFormValues = {
    name: clean(body.name, 80),
    company: clean(body.company, 120),
    email: clean(body.email, 160),
    phone: clean(body.phone, 40),
    url: clean(body.url, 300),
    sector: clean(body.sector, 80),
    problem: clean(body.problem, 80),
    budget: clean(body.budget, 80),
    message: clean(body.message, 2000),
    privacy: body.privacy === true,
  };

  // Validación de servidor (misma lógica que el cliente).
  const errors = validateContactForm(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    if (isSupabaseConfigured()) {
      // Guarda la solicitud en la tabla `solicitudes` de Supabase.
      const result = await insertSolicitud({
        nombre: data.name,
        empresa: data.company || null,
        email: data.email,
        telefono: data.phone || null,
        url: data.url,
        sector: data.sector || null,
        problema: data.problem || null,
        presupuesto: data.budget || null,
        mensaje: data.message || null,
      });

      if (!result.ok) {
        console.error("[contacto] Error al guardar en Supabase:", result.error);
        return NextResponse.json(
          { ok: false, error: "save_failed" },
          { status: 500 }
        );
      }

      // TODO (opcional): enviar además un email de aviso con Resend.
      return NextResponse.json({ ok: true });
    }

    // Sin BD configurada: modo simulado (para desarrollo local sin claves).
    if (process.env.NODE_ENV !== "production") {
      console.info("[contacto] Nueva solicitud (simulada, sin BD):", {
        name: data.name,
        email: data.email,
        url: data.url,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
