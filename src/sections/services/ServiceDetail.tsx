type ServiceDetailProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  secondDescription?: string;
  image: string;
  reverse?: boolean;
  points: {
    title: string;
    description: string;
  }[];
};

export default function ServiceDetail({
  id,
  eyebrow,
  title,
  description,
  secondDescription,
  image,
  reverse = false,
  points,
}: ServiceDetailProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 bg-background px-6 py-24"
    >
      <div
        className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 ${
          reverse ? " " : "lg:[&>*:first-child]:order-2" 
        }`}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C5A059]">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#162334] md:text-5xl">
            {title}
          </h2>

          <div className="mt-6 h-[2px] w-20 rounded-full bg-[#C5A059]" />

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {description}
          </p>

          {secondDescription && (
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {secondDescription}
            </p>
          )}

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm"
              >
                <h3 className="text-sm font-semibold text-[#162334]">
                  {point.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#C5A059]/20 blur-3xl" />

          <img
            src={image}
            alt={title}
            className="relative h-[320px] w-full rounded-3xl object-cover shadow-2xl md:h-[460px]"
          />
        </div>
      </div>
    </section>
  );
}