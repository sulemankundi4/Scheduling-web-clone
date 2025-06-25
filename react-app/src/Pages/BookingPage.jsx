import React, { useEffect } from "react";
import Hero from "../Components/Bookings/Hero";
import BookingBenefits from "../Components/Bookings/BookingBenefits";
import BookingTestimonials from "../Components/Bookings/BookingTestimonials";
import Footer from "../Components/Shared/Footer";
const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <BookingBenefits />
      <BookingTestimonials />
      <Footer />
    </>
  );
};

export default BookingPage;
