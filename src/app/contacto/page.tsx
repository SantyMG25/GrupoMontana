import ContactForm from "@/sections/contact/ContactForm";
import ContactHero from "@/sections/contact/ContactHero";
import ContactInfo from "@/sections/contact/ContactInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto y Cotizaciones | Construcción y Remodelación",
  description: "¿Tienes un proyecto en mente? Contáctanos hoy mismo para obtener una cotización y asesoría para tu proyecto de remodelación o construcción en Bogotá y a nivel nacional.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function Contacto() {
  return (
    <>
        <ContactHero />
        <ContactForm />
    </>
  );
}