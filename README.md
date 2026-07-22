# Webtamorfosis

Web profesional orientada a conversión para **Webtamorfosis**, una agencia
especializada en rediseñar webs antiguas y convertirlas en experiencias
digitales modernas, rápidas y preparadas para generar contactos.

> **Webtamorfosis = Web + Metamorfosis.** El concepto de marca comunica
> transformación, evolución y crecimiento digital.

---

## Tecnologías

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** (animaciones sutiles, respetan `prefers-reduced-motion`)
- **Lucide React** (iconos)

Sin dependencias innecesarias. El comparador antes/después y el acordeón están
construidos a mano, sin librerías pesadas.

---

## Requisitos

- **Node.js 18.17 o superior** (recomendado Node 20 LTS). El proyecto incluye
  un `.nvmrc`, así que con [nvm](https://github.com/nvm-sh/nvm) basta con
  ejecutar `nvm use` en la carpeta del proyecto antes de los comandos de npm.

---

## Instalación y ejecución

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo en http://localhost:3000
```

Otros comandos:

```bash
npm run build    # compilación de producción
npm run start    # sirve la build de producción
npm run lint     # análisis con ESLint
```

---

## Estructura del proyecto

```
webtamorfosis/
├── app/                      # Rutas (App Router)
│   ├── layout.tsx            # Layout raíz: fuentes, SEO, header/footer, cookies
│   ├── page.tsx              # Landing principal
│   ├── servicios/            # Página de servicios detallados
│   ├── transformaciones/     # Ejemplos conceptuales con filtros
│   ├── contacto/             # Página de contacto con formulario
│   ├── aviso-legal/          # Textos legales (plantilla)
│   ├── politica-privacidad/
│   ├── politica-cookies/
│   ├── api/contact/route.ts  # Endpoint del formulario (simulado, listo para conectar)
│   ├── sitemap.ts            # Sitemap dinámico
│   ├── robots.ts             # robots.txt
│   ├── manifest.ts           # Web app manifest
│   └── not-found.tsx         # Página 404 personalizada
├── components/
│   ├── ui/                   # Componentes reutilizables (Button, Badge, etc.)
│   ├── sections/             # Secciones de la landing (Hero, Servicios, FAQ…)
│   └── *.tsx                 # Header, Footer, formulario, cookies, comparador…
├── data/                     # Contenido separado del código (textos, listas)
├── lib/                      # Utilidades y validación del formulario
├── types/                    # Tipos TypeScript compartidos
└── public/                   # Estáticos (favicon)
```

---

## Cómo editar los textos

Casi todo el contenido está en la carpeta **`data/`**, separado de los
componentes para facilitar el mantenimiento:

| Archivo             | Contenido                                   |
| ------------------- | ------------------------------------------- |
| `data/site.ts`      | Nombre, eslóganes, contacto, navegación     |
| `data/problems.ts`  | Tarjetas de la sección «Problemas»          |
| `data/services.ts`  | Servicios (resumen y detalle)               |
| `data/process.ts`   | Pasos del proceso de trabajo                |
| `data/benefits.ts`  | Beneficios                                  |
| `data/cases.ts`     | Ejemplos conceptuales de transformación     |
| `data/sectors.ts`   | Sectores                                    |
| `data/faq.ts`       | Preguntas frecuentes                        |
| `data/form.ts`      | Opciones del formulario y análisis gratuito |

---

## Base de datos: guardar las solicitudes (Supabase)

Las solicitudes del formulario se guardan en **Supabase** (PostgreSQL) y las
consultas/gestionas desde su panel visual. El endpoint es
**`app/api/contact/route.ts`** (validación de servidor, sanitización y
protección anti-spam por *honeypot* ya incluidas).

**Puesta en marcha (una sola vez):**

1. Crea una cuenta y un proyecto en <https://supabase.com> (plan gratuito).
2. En el proyecto: **SQL Editor → New query**, pega el contenido de
   **`supabase/schema.sql`** y pulsa **Run** (crea la tabla `solicitudes`).
3. Ve a **Project Settings → API** y copia:
   - **Project URL** → variable `SUPABASE_URL`
   - Clave **`service_role`** (secreta) → variable `SUPABASE_SERVICE_ROLE_KEY`
4. Pega ambas en `.env.local` (local) y en Vercel (ver despliegue).
5. Listo: cada envío crea una fila. **Para verlas y gestionarlas**, entra en
   Supabase → **Table Editor → `solicitudes`**. Puedes cambiar el campo
   `estado` (`nueva`, `contactado`, `propuesta`, `ganado`, `descartado`) y
   añadir `notas`.

> Si no defines esas variables, el formulario funciona en **modo simulado**
> (valida y responde OK, pero no guarda) — útil para desarrollo local.

> Seguridad: la `service_role` key es **secreta** y solo se usa en el servidor
> (nunca lleva `NEXT_PUBLIC_`). La tabla tiene RLS activado sin políticas
> públicas, así que no es accesible con la clave pública.

**(Opcional) Aviso por email:** si además quieres recibir un correo con cada
solicitud, añade [Resend](https://resend.com) en el `TODO` del endpoint
(`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`).

---

## Variables de entorno

Copia `.env.example` a `.env.local` y completa los valores. **Nunca** subas
`.env.local` al repositorio (ya está en `.gitignore`). En Vercel, añádelas en
**Project → Settings → Environment Variables**.

| Variable                     | Obligatoria | Descripción                                       |
| ---------------------------- | ----------- | ------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`       | Sí          | URL pública del sitio (SEO, sitemap, JSON-LD)     |
| `SUPABASE_URL`               | Sí (BD)     | Project URL de Supabase                           |
| `SUPABASE_SERVICE_ROLE_KEY`  | Sí (BD)     | Clave `service_role` (secreta, solo servidor)     |
| `RESEND_API_KEY`             | No          | Clave de Resend (aviso por email, opcional)       |
| `CONTACT_TO_EMAIL`           | No          | Correo que recibe los avisos                       |
| `CONTACT_FROM_EMAIL`         | No          | Remitente de los avisos                            |
| `NEXT_PUBLIC_GA_ID`          | No          | ID de Google Analytics (opcional)                 |

---

## Cómo cambiar los colores

La identidad visual vive en **`tailwind.config.ts`** (paleta `brand`,
`electric`, `warm` y los gradientes) y en las variables CSS de
**`app/globals.css`** (fondos, texto y modo oscuro). Cambia ahí los valores y se
propagarán a toda la web.

---

## Cómo sustituir los datos de contacto

Edita **`data/site.ts`**: correo, teléfono, `phoneHref`, tiempo de respuesta y
perfiles sociales. Todos los provisionales están marcados con `// TODO`.

---

## Cómo poner fotos reales en las webs de ejemplo

Las maquetas "después" usan un fondo de degradado por defecto. Para usar una
foto real:

1. Coloca la imagen (horizontal, ~1200×675, optimizada) en `public/mockups/`,
   por ejemplo `public/mockups/restaurant.jpg`.
2. Indica su ruta en **`data/mockups.ts`** (`restaurant`, `reform`…).

La foto se incrusta automáticamente en la maqueta; si dejas la cadena vacía, se
mantiene el degradado. (El ejemplo de restaurante y el de reformas admiten foto.)

## Cómo añadir proyectos reales

Los ejemplos actuales están marcados como **«Ejemplo conceptual»**. Cuando
tengas proyectos reales, edita **`data/cases.ts`**: sustituye los objetos por
datos reales y elimina/ajusta la etiqueta conceptual en
`components/ui/ConceptCaseCard.tsx` y en las secciones que la muestran.

La estructura está preparada también para añadir en el futuro **testimonios
reales**, un **blog** y la integración de un **CMS**.

---

## Cómo configurar la analítica

1. Define `NEXT_PUBLIC_GA_ID` en `.env.local`.
2. Abre `components/CookieBanner.tsx` y, en la función `applyConsent()`, engancha
   la inicialización de tu herramienta dentro del bloque `if (consent.analytics)`.

Las cookies no necesarias **no se cargan** hasta que el usuario da su
consentimiento en el banner.

---

## Cómo configurar el dominio

1. Define `NEXT_PUBLIC_SITE_URL` con tu dominio real (p. ej. `https://www.webtamorfosis.es`).
2. Esto actualiza automáticamente los metadatos canónicos, el `sitemap.xml`, el
   `robots.txt` y los datos estructurados.

---

## Cómo actualizar los textos legales

Las páginas de **aviso legal**, **política de privacidad** y **política de
cookies** son plantillas orientativas marcadas con un aviso visible. Cada archivo
incluye, al principio, un comentario con **los datos que debe completar el
propietario** (nombre/razón social, NIF, domicilio, correo, datos de registro,
proveedor de hosting, herramientas analíticas, cookies utilizadas, servicios
externos y plazos de conservación). **Deben revisarse por un profesional antes de
publicar.**

---

## Despliegue en Vercel (paso a paso)

1. **Sube el proyecto a GitHub.** Desde la carpeta del proyecto:
   ```bash
   git init
   git add .
   git commit -m "Webtamorfosis"
   # crea un repo vacío en github.com y luego:
   git remote add origin https://github.com/TU_USUARIO/webtamorfosis.git
   git branch -M main
   git push -u origin main
   ```
   (El `.gitignore` ya evita subir `node_modules` y `.env.local`.)

2. **Importa en Vercel.** Entra en <https://vercel.com>, *Add New → Project*,
   elige el repo. Vercel detecta Next.js automáticamente (no cambies nada).

3. **Añade las variables de entorno** en *Settings → Environment Variables*
   (para *Production* y *Preview*):
   - `NEXT_PUBLIC_SITE_URL` (p. ej. `https://webtamorfosis.vercel.app` al
     principio, y tu dominio cuando lo tengas)
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

4. **Deploy.** En 1-2 minutos tendrás una URL `*.vercel.app` funcionando. Cada
   `git push` a `main` vuelve a desplegar solo.

> Node: Vercel usa Node 18/20 automáticamente (no te afecta el Node antiguo de
> tu equipo).

### Conectar un dominio propio

1. Compra el dominio (p. ej. en Namecheap, IONOS, Google Domains…).
2. En Vercel: *Project → Settings → Domains → Add*, escribe tu dominio.
3. Vercel te indica los registros DNS (un `A`/`CNAME`) que debes poner en tu
   proveedor del dominio. Al propagarse, Vercel emite el HTTPS solo.
4. Actualiza `NEXT_PUBLIC_SITE_URL` con el dominio final y vuelve a desplegar.

---

## Accesibilidad y rendimiento

- HTML semántico, jerarquía de encabezados y enlace «saltar al contenido».
- Navegación por teclado, foco visible y componentes ARIA (menú, acordeón, comparador).
- Contraste cuidado y modo oscuro.
- Respeto a `prefers-reduced-motion`.
- Fuentes optimizadas con `next/font` y animaciones ligeras.

---

© Webtamorfosis. Contenido y datos de contacto provisionales, pendientes de
completar con la información real del negocio.
