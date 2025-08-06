import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
    const teams = [
        {
            name: "John P. Haight",
            position: "Supervisor",
            imgSrc: "/img/team-1.jpg",
            socialLinks: [
                { icon: <Twitter />, url: "#" },
                { icon: <Facebook />, url: "#" },
                { icon: <Linkedin />, url: "#" },
                { icon: <Instagram />, url: "#" }
            ]
        },
        {
            name: "David R. Bernard",
            position: "Koordinator",
            imgSrc: "/img/team-2.jpg",
            socialLinks: [
                { icon: <Twitter />, url: "#" },
                { icon: <Facebook />, url: "#" },
                { icon: <Linkedin />, url: "#" },
                { icon: <Instagram />, url: "#" }
            ]
        },
        {
            name: "Dana A. Thomas",
            position: "Spesialis Eksterior",
            imgSrc: "/img/team-3.jpg",
            socialLinks: [
                { icon: <Twitter />, url: "#" },
                { icon: <Facebook />, url: "#" },
                { icon: <Linkedin />, url: "#" },
                { icon: <Instagram />, url: "#" }
            ]
        },
        {
            name: "Ava M. Proctor",
            position: "Spesialis Interior",
            imgSrc: "/img/team-4.jpg",
            socialLinks: [
                { icon: <Twitter />, url: "#" },
                { icon: <Facebook />, url: "#" },
                { icon: <Linkedin />, url: "#" },
                { icon: <Instagram />, url: "#" }
            ]
        },
    ];

    return (
        <section className="team transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="section-header">
                    <h3 className="section-title">Tim Kami</h3>
                    <p>
                        Mereka adalah anggota kami yang memiliki tanggung jawab terhadap tempat pencucian pesawat ini
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {teams.map((team, index) => (
                        <div className="card card-block" key={index}>
                            <Image alt="" className="team-img" src={team.imgSrc} width={200} height={200} />
                            <div className="card-title-wrap">
                                <span className="card-title transition-all  ">{team.name}</span>
                                <span className="card-text">{team.position}</span>
                                <div className="social-nav">
                                    {team.socialLinks.map((link, idx) => (
                                        <Link key={idx} href={link.url}>
                                            {link.icon}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section >
    );
} 