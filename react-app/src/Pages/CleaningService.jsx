import React, { useEffect } from "react";
import Footer from "../Components/Shared/Footer";
import Hero from "../Components/CleaningService/Hero";
import CleaningFeatures from "../Components/CleaningService/CleaningFeatures";
import CleaningBenefits from "../Components/CleaningService/CleaningBenefits";
import CleaningTestimonials from "../Components/CleaningService/CleaningTestimonials";
const CleaningService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <CleaningFeatures />
      <CleaningBenefits />
      <CleaningTestimonials />
      <Footer />
    </>
  );
};

export default CleaningService;
