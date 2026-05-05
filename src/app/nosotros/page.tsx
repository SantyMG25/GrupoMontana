import NostrosHero from "@/sections/about-us/NosotrosHero";
import Quienessomos from "@/sections/about-us/Quienes-somos";
import PqElegirnos from "@/sections/about-us/PqElegirnos";
import Proceso from "@/sections/about-us/Proceso";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conoce a Montana, especialistas en remodelación, diseño y construcción de espacios en Bogotá. Transformamos tus ideas en realidad con estrategia y precisión.",
  alternates: {
    canonical: "/nosotros",
  },
};

export default function Nosotros() {
  return (
    <main>
        <NostrosHero />
        <Quienessomos />     
        <PqElegirnos />  
        <Proceso /> 
    </main>
  );
}