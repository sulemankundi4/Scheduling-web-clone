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
            <Link to="/">
              <img src={logo} alt="Trafft" className="h-5 object-contain" />
            </Link>
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
            <Link to="/">
              <img src={logo} alt="Trafft" className="h-8 object-contain" />
            </Link>
          </div>
          <nav className="flex space-x-8 text-base items-center">
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

        {/* Mobile Sidebar Nav (like screenshot) */}
        <div className={menuOpen ? "block" : "hidden"}>
          {/* Backdrop */}
          <div className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMenuOpen(false)}></div>
          {/* Sidebar */}
          <aside className={`fixed left-0 top-0 h-full w-72 max-w-[90vw] bg-white z-50 shadow-lg flex flex-col lg:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            {/* Top bar: logo and close */}
            <div className="flex items-center justify-between px-4 py-4">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img src={logo} alt="Logo" className="h-5 object-contain" />
              </Link>
              <button className="text-2xl text-gray-700 hover:text-red-500 focus:outline-none" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <hr className="my-2 border-gray-200" />
            {/* Scrollable menu content */}
            <nav className="flex-1 overflow-y-auto px-4 pb-6">
              <Link to="/" className="block py-3 text-base font-semibold text-gray-900 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              {/* Services Dropdown for Mobile */}
              <div>
                <button className="w-full flex items-center justify-between py-3 text-base font-semibold text-gray-900 hover:text-blue-600 transition focus:outline-none" onClick={() => setDropdownOpen((open) => !open)}>
                  <span>Services</span>
                  <span className={`ml-2 text-lg transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>▼</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${dropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                  {dropdownOpen && (
                    <div className="flex flex-col bg-gray-50 rounded-md shadow-inner my-1">
                      {servicesLinks.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.to}
                          className="block py-2 px-4 text-gray-800 hover:bg-blue-50 font-medium text-base rounded"
                          onClick={() => {
                            setDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Main Links for Mobile */}
              {mainLinks.map((item, idx) => (
                <Link key={idx} to={item.to} className="block py-3 text-base font-semibold text-gray-900 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
        <style>{`
          @media (max-width: 1023px) {
            .h-12 { height: 1.75rem !important; }
          }
        `}</style>
      </div>
    </header>
  );
};

export default Navbar;
