// ============================================================================
// Configuración global del sitio — textos, contacto, navegación.
// PLACEHOLDER = pendiente de confirmar con el cliente.
// ============================================================================

export const site = {
  nombre: "Pez Vela",
  nombreCompleto: "Pez Vela Residences",
  tagline: "Tu espacio, tu mar.",
  ubicacion: "La Cruz de Huanacaxtle · Riviera Nayarit",
  estatus: "En preventa",
  // Contacto temporal de la demo (Mattera Systems) — reemplazar por el del cliente.
  contacto: {
    whatsapp: "+523327874747", // PLACEHOLDER
    whatsappDisplay: "+52 33 2787 4747",
    email: "matterasystems@gmail.com", // PLACEHOLDER
    direccion:
      "Vía principal de La Cruz de Huanacaxtle, Riviera Nayarit, México", // n.º PLACEHOLDER
  },
} as const;

export function whatsappLink(mensaje: string): string {
  const numero = site.contacto.whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

export const nav = [
  { href: "/desarrollo", label: "Desarrollo" },
  { href: "/ubicacion", label: "Ubicación" },
  { href: "/unidades", label: "Unidades" },
  { href: "/penthouses", label: "Penthouses" },
  { href: "/amenidades", label: "Amenidades" },
  { href: "/inversion", label: "Inversión" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const stats = [
  { valor: 33, sufijo: "", label: "Unidades residenciales" },
  { valor: 6, sufijo: "", label: "Niveles" },
  { valor: 5, sufijo: "", label: "Locales comerciales" },
  { valor: 257, sufijo: " m²", label: "Penthouse máximo" },
];

export const cercanias = [
  {
    titulo: "La Marina",
    detalle: "Acceso inmediato a la marina internacional de La Cruz.",
  },
  {
    titulo: "Punta de Mita",
    detalle: "A minutos del enclave más exclusivo de la Riviera.",
  },
  {
    titulo: "Bucerías",
    detalle: "Playas, galerías y vida de pueblo costero a un paso.",
  },
  {
    titulo: "Gastronomía & servicios",
    detalle: "Restaurantes, mercado del mar y servicios sobre la vía principal.",
  },
];

export const distribucion = [
  {
    nivel: "Sótano",
    titulo: "Estacionamiento de residentes",
    detalle: "Cajones exclusivos y acceso controlado para propietarios.",
  },
  {
    nivel: "Planta baja",
    titulo: "Área comercial & vestíbulo",
    detalle: "5 locales comerciales, terrazas, estacionamiento comercial y lobby.",
  },
  {
    nivel: "Niveles 1 – 5",
    titulo: "30 departamentos",
    detalle: "6 departamentos por nivel, todos con terraza privada (97 – 132 m²).",
  },
  {
    nivel: "Nivel 6",
    titulo: "3 penthouses",
    detalle: "213 – 257 m² con terraza privada y vista panorámica a la bahía.",
  },
  {
    nivel: "Rooftop",
    titulo: "Amenidades de plusvalía",
    detalle: "Alberca infinity, Sky Beach, Pool Bar, asadores y gimnasio.",
  },
];

export const especificaciones = [
  "2 recámaras con distribuciones eficientes",
  "2 baños completos",
  "Comedor independiente",
  "Terraza privada",
  "Closet de lavado y limpieza",
  "Cajón de estacionamiento",
  "Amplias habitaciones y acabados modernos",
  "Abundante luz natural",
];

export const amenidades = [
  {
    titulo: "Alberca infinity",
    detalle: "Borde infinito sobre la bahía, abierta al horizonte del Pacífico.",
    foto: "/fotos/amenidad-rooftop-alberca-infinity-01.jpeg",
  },
  {
    titulo: "Sky Beach",
    detalle: "Camastros y solárium en lo más alto del edificio.",
    foto: "/fotos/amenidad-rooftop-alberca-dia-01.jpeg",
  },
  {
    titulo: "Pool Bar",
    detalle: "Barra de coctelería junto al agua para el atardecer.",
    foto: "/fotos/amenidad-rooftop-lounge-01.jpeg",
  },
  {
    titulo: "Asadores al aire libre",
    detalle: "Área de parrillas para convivir bajo el cielo de Nayarit.",
    foto: "/fotos/amenidad-rooftop-lounge-pergola-01.jpeg",
  },
  {
    titulo: "Lounge & pérgola",
    detalle: "Estancias de descanso a la sombra, con vista al mar.",
    foto: "/fotos/amenidad-rooftop-lounge-02.jpeg",
  },
  {
    titulo: "Alberca al atardecer",
    detalle: "El punto de encuentro para cerrar el día frente al sol.",
    foto: "/fotos/amenidad-rooftop-alberca-atardecer-01.jpeg",
  },
];

export const inversion = [
  {
    titulo: "Renta vacacional",
    valor: "Alta demanda",
    detalle:
      "La Riviera Nayarit mantiene ocupación turística sostenida todo el año, ideal para esquemas de renta corta.",
    placeholder: true,
  },
  {
    titulo: "Plusvalía estimada",
    valor: "Por confirmar",
    detalle:
      "Preventa con precios de entrada antes de la entrega. Cifra de plusvalía editable por el desarrollador.",
    placeholder: true,
  },
  {
    titulo: "Marina internacional",
    valor: "Acceso directo",
    detalle:
      "La cercanía a la marina y a Punta de Mita es un motor de valor difícil de replicar.",
    placeholder: false,
  },
  {
    titulo: "Etapa de preventa",
    valor: site.estatus,
    detalle:
      "Mejores condiciones comerciales y selección de unidades disponible solo durante la preventa.",
    placeholder: false,
  },
];
