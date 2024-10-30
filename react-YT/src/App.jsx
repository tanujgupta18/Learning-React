import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <ServicesSection />
    </>
  );
}

export default App;
