import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Metrics from "../components/sections/Metrics";
import Projects from "../components/sections/Projects";
import Architecture from "../components/sections/Architecture";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Metrics /> */}
      <Projects />
      <Architecture />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
