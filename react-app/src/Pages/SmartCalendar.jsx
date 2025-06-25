import React, { useEffect } from "react";
import BookingBenefits from "../Components/Bookings/BookingBenefits";
import BookingTestimonials from "../Components/Bookings/BookingTestimonials";
import Footer from "../Components/Shared/Footer";
import Hero from "../Components/SmartCalendar/Hero";
import SmartCalendarBenefits from "../Components/SmartCalendar/SmartCalendarBenefits";
import SmartCalendarTestimonials from "../Components/SmartCalendar/SmartCalendarTestimonials";
const SmartCalendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <SmartCalendarBenefits />
      <SmartCalendarTestimonials />
      <Footer />
    </>
  );
};

export default SmartCalendar;
