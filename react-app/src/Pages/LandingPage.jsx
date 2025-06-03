import React from "react";
import HeroSection from "../Components/LandingPage/Hero";
import Navbar from "../Components/Shared/Navbar";
import BookingCards from "../Components/LandingPage/BookingCards";
import BookingChannels from "../Components/LandingPage/BookingChannels";
import TestimonialSection from "../Components/LandingPage/Testimonial";
import MobileAppBanner from "../Components/LandingPage/MobileAppBanner";
import Services from "../Components/LandingPage/Services";
import Cta from "../Components/LandingPage/Cta";
import Footer from "../Components/Shared/Footer";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BookingCards />
      <BookingChannels />
      <TestimonialSection />
      <MobileAppBanner />
      <Services />
      <Cta />
      <Footer />
    </div>
  );
};

export default LandingPage;
