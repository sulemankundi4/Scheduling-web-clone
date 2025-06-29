import React, { useEffect } from "react";
import BusinessProcessAutomationBenefits from "../Components/BusinessProcessAutomation/BusinessProcessAutomationBenefits";
import BusinessProcessAutomationTestimonials from "../Components/BusinessProcessAutomation/BusinessProcessAutomationTestimonials";
import Footer from "../Components/Shared/Footer";
import Hero from "../Components/BusinessProcessAutomation/Hero";
const BusinessProcessAutomation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <BusinessProcessAutomationBenefits />
      <BusinessProcessAutomationTestimonials />
      <Footer />
    </>
  );
};

export default BusinessProcessAutomation;
