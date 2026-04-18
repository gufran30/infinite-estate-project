
import { About } from "@/sections/About";
import { Hero } from "@/sections/Hero";
import { Service } from "@/sections/Service";
import { Testimonials } from "@/sections/Testimonials";
import { Work } from "@/sections/Work";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { Contact } from "@/sections/Contact";


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
