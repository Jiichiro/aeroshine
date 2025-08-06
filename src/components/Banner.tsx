'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Banner() {
    const pathname = usePathname()

    return (
        <section className="banner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
                <div className="w-full">
                    <div className="banner-nav">
                        <div className="banner-box">
                            <Link href="/">Beranda </Link>
                            <Link href={pathname}>{pathname.replace('/', '')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}