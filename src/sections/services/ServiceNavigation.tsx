import Link from "next/link";

const links = [
  {
    label: "Remodelación",
    href: "#remodelacion",
  },
  {
    label: "Construcción",
    href: "#construccion",
  },
  {
    label: "Estructuras y acabados",
    href: "#estructuras",
  },
];

export default function ServiceNavigation() {
  return (
    <section className="bg-background px-6 pb-8">
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-[#C5A059]/40 px-5 py-2 text-sm font-semibold text-[#162334] transition hover:bg-[#C5A059] hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}