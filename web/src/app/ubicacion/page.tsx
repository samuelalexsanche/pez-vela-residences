import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { GoogleMap } from "@/components/ui/GoogleMap";
import { cercanias, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Ubicación",
  description:
    "La Cruz de Huanacaxtle, sobre la vía principal y junto a la marina internacional, en el corazón de la Riviera Nayarit.",
};

export default function UbicacionPage() {
  return (
    <>
      <PageHero
        kicker="Ubicación estratégica"
        title={<>Riviera Nayarit, Bahía de Banderas</>}
        intro="Uno de los destinos costeros con mayor proyección de México: tradición local, marina internacional y crecimiento sostenido."
        image="/branding/banner-playa-pies-arena.jpg"
        imageAlt="Playa de la Riviera Nayarit"
      />

      <section className="bg-crema py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="aspect-[4/3]">
              <GoogleMap
                query="La Cruz de Huanacaxtle, Nayarit, Mexico"
                zoom={15}
                className="h-full w-full"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              kicker="A un paso de todo"
              title="Sobre la vía principal de La Cruz"
              intro="Acceso inmediato a la marina, a la oferta gastronómica y a los destinos más codiciados de la bahía."
            />
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {cercanias.map((c, i) => (
                <Reveal as="li" key={c.titulo} delay={i * 0.07}>
                  <div className="rounded-2xl border border-teal/10 bg-white p-5">
                    <p className="font-serif text-xl text-teal">{c.titulo}</p>
                    <p className="mt-1 text-sm text-teal/65">{c.detalle}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <p className="mt-6 text-sm text-teal/55">{site.contacto.direccion}</p>
              <Button
                href="https://www.google.com/maps/search/La+Cruz+de+Huanacaxtle+Marina"
                external
                variant="outline"
                className="mt-4"
              >
                Abrir en Google Maps
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Narrativa de inversión */}
      <section className="bg-teal py-24 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            align="center"
            tone="light"
            kicker="Por qué aquí"
            title="Un punto estratégico para vivir e invertir"
            intro="La Cruz de Huanacaxtle combina la calma de un pueblo costero con la infraestructura de una marina internacional. Seguridad, gastronomía y una demanda turística que crece año con año la convierten en una de las plazas más sólidas de la Riviera Nayarit."
          />
        </div>
      </section>

      <CtaBand
        title="¿Listo para conocer la zona?"
        intro="Coordinamos un recorrido por el desarrollo y su entorno: marina, playas y restaurantes."
      />
    </>
  );
}
