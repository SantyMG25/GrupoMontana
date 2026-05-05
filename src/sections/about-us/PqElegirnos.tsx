import WtpButton from "@/components/ui/ButtonWtp";
import Button from "@/components/ui/Button";
import Link from "next/link";

const razones = [
    {
        title: "Enfoque estratégico",
        description:
            "Analizamos cada proyecto antes de ejecutarlo para ofrecer soluciones bien pensadas y evitar errores.",
    },
    {
        title: "Acompañamiento completo",
        description:
            "Estamos presentes desde la cotización hasta la entrega final, guiando cada decisión del cliente.",
    },
    {
        title: "Precisión y detalle",
        description:
            "Trabajamos con altos estándares técnicos y estéticos en cada etapa del proyecto.",
    },
    {
        title: "Cumplimiento y confianza",
        description:
            "Respetamos tiempos y garantizamos calidad en cada ejecución.",
    },
];

export default function PqElegirnosNosotros() {
    return (
        <section className="bg-background py-24">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="max-w-2xl text-center mx-auto">
                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C5A059]">
                        Confianza y calidad
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        ¿Por qué elegirnos?
                    </h2>

                    <div className="mt-6 h-[2px] w-full bg-[#C5A059] rounded-full" />

                    <p className="mt-6 text-gray-500 leading-relaxed">
                        Trabajamos cada proyecto con un enfoque claro: entender antes de ejecutar.
                        No solo construimos, analizamos y planificamos para lograr resultados funcionales,
                        estéticos y duraderos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {razones.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 flex-col sm:flex-row items-start sm:items-center justify-center mt-5">
                    <WtpButton />

                    <Button variant="cta">
                        <Link href="/contacto">
                            Iniciar Presupuesto
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    );
}