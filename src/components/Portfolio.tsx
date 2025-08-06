'use client';

import { categoriesTypes, portfoliosTypes } from "@/types/portofoliosTypes";
import Image from "next/image";
import { useState } from "react";

export default function Portfolio({ portfolios, categories }: { portfolios: portfoliosTypes[], categories: categoriesTypes[] }) {
    const [filter, setFilter] = useState('*');

    if (filter != '*') {
        portfolios = portfolios.filter(portfolio => portfolio.type.replace(/\s/g, '-').toLowerCase() == filter);
    }

    return (
        <section className="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <header className="section-header">
                    <h3 className="section-title">Portofolio</h3>
                    <p>
                        Berikut adalah beberapa pekerjaan yang telah kami lakukan.
                    </p>
                </header>

                <div className="flex justify-center">
                    <div className="w-full">
                        <ul id="portfolio-flters">
                            {categories.map((category, index) => (
                                <li key={index} className={filter === category.filter ? 'filter-active' : ''} onClick={() => setFilter(category.filter)}>
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 portfolio-container">
                    {portfolios.map((portfolio, index) => (
                        <div key={index} className="portfolio-item">
                            <div className="portfolio-wrap">
                                <figure>
                                    <Image src={portfolio.image} className="w-full h-auto" alt={portfolio.name} width={200} height={150}/>
                                    <a href={portfolio.image} data-lightbox="portfolio"
                                        data-title={portfolio.name} className="link-preview"
                                        title="Preview"><i className="ion-md-eye"></i></a>
                                </figure>
                                <div className="portfolio-info">
                                    <h4>{portfolio.name}</h4>
                                    <p>{portfolio.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}