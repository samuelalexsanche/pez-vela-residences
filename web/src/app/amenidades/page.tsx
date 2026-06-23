import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Gallery } from "@/components/ui/Gallery";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { amenidades } from "@/data/site";

export const metadata: Metadata = {
  title: "Amenidades",
  description:
    "Rooftop con alberca infinity, Sky Beach, Pool Bar, asadores y gimnasio techado — amenidades que incrementan la plusvalía.",
};

const galeriaRooftop = [
  "/fotos/amenidad-rooftop-alberca-infinity-01.jpeg",
  "/fotos/amenidad-rooftop-alberca-dia-01.jpeg",
  "/fotos/amenidad-rooftop-lounge-01.jpeg",
  "/fotos/amenidad-rooftop-alberca-atardecer-01.jpeg",
  "/fotos/amenidad-rooftop-lounge-pergola-01.jpeg",
  "/fotos/amenidad-rooftop-alberca-infinity-02.jpeg",
  "/fotos/amenidad-rooftop-lounge-02.jpeg",
  "/fotos/interior-sala-vista-mar-01.jpeg",
];

export default function AmenidadesPage() {
  return (
    <>
      <PageHero
        kicker="Amenidades · Rooftop"
        title={<>Una azotea con vista al Pacífico</>}
        intro="Amenidades diseñadas para incrementar la plusvalía y el atractivo del proyecto, tanto en uso residencial como en renta."
        image="/fotos/amenidad-rooftop-alberca-atardecer-01.jpeg"
        imageAlt="Alberca rooftop al atardecer"
      />

      {/* Tarjetas de amenidades alternadas */}
      <section className="bg-crema py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Lo que vivirás arriba"
            title="Seis razones para subir al rooftop"
          />
          <div className="mt-16 space-y-16">
            {amenidades.map((a, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal key={a.titulo}>
                  <div
                    className={`grid items-center gap-8 lg:grid-cols-2 ${
                      reverse ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-[var(--shadow-card)] [direction:ltr]">
                      <Image
                        src={a.foto}
                        alt={a.titulo}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] hover:scale-105"
                      />
                    </div>
                    <div className="[direction:ltr] lg:px-6">
                      <p className="font-serif text-6xl text-turquesa/25">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-serif text-3xl text-teal">
                        {a.titulo}
                      </h3>
                      <p className="mt-3 max-w-md text-base leading-relaxed text-teal/70">
                        {a.detalle}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galería inmersiva */}
      <section className="bg-teal-deep py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            tone="light"
            kicker="Galería"
            title="El rooftop en imágenes"
            intro="Toca cualquier imagen para ampliarla."
          />
          <div className="mt-12">
            <Gallery images={galeriaRooftop} alt="Amenidades rooftop Pez Vela" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Vive el atardecer desde la cima"
        intro="Agenda una visita y conoce el rooftop y sus amenidades en persona."
      />
    </>
  );
}
