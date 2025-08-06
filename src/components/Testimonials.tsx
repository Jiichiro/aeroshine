"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import { testimonialsType } from "@/types/testmoialsTypes";
// import { Dot } from "lucide-react";

export default function Testimonials({ testimonials }: { testimonials: testimonialsType[] }) {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (instanceRef.current) {
                instanceRef.current.next();
            }
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <header className="section-header">
                    <h3 className="section-title">Testimonials</h3>
                    <p>
                        Testimoni para pelanggan kami
                    </p>
                </header>

                <div ref={sliderRef} className="owl-carousel testimonials-carousel keen-slider">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`testimonial-item flex flex-col sm:flex-row items-center keen-slider__slide number-slide${index + 1}`}>
                            <div className="w-full sm:w-1/4">
                                <div className="testimonial-img">
                                    <Image src={testimonial.image} alt={`Testimonial from ${testimonial.name}`} width={200} height={200} />
                                </div>
                            </div>
                            <div className="w-full sm:w-3/4">
                                <div className="testimonial-text">
                                    <h3>{testimonial.name}</h3>
                                    <h4>{testimonial.position}</h4>
                                    <p>{testimonial.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Example: If you want to render dots for each slide */}
                </div>
                {/* <div className="inline-flex items-center justify-center">
                    {(instanceRef.current?.track?.details?.slides?.length
                        ? Array.from({ length: instanceRef.current.track.details.slides.length })
                        : []
                    ).map((_, index) => (
                        <Dot color={ instanceRef.current?.track?.details?.rel === index ? "green" : "gray"} key={index} className="dot" onClick={() => instanceRef.current?.moveToIdx(index)}></Dot>
                    ))}
                </div> */}
            </div>
        </section>
    );
}