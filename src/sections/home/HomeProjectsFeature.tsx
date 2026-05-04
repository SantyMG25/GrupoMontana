import ProjectGrid from "../projects/ProjectGrid";

export default function HomeProjectsFeature() {
    return (

        <section className="py-20 bg-background">
            <div className="container mx-auto">
                <h2 className="text-6xl font-semibold mb-12 text-center text-gray-900 tracking-tight">
                    Proyectos Destacados
                </h2>
                <ProjectGrid />
            </div>
        </section>
    );
}