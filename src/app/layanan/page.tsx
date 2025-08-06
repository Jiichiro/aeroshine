import Banner from "@/components/Banner";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Layanan"
};

export default function Layanan() {
    return (
        <>
        <Banner />
        <Services />
        </>
    )
}