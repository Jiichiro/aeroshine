import { BrushCleaning, Cog, Droplets, PersonStanding, Plane, Sun } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Plane className="w-12 h-12" />,
            title: "Exterior Wash",
            description: "Pembersihan bagian luar pesawat seperti badan (fuselage), sayap, ekor, dan roda menggunakan air, sabun khusus, dan alat bertekanan tinggi."
        },
        {
            icon: <Sun className="w-12 h-12" />,
            title: "Dry Wash",
            description: "Teknik pencucian tanpa air, menggunakan kain mikrofiber dan cairan khusus untuk membersihkan permukaan pesawat."
        },
        {
            icon: <PersonStanding className="w-12 h-12" />,
            title: "Interior Cleaning",
            description: "Pembersihan kabin penumpang, termasuk kursi, meja lipat, jendela, karpet, dan bagasi kabin."
        },
        {
            icon: <Droplets className="w-12 h-12" />,
            title: "Lavatory Service",
            description: "Pengosongan dan pembersihan sistem toilet pesawat serta pengisian ulang cairan toilet."
        },
        {
            icon: <BrushCleaning className="w-12 h-12" />,
            title: "Carpet & Upholstery Cleaning",
            description: "Pembersihan mendalam untuk karpet dan jok kursi menggunakan vakum dan alat pembersih khusus."
        },
        {
            icon: <Cog className="w-12 h-12" />,
            title: "Cockpit Cleaning",
            description: "Pembersihan ruang kokpit secara hati-hati, terutama instrumen dan kontrol, tanpa mengganggu sistem navigasi dan penerbangan."
        }
    ];

    return (
        <section id="services" className="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="section-header mb-8">
                    <h3>layanan</h3>
                    <p>
                        berikut layanan yang kami sertakan untuk anda
                    </p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="service-box">
                                <div className="icon flex items-center justify-center mb-4 text-green-600">
                                    {service.icon}
                                </div>
                                <h4 className="title">{service.title}</h4>
                                <p className="description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}