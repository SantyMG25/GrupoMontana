import NostrosHero from "@/sections/about-us/NosotrosHero";
import Quienessomos from "@/sections/about-us/Quienes-somos";
import PqElegirnos from "@/sections/about-us/PqElegirnos";
import Proceso from "@/sections/about-us/Proceso";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Empresa de Construcción y Remodelación",
  description: "Conoce la trayectoria de Montana Soluciones y Servicios en Bogotá y a nivel nacional. Especialistas en diseño, remodelación y construcción con altos estándares de calidad.",
  alternates: {
    canonical: "/nosotros",
  },
};

export default function Nosotros() {
  return (
    <>
        <NostrosHero />
        <Quienessomos />     
        <PqElegirnos />  
        <Proceso /> 
    </>
  );
}