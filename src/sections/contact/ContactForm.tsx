"use client";

import { FormEvent } from "react";
import ContactLeadInfo from "./ContactLeadInfo";

const WHATSAPP_NUMBER = "573113743784";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const nombre = data.get("nombre");
    const telefono = data.get("telefono");
    const correo = data.get("correo");
    const servicio = data.get("servicio");
    const mensaje = data.get("mensaje");

    const text = `
Hola, quiero solicitar una cotización.

Nombre: ${nombre}
Teléfono / WhatsApp: ${telefono}
Correo: ${correo || "No especificado"}
Servicio: ${servicio}

Proyecto:
${mensaje}
    `.trim();

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-background px-6 pt-8 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <ContactLeadInfo />
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Nombre completo
                </label>
                <input
                  name="nombre"
                  required
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Teléfono / WhatsApp
                </label>
                <input
                  name="telefono"
                  required
                  type="tel"
                  placeholder="Ej: 300 123 4567"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Correo electrónico
                </label>
                <input
                  name="correo"
                  type="email"
                  placeholder="Ej: correo@ejemplo.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Tipo de servicio
                </label>
                <select
                  name="servicio"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="Remodelación">Remodelación</option>
                  <option value="Construcción">Construcción</option>
                  <option value="Estructuras y acabados">
                    Estructuras y acabados
                  </option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="Describe brevemente qué necesitas..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-gray-500">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#C5A059]"
                />
                <span>
                  Autorizo el uso de mis datos personales para ser contactado sobre mi solicitud de cotización.
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 rounded-xl bg-[#C5A059] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#b48f4f]"
              >
                Enviar por WhatsApp
              </button>

              <p className="text-center text-xs text-gray-400">
                Al enviar, se abrirá WhatsApp con tu solicitud lista para enviar.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}