import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import ServicesSection from "./components/ServicesSection";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <WhyChoose />
    </>
  );
}

export default App;
