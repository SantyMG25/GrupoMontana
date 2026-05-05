import ContactForm from "@/sections/contact/ContactForm";
import ContactHero from "@/sections/contact/ContactHero";
import ContactInfo from "@/sections/contact/ContactInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "¿Tienes un proyecto en mente? Contáctanos hoy mismo para cotizar tu proyecto de remodelación o construcción en Bogotá y alrededores.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function Contacto() {
  return (
    <main>
        <ContactHero />
        <ContactForm />
    </main>
  );
}