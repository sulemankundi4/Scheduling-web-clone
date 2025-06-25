import React, { useEffect } from "react";
import Footer from "../Components/Shared/Footer";
import FitnessFeatures from "../Components/FitnessAndSports/FitnessFeatures";
import Hero from "../Components/FitnessAndSports/Hero";
import FitnessBenefits from "../Components/FitnessAndSports/FitnessBenefits";
import FitnessTestimonials from "../Components/FitnessAndSports/FitnessTestimonials";

const FitnessAndSports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <FitnessFeatures />
      <FitnessBenefits />
      <FitnessTestimonials />
      <Footer />
    </>
  );
};

export default FitnessAndSports;
