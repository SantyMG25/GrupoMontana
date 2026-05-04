import Link from "next/link";
import WtpButton from "@/components/ui/ButtonWtp";

export default function HomeCTA() {
  return (
    <section className="bg-[#C5A059] py-20">
      <div className="mx-auto max-w-5xl px-6 text-center text-white">
        
        <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          ¿Tienes un proyecto en mente?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
          Te ayudamos a hacerlo realidad con soluciones en construcción,
          remodelación y mantenimiento adaptadas a tus necesidades.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <Link
            href="/contacto"
            className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-md transition hover:bg-gray-100"
          >
            Cotizar proyecto
          </Link>

          <WtpButton />

        </div>
      </div>
    </section>
  );
}