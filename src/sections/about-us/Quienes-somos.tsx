import WtpButton from "@/components/ui/ButtonWtp";

export default function QuienesSomos() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:gap-20">

                <div className="w-full lg:w-[55%]">
                    <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                        ¿Quiénes somos?
                    </h2>

                    <div className="mt-6 h-[2px] w-24 rounded-full bg-[#C5A059]" />

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
                        Somos una empresa enfocada en remodelación y adecuación de espacios en Bogotá y a nivel nacional.
                        Nos especializamos en transformar ideas en proyectos funcionales, estéticos y bien ejecutados.
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
                        Más que construir, analizamos cada proyecto para ofrecer soluciones estratégicas que se adapten a las necesidades reales de nuestros clientes.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-start">
                        <WtpButton />
                    </div>
                </div>

                <div className="w-full lg:w-[45%]">
                    <img
                        src="/img/assets/sala.webp"
                        alt="Interior residencial remodelado en Bogotá con acabados modernos"
                        className="h-[280px] w-full rounded-2xl object-cover shadow-2xl md:h-[380px] lg:h-[460px]"
                    />
                </div>

            </div>
        </section>
    )
}