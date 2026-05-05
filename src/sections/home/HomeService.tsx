import ServiceGrid from "../services/ServiceGrid";
import FadeIn from "@/components/ui/FadeIn";

export default function HomeService() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,171,89,0.16),transparent_40%)]" />

      <div className="relative container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="up" delay={0.1}>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#d4ab59]">
              Servicios
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#162334] md:text-5xl">
              Soluciones para transformar espacios
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-[#d4ab59]" />
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-500">
              Remodelación, construcción y acabados con enfoque estratégico,
              calidad técnica y atención al detalle.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.5}>
          <div className="mt-14">
            <ServiceGrid />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}