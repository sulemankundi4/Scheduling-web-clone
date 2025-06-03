import React from "react";
import Hero from "../Components/CustomerManagement/Hero";
import CustomerManagementExp from "../Components/CustomerManagement/CustomerManagementExp";
import CustomerManagementTestomonials from "../Components/CustomerManagement/CustomerManagementTestomonials";
import Footer from "../Components/Shared/Footer";
const CustomerManagement = () => {
  return (
    <>
      <Hero />
      <CustomerManagementExp />
      <CustomerManagementTestomonials />
      <Footer />
    </>
  );
};

export default CustomerManagement;
