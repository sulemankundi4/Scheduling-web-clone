import React from "react";
import Footer from "../Components/Shared/Footer";
import Hero from "../Components/BeautySalons/Hero";
import SalonsFeatures from "../Components/BeautySalons/SalonsFeatures";
import SalonBenefits from "../Components/BeautySalons/SaloonBenefits";
import SaloonTestimonials from "../Components/BeautySalons/SaloonTestimonials";
const BeautySalon = () => {
  return (
    <>
      <Hero />
      <SalonsFeatures />
      <SalonBenefits />
      <SaloonTestimonials />
      <Footer />
    </>
  );
};

export default BeautySalon;
