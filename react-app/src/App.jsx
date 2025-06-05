import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./Pages/LandingPage";
import BookingPage from "./Pages/BookingPage";
import CustomerManagement from "./Pages/CustomerMangement";
import PaymentProcessingPage from "./Pages/PaymentProcessingPage";
import BusinessProcessAutomation from "./Pages/BusinessProcessAutomation";
import BusinessDashboard from "./Pages/BusinessDashboard";
import SmartCalendar from "./Pages/SmartCalendar";
import BeautySalon from "./Pages/BeautySalon";
import CleaningService from "./Pages/CleaningService";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/customer-management" element={<CustomerManagement />} />
        <Route path="/payment-processing" element={<PaymentProcessingPage />} />
        <Route path="/business-automation" element={<BusinessProcessAutomation />} />
        <Route path="/business-dashboard" element={<BusinessDashboard />} />
        <Route path="/smart-calendar-and-scheduling" element={<SmartCalendar />} />
        <Route path="/beauty-salon" element={<BeautySalon />} />
        <Route path="/cleaning-service" element={<CleaningService />} />
      </Routes>
    </Router>
  );
}

export default App;
