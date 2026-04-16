import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Service from "@/components/services/Service";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Work />
      {/* <div className="min-h-screen bg-green-300 mt-20"></div> */}
    </div>
  );
}
