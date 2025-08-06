import { portfoliosTypes } from "@/types/portofoliosTypes";

export const portfolios: portfoliosTypes[] = [
    {
        name: "Cleanjet 737 - Jakarta",
        type: "Deep Clean",
        image: "/img/deep-clean-1.webp"
    },
    {
        name: "Charter Air A320",
        type: "Engine & Exterior Pro",
        image: "/img/engine-clean-1.webp"
    },
    {
        name: "VVIP Jet Sanitation",
        type: "Deep Clean",
        image: "/img/deep-clean-2.webp"
    },
    {
        name: "Training Aircraft Hygiene",
        type: "Basic Clean",
        image: "/img/basic-clean-1.webp"
    },
    {
        name: "HeliVIP Bell 429",
        type: "Deep Clean",
        image: "/img/deep-clean-3.webp"
    },
    {
        name: "Pelita Air A320",
        type: "Standard Maintenance",
        image: "/img/standard-maintenance-1.webp"
    }
]

export const categories = [
    {
        name: "Semua",
        filter: "*"
    },
    {
        name: "Basic Clean",
        filter: "basic-clean"
    },
    {
        name: "Standard Maintenance",
        filter: "standard-maintenance"
    },
    {
        name: "Deep Clean",
        filter: "deep-clean"
    },
    {
        name: "Engine Exterior",
        filter: "engine-&-exterior-pro"
    }
];