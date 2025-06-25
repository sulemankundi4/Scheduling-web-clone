import React, { useEffect } from "react";
import Footer from "../Components/Shared/Footer";
import Hero from "../Components/BeautySalons/Hero";
import SalonsFeatures from "../Components/BeautySalons/SalonsFeatures";
import SalonBenefits from "../Components/BeautySalons/SaloonBenefits";
import SaloonTestimonials from "../Components/BeautySalons/SaloonTestimonials";
const BeautySalon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
