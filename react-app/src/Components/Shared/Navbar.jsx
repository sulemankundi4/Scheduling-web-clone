import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/quickly_booked_logo_all_blue.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const servicesLinks = [
    { label: "Beauty Salon", to: "/beauty-salon" },
    { label: "Barber Shop", to: "/barber-shop" },
    { label: "Cleaning", to: "/cleaning-service" },
    { label: "Fitness & Sports", to: "/fitness-and-sports" },
  ];

  const mainLinks = [
    { label: "Bookings", to: "/bookings" },
    { label: "Customers", to: "/customer-management" },
    { label: "Payments", to: "/payment-processing" },
    { label: "Automation", to: "/business-automation" },
    { label: "Dashboard", to: "/business-dashboard" },
    { label: "Calendar", to: "/smart-calendar-and-scheduling" },
  ];

  return (
    <header className="bg-[#050F2C] text-white w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Top Row - Logo and Hamburger */}
        <div className="flex items-center justify-between">
          {/* Logo (always visible) */}
          <div className="lg:hidden text-2xl font-bold flex items-center space-x-2">
            <img src={logo} alt="Trafft" className="w-50 h-12 object-contain" />
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 mt-4 mb-3 hidden lg:block" />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Trafft" className="w-50 h-12 object-contain" />
          </div>
          <nav className="flex space-x-8 text-sm items-center">
            <Link to="/" className="font-semibold hover:text-yellow-400 transition">
              Home
            </Link>
            {/* Services Dropdown (click to open/close) */}
            <div className="relative" ref={dropdownRef}>
              <button className="flex items-center font-semibold hover:text-yellow-400 transition focus:outline-none" onClick={() => setDropdownOpen((open) => !open)}>
                Services <span className="ml-1">▼</span>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
                  {servicesLinks.map((item, idx) => (
                    <Link key={idx} to={item.to} className="block px-4 py-2 hover:bg-gray-100 font-semibold" onClick={() => setDropdownOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Main Links */}
            {mainLinks.map((item, idx) => (
              <Link key={idx} to={item.to} className="font-semibold hover:text-yellow-400 transition">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav (slide in from right) */}
        <div className={`fixed top-0 right-0 h-full w-72 bg-[#050F2C] text-sm z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`} style={{ maxWidth: "90vw" }}>
          {/* Logo at the top */}
          <div className="flex items-center space-x-2 px-4 py-4 border-b border-white/10">
            <img src={logo} alt="Trafft" className="w-50 h-12 object-contain" />
            <button className="ml-auto" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Auth (optional, can be added back if needed) */}
          {/* <div className="space-x-4 pb-3 flex justify-start items-center px-4">
            <a href="#" className="hover:text-yellow-400">Log in</a>
            <a href="#" className="hover:text-yellow-400">Sign up</a>
          </div>
          <hr className="border-white/10 mb-3" /> */}

          {/* Home Link for Mobile */}
          <div className="px-4 mb-3">
            <Link to="/" className="block py-1 font-semibold hover:text-yellow-400 transition">
              Home
            </Link>
          </div>

          {/* Services Dropdown for Mobile (click to open/close) */}
          <div className="px-4 mb-3">
            <button className="font-semibold mb-1 flex items-center focus:outline-none hover:text-yellow-400" onClick={() => setDropdownOpen((open) => !open)}>
              Services <span className="ml-1">▼</span>
            </button>
            {dropdownOpen && (
              <div className="flex flex-col gap-1 mt-2 bg-white text-black rounded shadow-lg z-50">
                {servicesLinks.map((item, idx) => (
                  <Link key={idx} to={item.to} className="block py-1 px-4 hover:bg-gray-100 font-semibold" onClick={() => setDropdownOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Main Links for Mobile */}
          <div className="px-4 mb-3">
            <div className="flex flex-col gap-1">
              {mainLinks.map((item, idx) => (
                <Link key={idx} to={item.to} className="block py-1 font-semibold hover:text-yellow-400 transition">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
