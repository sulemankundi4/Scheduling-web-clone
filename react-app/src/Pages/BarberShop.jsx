import React, { useEffect } from "react";
import Footer from "../Components/Shared/Footer";
import Hero from "../Components/BarberShop/Hero";
import BarberFeatures from "../Components/BarberShop/BarberFeatures";
import BarberBenefits from "../Components/BarberShop/BarberBenefits";
import BarberTestimonials from "../Components/BarberShop/BarberTestimonials";

const BarberShop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <BarberFeatures />
      <BarberBenefits />
      <BarberTestimonials />
      <Footer />
    </>
  );
};

export default BarberShop;
