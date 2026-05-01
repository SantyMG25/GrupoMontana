import Link from "next/link";
import Button from "@/components/ui/Button";
import { FaWhatsapp } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center px-6 py-20 md:px-12 lg:px-20"
      style={{
        backgroundImage: "url('/img/hero/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full max-w-2xl">

        <div className="space-y-6 text-white bg-white/10 backdrop-blur-[2px] p-8 rounded-xl border border-white/20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A180]">
            Grupo Montana · Soluciones y Servicios
          </p>

          <h1 className="font-sans text-5xl font-semibold tracking-tight">
            Construcción y remodelación con estándares de alta calidad
          </h1>

          <p className="text-base lea ding-7 text-gray-200 md:text-lg">
            Desarrollamos soluciones en construcción, remodelación y servicios
            integrales con compromiso, cumplimiento y atención personalizada.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">

            <a
              href="https://wa.me/57NUMERO?text=Hola,%20quiero%20cotizar%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" className="flex items-center gap-2">
                <FaWhatsapp className="text-xl " /> 
                Solicitar Asesoría
              </Button>
            </a>

            <Button variant="cta">
              <Link href="/contacto">Cotizar proyecto</Link>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}