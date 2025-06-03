import React from "react";
import Hero from "../Components/Bookings/Hero";
import BookingBenefits from "../Components/Bookings/BookingBenefits";
import BookingTestimonials from "../Components/Bookings/BookingTestimonials";
import Footer from "../Components/Shared/Footer";
const BookingPage = () => {
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
