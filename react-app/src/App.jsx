import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./Pages/LandingPage";
import BookingPage from "./Pages/BookingPage";
import CustomerManagement from "./Pages/CustomerMangement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/customer-management" element={<CustomerManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
