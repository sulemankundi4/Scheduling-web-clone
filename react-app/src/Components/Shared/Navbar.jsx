import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/quickly_booked_logo_all_blue.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);  // scrolling up
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false); // scrolling down
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
    }
    if (desktopDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopDropdownOpen]);

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => {
        if (sidebarRef.current) {
          sidebarRef.current.style.transform = "translateX(0)";
        }
      });
    } else {
      if (sidebarRef.current) {
        sidebarRef.current.style.transform = "translateX(100%)";
      }
    }
  }, [menuOpen]);

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

  const handleMenuToggle = () => {
    if (menuOpen) {
      // Start closing animation
      if (sidebarRef.current) {
        sidebarRef.current.style.transform = "translateX(100%)";
      }
      // Wait for the animation to complete before setting menuOpen to false
      setTimeout(() => setMenuOpen(false), 300); // 300ms matches the CSS transition duration
    } else {
      setMenuOpen(true);
    }
  };

  // toggle services dropdown
  const toggleServicesDropdownDesktop = () => {
    setDesktopDropdownOpen((prev) => !prev);
  };
  const toggleServicesDropdownMobile = () => {
    setMobileDropdownOpen((prev) => !prev);
  };

  return (
    <>

    <header
      className={`bg-[#050F2C] text-white w-full shadow-sm fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${
      showNavbar ? "translate-y-0" : "-translate-y-full"
    }`} >
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
            <button onClick={handleMenuToggle}>{<Menu size={24} />}</button>
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
              <button className="flex items-center font-semibold cursor-pointer hover:text-yellow-400 transition focus:outline-none" onClick={toggleServicesDropdownDesktop}>
                Services{" "}
                <span className="ml-1">
                  <ChevronDown className={`transition-transform ${desktopDropdownOpen ? "rotate-180" : ""}`} size={20} />
                </span>
              </button>
              {desktopDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
                  {servicesLinks.map((item, idx) => (
                    <Link key={idx} to={item.to} className="block px-4 py-2 hover:bg-gray-100 font-semibold" onClick={() => setDesktopDropdownOpen(false)}>
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


        <style>{`
          @media (max-width: 1023px) {
            .h-12 { height: 1.75rem !important; }
          }
        `}</style>
      </div>
    </header>

<div className={menuOpen ? "block" : "hidden"}>
{/* Backdrop */}
<div className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={handleMenuToggle}></div>
{/* Sidebar */}
<aside ref={sidebarRef} className="fixed right-0 top-0 h-full w-72 max-w-[90vw] bg-white z-50 shadow-lg flex flex-col lg:hidden transition-transform duration-300 ease-in-out" style={{ transform: "translateX(-100%)" }}>
  {/* Top bar: logo and close */}
  <div className="flex items-center justify-between px-4 py-4">
    <Link to="/" onClick={handleMenuToggle}>
      <img src={logo} alt="Logo" className="h-5 object-contain" />
    </Link>
    <button className="text-2xl text-gray-700 hover:text-red-500 focus:outline-none" onClick={handleMenuToggle} aria-label="Close menu">
      <X size={28} />
    </button>
  </div>
  <hr className="my-2 border-gray-200" />
  {/* Scrollable menu content */}
  <nav className="flex-1 overflow-y-auto px-4 pb-6">
    <Link to="/" className="block py-3 text-base font-semibold text-gray-900 hover:text-yellow-400 transition" onClick={handleMenuToggle}>
      Home
    </Link>
    {/* Services Dropdown for Mobile */}
    <div>
      <button className="w-full cursor-pointer flex items-center justify-between py-3 text-base font-semibold text-gray-900 hover:text-yellow-400 transition focus:outline-none" onClick={toggleServicesDropdownMobile}>
        <span>Services</span>
        <span className={`ml-2 text-lg transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}>
          <ChevronDown size={20} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        {mobileDropdownOpen && (
          <div className="flex flex-col bg-gray-50 rounded-md shadow-inner my-1">
            {servicesLinks.map((item, idx) => (
              <Link
              key={idx}
                to={item.to}
                className="block py-2 px-4 text-gray-800 hover:bg-blue-50 font-medium text-base rounded"
                onClick={() => {
                  setMobileDropdownOpen(false);
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
      <Link key={idx} to={item.to} className="block py-3 text-base font-semibold text-gray-900 hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>
        {item.label}
      </Link>
    ))}
  </nav>
</aside>
</div>
</>
  );
};

export default Navbar;
