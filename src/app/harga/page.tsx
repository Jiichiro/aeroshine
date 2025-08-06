import Banner from "@/components/Banner";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Harga"
}

export default function HargaPage() {
    return (
        <>
            <Banner />
            <Pricing />
        </>
    );
}
