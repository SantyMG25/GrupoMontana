const projectCards = [
  {
    name: "Project 1",
    description: "Description for Project 1",
    img: "/img/hero/hero.webp",
  },
  {
    name: "Project 2",
    description: "Description for Project 2",
    img: "/img/hero/hero.webp",
  },
  {
    name: "Project 3",
    description: "Description for Project 3",
    img: "/img/hero/hero.webp",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {projectCards.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
          {/* Imagen */}
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-40 object-cover"
          />

          {/* Contenido */}
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{project.name}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>

            {/* Botón opcional */}
            <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
              Ver proyecto
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}