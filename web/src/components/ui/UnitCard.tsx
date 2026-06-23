"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Unidad } from "@/data/unidades";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

type Props = {
  unidad: Unidad;
  index?: number;
  tone?: "light" | "dark";
};

export function UnitCard({ unidad, index = 0, tone = "light" }: Props) {
  const href = `/${unidad.tipo === "penthouse" ? "penthouses" : "unidades"}/${unidad.slug}`;
  const dark = tone === "dark";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}
    >
      <Link
        href={href}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5",
          dark
            ? "border-white/10 bg-white/5 hover:border-turquesa/40"
            : "border-teal/8 bg-white hover:shadow-[var(--shadow-card)]"
        )}
      >
        {/* Imagen */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={unidad.portada}
            alt={unidad.nombre}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/60 via-transparent to-transparent opacity-70" />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge tone="light">{unidad.total.toFixed(2)} m²</Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
              {unidad.nivel}
            </span>
            <span className="rounded-full bg-turquesa px-3 py-1 text-xs font-semibold text-white">
              {unidad.disponibles}{" "}
              {unidad.disponibles === 1 ? "disponible" : "disponibles"}
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-1 flex-col p-6">
          <h3
            className={cn(
              "font-serif text-2xl",
              dark ? "text-white" : "text-teal"
            )}
          >
            {unidad.nombre}
          </h3>

          <dl
            className={cn(
              "mt-4 grid grid-cols-3 gap-2 text-center",
              dark ? "text-crema/70" : "text-teal/70"
            )}
          >
            <div>
              <dt className="text-[0.65rem] uppercase tracking-wider opacity-70">
                Interior
              </dt>
              <dd className="font-serif text-lg">{unidad.interior.toFixed(0)} m²</dd>
            </div>
            <div className="border-x border-teal/10">
              <dt className="text-[0.65rem] uppercase tracking-wider opacity-70">
                Terraza
              </dt>
              <dd className="font-serif text-lg">{unidad.terraza.toFixed(0)} m²</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-wider opacity-70">
                Recámaras
              </dt>
              <dd className="font-serif text-lg">{unidad.recamaras}</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center justify-between pt-4">
            <span className="font-sans text-xs uppercase tracking-[0.18em] text-turquesa">
              {unidad.unidades.length} unidad
              {unidad.unidades.length > 1 ? "es" : ""}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3",
                dark ? "text-white" : "text-teal"
              )}
            >
              Ver detalle
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-turquesa"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
