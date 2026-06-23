"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  images: string[];
  alt: string;
  /** Milisegundos entre transiciones automáticas. */
  interval?: number;
  className?: string;
};

/**
 * Carrusel del exterior que avanza solo, con crossfade y un leve zoom Ken Burns.
 * Se pausa al pasar el cursor y respeta prefers-reduced-motion.
 */
export function ExteriorCarousel({
  images,
  alt,
  interval = 4500,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, images.length, interval]);

  const go = (i: number) => setIndex((i + images.length) % images.length);

  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label={alt}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: reduced ? 1 : [1.06, 1.12],
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: interval / 1000 + 1.1, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${alt} — vista ${index + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Velo sutil para legibilidad de overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-deep/35 via-transparent to-transparent" />

      {/* Flechas (aparecen al hover) */}
      <button
        onClick={() => go(index - 1)}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-lg text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-white/35 group-hover:opacity-100"
      >
        ‹
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-lg text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-white/35 group-hover:opacity-100"
      >
        ›
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Ir a la vista ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-400 ease-[var(--ease-out-expo)]",
              i === index ? "w-7 bg-white" : "w-1.5 bg-white/55 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </div>
  );
}
