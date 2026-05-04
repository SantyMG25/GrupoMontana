import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import WtpButton from "@/components/ui/ButtonWtp";
import Button from "@/components/ui/Button";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center px-6 py-24 md:px-12 lg:px-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div 
        className="absolute inset-0 z-0 scale-105 animate-subtle-zoom"
        style={{
          backgroundImage: "url('/img/hero/hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0" />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="group space-y-7 text-white bg-black/20 backdrop-blur-[2px] p-7 md:p-10 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all hover:border-white/20">
          
          {/* Label */}
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#C5A180]" />
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-[#C5A180]">
              Montana · Soluciones y Servicios
            </p>
          </div>

          <h1 
            id="hero-heading"
            className={`${instrumentSerif.className} text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-2xl`}
          >
            Construimos y remodelamos <br />
            <span className="italic text-white/85 font-light text-[0.82em]">
              espacios con propósito.
            </span>
          </h1>

          <p className="max-w-lg text-base md:text-lg leading-relaxed text-gray-300 font-light">
            Transformamos espacios con asesoría estratégica, precisión técnica y acabados de alto nivel en Bogotá y alrededores.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row items-start sm:items-center">
            <WtpButton />
            
            <Button variant="cta">
              <Link href="/contacto">
                Iniciar Presupuesto
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('/img/noise.png')]" />
    </section>
  );
}