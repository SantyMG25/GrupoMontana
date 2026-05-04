const proceso = [
    {
        title: "Cotización",
        description: "Escuchamos tu idea y entendemos lo que necesitas para darte una propuesta clara desde el inicio."
    },
    {
        title: "Análisis",
        description: "Evaluamos el espacio, materiales y condiciones para definir la mejor solución."
    },
    {
        title: "Estrategia",
        description: "Planificamos cada detalle del proyecto para optimizar tiempos, costos y resultados."
    },
    {
        title: "Ejecución y entrega",
        description: "Llevamos el proyecto a cabo con precisión, cumpliendo tiempos y garantizando calidad."
    }
];

export default function HomeProcesoLi() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
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
    );
}