
import HomeProjectsFeature from "@/sections/home/HomeProjectsFeature";
import Hero from "../sections/home/Hero";
import HomeService from "@/sections/home/HomeService";
import HomeUs from "@/sections/home/HomeUs";
import HomePqElegirnos from "@/sections/home/HomePqElegirnos";
import HomeCTA from "@/sections/home/HomeCTA";
import HomeProceso from "@/sections/home/HomeProceso";


export default function Page() {
  return(
    <main>
      <Hero />
      <HomeUs />
      <HomeService />
      <HomePqElegirnos />
      <HomeProceso />
      <HomeCTA />
    </main>
  )
}