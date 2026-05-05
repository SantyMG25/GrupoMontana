export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center px-6 py-24 md:px-12 lg:px-24 overflow-hidden">

      <div
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: "url('/img/hero/hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-[#C5A059] font-semibold">
          Contacto
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
          Contáctanos
        </h1>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          Estamos listos para ayudarte con tu proyecto de construcción o remodelación.
        </p>

        <div className="mt-6 h-[2px] w-24 mx-auto bg-[#C5A059] rounded-full" />
      </div>

    </section>
  );
}