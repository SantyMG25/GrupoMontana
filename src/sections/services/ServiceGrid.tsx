import { IoMdConstruct } from "react-icons/io";
import { TbHomeCog } from "react-icons/tb";
import { TbHomeCheck } from "react-icons/tb";




const GridService = [
    {
        name: "Construccion",
        Descripción: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur enim",
        icon: <IoMdConstruct />,
    },
    {
        name: "Reparacion",
        Descripción: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur enim",
        icon: <TbHomeCog />,
    },

    {
        name: "Instalacion",
        Descripción: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur enim",
        icon: <TbHomeCheck />,
    },
]

export default function ServiceGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GridService.map((service) => (
                <div key={service.name} className="flex flex-col items-center gap-4 rounded-lg border border-gray-200 p-6 text-center shadow-sm transition hover:shadow-md">
                    {/* Icono */}
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                        {/* Aquí puedes agregar un icono real */}
                        {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p className="text-gray-500">{service.Descripción}</p>
                </div>
            ))}
        </div>
    )
}