import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#09090f] text-slate-100 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
      
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
