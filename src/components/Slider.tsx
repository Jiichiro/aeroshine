"use client"

import { carouselsTypes } from "@/types/carouselsTypes";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slider({carousels}: {carousels: carouselsTypes[]}) {
    const [caroId, setCaroId] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCaroId(prevId => (prevId < 2 ? prevId + 1 : 0 ));
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="slider">
            <div className="slider-container">
                <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">

                    <ol className="flex gap-3 z-10 absolute bottom-1 mb-16 left-[46%] w-fit box-border">
                        {carousels.map((_, index) => (
                            <li
                                key={index}
                                className={`border box-border w-8 h-1 cursor-pointer ${caroId === index ? "border-white bg-white" : ""}`}
                                onClick={() => setCaroId(index)}
                            />
                        ))}
                    </ol>

                    <div className="carousel-inner relative w-full h-full" role="listbox">
                        {carousels.map((carousel, index) => (
                            <div
                                key={index}
                                className={`carousel-item w-full h-full transition-all duration-700 ${caroId === index ? "active" : "absolute"}`}
                            >
                                <div className="carousel-background bg-black w-full h-full relative">
                                    <Image src={carousel.image} fill sizes="100vw" alt={carousel.name || "carousel image"} className="opacity-60"/>
                                </div>
                                <div className="carousel-container absolute inset-0 flex items-center justify-center">
                                    <div className="carousel-content text-center">
                                        <h2>{carousel.name}</h2>
                                        <p>{carousel.description}</p>
                                        <a href="/layanan" className="btn-get-started">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="absolute top-[50%] carousel-control-prev block cursor-pointer" role="button" data-slide="prev" onClick={() => setCaroId(caroId > 0 ? caroId - 1 : 2)}>
                        <ArrowLeft className="carousel-control-prev-icon ion-md-arrow-back w-8 h-8 ml-4 text-white" aria-hidden="true"></ArrowLeft>
                        <span className="sr-only">Sebelumnya</span>
                    </button>

                    <button className="absolute top-[50%] right-0 carousel-control-next block cursor-pointer" role="button" data-slide="next" onClick={() => setCaroId(caroId < 2 ? caroId + 1 : 0)}>
                        <ArrowRight className="carousel-control-next-icon ion-md-arrow-forward w-8 h-8 ml-4 text-white" aria-hidden="true"></ArrowRight>
                        <span className="sr-only w-4">Selanjutnya</span>
                    </button>

                </div>
            </div>
        </section>
    );
}