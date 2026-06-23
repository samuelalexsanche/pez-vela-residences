// ============================================================================
// FUENTE DE CONTENIDO EDITABLE — Pez Vela Residences
// El cliente puede cambiar m², numeración, fotos y textos aquí sin tocar el UI.
// Todos los datos provienen del brochure oficial (pez-vela-datos.md).
// Los campos marcados PLACEHOLDER deben confirmarse con el cliente.
// ============================================================================

export type Unidad = {
  slug: string;
  nombre: string;
  tipo: "departamento" | "penthouse";
  /** Numeración de las unidades en la torre (una por nivel). */
  unidades: string[];
  /** Cuántas unidades de esta tipología siguen disponibles (PLACEHOLDER editable). */
  disponibles: number;
  nivel: string;
  interior: number; // m²
  terraza: number; // m²
  total: number; // m²
  recamaras: string;
  banos: number;
  /** Foto principal mostrada en la card. Ruta dentro de /public. */
  portada: string;
  /** Galería de la vista de detalle. */
  galeria: string[];
  /** Texto editorial corto para la vista de detalle. */
  descripcion: string;
  amenidades: string[];
};

const ESPECIFICACIONES_BASE = [
  "2 recámaras con distribuciones eficientes",
  "2 baños completos",
  "Comedor independiente",
  "Terraza privada",
  "Closet de lavado y limpieza",
  "Cajón de estacionamiento",
  "Acabados modernos y mucha luz natural",
];

export const departamentos: Unidad[] = [
  {
    slug: "departamento-1",
    nombre: "Departamento 1",
    tipo: "departamento",
    unidades: ["101", "201", "301", "401", "501"],
    disponibles: 5,
    nivel: "Niveles 1 – 5",
    interior: 101.43,
    terraza: 29.98,
    total: 131.41,
    recamaras: "2",
    banos: 2,
    portada: "/fotos/interior-sala-cocina-01.jpeg",
    galeria: [
      "/fotos/interior-sala-cocina-01.jpeg",
      "/fotos/interior-comedor-vista-02.jpeg",
      "/fotos/interior-recamara-02.jpeg",
      "/fotos/interior-cocina-barra-02.jpeg",
    ],
    descripcion:
      "La tipología insignia: la terraza más amplia del nivel (casi 30 m²) abierta a la bahía, ideal para vivir el atardecer de la Riviera todos los días.",
    amenidades: ESPECIFICACIONES_BASE,
  },
  {
    slug: "departamento-2",
    nombre: "Departamento 2",
    tipo: "departamento",
    unidades: ["102", "202", "302", "402", "502"],
    disponibles: 5,
    nivel: "Niveles 1 – 5",
    interior: 108.71,
    terraza: 23.51,
    total: 132.22,
    recamaras: "2",
    banos: 2,
    portada: "/fotos/interior-sala-premium-01.jpeg",
    galeria: [
      "/fotos/interior-sala-premium-01.jpeg",
      "/fotos/interior-sala-comedor-02.jpeg",
      "/fotos/interior-comedor-terraza-01.jpeg",
      "/fotos/interior-recamara-02.jpeg",
    ],
    descripcion:
      "El mayor metraje interior de la línea de departamentos. Espacios sociales generosos pensados para recibir, con comedor independiente y cocina con barra.",
    amenidades: ESPECIFICACIONES_BASE,
  },
  {
    slug: "departamento-3",
    nombre: "Departamento 3",
    tipo: "departamento",
    unidades: ["103", "203", "303", "403", "503"],
    disponibles: 5,
    nivel: "Niveles 1 – 5",
    interior: 82.91,
    terraza: 23.51,
    total: 106.42,
    recamaras: "2",
    banos: 2,
    portada: "/fotos/interior-sala-comedor-02.jpeg",
    galeria: [
      "/fotos/interior-sala-comedor-02.jpeg",
      "/fotos/interior-sala-compacta-01.jpeg",
      "/fotos/interior-recamara-02.jpeg",
      "/fotos/interior-cocina-barra-02.jpeg",
    ],
    descripcion:
      "Equilibrio perfecto entre interior y terraza. Una opción eficiente y luminosa, con la misma terraza de 23 m² que las tipologías superiores.",
    amenidades: ESPECIFICACIONES_BASE,
  },
  {
    slug: "departamento-4",
    nombre: "Departamento 4",
    tipo: "departamento",
    unidades: ["104", "204", "304", "404", "504"],
    disponibles: 5,
    nivel: "Niveles 1 – 5",
    interior: 96.81,
    terraza: 16.53,
    total: 113.34,
    recamaras: "2",
    banos: 2,
    portada: "/fotos/interior-comedor-terraza-01.jpeg",
    galeria: [
      "/fotos/interior-comedor-terraza-01.jpeg",
      "/fotos/interior-sala-premium-01.jpeg",
      "/fotos/interior-recamara-02.jpeg",
      "/fotos/interior-comedor-vista-02.jpeg",
    ],
    descripcion:
      "Interior amplio con una terraza íntima. Distribución racional que prioriza recámaras grandes y áreas sociales bien conectadas.",
    amenidades: ESPECIFICACIONES_BASE,
  },
  {
    slug: "departamento-5",
    nombre: "Departamento 5",
    tipo: "departamento",
    unidades: ["105", "205", "305", "405", "505"],
    disponibles: 5,
    nivel: "Niveles 1 – 5",
    interior: 86.69,
    terraza: 14.92,
    total: 101.61,
    recamaras: "2",
    banos: 2,
    portada: "/fotos/interior-sala-compacta-01.jpeg",
    galeria: [
      "/fotos/interior-sala-compacta-01.jpeg",
      "/fotos/interior-cocina-barra-02.jpeg",
      "/fotos/interior-recamara-02.jpeg",
      "/fotos/interior-sala-cocina-01.jpeg",
    ],
    descripcion:
      "Compacto e inteligente. La entrada ideal al desarrollo para inversión en renta vacacional, sin renunciar a terraza privada ni a la luz natural.",
    amenidades: ESPECIFICACIONES_BASE,
  },
  {
    slug: "departamento-6",
    nombre: "Departamento 6",
    tipo: "departamento",
    unidades: ["106", "206", "306", "406", "506"],
    disponibles: 5,
    nivel: "Niveles 1 – 5",
    interior: 89.15,
    terraza: 11.49,
    total: 100.64,
    recamaras: "2",
    banos: 2,
    portada: "/fotos/interior-comedor-vista-02.jpeg",
    galeria: [
      "/fotos/interior-comedor-vista-02.jpeg",
      "/fotos/interior-sala-comedor-02.jpeg",
      "/fotos/interior-recamara-02.jpeg",
      "/fotos/interior-cocina-barra-02.jpeg",
    ],
    descripcion:
      "Interior bien proporcionado con terraza acogedora. Máximo aprovechamiento del espacio para quien busca un pied-à-terre frente al mar.",
    amenidades: ESPECIFICACIONES_BASE,
  },
];

export const penthouses: Unidad[] = [
  {
    slug: "penthouse-1",
    nombre: "Penthouse 1",
    tipo: "penthouse",
    unidades: ["PH 1"],
    disponibles: 1,
    nivel: "Nivel 6",
    interior: 203.66,
    terraza: 53.82,
    total: 257.48,
    recamaras: "2+",
    banos: 2,
    portada: "/fotos/amenidad-rooftop-infinity-dia.jpeg",
    galeria: [
      "/fotos/amenidad-rooftop-infinity-dia.jpeg",
      "/fotos/interior-sala-premium-01.jpeg",
      "/fotos/interior-comedor-vista-02.jpeg",
      "/fotos/amenidad-rooftop-infinity-atardecer.jpeg",
    ],
    descripcion:
      "El penthouse insignia. 257 m² totales coronados por una terraza de casi 54 m² con vista panorámica a la Bahía de Banderas. El espacio más exclusivo del desarrollo.",
    amenidades: [
      ...ESPECIFICACIONES_BASE,
      "Terraza panorámica de gran formato",
      "Vista abierta a la bahía",
    ],
  },
  {
    slug: "penthouse-2",
    nombre: "Penthouse 2",
    tipo: "penthouse",
    unidades: ["PH 2"],
    disponibles: 1,
    nivel: "Nivel 6",
    interior: 173.64,
    terraza: 55.85,
    total: 229.49,
    recamaras: "2+",
    banos: 2,
    portada: "/fotos/amenidad-rooftop-alberca-sunset-02.jpeg",
    galeria: [
      "/fotos/amenidad-rooftop-alberca-sunset-02.jpeg",
      "/fotos/interior-sala-cocina-01.jpeg",
      "/fotos/amenidad-rooftop-lounge-pergola-02.jpeg",
      "/fotos/interior-comedor-terraza-01.jpeg",
    ],
    descripcion:
      "La terraza más extensa de todo el desarrollo: 55.85 m² de vida al aire libre frente al Pacífico, con interiores luminosos diseñados para el descanso.",
    amenidades: [
      ...ESPECIFICACIONES_BASE,
      "La terraza más amplia del desarrollo",
      "Vista panorámica al atardecer",
    ],
  },
  {
    slug: "penthouse-3",
    nombre: "Penthouse 3",
    tipo: "penthouse",
    unidades: ["PH 3"],
    disponibles: 1,
    nivel: "Nivel 6",
    interior: 186.13,
    terraza: 27.68,
    total: 213.81,
    recamaras: "2+",
    banos: 2,
    portada: "/fotos/amenidad-rooftop-lounge-pergola-02.jpeg",
    galeria: [
      "/fotos/amenidad-rooftop-lounge-pergola-02.jpeg",
      "/fotos/interior-sala-premium-01.jpeg",
      "/fotos/interior-sala-comedor-02.jpeg",
      "/fotos/amenidad-rooftop-poolbar-01.jpeg",
    ],
    descripcion:
      "186 m² de interior generoso con una terraza íntima de pérgola. Para quien prioriza amplitud interior sin renunciar a la vida en lo más alto del edificio.",
    amenidades: [
      ...ESPECIFICACIONES_BASE,
      "Terraza con pérgola",
      "El mayor interior tras el PH1",
    ],
  },
];

export function getUnidad(slug: string): Unidad | undefined {
  return [...departamentos, ...penthouses].find((u) => u.slug === slug);
}

export const todasLasUnidades = [...departamentos, ...penthouses];
