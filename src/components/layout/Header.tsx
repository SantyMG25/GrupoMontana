"use client";

import Link from "next/link";
import NavBar from "./NavBar";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavLinks = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-gray-200 bg-[#cec7c7] shadow-sm">
      
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/img/logo/logoHz.webp"
            alt="Grupo Montana Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <NavBar />
        </div>

        {/* Botón hamburguesa */}
        <button
          className="text-2xl text-gray-800 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-900">
            {NavLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium hover:text-[#C5A059]"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* CTA */}
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-lg bg-[#C5A059] px-6 py-3 font-semibold text-white transition hover:bg-[#b48f4f]"
            >
              Cotizar proyecto
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}