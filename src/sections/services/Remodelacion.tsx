import ServiceDetail from "./ServiceDetail";

export default function Remodelacion() {
  return (
    <ServiceDetail
      id="remodelacion"
      eyebrow="Servicio principal"
      title="Remodelación integral en Bogotá"
      image="img/assets/IMG1.webp"
      description="Transformamos espacios residenciales y comerciales con un enfoque estratégico, funcional y estético."
      secondDescription="Analizamos cada proyecto para mejorar distribución, uso del espacio y acabados, logrando ambientes modernos y alineados con las necesidades del cliente."
      points={[
        {
          title: "Optimización",
          description: "Aprovechamos mejor cada metro cuadrado.",
        },
        {
          title: "Diseño funcional",
          description: "Soluciones prácticas y modernas.",
        },
        {
          title: "Acabados",
          description: "Detalles estéticos, duraderos y bien ejecutados.",
        },
      ]}
    />
  );
}