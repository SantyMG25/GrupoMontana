import ServiceGrid from "../services/ServiceGrid";

export default function HomeSection() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <h2 className="mb-8 text-3xl font-bold text-gray-900">Nuestros Servicios</h2>
                <ServiceGrid />
            </div>
        </section>
    )
}