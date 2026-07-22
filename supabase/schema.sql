-- =====================================================================
-- Webtamorfosis — Esquema de la base de datos (Supabase / PostgreSQL)
-- ---------------------------------------------------------------------
-- Cómo usarlo:
--   1. Entra en tu proyecto de Supabase → SQL Editor → New query.
--   2. Pega TODO este archivo y pulsa "Run".
--   3. Verás la tabla en Table Editor → "solicitudes".
-- =====================================================================

create table if not exists public.solicitudes (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),

  -- Datos del formulario
  nombre       text not null,
  empresa      text,
  email        text not null,
  telefono     text,
  url          text,
  sector       text,
  problema     text,
  presupuesto  text,
  mensaje      text,

  -- Gestión interna (para "trabajar con ellas" desde el panel de Supabase)
  estado       text not null default 'nueva'
                 check (estado in ('nueva','contactado','propuesta','ganado','descartado')),
  notas        text
);

-- Índice para ordenar/filtrar por fecha rápidamente.
create index if not exists solicitudes_created_at_idx
  on public.solicitudes (created_at desc);

-- Seguridad: activamos Row Level Security y NO creamos políticas públicas.
-- Así, nadie con la clave pública (anon) puede leer ni escribir.
-- El servidor de la web usa la SERVICE ROLE KEY, que omite RLS, para insertar.
-- El panel de Supabase (Table Editor) también usa credenciales de servicio,
-- por lo que tú sí ves y editas las filas desde ahí.
alter table public.solicitudes enable row level security;
