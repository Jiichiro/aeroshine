'use client'

import Link from "next/link"
import { menusTypes } from "@/types/menusTypes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header({ menus }: { menus: menusTypes[] }) {
    const pathname = usePathname()

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`header transition-all ${scrolled ? "bg-black" : ""}`}>
            <div className="container-fluid">
                <div className="logo pull-left">
                    <h1><Link href="/aeroshine">AeroShine</Link></h1>
                    {/* <a href="#"><img src="img/logo.png" alt="" title="" /></a> */}
                </div>

                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        {menus.map((menu, index) => (
                            <li
                                key={index}
                                className={pathname === menu.link ? "menu-active" : ""}
                            >
                                <Link
                                    href={menu.link}
                                >
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}