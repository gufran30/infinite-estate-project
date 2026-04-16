import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      {/* <div className="min-h-screen bg-green-300 mt-20"></div> */}
    </div>
  );
}
