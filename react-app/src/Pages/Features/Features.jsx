import React, { useEffect } from "react";
import Hero from "../../Components/Features/AllFeatures/Hero";
import AllFeaturesCards from "../../Components/Features/AllFeatures/AllFeaturesCards";
import Footer from "../../Components/Shared/Footer";

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <AllFeaturesCards />
      <Footer />
    </div>
  );
};

export default Features;
