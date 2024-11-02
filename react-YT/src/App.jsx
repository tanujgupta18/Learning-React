import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import ServicesSection from "./components/ServicesSection";
import WhyChoose from "./components/WhyChoose";
import AchievementSection from "./components/AchievementSection";
import ProcessSection from "./components/ProcessSection";
import Technologies from "./components/Technologies";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <WhyChoose />
      <AchievementSection />
      <ProcessSection />
      <Technologies />
    </>
  );
}

export default App;
