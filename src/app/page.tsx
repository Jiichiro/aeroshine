import About from "@/components/About";
import CTA from "@/components/CTA";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Pricing from "@/components/Pricing"
import Portfolio from "@/components/Portfolio"
import { carousels } from "@/variables/carousels";
import { categories, portfolios } from "@/variables/portfolios";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { testimonials } from "@/variables/testimonials";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Slider carousels={carousels} />
      <About />
      <Services />
      <CTA />
      <Pricing />
      <Portfolio categories={categories} portfolios={portfolios} />
      <Team />
      <Testimonials testimonials={testimonials}/>
      <Clients />
      <Contact />
    </>
  );
}
