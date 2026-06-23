import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UnitCard } from "@/components/ui/UnitCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { penthouses } from "@/data/unidades";

export const metadata: Metadata = {
  title: "Penthouses",
  description:
    "Tres penthouses únicos de 213 a 257 m² en el nivel 6, con terrazas amplias y vista panorámica a la Bahía de Banderas.",
};

export default function PenthousesPage() {
  return (
    <>
      <PageHero
        kicker="Penthouses · Nivel 6"
        title={<>Vivir en lo más alto</>}
        intro="Lo más exclusivo de Pez Vela: tres residencias de gran formato con terrazas panorámicas abiertas al Pacífico."
        image="/fotos/amenidad-rooftop-infinity-dia.jpeg"
        imageAlt="Alberca infinity con vista panorámica"
      />

      <section className="bg-teal py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            tone="light"
            kicker="Tres penthouses"
            title="Espacios irrepetibles"
            intro="Cada penthouse es único en metraje y terraza. Explora el detalle de cada uno y elige tu lugar en la cima."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {penthouses.map((u, i) => (
              <UnitCard key={u.slug} unidad={u} index={i} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Una vista que no se repite"
        intro="Los penthouses son piezas únicas. Agenda una cita privada para conocer disponibilidad y condiciones."
      />
    </>
  );
}
