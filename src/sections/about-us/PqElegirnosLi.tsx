const LiRazones = [
    {
        razones: "Enfoque estratégico: analizamos cada proyecto antes de ejecutarlo."
    },
    {
        razones: "Acompañamiento completo: desde la cotización hasta la entrega final."
    },
    {
        razones: "Precisión y detalle: altos estándares técnicos y estéticos en cada trabajo."
    },
    {
        razones: "Cumplimos tiempos y garantizamos calidad en cada entrega."
    }
];

export default function PqElegirnosLi() {
    return (
        <ul className="space-y-4 mt-6">
            {LiRazones.map((item, index) => (
                <li key={index} className="text-gray-600 text-base flex items-start gap-3">
                    
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-[#C5A059] flex-shrink-0" />

                    <p className="leading-relaxed">
                        {item.razones}
                    </p>

                </li>
            ))}
        </ul>
    );
}