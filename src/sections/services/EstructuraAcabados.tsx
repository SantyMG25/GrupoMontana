import ServiceDetail from "./ServiceDetail";

export default function EstructuraAcabados() {
  return (
    <ServiceDetail
      id="estructuras"
      eyebrow="Estructuras y acabados"
      title="Soluciones técnicas con acabados de alta calidad"
      image="/img/hero/hero.webp"
      description="Ejecutamos estructuras, instalaciones y acabados con precisión técnica y atención al detalle."
      secondDescription="Cada proyecto se trabaja buscando resistencia, funcionalidad y una estética bien definida."
      points={[
        {
          title: "Estructuras",
          description: "Soluciones sólidas y seguras.",
        },
        {
          title: "Instalaciones",
          description: "Ejecución técnica y ordenada.",
        },
        {
          title: "Acabados",
          description: "Detalles finales limpios y duraderos.",
        },
      ]}
    />
  );
}