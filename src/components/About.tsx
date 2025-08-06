import { Disc, Eye, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section className="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="section-header">
                    <h3>Tentang Kami</h3>
                    <p>
                        AeroShine adalah tempat pencucian pesawat terkemuka yang mengedepankan standar kebersihan dan
                        perawatan tertinggi dalam industri penerbangan. Kami melayani berbagai jenis pesawat, mulai dari jet
                        pribadi hingga pesawat komersial, dengan peralatan modern dan tim teknisi berpengalaman.
                    </p>
                </header>

                <div className="flex flex-col md:flex-row items-center about-row gap-4">
                    <div className="w-full md:w-1/2">
                        <Image src="/img/about.jpg" alt="" className="w-full h-auto rounded-2xl" width={400} height={250} />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="title text-3xl"><a href="#">Selamat Datang di Laman kami</a></h2>
                        <p>
                            Dengan komitmen terhadap keselamatan, efisiensi, dan penampilan optimal pesawat, AeroShine
                            menggunakan produk pembersih ramah lingkungan yang telah teruji untuk merawat bodi pesawat tanpa
                            merusak permukaan atau lapisan pelindungnya. Setiap layanan kami dilakukan dengan presisi,
                            mencakup pencucian eksterior, pembersihan interior, hingga detailing profesional.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 about-cols">
                    <div>
                        <div className="about-col bg-white p-6 rounded-2xl shadow-lg">
                            <div className="img relative mb-3">
                                <Image src="/img/about-mission.jpg" alt="Misi Kami" className="w-full h-auto rounded" width={400} height={250} />
                                <div className="absolute bottom-[-20px] left-[20px] bg-[#1dbf73] p-[10px] rounded-full">
                                    <Disc className="text-white text-[24px]" />
                                </div>
                            </div>
                            <h2 className="title mb-4 text-[20px] font-semibold">
                                <a href="#" className="text-[#333]">Misi Kami</a>
                            </h2>
                            <ol className="pl-5 numbered-list list-decimal">
                                <li className="mb-3">
                                    <h6 className="font-semibold">Memberikan layanan pencucian pesawat yang aman, efisien,
                                        dan ramah lingkungan.</h6>
                                    <p className="mb-2">Kami memastikan setiap proses pencucian memenuhi standar keselamatan dan
                                        menggunakan bahan yang tidak merusak pesawat maupun lingkungan.</p>
                                </li>
                                <li className="mb-3">
                                    <h6 className="font-semibold">Menjaga performa dan estetika pesawat melalui perawatan
                                        berkualitas tinggi.</h6>
                                    <p className="mb-2">AeroShine tidak hanya membersihkan, tetapi juga merawat agar pesawat
                                        tampil prima dan siap terbang kapan pun dibutuhkan.</p>
                                </li>
                                <li>
                                    <h6 className="font-semibold">Mengembangkan SDM yang profesional dan kompeten di bidang
                                        perawatan pesawat.</h6>
                                    <p className="mb-0">Kami melatih tim kami dengan pengetahuan dan teknologi terbaru untuk
                                        memastikan kualitas layanan terbaik.</p>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <div className="about-col bg-white p-6 rounded-2xl shadow-lg">
                            <div className="img relative mb-3">
                                <Image src="/img/about-vision.jpg" alt="Visi Kami" className="w-full h-auto rounded" width={400} height={250} />
                                <div className="absolute bottom-[-20px] left-[20px] bg-[#1dbf73] p-[10px] rounded-full">
                                    <Eye className="text-white text-[24px]" />
                                </div>
                            </div>
                            <h2 className="title mb-4 text-[20px] font-semibold">
                                <a href="#" className="text-[#333]">Visi Kami</a>
                            </h2>
                            <p>
                                Menjadi mitra terpercaya dalam layanan pencucian dan perawatan pesawat terdepan di Asia Tenggara.
                            </p>
                            <p>
                                AeroShine berkomitmen untuk menjadi simbol keandalan dan profesionalisme dalam industri pembersihan pesawat, dengan mengutamakan kualitas, keselamatan, dan kepuasan pelanggan.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="about-col bg-white p-6 rounded-2xl shadow-lg">
                            <div className="img relative mb-3">
                                <Image src="/img/about-objective.jpg" alt="Tujuan Kami" className="w-full h-auto rounded" width={400} height={250} />
                                <div className="absolute bottom-[-20px] left-[20px] bg-[#1dbf73] p-[10px] rounded-full">
                                    <SlidersHorizontal className=" text-white text-[24px]" />
                                </div>
                            </div>
                            <h2 className="title mb-4 text-[20px] font-semibold">
                                <a href="#" className="text-[#333]">Tujuan Kami</a>
                            </h2>
                            <ul className="pl-5 mb-0 list-disc">
                                <li className="mb-2">Meningkatkan kepercayaan pelanggan dengan layanan yang konsisten dan berkualitas.</li>
                                <li className="mb-2">Menjadi pelopor inovasi dalam pencucian pesawat dengan teknologi terkini.</li>
                                <li className="mb-2">Memperluas jangkauan layanan ke berbagai bandara nasional dan internasional.</li>
                                <li>Mendukung industri penerbangan yang berkelanjutan melalui praktik ramah lingkungan.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}