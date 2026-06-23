# PROMPT MAESTRO PARA CLAUDE CODE — Landing "Pez Vela Residences"

> Pega TODO este prompt en Claude Code. Trabaja dentro de la carpeta `pez-vela-demo/`, donde ya están `assets/` y `pez-vela-datos.md`. No omitas ningún detalle.

---

## ROL Y OBJETIVO

Eres un equipo senior de producto web. Construye una **landing page de una sola página (one-page, con vistas de detalle por unidad)** de altísimo nivel para **Pez Vela Residences**, un desarrollo residencial de lujo en La Cruz de Huanacaxtle, Riviera Nayarit. Es una **demo comercial** que Mattera Systems le presentará al cliente: tiene que verse **mejor que la competencia** (mahari.mx) y dejar al cliente con la boca abierta por diseño, fotografía, animaciones e interacción.

Usa estos skills/guías de forma combinada en todo el proceso:
- **frontend-design** → arquitectura del front, calidad de código, estructura de componentes.
- **ux-ui-pro-max** → jerarquía visual, layout, micro-decisiones de interfaz, accesibilidad.
- **motion-designer** → animaciones, transiciones, interacciones, scroll storytelling.
- **web-design-guidelines** → buenas prácticas, responsive, performance, semántica, SEO.
- **shadcn-ui** → componentes base (dialog/modal, sheet, tabs, accordion, carousel, button, card, badge, tooltip, form).

Lee y aplica cada guía antes de codificar la sección correspondiente. No empieces a maquetar sin haber definido el sistema de diseño.

---

## STACK TÉCNICO

- **Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui.**
- **Framer Motion** para la mayoría de animaciones declarativas (entrada por scroll, layout, modales, page transitions).
- **anime.js** para animaciones específicas y "hero": dibujo/trazo del logo del pez vela (stroke-dashoffset), contadores numéricos (m², unidades), staggers complejos del rooftop y secuencias del timeline.
- **Lenis** (o scroll suave nativo) para smooth scroll + **parallax** real por scroll.
- **next/image** para optimización de todas las fotos (lazy load, blur placeholder, formatos modernos).
- Sin dependencias innecesarias. Código limpio, componentizado, comentado donde aporte.

---

## FUENTE DE CONTENIDO (OBLIGATORIO)

Toda la información de negocio está en **`pez-vela-datos.md`** (úsalo literalmente: ubicación, distribución, especificaciones, las 6 tipologías de departamento, los 3 penthouses con sus m², amenidades, taglines y paleta). **No inventes datos.** Donde el dato no exista (precios, contacto exacto), usa el placeholder indicado y márcalo claramente como editable.

### Assets (ya extraídos, en `assets/`)
- **Logo:** `assets/branding/logo-pezvela-transparente.png` (navbar / fondos claros), `logo-pezvela-fondo-teal.png`, `logo-pezvela-turquesa-blanco.png`.
- **Banners:** `assets/branding/banner-portada-ola-mar.jpg` (hero), `banner-playa-pies-arena.jpg` (sección lifestyle), `render-exterior-edificio.jpg` (el desarrollo), `mapa-ubicacion.png` (ubicación).
- **Fotos del desarrollo:** carpeta `assets/fotos/` — interiores (`interior-*`) y amenidades rooftop (`amenidad-rooftop-*`), más `video-desarrollo.mp4`. Úsalas **abundantemente** (galerías, fondos parallax, cards). Cada nombre describe su contenido; colócalas en su lugar lógico (interiores en unidades, rooftop en amenidades).

---

## PALETA Y SISTEMA DE DISEÑO

Define tokens en Tailwind (`tailwind.config`) y variables CSS:
- Teal profundo `#434E50` · Turquesa `#109AA7` · Turquesa apagado `#37686D` · Arena `#C9B49A` · Terracota/madera `#A6705A` · Crema `#F3EEE6` · Blanco `#FFFFFF`.
- Tipografía: serif elegante para títulos (p. ej. Cormorant Garamond / Playfair Display), script ligero para acentos cortos ("Residences"), sans limpia para cuerpo/UI (Inter o Manrope).
- Estética: costera-premium, mucho aire (espaciado generoso), líneas finas turquesa, fotografía a sangre, contraste entre secciones crema y secciones teal oscuras.
- Crea un **design system reutilizable**: Button, Badge (m²/nivel), Card, SectionHeading (kicker en mayúsculas + título serif), Stat, Modal.

---

## ESTRUCTURA DE LA PÁGINA (secciones, en orden)

1. **Navbar fija** translúcida con blur. Logo a la izquierda, links de ancla (Desarrollo · Ubicación · Unidades · Penthouses · Amenidades · Contacto), toggle ES/EN (al menos estructura i18n, ES por defecto), CTA "Agenda tu cita" (turquesa). Cambia de transparente a sólida al hacer scroll.

2. **Hero a pantalla completa.** Fondo: `banner-portada-ola-mar.jpg` (o `video-desarrollo.mp4` en loop silenciado con fallback a imagen). Overlay teal con gradiente. Título serif gigante "PEZ VELA" + "Residences" en script. Subtítulo: *"Tu espacio, tu mar."* Dos CTAs: "Conoce las unidades" y "Agenda una visita". **anime.js**: trazo del logo del pez vela dibujándose + fade/stagger del título. Indicador de scroll animado. **Parallax** suave del fondo.

3. **El desarrollo / intro.** Texto de propuesta de valor (del datos.md) + `render-exterior-edificio.jpg` con **parallax**. Tira de **stats con contadores anime.js**: 33 unidades · 6 niveles · 213–257 m² penthouses · Riviera Nayarit. Estatus: "En preventa".

4. **Ubicación estratégica.** `mapa-ubicacion.png` + bullets de cercanías (La Marina, Punta de Mita, Bucerías, restaurantes). Opcional: mapa interactivo embebido. Animación de pines/líneas al entrar en viewport. Narrativa de inversión de la Riviera.

5. **Distribución general (storytelling vertical del edificio).** Visualiza Sótano → Planta baja (comercial) → Niveles 1–5 (30 deptos) → Nivel 6 (3 penthouses). Timeline/scroll-driven con **anime.js o Framer scroll**: a medida que se baja, se "sube" por el edificio. Resalta amenidades en rooftop al final.

6. **Especificaciones interiores.** Lista premium (2 rec, 2 baños, comedor, terraza, closet de lavado, cajón de estacionamiento, luz natural) acompañada de galería de interiores (`interior-*`) con efecto. Considera columna sticky + galería scroll.

7. **UNIDADES — Departamentos (REQUISITO CLAVE).** Grid de **6 cards independientes** (Departamento 1 a 6). Cada card: foto, badge de área total, interior/terraza en m², "5 unidades disponibles", nivel, hover elevado con zoom suave de la foto. **Al hacer clic se abre una vista de detalle** (modal/dialog de shadcn o ruta `/unidad/[id]`) con TODA la info desglosada: interior m², terraza m², área total, numeración de unidades en torre (p. ej. 101/201/301/401/501), recámaras, baños, amenidades incluidas, galería de fotos de esa tipología, y CTA "Me interesa esta unidad" (prellenando WhatsApp/form). Transición animada card→detalle (shared layout / Framer `layoutId`).

8. **UNIDADES — Penthouses (REQUISITO CLAVE).** Sección diferenciada, más premium (fondo teal oscuro). **3 cards independientes** (PH1, PH2, PH3) con la misma mecánica de detalle, resaltando m² mayores, terrazas amplias y **vista panorámica**. Usa las mejores fotos de rooftop/interior. Mismo patrón de modal/ruta de detalle desglosada.

9. **Amenidades (Rooftop).** Galería inmersiva con `amenidad-rooftop-*`: alberca con vista panorámica, Sky Beach, Pool Bar, asadores, gimnasio techado, regaderas. Carrusel/mosaico con **parallax** y captions animados. Frase: amenidades que incrementan la plusvalía.

10. **Lifestyle / cierre emocional.** Banner `banner-playa-pies-arena.jpg` a sangre con **parallax** y frase serif: *"El espacio que mereces, en el destino que amas."*

11. **Inversión.** Bloque que la competencia descuida: por qué invertir (renta vacacional, plusvalía, marina, preventa). Si no hay cifras, deja tarjetas editables (ROI estimado, ocupación, etc.) marcadas como placeholder.

12. **Contacto / lead.** Formulario (nombre, email, teléfono, unidad de interés con select de las tipologías, mensaje) con validación (shadcn form + zod). Botón WhatsApp flotante persistente. Datos de contacto del datos.md (placeholder Mattera si el cliente no da el suyo). Mini-mapa.

13. **Footer.** Logo, navegación, contacto, redes, aviso "© 2026 Pez Vela Residences", crédito discreto "Sitio por Mattera Systems".

---

## ANIMACIONES E INTERACCIÓN (motion-designer)

- **Scroll reveals** suaves y escalonados (fade + translate) en cada sección — nunca bruscos, con easing natural y `prefers-reduced-motion` respetado.
- **Parallax** en: hero, render del edificio, banner lifestyle, fondos de amenidades.
- **anime.js** para: trazo del logo del pez vela, contadores de stats, secuencia del recorrido del edificio, staggers de galería.
- **Framer Motion** para: entrada de cards, hover states, transición card→detalle (shared `layoutId`), apertura de modales, page/route transitions.
- Hover en cards: elevación, zoom de imagen (`scale`), aparición de CTA.
- Cursor/detalles finos opcionales (líneas turquesa que se dibujan, subrayados animados en links).
- Carga inicial elegante (preloader corto con el logo dibujándose, sin bloquear demasiado).
- **Todo debe sentirse fluido a 60fps**: usa `transform`/`opacity`, evita layout thrashing, `will-change` con criterio.

---

## AUDITORÍA DE LA COMPETENCIA (mahari.mx) — QUÉ HACEMOS MEJOR

Diferénciate en estilo (Mahari es editorial minimalista en tonos neutros; Pez Vela es **costero-premium con turquesa y calidez de madera/arena**). Corrige estos errores de Mahari:

1. **Inventario en iframe de terceros** (lento, sin marca, rompe la estética). → Nosotros: **cards nativas con detalle desglosado** y modales propios, 100% en marca.
2. **Poca info por unidad en el home** (hay que entrar a un embed para ver m²). → Nosotros: m² interior/terraza/total y numeración visibles en card y detalle.
3. **Sección de departamentos pobre** (solo 2 tipologías mostradas). → Nosotros: **las 6 tipologías + 3 penthouses**, cada una navegable.
4. **Promete "inversión inteligente" pero no da datos de inversión.** → Nosotros: sección de inversión con ángulo renta/plusvalía (editable).
5. **Animación limitada / experiencia estática.** → Nosotros: scroll storytelling, parallax, anime.js, transiciones card→detalle.
6. **Amenidades sin galería inmersiva.** → Nosotros: galería rooftop rica con parallax.
7. **Contacto con fricción (email ofuscado).** → Nosotros: form claro + WhatsApp flotante + CTA siempre visible.
8. **Performance arriesgada** (heros webp enormes sin estrategia visible). → Nosotros: `next/image`, lazy, blur placeholders, tamaños responsivos, code-splitting.
9. **Sin storytelling del edificio.** → Nosotros: recorrido sótano→rooftop animado.

Mantén lo bueno de Mahari (tipografía serif elegante, fotografía a sangre, navbar limpia, tira de stats, fact-sheet del proyecto), pero ejecútalo mejor.

---

## RESPONSIVE, ACCESIBILIDAD Y PERFORMANCE (web-design-guidelines)

- Mobile-first; perfecto en 360px, 768px, 1024px, 1440px+. Las cards pasan a stack; modales a sheet en móvil.
- Navegación móvil con menú hamburguesa animado.
- Contraste AA, foco visible, navegación por teclado en modales, `alt` descriptivos, HTML semántico.
- `prefers-reduced-motion`: desactiva parallax/anime pesado.
- SEO básico: metadatos, Open Graph con el banner, títulos jerárquicos, `lang="es"`, datos estructurados de `Residence`/`Apartment` si aplica.
- Lighthouse objetivo: 90+ en Performance y Accesibilidad.

---

## ENTREGABLES Y ORDEN DE TRABAJO

1. Inicializa el proyecto (Next + TS + Tailwind + shadcn) dentro de `pez-vela-demo/web/` y copia/referencia `assets/`.
2. Define design system (tokens, tipografías, componentes base) **antes** de las secciones.
3. Construye las secciones en el orden de arriba; deja **Unidades, Penthouses y sus detalles** impecables (es el núcleo de la demo).
4. Capa de animaciones (Framer + anime.js + parallax) por encima, respetando reduced-motion.
5. Pulido responsive + performance + accesibilidad.
6. Crea un **`README.md`** con: cómo correr (`npm install && npm run dev`), dónde editar datos (extrae el contenido a un `data/unidades.ts` tipado para que el cliente cambie m²/precios fácil), y lista de placeholders por completar (precios, contacto, mapa).
7. **Verificación final:** revisa que existan las 6 cards de departamento + 3 de penthouse con su detalle desglosado, que todas las fotos carguen, que no haya errores de consola, que el sitio funcione en móvil y que las animaciones no rompan el scroll.

Codifica con calidad de producción, no un prototipo. Hazlo memorable.
