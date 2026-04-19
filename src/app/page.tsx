
import { About } from "@/sections/about/About";
import { Hero } from "@/sections/hero/Hero";
import { Service } from "@/sections/service/Service";
import { Testimonials } from "@/sections/testimonials/Testimonials";
import { Work } from "@/sections/work/Work";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { Contact } from "@/sections/contact/Contact";


export default function Home() {
  return (
    <div id="home">
      <Hero />
      <div className="relative">
        <About />
        <Service />
        <Work />
        <Testimonials />
        <Contact />
        <FloatingWhatsapp />
      </div>
    </div>
  );
}
