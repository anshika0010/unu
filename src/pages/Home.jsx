import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import SkinConcernSection from "../components/SkinConcernSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkinConcernSection />
    </div>
  );
};

export default Home;
