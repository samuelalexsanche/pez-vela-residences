"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { asset } from "@/lib/asset";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SailfishLogo } from "@/components/motion/SailfishLogo";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden"
    >
      {/* Fondo: video con fallback a imagen */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 scale-110">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={asset("/branding/banner-portada-ola-mar.jpg")}
          className="h-full w-full object-cover"
        >
          <source src={asset("/fotos/video-desarrollo.mp4")} type="video/mp4" />
        </video>
      </motion.div>
      {/* Overlay teal con gradiente */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-deep/70 via-teal-deep/45 to-teal-deep/80" />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative mx-auto max-w-4xl px-5 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-7 h-24 w-24 text-turquesa-light sm:h-28 sm:w-28"
        >
          <SailfishLogo className="h-full w-full text-[#7fd4dd]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="kicker text-[#9fdde4]"
        >
          {site.ubicacion}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-serif text-7xl leading-[0.95] tracking-[0.06em] text-white text-shadow-soft sm:text-8xl md:text-[8.5rem]"
        >
          PEZ VELA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="-mt-2 font-script text-4xl text-[#a9e1e7] sm:text-5xl"
        >
          Residences
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="mx-auto mt-6 max-w-md font-serif text-2xl font-light italic text-crema/90 sm:text-3xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href="/unidades" size="lg" variant="primary">
            Conoce las unidades
          </Button>
          <Button href="/contacto" size="lg" variant="light">
            Agenda una visita
          </Button>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-white/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
