import React from "react";
import HeroSection from "../Components/LandingPage/Hero";
import Navbar from "../Components/Shared/Navbar";
import BookingCards from "../Components/LandingPage/BookingCards";
import BookingChannels from "../Components/LandingPage/BookingChannels";
import TestimonialSection from "../Components/LandingPage/Testimonial";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BookingCards />
      <BookingChannels />
      <TestimonialSection />
    </div>
  );
};

export default LandingPage;
