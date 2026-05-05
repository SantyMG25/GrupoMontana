export default function FormLeads() {
  return (
    <section className="bg-background px-6 pt-8 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-start">

          <div>
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
              Cotiza tu proyecto
            </span>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Cuéntanos sobre tu próximo proyecto
            </h2>

            <p className="max-w-xl text-base leading-7 text-gray-600 md:text-lg">
              Déjanos tus datos y cuéntanos qué necesitas. Te contactaremos para brindarte asesoría personalizada.
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-600">
              <p>✔ Asesoría personalizada desde el inicio</p>
              <p>✔ Cotización según el alcance del proyecto</p>
              <p>✔ Respuesta directa por WhatsApp</p>
            </div>
          </div>


          <form className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-8">
            {/* tu form aquí tal cual */}
          </form>

        </div>
      </div>
    </section>
  );
}