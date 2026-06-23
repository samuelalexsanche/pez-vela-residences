import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { departamentos, getUnidad } from "@/data/unidades";
import { UnitDetail } from "@/components/sections/UnitDetail";
import { CtaBand } from "@/components/sections/CtaBand";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return departamentos.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const u = getUnidad(slug);
  if (!u) return { title: "Unidad" };
  return {
    title: `${u.nombre} · ${u.total.toFixed(2)} m²`,
    description: u.descripcion,
  };
}

export default async function UnidadDetallePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const unidad = getUnidad(slug);
  if (!unidad || unidad.tipo !== "departamento") notFound();

  return (
    <>
      <UnitDetail unidad={unidad} />
      <CtaBand
        title="Aparta tu departamento"
        intro="Estás a tiempo de elegir el mejor nivel y orientación. Agenda una cita y asegura tu unidad en preventa."
      />
    </>
  );
}
