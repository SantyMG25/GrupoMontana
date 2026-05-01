import Link from "next/link";
import Button from "@/components/ui/Button";

const NavLinks = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
];

export default function NavBar() {
  return (
    <nav className="flex items-center gap-6">

      {/* Links */}
      <ul className="hidden items-center gap-6 md:flex gap-6">
        {NavLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-xl/1vh font-bold text-gray-700 transition hover:text-orange-500"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="hidden md:block">
        <Button variant="cta">
              <Link href="/contacto">Cotizar proyecto</Link>
            </Button>
      </div>

    </nav>
  );
}