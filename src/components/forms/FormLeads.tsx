export default function FormLeads() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
        
          <div>
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
              Cotiza tu proyecto
            </span>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Hablemos de tu próxima construcción o remodelación
            </h2>

            <p className="max-w-xl text-base leading-7 text-gray-600 md:text-lg">
              Déjanos tus datos y cuéntanos qué necesitas. Nos pondremos en
              contacto contigo para brindarte una asesoría personalizada.
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-600">
              <p>✔ Atención personalizada</p>
              <p>✔ Cotización según tus necesidades</p>
              <p>✔ Asesoría para construcción y remodelación</p>
            </div>
          </div>
          <form className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-8">
            <div className="grid gap-5">
              
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Nombre completo
                </label>
                <input
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
                  type="email"
                  placeholder="Ej: correo@ejemplo.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Tipo de servicio
                </label>
                <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20">
                  <option>Selecciona una opción</option>
                  <option>Construcción</option>
                  <option>Remodelación</option>
                  <option>Mantenimiento</option>
                  <option>Instalación</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe brevemente qué necesitas..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20"
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-xl bg-[#C5A059] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#b48f4f]"
              >
                Enviar solicitud
              </button>

              <p className="text-center text-xs text-gray-400">
                Te contactaremos lo antes posible para revisar tu solicitud.
              </p>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}