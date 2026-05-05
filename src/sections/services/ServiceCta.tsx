import WtpButton from "@/components/ui/ButtonWtp";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function ServiciosCTA() {
  return (
    <section className="bg-[#dedada] px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C5A059]">
          Cotiza tu proyecto
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#162334]">
          ¿Listo para transformar tu espacio?
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Recibe asesoría personalizada para definir la mejor solución para tu
          remodelación, construcción o adecuación.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WtpButton />

          <Button variant="cta">
            <Link href="/contacto">Solicitar cotización</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}