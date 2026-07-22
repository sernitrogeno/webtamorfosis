/**
 * Acceso a Supabase para uso EXCLUSIVO en el servidor (API routes).
 *
 * Insertamos por la API REST (PostgREST) con `fetch` en lugar de usar la
 * librería @supabase/supabase-js: es más ligero, no arrastra dependencias y
 * funciona en cualquier versión de Node (la librería exige WebSocket nativo).
 *
 * Usa la SERVICE ROLE KEY, que NUNCA debe exponerse al cliente ni llevar el
 * prefijo NEXT_PUBLIC_. Solo se importa desde código de servidor.
 */

/**
 * Normaliza SUPABASE_URL para aceptar la URL completa o solo el project ref:
 *   "https://xxxx.supabase.co" → tal cual
 *   "xxxx.supabase.co"         → se le añade https://
 *   "xxxx" (project ref)       → https://xxxx.supabase.co
 */
function normalizeSupabaseUrl(raw: string): string {
  const v = raw.trim().replace(/\/$/, "");
  if (/^https?:\/\//i.test(v)) return v;
  if (v.includes(".")) return `https://${v}`;
  return `https://${v}.supabase.co`;
}

function getConfig(): { url: string; key: string } | null {
  const rawUrl = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!rawUrl || !key) return null;
  return { url: normalizeSupabaseUrl(rawUrl), key };
}

/** ¿Está configurada la base de datos? (si no, el formulario va en modo simulado) */
export function isSupabaseConfigured(): boolean {
  return getConfig() !== null;
}

export interface SolicitudRow {
  nombre: string;
  empresa: string | null;
  email: string;
  telefono: string | null;
  url: string;
  sector: string | null;
  problema: string | null;
  presupuesto: string | null;
  mensaje: string | null;
}

/** Inserta una solicitud en la tabla `solicitudes` vía API REST. */
export async function insertSolicitud(
  row: SolicitudRow
): Promise<{ ok: boolean; error?: string }> {
  const cfg = getConfig();
  if (!cfg) return { ok: false, error: "not_configured" };

  try {
    const res = await fetch(`${cfg.url}/rest/v1/solicitudes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: cfg.key,
        Authorization: `Bearer ${cfg.key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
      cache: "no-store",
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return { ok: false, error: `${res.status} ${detail}`.slice(0, 300) };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "network_error" };
  }
}
