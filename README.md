# Pez Vela Residences — Sitio web (demo)

Landing multipágina de alto nivel para **Pez Vela Residences**, desarrollo
residencial de lujo en La Cruz de Huanacaxtle, Riviera Nayarit. Demo construida
por **Mattera Systems**.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer
Motion · anime.js · Lenis (smooth scroll). Exportación estática (`output: export`),
desplegable en GitHub Pages.

🔗 **Demo en vivo:** se publica automáticamente en GitHub Pages al hacer push a `main`
(ver la pestaña _Actions_ → _Deploy to GitHub Pages_ para la URL).

---

## Cómo correr en local

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

Producción / exportación estática:

```bash
cd web
npm run build    # genera web/out/ (sitio 100% estático)
```

---

## Estructura

```
pez-vela-demo/
├─ assets/                     # fotos y branding originales (fuente)
├─ pez-vela-datos.md           # fuente de verdad del contenido (brochure)
├─ .github/workflows/deploy.yml# CI: build + deploy a GitHub Pages
└─ web/                        # la app Next.js
   ├─ public/                  # imágenes servidas (branding/ y fotos/)
   └─ src/
      ├─ app/                  # rutas (una carpeta por página)
      │  ├─ page.tsx           # Home
      │  ├─ desarrollo/        # El desarrollo + distribución + especificaciones
      │  ├─ ubicacion/
      │  ├─ unidades/          # listado + [slug] (detalle de cada departamento)
      │  ├─ penthouses/        # listado + [slug] (detalle de cada penthouse)
      │  ├─ amenidades/
      │  ├─ inversion/
      │  └─ contacto/
      ├─ components/
      │  ├─ layout/            # Navbar, Footer, WhatsApp flotante
      │  ├─ motion/            # Reveal, Parallax, Counter, SmoothScroll, logo animado
      │  ├─ sections/          # Hero, timeline del edificio, detalle de unidad, etc.
      │  └─ ui/                # Button, Badge, Card de unidad, Gallery, etc.
      ├─ data/
      │  ├─ unidades.ts        # ← EDITAR AQUÍ las 6 tipologías + 3 penthouses
      │  └─ site.ts            # ← EDITAR AQUÍ contacto, stats, amenidades, etc.
      └─ lib/                  # helpers (asset(), cn())
```

## Dónde editar el contenido

Todo el contenido vive en archivos tipados, sin tocar el diseño:

- **Unidades (m², terraza, numeración, fotos, disponibilidad):**
  [`web/src/data/unidades.ts`](web/src/data/unidades.ts)
- **Contacto, ubicación, amenidades, stats, distribución, inversión:**
  [`web/src/data/site.ts`](web/src/data/site.ts)
- **Imágenes:** reemplazar archivos en `web/public/branding/` y `web/public/fotos/`
  (conservando los nombres) o apuntar a nuevas rutas desde los `data/`.

## Placeholders por completar (con el cliente)

Marcados como `PLACEHOLDER` en `web/src/data/site.ts`:

- **Teléfono / WhatsApp** real (hoy usa el de Mattera Systems).
- **Email** de contacto real.
- **Dirección exacta** (número sobre la vía principal de La Cruz).
- **Precios** por tipología (hoy "Bajo solicitud").
- **Cifras de inversión** (plusvalía, ROI, ocupación) en `inversion[]` — marcadas como _Editable_.
- **Mapa interactivo**: hoy se usa la imagen `mapa-ubicacion.png` + enlace a Google Maps;
  puede sustituirse por un embed.

## Despliegue (GitHub Pages)

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) hace
`npm ci && npm run build` dentro de `web/` y publica `web/out`. La ruta base
(`/<repo>`) se inyecta automáticamente con `NEXT_PUBLIC_BASE_PATH` desde
`actions/configure-pages`, así que el sitio funciona tanto en local (raíz) como
bajo el subdirectorio del repositorio.

> En el repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.

---

Sitio por **Mattera Systems** · © 2026 Pez Vela Residences.
