import { MapPin, Phone, Mail } from "lucide-react";

    export default function Contact() {
        return (
            <section className="contact">
                <div className="container mx-auto px-4">
                    <div className="section-header mb-8 text-center">
                        <h3 className="section-title text-3xl font-bold mb-2">Kontak Kami</h3>
                        <p>
                            Jika anda tertarik, anda dapat menghubungi kami dengan kontak yang tertera
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center contact-info mb-8 gap-6">
                        <div className="md:w-1/3">
                            <div className="contact-address flex flex-col items-center">
                                <MapPin color="green" className="w-8 h-8 mb-2" />
                                <h3 className="text-xl font-semibold mb-1">Alamat</h3>
                                <address className="text-center">Ngawi, Jawa Timur, Indonesia. 68256</address>
                            </div>
                        </div>

                        <div className="md:w-1/3">
                            <div className="contact-phone flex flex-col items-center">
                                <Phone color="green" className="w-8 h-8 mb-2" />
                                <h3 className="text-xl font-semibold mb-1">Nomor telepon</h3>
                                <p>
                                    <a href="tel:+123-456-789" className="text-blue-600 hover:underline">
                                        (045) 123-456
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/3">
                            <div className="contact-email flex flex-col items-center">
                                <Mail color="green" className="w-8 h-8 mb-2" />
                                <h3 className="text-xl font-semibold mb-1">Email</h3>
                                <p>
                                    <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
                                        conatct@aeroshine.co.id
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <div className="map h-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16327919.76949149!2d107.22186579247295!3d-2.4034386294548926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1754098663276!5m2!1sid!2sid"
                                    frameBorder="0"
                                    style={{ border: 0, width: "100%", height: "100%" }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="form">
                                <form className="contactForm">
                                    <div className="flex flex-col md:flex-row gap-4 mb-4 form-row">
                                        <div className="form-group md:w-1/2">
                                            <input
                                                type="text"
                                                className="form-control w-full px-4 py-2 border rounded"
                                                placeholder="Nama kamu"
                                            />
                                        </div>
                                        <div className="form-group md:w-1/2">
                                            <input
                                                type="email"
                                                className="form-control w-full px-4 py-2 border rounded"
                                                placeholder="Email Kamu"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            className="form-control w-full px-4 py-2 border rounded"
                                            placeholder="Subjek"
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <textarea
                                            className="form-control w-full px-4 py-2 border rounded"
                                            rows={5}
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                                        >
                                            Kirim Pesan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }