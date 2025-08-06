import About from "@/components/About";
import Banner from "@/components/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang Kami"
};

export default function TentangKami() {
    return (
        <>
        <Banner />
        <About />
        </>
    )
}
