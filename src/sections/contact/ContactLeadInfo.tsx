import ContactInfo from "@/sections/contact/ContactInfo";

export default function ContactLeadInfo() {
  return (
    <div className="max-w-xl">
      <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
        Cotiza tu proyecto
      </span>

      <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
        Cuéntanos sobre tu próximo proyecto
      </h2>

      <p className="text-base leading-7 text-gray-600 md:text-lg">
        Completa el formulario y se abrirá WhatsApp con tu solicitud lista para enviar.
      </p>

      <div className="mt-8 space-y-3 text-sm text-gray-600">
        <p>✔ Asesoría personalizada desde el inicio</p>
        <p>✔ Cotización según el alcance del proyecto</p>
        <p>✔ Respuesta directa por WhatsApp</p>
      </div>

      <div className="mt-10">
        <ContactInfo />
      </div>
    </div>
  );
}