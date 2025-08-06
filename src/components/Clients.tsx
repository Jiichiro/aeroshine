import Image from "next/image";

export default function Clients() {
    const clientImages = [
        { src: "/img/client-batik-air.png", alt: "Client Logo" },
        { src: "/img/client-garuda-indonesia.svg", alt: "Client Logo" },
        { src: "/img/client-lion-air.svg", alt: "Client Logo" },
        { src: "/img/client-nam-air.png", alt: "Client Logo" },
        { src: "/img/client-pelita-air.png", alt: "Client Logo" },
        { src: "/img/client-super-air-jet.png", alt: "Client Logo" },
        { src: "/img/client-swirijaya-air.png", alt: "Client Logo" },
        { src: "/img/client_citilink.svg", alt: "Client Logo" },
    ];

    return (
        <section className="clients">
            <div className="mx-auto max-w-7xl px-4">
                <header className="section-header">
                    <h3 className="section-title">klien kami</h3>
                    <p>
                        Maskapai yang telah mempercayakan pembersihan armadanya kepada kami
                    </p>
                </header>

                <div className="flex flex-wrap justify-center gap-6 clients-carousel">
                    {clientImages.map((img, idx) => (
                        <Image
                            key={idx}
                            src={img.src}
                            alt={img.alt}
                            width={120}
                            height={60}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}