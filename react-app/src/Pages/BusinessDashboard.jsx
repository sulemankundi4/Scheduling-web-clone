import React from "react";
import BookingBenefits from "../Components/Bookings/BookingBenefits";
import BookingTestimonials from "../Components/Bookings/BookingTestimonials";
import Footer from "../Components/Shared/Footer";
import Hero from "../Components/BusinessDashboard/Hero";
import BusinessDashboardBenefits from "../Components/BusinessDashboard/BusinessDashboardBenefits";
import BusinessDashboardTestimonials from "../Components/BusinessDashboard/BusinessDashboardTestimonials";
const BusinessDashboard = () => {
  return (
    <>
      <Hero />
      <BusinessDashboardBenefits />
      <BusinessDashboardTestimonials />
      <Footer />
    </>
  );
};

export default BusinessDashboard;
