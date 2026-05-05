import ServiceDetail from "./ServiceDetail";

export default function Construccion() {
  return (
    <ServiceDetail
      id="construccion"
      eyebrow="Construcción"
      title="Construcción con enfoque estratégico"
      image="/img/hero/hero.webp"
      reverse
      description="Desarrollamos proyectos desde cero con planificación técnica, control de calidad y ejecución precisa."
      secondDescription="Nuestro enfoque garantiza espacios funcionales, seguros y bien estructurados, adaptados a entornos residenciales y comerciales."
      points={[
        {
          title: "Planeación",
          description: "Definimos cada etapa antes de ejecutar.",
        },
        {
          title: "Ejecución",
          description: "Trabajamos con precisión técnica.",
        },
        {
          title: "Confianza",
          description: "Resultados seguros y duraderos.",
        },
      ]}
    />
  );
}