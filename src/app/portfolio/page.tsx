import Banner from "@/components/Banner";
import Portfolio from "@/components/Portfolio";
import { categories, portfolios } from "@/variables/portfolios";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portofolio"
};

export default function Portofolio() {
    return (
        <>
        <Banner />
        <Portfolio categories={categories} portfolios={portfolios} />
        </>
    )
}