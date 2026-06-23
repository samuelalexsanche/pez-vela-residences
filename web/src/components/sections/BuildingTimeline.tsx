"use client";

import { motion } from "framer-motion";
import { distribucion } from "@/data/site";

/**
 * Storytelling vertical del edificio: de sótano a rooftop.
 * Una línea turquesa se "dibuja" con el scroll mientras aparecen los niveles.
 */
export function BuildingTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Línea base */}
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-teal/15 sm:left-1/2" />
      {/* Línea que se dibuja con el scroll */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ originY: 0 }}
        className="absolute left-[19px] top-2 bottom-2 w-px bg-turquesa sm:left-1/2"
      />

      <ul className="space-y-10">
        {distribucion.map((d, i) => {
          const right = i % 2 === 1;
          return (
            <motion.li
              key={d.nivel}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative pl-14 sm:w-1/2 sm:pl-0 ${
                right
                  ? "sm:ml-auto sm:pl-12 sm:text-left"
                  : "sm:pr-12 sm:text-right"
              }`}
            >
              {/* Punto */}
              <span
                className={`absolute top-1.5 flex h-10 w-10 items-center justify-center rounded-full border border-turquesa/30 bg-crema text-xs font-bold text-turquesa left-0 ${
                  right
                    ? "sm:-left-5"
                    : "sm:left-auto sm:-right-5"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquesa">
                {d.nivel}
              </p>
              <h3 className="mt-1 font-serif text-2xl text-teal">{d.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-teal/65">
                {d.detalle}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
