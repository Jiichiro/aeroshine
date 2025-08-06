import { Check, X } from "lucide-react";

export default function Pricing() {
    return (
        <section className="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="section-header">
                    <h3>Harga</h3>
                    <p>
                        Paket dibawah bisa anda pilih sesuai dengan kebutuhan anda.
                    </p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col h-full">
                        <div className="price-content flex flex-col flex-1">
                            <div className="price-plan">
                                <p className="price-title">Basic clean</p>
                                <h2 className="price-amount">Rp2.500.000</h2>
                            </div>
                            <ul className="price-details px-8 pb-8 flex-1">
                                <li><Check color="green" className="inline mr-2" />Cuci eksterior ringan (wet/dry wash)</li>
                                <li><Check color="green" className="inline mr-2" />Pembersihan interior kabin dasar (sapu, lap, tempat sampah)</li>
                                <li><Check color="green" className="inline mr-2" />Penyemprotan disinfektan ringan</li>
                                <li><X color="red" className="inline mr-2" />Semua dari Paket Basic</li>
                                <li><X color="red" className="inline mr-2" />Cuci roda dan sayap detail</li>
                                <li><X color="red" className="inline mr-2" />Pembersihan kokpit ringan</li>
                                <li><X color="red" className="inline mr-2" />Lavatory service (toilet + pengisian cairan)</li>
                                <li><X color="red" className="inline mr-2" />Semua dari Paket Standard</li>
                                <li><X color="red" className="inline mr-2" />Pembersihan karpet dengan mesin ekstraksi</li>
                                <li><X color="red" className="inline mr-2" />Disinfeksi total kabin & kokpit</li>
                                <li><X color="red" className="inline mr-2" />Pembersihan panel & jendela</li>
                            </ul>
                            <div className="mt-auto px-8 pb-4 flex justify-center">
                                <a href="#" className="btn mian-btn price-btn w-fit block text-center">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <div className="price-content features-price flex flex-col flex-1">
                            <div className="price-plan">
                                <p className="price-title">Standard Maintenance</p>
                                <h2 className="price-amount">Rp 4.000.000</h2>
                            </div>
                            <ul className="price-details px-8 pb-8 flex-1">
                                <li><Check color="green" className="inline mr-2" />Cuci eksterior ringan (wet/dry wash)</li>
                                <li><Check color="green" className="inline mr-2" />Pembersihan interior kabin dasar (sapu, lap, tempat sampah)</li>
                                <li><Check color="green" className="inline mr-2" />Penyemprotan disinfektan ringan</li>
                                <li><Check color="green" className="inline mr-2" />Semua dari Paket Basic</li>
                                <li><Check color="green" className="inline mr-2" />Cuci roda dan sayap detail</li>
                                <li><Check color="green" className="inline mr-2" />Pembersihan kokpit ringan</li>
                                <li><Check color="green" className="inline mr-2" />Lavatory service (toilet + pengisian cairan)</li>
                                <li><X color="red" className="inline mr-2" />Semua dari Paket Standard</li>
                                <li><X color="red" className="inline mr-2" />Pembersihan karpet dengan mesin ekstraksi</li>
                                <li><X color="red" className="inline mr-2" />Disinfeksi total kabin & kokpit</li>
                                <li><X color="red" className="inline mr-2" />Pembersihan panel & jendela</li>
                            </ul>
                            <div className="mt-auto px-8 pb-4 flex justify-center">
                                <a href="#" className="btn mian-btn price-btn features-price-btn w-fit block text-center">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <div className="price-content flex flex-col flex-1">
                            <div className="price-plan">
                                <p className="price-title">Deep Clean</p>
                                <h2 className="price-amount">Rp 6.500.000</h2>
                            </div>
                            <ul className="price-details px-8 pb-8 flex-1">
                                <li><Check color="green" className="inline mr-2" />Cuci eksterior ringan (wet/dry wash)</li>
                                <li><Check color="green" className="inline mr-2" />Pembersihan interior kabin dasar (sapu, lap, tempat sampah)</li>
                                <li><Check color="green" className="inline mr-2" />Penyemprotan disinfektan ringan</li>
                                <li><Check color="green" className="inline mr-2" />Semua dari Paket Basic</li>
                                <li><Check color="green" className="inline mr-2" />Cuci roda dan sayap detail</li>
                                <li><Check color="green" className="inline mr-2" />Pembersihan kokpit ringan</li>
                                <li><Check color="green" className="inline mr-2" />Lavatory service (toilet + pengisian cairan)</li>
                                <li><Check color="green" className="inline mr-2" />Semua dari Paket Standard</li>
                                <li><Check color="green" className="inline mr-2" />Pembersihan karpet dengan mesin ekstraksi</li>
                                <li><Check color="green" className="inline mr-2" />Disinfeksi total kabin & kokpit</li>
                                <li><Check color="green" className="inline mr-2" />Pembersihan panel & jendela</li>
                            </ul>
                            <div className="mt-auto px-8 pb-4 flex justify-center">
                                <a href="#" className="btn mian-btn price-btn w-fit block text-center">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl self-center p-6 bg-white mt-8 rounded-2xl shadow-lg">
                    <h4 className="mb-4 pb-2 border-b-2 border-green-500 font-bold text-gray-800 text-3xl">
                        Add-ons
                    </h4>
                    <ul className="list-none pl-0 m-0">
                        <li className="py-2 border-b border-dashed border-gray-200 flex justify-between items-center">
                            <span>Aromaterapi kabin:</span>
                            <strong className="text-green-500">Rp 300.000</strong>
                        </li>
                        <li className="py-2 border-b border-dashed border-gray-200 flex justify-between items-center">
                            <span>Sanitasi mendalam pasca-penerbangan internasional:</span>
                            <strong className="text-green-500">Rp 1.000.000</strong>
                        </li>
                        <li className="py-2 border-b border-dashed border-gray-200 flex justify-between items-center">
                            <span>Anti-statis treatment untuk kabin:</span>
                            <strong className="text-green-500">Rp 750.000</strong>
                        </li>
                        <li className="py-2 flex justify-between items-center">
                            <span>Pembersihan bagasi kargo:</span>
                            <strong className="text-green-500">Rp 500.000</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    );
}