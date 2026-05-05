import Link from "next/link";
import WtpButton from "@/components/ui/ButtonWtp";
import Button from "@/components/ui/Button";

export default function HomeCTA() {
  return (
    <section className="bg-[#dedada] py-20">
      <div className="mx-auto max-w-5xl px-6 text-center text-gray-600">

        <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          ¿Tienes un proyecto en mente?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 md:text-lg">
          Te ayudamos a hacerlo realidad con soluciones en construcción,
          remodelación y mantenimiento adaptadas a tus necesidades.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Button variant="cta">
            <Link href="/contacto">
              Iniciar Presupuesto
            </Link>
          </Button>

          <WtpButton />

        </div>
      </div>
    </section>
  );
}