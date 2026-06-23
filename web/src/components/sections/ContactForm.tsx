"use client";

import { useState } from "react";
import { whatsappLink, site } from "@/data/site";
import { todasLasUnidades } from "@/data/unidades";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"nombre" | "email" | "telefono", string>>;

const field =
  "w-full rounded-xl border border-teal/15 bg-white px-4 py-3 text-sm text-teal placeholder:text-teal/40 outline-none transition-colors focus:border-turquesa focus:ring-2 focus:ring-turquesa/20";
const label = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-teal/60";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(data: FormData): Errors {
    const e: Errors = {};
    const nombre = String(data.get("nombre") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    if (nombre.length < 2) e.nombre = "Escribe tu nombre.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      e.email = "Correo no válido.";
    if (telefono.replace(/[^\d]/g, "").length < 8)
      e.telefono = "Teléfono no válido.";
    return e;
  }

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const mensaje =
      `Hola, soy ${data.get("nombre")}.\n` +
      `Unidad de interés: ${data.get("unidad")}.\n` +
      `Tel: ${data.get("telefono")} · Email: ${data.get("email")}.\n` +
      `${data.get("mensaje") ? `Mensaje: ${data.get("mensaje")}` : ""}`;

    window.open(whatsappLink(mensaje), "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="nombre">
            Nombre *
          </label>
          <input
            id="nombre"
            name="nombre"
            className={cn(field, errors.nombre && "border-madera")}
            placeholder="Tu nombre"
            aria-invalid={!!errors.nombre}
          />
          {errors.nombre && (
            <p className="mt-1 text-xs text-madera">{errors.nombre}</p>
          )}
        </div>
        <div>
          <label className={label} htmlFor="telefono">
            Teléfono *
          </label>
          <input
            id="telefono"
            name="telefono"
            inputMode="tel"
            className={cn(field, errors.telefono && "border-madera")}
            placeholder="+52 ..."
            aria-invalid={!!errors.telefono}
          />
          {errors.telefono && (
            <p className="mt-1 text-xs text-madera">{errors.telefono}</p>
          )}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={cn(field, errors.email && "border-madera")}
          placeholder="tucorreo@ejemplo.com"
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-madera">{errors.email}</p>
        )}
      </div>

      <div>
        <label className={label} htmlFor="unidad">
          Unidad de interés
        </label>
        <select id="unidad" name="unidad" className={field} defaultValue="Sin definir">
          <option>Sin definir</option>
          <optgroup label="Departamentos">
            {todasLasUnidades
              .filter((u) => u.tipo === "departamento")
              .map((u) => (
                <option key={u.slug}>
                  {u.nombre} · {u.total.toFixed(2)} m²
                </option>
              ))}
          </optgroup>
          <optgroup label="Penthouses">
            {todasLasUnidades
              .filter((u) => u.tipo === "penthouse")
              .map((u) => (
                <option key={u.slug}>
                  {u.nombre} · {u.total.toFixed(2)} m²
                </option>
              ))}
          </optgroup>
        </select>
      </div>

      <div>
        <label className={label} htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          className={cn(field, "resize-none")}
          placeholder="Cuéntanos qué buscas..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Enviar por WhatsApp
      </Button>

      {sent && (
        <p className="rounded-xl bg-turquesa/10 px-4 py-3 text-center text-sm text-turquesa-muted">
          ¡Gracias! Abrimos WhatsApp con tu mensaje listo para enviar. También
          puedes escribirnos a {site.contacto.email}.
        </p>
      )}
      <p className="text-center text-xs text-teal/45">* Campos obligatorios</p>
    </form>
  );
}
