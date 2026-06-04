import ServiceHero from "@/sections/services/ServiceHero";
import Construccion from "@/sections/services/Construccion";
import Remodelacion from "@/sections/services/Remodelacion";
import Acabados from "@/sections/services/EstructuraAcabados";
import ServiciosIntro from "@/sections/services/ServicioIntro";
import ServiceNavigation from "@/sections/services/ServiceNavigation";
import ServiceCta from "@/sections/services/ServiceCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Construcción, Remodelación y Acabados",
  description: "Portafolio completo de servicios: remodelación integral, obras civiles, acabados arquitectónicos y construcción comercial y residencial en Bogotá y a nivel nacional.",
  alternates: {
    canonical: "/servicios",
  },
};

export default function Servicios() {
  return (
    <>
      <ServiceHero />
      <ServiciosIntro />
      <ServiceNavigation />
      <Remodelacion />
      <Construccion />
      <Acabados />
      <ServiceCta />
    </>
  );
}