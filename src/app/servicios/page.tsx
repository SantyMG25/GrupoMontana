import ServiceHero from "@/sections/services/ServiceHero";
import Construccion from "@/sections/services/Construccion";
import Remodelacion from "@/sections/services/Remodelacion";
import Acabados from "@/sections/services/EstructuraAcabados";
import ServiciosIntro from "@/sections/services/ServicioIntro";
import ServiceNavigation from "@/sections/services/ServiceNavigation";
import ServiceCta from "@/sections/services/ServiceCta";


export default function Servicios() {
  return (
    <main>
      <ServiceHero />
      <ServiciosIntro />
      <ServiceNavigation />
      <Remodelacion />
      <Construccion />
      <Acabados />
      <ServiceCta />
    </main>
  );
}