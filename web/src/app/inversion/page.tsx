import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { inversion } from "@/data/site";

export const metadata: Metadata = {
  title: "Inversión",
  description:
    "Por qué invertir en Pez Vela Residences: renta vacacional, plusvalía, marina internacional y precios de preventa.",
};

export default function InversionPage() {
  return (
    <>
      <PageHero
        kicker="Inversión"
        title={<>Una decisión con vista al futuro</>}
        intro="Renta vacacional, plusvalía y una de las plazas con mayor proyección de la Riviera Nayarit. Esto es lo que hace de Pez Vela una inversión inteligente."
        image="/branding/banner-portada-ola-mar.jpg"
        imageAlt="Mar de la Riviera Nayarit"
      />

      <section className="bg-crema py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Por qué invertir"
            title="Cuatro motores de valor"
            intro="Los datos marcados como editables se completan con las cifras que defina el desarrollador."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {inversion.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-teal/10 bg-white p-8 transition-shadow duration-500 hover:shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-teal">{item.titulo}</h3>
                    {item.placeholder && <Badge tone="arena">Editable</Badge>}
                  </div>
                  <p className="mt-4 font-serif text-4xl text-turquesa">
                    {item.valor}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-teal/65">
                    {item.detalle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-teal/55">
              * Las cifras de plusvalía, ROI y ocupación son ilustrativas y deben
              confirmarse con el desarrollador. Mattera Systems deja estos campos
              listos para editar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Franja de argumento */}
      <section className="bg-teal py-24 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            align="center"
            tone="light"
            kicker="Preventa"
            title="Las mejores condiciones son hoy"
            intro="Durante la preventa accedes a los precios de entrada y a la mejor selección de unidades y orientaciones. Es la etapa con mayor margen de plusvalía antes de la entrega."
          />
        </div>
      </section>

      <CtaBand
        title="Hagamos números juntos"
        intro="Te compartimos la lista de precios, formas de pago y proyección de renta para la unidad que te interese."
      />
    </>
  );
}
