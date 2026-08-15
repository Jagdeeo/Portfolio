import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import CyberSecurity from "./Components/CyberSecurity";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#08080a] dark:text-slate-100 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <CyberSecurity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
