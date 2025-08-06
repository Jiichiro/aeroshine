import { ChevronRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const aboutMenus = [
    { name: "beranda", link: "#" },
    { name: "tentang", link: "#" },
    { name: "Layanan", link: "#" },
    { name: "Terms & condition", link: "#" },
    { name: "Privacy policy", link: "#" }
]

const socialLinks = [
    { name: "Twitter", icon: <Twitter />, link: "#" },
    { name: "Facebook", icon: <Facebook />, link: "#" },
    { name: "LinkedIn", icon: <Linkedin />, link: "#" },
    { name: "Instagram", icon: <Instagram />, link: "#" },
]

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="footer-info">
                            <h3>AeroShine</h3>
                            <p>
                                AeroShine adalah tempat pencucian pesawat terkemuka yang mengedepankan standar kebersihan
                                dan perawatan tertinggi dalam industri penerbangan.
                            </p>
                        </div>

                        <div className="footer-links">
                            <h4>Tentang Kami</h4>
                            <ul>
                                {aboutMenus.map((menu, index) => (
                                    <li key={index} className='flex'><ChevronRight className='text-white'/> <a href={menu.link}>{menu.name}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-contact">
                            <h4>Kontak</h4>
                            <p>
                                68256 Ngawi<br />
                                Jawa Timur<br />
                                Indonesia<br />
                                <strong>Phone:</strong> (045) 123-456<br />
                                <strong>Email:</strong> contact@aeroshine.co.id<br />
                            </p>

                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <a key={index} href={social.link} className="inline-flex justify-center content-center" target="_blank" rel="noopener noreferrer">
                                        {social.icon}
                                    </a>
                                ))}
                            </div>

                        </div>

                        <div className="footer-newsletter">
                            <h4>Langganan</h4>
                            <p>Anda dapat berlangganan untuk mendapatkan info info terbaru terkait pencucian pesawat</p>
                            <form action="" method="post" className='bg-white'>
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="copyright text-white">
                    &copy; Copyright <a href="#">AeroShine</a>. All Rights Reserved<br />
                </div>
            </div>
        </footer>
    )
}
