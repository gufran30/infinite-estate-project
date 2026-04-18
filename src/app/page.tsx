import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import HIghRise from "@/components/redirect-link-component/HighRise";
import MixedUse from "@/components/redirect-link-component/MixedUse";
import PlottedVillas from "@/components/redirect-link-component/PlottedVillas";
import Service from "@/components/services/Service";
import Testimonials from "@/components/testimonials/Testimonials";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <div id="home">
      {/* <Hero />
      <About />
      <Service />
      <Work />
      <Testimonials />
      <Contact />
      <Footer /> */}
      {/* <div className="min-h-screen bg-green-300 mt-20"></div> */}
      {/* <MixedUse /> */}
      {/* <HIghRise /> */}
      <PlottedVillas />
    </div>
  );
}
