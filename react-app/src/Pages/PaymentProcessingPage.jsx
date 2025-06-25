import React, { useEffect } from "react";
import Footer from "../Components/Shared/Footer";
import Hero from "../Components/PaymentProcessing/Hero";
import PaymentProcessingManamgement from "../Components/PaymentProcessing/PaymentProcessingManamgement";
import PaymentProcessingTestomonials from "../Components/PaymentProcessing/PaymentProcessingTestomonials";
const PaymentProcessingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <PaymentProcessingManamgement />
      <PaymentProcessingTestomonials />
      <Footer />
    </>
  );
};

export default PaymentProcessingPage;
