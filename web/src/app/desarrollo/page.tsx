import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatStrip } from "@/components/ui/StatStrip";
import { BuildingTimeline } from "@/components/sections/BuildingTimeline";
import { CtaBand } from "@/components/sections/CtaBand";
import { LifestyleBanner } from "@/components/sections/LifestyleBanner";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { stats, especificaciones } from "@/data/site";

export const metadata: Metadata = {
  title: "El desarrollo",
  description:
    "Pez Vela Residences: 33 unidades residenciales en 6 niveles, área comercial y amenidades en rooftop, en La Cruz de Huanacaxtle.",
};

const interiores = [
  "/fotos/interior-sala-cocina-01.jpeg",
  "/fotos/interior-cocina-barra-02.jpeg",
  "/fotos/interior-recamara-02.jpeg",
];

export default function DesarrolloPage() {
  return (
    <>
      <PageHero
        kicker="El desarrollo"
        title={<>Usos mixtos, vocación de mar</>}
        intro="Área comercial en planta baja, 33 residencias de lujo y una azotea pensada para la plusvalía — todo a un paso de la marina."
        image="/fotos/exterior-03.jpeg"
        imageAlt="Render exterior de Pez Vela Residences"
      />

      {/* Propuesta de valor */}
      <section className="bg-crema py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <SectionHeading
            kicker="Propuesta de valor"
            title="Diseñado para vivir y para invertir"
            intro="Departamentos de dos recámaras con distribuciones eficientes, concebidos para la vida diaria, la segunda vivienda y la renta vacacional. Un enfoque funcional, moderno y rentable, con amenidades que elevan el valor del proyecto."
          />
          <div className="grid grid-cols-3 gap-3">
            {interiores.map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Interior de Pez Vela Residences"
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
          <StatStrip stats={stats} />
        </div>
      </section>

      {/* Distribución / storytelling del edificio */}
      <section className="bg-crema-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            kicker="Distribución general"
            title="Del sótano al rooftop"
            intro="Recorre el edificio nivel por nivel: estacionamiento, comercio, residencias y, en lo más alto, las amenidades."
          />
          <div className="mt-16">
            <BuildingTimeline />
          </div>
        </div>
      </section>

      {/* Especificaciones interiores */}
      <section className="bg-teal py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              tone="light"
              kicker="Especificaciones interiores"
              title="Acabados modernos, mucha luz"
              intro="Cada residencia comparte un estándar de calidad pensado para el confort diario y la rentabilidad."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {especificaciones.map((e, i) => (
                <Reveal as="li" key={e} delay={i * 0.05}>
                  <span className="flex items-start gap-3 text-crema/85">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-turquesa" />
                    <span className="text-sm leading-relaxed">{e}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Parallax amount={40} className="absolute inset-0">
                <div className="relative h-[120%] w-full -translate-y-[8%]">
                  <Image
                    src="/fotos/interior-sala-premium-01.jpeg"
                    alt="Sala comedor con vista al mar"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Parallax>
            </div>
          </Reveal>
        </div>
      </section>

      <LifestyleBanner
        image="/branding/banner-lifestyle.png"
        quote="Arquitectura, confort y paisaje en perfecta armonía."
      />

      <CtaBand
        title="Conoce el desarrollo en persona"
        intro="Te mostramos el render, las tipologías y el avance del proyecto en una cita sin compromiso."
      />
    </>
  );
}
