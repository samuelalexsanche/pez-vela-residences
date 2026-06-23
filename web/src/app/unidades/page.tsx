import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UnitCard } from "@/components/ui/UnitCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { departamentos } from "@/data/unidades";

export const metadata: Metadata = {
  title: "Unidades · Departamentos",
  description:
    "Seis tipologías de departamento de 2 recámaras con terraza privada, de 100 a 132 m². Interior, terraza y numeración por unidad.",
};

export default function UnidadesPage() {
  return (
    <>
      <PageHero
        kicker="Unidades · Niveles 1 – 5"
        title={<>Seis tipologías de departamento</>}
        intro="30 departamentos de dos recámaras, 6 por nivel, todos con terraza privada. Explora cada tipología con su desglose completo."
        image="/fotos/interior-sala-vista-mar-02.jpeg"
        imageAlt="Interior de departamento con vista al mar"
      />

      <section className="bg-crema py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Departamentos"
            title="Elige tu distribución"
            intro="Cada card muestra metros de interior, terraza y área total, además de la numeración de las unidades en la torre. Haz clic para ver el detalle completo."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departamentos.map((u, i) => (
              <UnitCard key={u.slug} unidad={u} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="¿Cuál es tu favorito?"
        intro="Cuéntanos qué tipología te interesa y te compartimos disponibilidad, precios y condiciones de preventa."
      />
    </>
  );
}
