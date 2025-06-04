import React from "react";
import Footer from "../Components/Shared/Footer";
import Hero from "../Components/PaymentProcessing/Hero";
import PaymentProcessingManamgement from "../Components/PaymentProcessing/PaymentProcessingManamgement";
import PaymentProcessingTestomonials from "../Components/PaymentProcessing/PaymentProcessingTestomonials";
const PaymentProcessingPage = () => {
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
