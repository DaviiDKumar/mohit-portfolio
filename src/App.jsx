// src/App.jsx
import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience"; // Combined component
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import News from "./components/News";
import MetforminResearch from "./components/Metform";

export default function App() {
  return (
    <div className="w-full bg-gray-50 min-h-screen text-gray-900">
      <Navbar />
      <Hero />
      <MetforminResearch />
      <About />
      <Experience /> 
      <News />{/* Education + Skills + Research combined */}
      <Contact />
      <Footer />
    </div>
  );
}
