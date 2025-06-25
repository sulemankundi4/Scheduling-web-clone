import React, { useEffect } from "react";
import Hero from "../../Components/Features/ReserveWithGoogle/Hero";
import Details from "../../Components/Features/ReserveWithGoogle/Details";
import Footer from "../../Components/Shared/Footer";

const ReserveWithGoogle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Details />
      <Footer />
    </div>
  );
};

export default ReserveWithGoogle;
