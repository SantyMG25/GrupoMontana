import WtpButton from "@/components/ui/ButtonWtp";

const proceso = [
  {
    title: "Cotización",
    description:
      "Escuchamos tu idea y entendemos lo que necesitas para darte una propuesta clara desde el inicio.",
  },
  {
    title: "Análisis",
    description:
      "Evaluamos el espacio, materiales y condiciones para definir la mejor solución.",
  },
  {
    title: "Estrategia",
    description:
      "Planificamos cada detalle del proyecto para optimizar tiempos, costos y resultados.",
  },
  {
    title: "Ejecución y entrega",
    description:
      "Llevamos el proyecto a cabo con precisión, cumpliendo tiempos y garantizando calidad.",
  },
];

export default function HomeProceso() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C5A059]">
            Proceso
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Así llevamos tu proyecto de idea a realidad
          </h2>

          <div className="mt-6 h-[2px] w-24 mx-auto bg-[#C5A059] rounded-full" />

          <p className="mt-6 text-gray-500 leading-relaxed">
            Trabajamos con un proceso claro y estructurado para garantizar resultados funcionales, estéticos y de alta calidad.
          </p>
        </div>

        {/* Grid pasos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {proceso.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C5A059] text-white text-sm font-bold">
                  {index + 1}
                </span>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <WtpButton />
        </div>

      </div>
    </section>
  );
}