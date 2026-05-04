import Link from "next/link";
import { IoMdConstruct } from "react-icons/io";
import { TbHomeCog, TbHomeCheck } from "react-icons/tb";

const GridService = [
  {
    name: "Remodelación integral",
    descripcion:
      "Transformamos espacios existentes con estrategia, funcionalidad y acabados de calidad.",
    icon: <TbHomeCog />,
    href: "/servicios#remodelacion",
  },
  {
    name: "Construcción",
    descripcion:
      "Ejecutamos proyectos desde cero con planificación técnica y compromiso en cada etapa.",
    icon: <IoMdConstruct />,
    href: "/servicios#construccion",
  },
  {
    name: "Estructuras y acabados",
    descripcion:
      "Desarrollamos soluciones estructurales, instalaciones y detalles finales con precisión.",
    icon: <TbHomeCheck />,
    href: "/servicios#estructuras",
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {GridService.map((service) => (
        <Link
          key={service.name}
          href={service.href}
          className="group flex min-h-[260px] flex-col rounded-2xl border border-white/50 bg-white/50 p-8 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        >
          <div className="mb-6 text-3xl text-gray-400 transition group-hover:text-[#d4ab59]">
            {service.icon}
          </div>

          <h3 className="text-xl font-semibold text-[#162334]">
            {service.name}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            {service.descripcion}
          </p>

          <span className="mt-auto pt-6 text-xs font-semibold uppercase tracking-widest text-gray-400 transition group-hover:text-[#d4ab59]">
            Ver servicio →
          </span>
        </Link>
      ))}
    </div>
  );
}