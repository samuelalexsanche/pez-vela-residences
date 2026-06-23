"use client";

import { cn } from "@/lib/cn";

type Props = {
  /** Texto de búsqueda o coordenadas, p.ej. "La Cruz de Huanacaxtle, Nayarit, Mexico" */
  query?: string;
  /** Lat,Lng para el marcador, p.ej. "20.7408,-105.3725" */
  center?: string;
  zoom?: number;
  className?: string;
};

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

/**
 * Embed interactivo de Google Maps.
 * Si NEXT_PUBLIC_GOOGLE_MAPS_API_KEY está definido usa la Embed API oficial;
 * si no, cae al embed básico de Google (válido para demos sin clave).
 */
export function GoogleMap({
  query = "La Cruz de Huanacaxtle, Nayarit, Mexico",
  center = "20.7408,-105.3725",
  zoom = 15,
  className,
}: Props) {
  const src = API_KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(query)}&zoom=${zoom}&maptype=roadmap`
    : `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`;

  return (
    <div className={cn("overflow-hidden rounded-3xl shadow-[var(--shadow-card)]", className)}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, display: "block", minHeight: "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Mapa: ${query}`}
      />
    </div>
  );
}
