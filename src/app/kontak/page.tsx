import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontak"
};

export default function Kontak() {
    return (
        <>
        <Banner />
        <Contact />
        </>
    )
}