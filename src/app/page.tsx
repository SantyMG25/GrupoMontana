import HomeProjectsFeature from "@/sections/home/HomeProjectsFeature";
import Hero from "../sections/home/Hero";
import HomeService from "@/sections/home/HomeService";
import HomeUs from "@/sections/home/HomeUs";
import HomePqElegirnos from "@/sections/home/HomePqElegirnos";
import HomeCTA from "@/sections/home/HomeCTA";
import HomeProceso from "@/sections/home/HomeProceso";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construcción y Remodelación en Bogotá | Montana Soluciones",
  description: "Especialistas en construcción, remodelación integral y adecuación de espacios residenciales y comerciales en Bogotá y a nivel nacional. Cotiza tu proyecto con nosotros.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return(
    <>
      <Hero />
      <HomeUs />
      <HomeService />
      <HomePqElegirnos />
      <HomeProceso />
      <HomeCTA />
    </>
  )
}