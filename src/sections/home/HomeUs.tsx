import WtpButton from "@/components/ui/ButtonWtp"
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Us() {
    return (
        <section className="py-24 bg-background">

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Imagen */}
                <div className="w-full md:w-1/2">
                    <img
                        src="/img/hero/hero.webp"
                        alt="Remodelación de espacios en Bogotá"
                        className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                    />
                </div>

                {/* Texto */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    
                    {/* Título */}
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900 tracking-tight">
                        Bienvenido
                    </h2>

                    {/* Párrafo 1 */}
                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                        Nos especializamos en remodelación y adecuación de espacios en Bogotá y alrededores. 
                        Más que ejecutar obras, analizamos cada proyecto para proponer soluciones funcionales, 
                        estéticas y bien pensadas desde el inicio.
                    </p>

                    {/* Párrafo 2 */}
                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mt-4">
                        Nuestro proceso integra cotización, análisis, estrategia y ejecución, asegurando resultados 
                        confiables y adaptados a las necesidades de cada cliente.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 py-6">
                        <WtpButton />

                        <Button variant="cta">
                            <Link href="/contacto">
                                Conocer más
                            </Link>
                        </Button>
                    </div>

                    {/* Línea decorativa */}
                    <div className="h-[2px] w-full bg-[#C5A180] mt-8 rounded-full"></div>
                </div>

            </div>
        </section>
    )
}