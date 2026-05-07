import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#cec7c7] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo + descripción */}
          <div className="space-y-4">
            <Image
              src="/img/logo/logoActualizado.webp"
              alt="Grupo Montana"
              width={140}
              height={50}
              className="object-contain"
            />
            <p className="text-sm text-gray-600">
              Soluciones en construcción, remodelación y mantenimiento con
              compromiso, calidad y cumplimiento.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#C5A059]">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-[#C5A059]">Nosotros</Link></li>
              <li><Link href="/servicios" className="hover:text-[#C5A059]">Servicios</Link></li>
              <li><Link href="/contacto" className="hover:text-[#C5A059]">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600">
              Contacto
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>📍 Bogotá, Colombia</li>
              <li>📞 +57 311 374 3784</li>
              <li>✉️ grupomontanaconstructor@gmail.com</li>
            </ul>

            {/* Redes */}
            <div className="mt-4 flex gap-4">
              <a
                href="https://wa.me/573113743784"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
              >
                <FaInstagram /> 
              </a>
            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}  Montana SyS. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}