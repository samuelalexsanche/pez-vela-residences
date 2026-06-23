import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { penthouses, getUnidad } from "@/data/unidades";
import { UnitDetail } from "@/components/sections/UnitDetail";
import { CtaBand } from "@/components/sections/CtaBand";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return penthouses.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const u = getUnidad(slug);
  if (!u) return { title: "Penthouse" };
  return {
    title: `${u.nombre} · ${u.total.toFixed(2)} m²`,
    description: u.descripcion,
  };
}

export default async function PenthouseDetallePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const unidad = getUnidad(slug);
  if (!unidad || unidad.tipo !== "penthouse") notFound();

  return (
    <>
      <UnitDetail unidad={unidad} />
      <CtaBand
        title="Reserva tu penthouse"
        intro="Solo hay tres. Agenda una cita privada para conocer en detalle la unidad que más te interesa."
      />
    </>
  );
}
