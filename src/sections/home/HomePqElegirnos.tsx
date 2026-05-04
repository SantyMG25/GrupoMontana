import PqElegirnosLi from "../about-us/PqElegirnosLi";
import WtpButton from "@/components/ui/ButtonWtp";

export default function HomePqElegirnos() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:gap-20">

                <div className="w-full lg:w-[55%]">
                    <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
                        Confianza y calidad
                    </span>

                    <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                        ¿Por qué elegirnos?
                    </h2>

                    <div className="mt-6 h-[2px] w-24 rounded-full bg-[#C5A059]" />

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
                        Trabajamos cada proyecto con análisis, planificación y ejecución responsable para entregar resultados funcionales, estéticos y duraderos.
                    </p>

                    <PqElegirnosLi />

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <WtpButton />
                    </div>
                </div>

                <div className="w-full lg:w-[45%]">
                    <img
                        src="/img/hero/hero.webp"
                        alt="Interior remodelado con acabados modernos"
                        className="h-[280px] w-full rounded-2xl object-cover shadow-2xl md:h-[380px] lg:h-[460px]"
                    />
                </div>

            </div>
        </section>
    );
}