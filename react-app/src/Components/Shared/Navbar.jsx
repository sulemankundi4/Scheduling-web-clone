import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/quickly_booked_logo_all_blue.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopFeaturesDropdownOpen, setDesktopFeaturesDropdownOpen] = useState(false);
  const [desktopServicesDropdownOpen, setDesktopServicesDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileFeaturesDropdownOpen, setMobileFeaturesDropdownOpen] = useState(false);
  const [desktopPlatformDropdownOpen, setDesktopPlatformDropdownOpen] = useState(false);
  const [mobilePlatformDropdownOpen, setMobilePlatformDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true); // scrolling up
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

  const featuresDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const platformDropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (featuresDropdownRef.current && !featuresDropdownRef.current.contains(event.target)) {
        setDesktopFeaturesDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setDesktopServicesDropdownOpen(false);
      }
      if (platformDropdownRef.current && !platformDropdownRef.current.contains(event.target)) {
        setDesktopPlatformDropdownOpen(false);
      }
    }
    if (desktopFeaturesDropdownOpen || desktopServicesDropdownOpen || desktopPlatformDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopFeaturesDropdownOpen, desktopServicesDropdownOpen, desktopPlatformDropdownOpen]);

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

  const toggleFeaturesDropdownDesktop = () => {
    setDesktopFeaturesDropdownOpen((prev) => !prev);
    setDesktopServicesDropdownOpen(false);
    setDesktopPlatformDropdownOpen(false);
  };

  const toggleServicesDropdownDesktop = () => {
    setDesktopServicesDropdownOpen((prev) => !prev);
    setDesktopFeaturesDropdownOpen(false);
    setDesktopPlatformDropdownOpen(false);
  };

  const toggleServicesDropdownMobile = () => {
    setMobileDropdownOpen((prev) => !prev);
    setMobileFeaturesDropdownOpen(false);
    setMobilePlatformDropdownOpen(false);
  };

  const toggleFeaturesDropdownMobile = () => {
    setMobileFeaturesDropdownOpen((prev) => !prev);
    setMobileDropdownOpen(false);
    setMobilePlatformDropdownOpen(false);
  };

  const togglePlatformDropdownDesktop = () => {
    setDesktopPlatformDropdownOpen((prev) => !prev);
    setDesktopFeaturesDropdownOpen(false);
    setDesktopServicesDropdownOpen(false);
  };

  const togglePlatformDropdownMobile = () => {
    setMobilePlatformDropdownOpen((prev) => !prev);
    setMobileDropdownOpen(false);
    setMobileFeaturesDropdownOpen(false);
  };

  return (
    <>
      <header className={`bg-[#050F2C] text-white w-full shadow-sm fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Row - Logo and Hamburger */}
          <div className="flex items-center my-3 justify-between">
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
            <nav className="flex space-x-8 mb-3 text-base items-center">
              <div className="relative" ref={featuresDropdownRef}>
                <button className="flex items-center font-semibold cursor-pointer hover:text-yellow-400 transition focus:outline-none" onClick={toggleFeaturesDropdownDesktop}>
                  Features{" "}
                  <span className="ml-1">
                    <ChevronDown className={`transition-transform ${desktopFeaturesDropdownOpen ? "rotate-180" : ""}`} size={20} />
                  </span>
                </button>
                {desktopFeaturesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-[550px] -translate-x-1/4 bg-white text-black rounded-lg shadow-lg z-50 p-6">
                    <h3 className="text-xs font-bold text-gray-500 tracking-widest">FEATURES AND INTEGRATIONS OVERVIEW</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-4">
                      <Link to="/features" className="block hover:bg-blue-50 hover:border-blue-500 border-transparent border-2 rounded p-2">
                        <h4 className="font-bold text-gray-900">All Features</h4>
                        <p className="text-sm text-gray-500 mt-1">Notifications, Time zones, Extras, Coupons, Refunds, and more</p>
                      </Link>
                      <Link to="/features" className="block hover:bg-blue-50 hover:border-blue-500 border-transparent border-2 rounded p-2">
                        <h4 className="font-bold text-gray-900">All Integrations</h4>
                        <p className="text-sm text-gray-500 mt-1">Whatsapp, Paypal, Teams, Zoom, Zapier, Google Calendar, and more</p>
                      </Link>
                      <Link to="/reserve-with-google" className="block hover:bg-blue-50 hover:border-blue-500 border-transparent border-2 rounded p-2">
                        <h4 className="font-bold text-gray-900">Reserve with Google</h4>
                        <p className="text-sm text-gray-500 mt-1">Accept bookings via Google Search and Maps</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown (click to open/close) */}
              <div className="relative" ref={servicesDropdownRef}>
                <button className="flex items-center font-semibold cursor-pointer hover:text-yellow-400 transition focus:outline-none" onClick={toggleServicesDropdownDesktop}>
                  Who is this for{" "}
                  <span className="ml-1">
                    <ChevronDown className={`transition-transform ${desktopServicesDropdownOpen ? "rotate-180" : ""}`} size={20} />
                  </span>
                </button>
                {desktopServicesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
                    {servicesLinks.map((item, idx) => (
                      <Link key={idx} to={item.to} className="block px-4 py-2 hover:bg-gray-100 font-semibold" onClick={() => setDesktopServicesDropdownOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative" ref={platformDropdownRef}>
                <button className="flex items-center font-semibold cursor-pointer hover:text-yellow-400 transition focus:outline-none" onClick={togglePlatformDropdownDesktop}>
                  Platform{" "}
                  <span className="ml-1">
                    <ChevronDown className={`transition-transform ${desktopFeaturesDropdownOpen ? "rotate-180" : ""}`} size={20} />
                  </span>
                </button>
                {desktopPlatformDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-[550px] -translate-x-1/4 bg-white text-black rounded-lg shadow-lg z-50 p-6">
                    <h3 className="text-xs font-bold text-gray-500 tracking-widest">PLATFORM OVERVIEW</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-4">
                      <Link to="/business-dashboard" className="block hover:bg-blue-50 hover:border-blue-500 border-transparent border-2 rounded p-2">
                        <h4 className="font-bold text-gray-900">Powerful Dashboard</h4>
                        <p className="text-sm text-gray-500 mt-1">Get a real-time overview of bookings, payments, and performance — all in one clean interface.</p>
                      </Link>
                      <Link to="/smart-calendar-and-scheduling" className="block hover:bg-blue-50 hover:border-blue-500 border-transparent border-2 rounded p-2">
                        <h4 className="font-bold text-gray-900">Smart Calendar</h4>
                        <p className="text-sm text-gray-500 mt-1">See upcoming appointments, staff availability, and schedule changes with drag-and-drop ease.</p>
                      </Link>
                      <Link to="/bookings" className="block hover:bg-blue-50 hover:border-blue-500 border-transparent border-2 rounded p-2">
                        <h4 className="font-bold text-gray-900">Effortless Bookings</h4>
                        <p className="text-sm text-gray-500 mt-1">Manage all bookings with filters, tags, and manual overrides for full control.</p>
                      </Link>
                      <Link to="/payment-processing" className="block hover:bg-blue-50 hover:border-blue-500 border-transparent border-2 rounded p-2">
                        <h4 className="font-bold text-gray-900">Payments & Invoicing</h4>
                        <p className="text-sm text-gray-500 mt-1">Track transactions, refunds, and payouts — integrated with Stripe, PayPal & more.</p>
                      </Link>
                      <Link to="/customer-management" className="block hover:bg-blue-50 hover:border-blue-500 border-transparent border-2 rounded p-2">
                        <h4 className="font-bold text-gray-900">Client Manager</h4>
                        <p className="text-sm text-gray-500 mt-1">A mini-CRM to view, tag, and engage with your customers in one place.</p>
                      </Link>
                      <Link to="/business-automation" className="block hover:bg-blue-50 hover:border-blue-500 border-transparent border-2 rounded p-2">
                        <h4 className="font-bold text-gray-900">Automation Rules </h4>
                        <p className="text-sm text-gray-500 mt-1">Trigger SMS, email, or WhatsApp flows automatically based on customer behavior</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/login" className="hover:text-yellow-400 font-medium transition">
                Log in
              </Link>
              <Link to="/signup" className="hover:text-yellow-400 font-medium transition">
                Sign up
              </Link>
              {/* book a demo button */}
              <div className="">
                <button className="bg-[#0056FF] hover:bg-[#0044cc] text-white px-5 py-2 rounded-md font-semibold transition hidden lg:inline-block">Book a Demo</button>
              </div>

              {/* <button className=" bg-[#0056FF] hover:bg-[#0044cc] text-white px-5 py-2 rounded-md font-semibold transition hidden lg:inline-block">Book a Demo</button> */}
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
                <span>Who is this for</span>
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
            {/* Features Dropdown for Mobile */}
            <div>
              <button className="w-full cursor-pointer flex items-center justify-between py-3 text-base font-semibold text-gray-900 hover:text-yellow-400 transition focus:outline-none" onClick={toggleFeaturesDropdownMobile}>
                <span>Features</span>
                <span className={`ml-2 text-lg transition-transform ${mobileFeaturesDropdownOpen ? "rotate-180" : ""}`}>
                  <ChevronDown size={20} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileFeaturesDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                {mobileFeaturesDropdownOpen && (
                  <div className="flex flex-col bg-gray-50 rounded-md shadow-inner my-1">
                    <Link
                      to="/features"
                      className="block py-2 px-4 text-gray-800 hover:bg-blue-50 font-medium text-base rounded"
                      onClick={() => {
                        setMobileFeaturesDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      All Features
                    </Link>
                    <Link
                      to="/features"
                      className="block py-2 px-4 text-gray-800 hover:bg-blue-50 font-medium text-base rounded"
                      onClick={() => {
                        setMobileFeaturesDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      All Integrations
                    </Link>
                    <Link
                      to="/reserve-with-google"
                      className="block py-2 px-4 text-gray-800 hover:bg-blue-50 font-medium text-base rounded"
                      onClick={() => {
                        setMobileFeaturesDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Reserve with Google
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {/* platform dropdown for mobile */}
            <div>
              <button className="w-full cursor-pointer flex items-center justify-between py-3 text-base font-semibold text-gray-900 hover:text-yellow-400 transition focus:outline-none" onClick={togglePlatformDropdownMobile}>
                <span>Platform</span>
                <span className={`ml-2 text-lg transition-transform ${mobilePlatformDropdownOpen ? "rotate-180" : ""}`}>
                  <ChevronDown size={20} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobilePlatformDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                {mobilePlatformDropdownOpen && (
                  <div className="flex flex-col bg-gray-50 rounded-md shadow-inner my-1">
                    <Link
                      to="/business-dashboard"
                      className="block py-2 px-4 text-gray-800 hover:bg-blue-50 font-medium text-base rounded"
                      onClick={() => {
                        setMobilePlatformDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Powerful Dashboard
                    </Link>
                    <Link
                      to="/smart-calendar-and-scheduling"
                      className="block py-2 px-4 text-gray-800 hover:bg-blue-50 font-medium text-base rounded"
                      onClick={() => {
                        setMobilePlatformDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Smart Calendar
                    </Link>
                    <Link
                      to="/bookings"
                      className="block py-2 px-4 text-gray-800 hover:bg-blue-50 font-medium text-base rounded"
                      onClick={() => {
                        setMobilePlatformDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Effortless Bookings
                    </Link>
                    <Link
                      to="/payment-processing"
                      className="block py-2 px-4 text-gray-800 hover:bg-blue-50 font-medium text-base rounded"
                      onClick={() => {
                        setMobilePlatformDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Payments & Invoicing
                    </Link>
                    <Link
                      to="/customer-management"
                      className="block py-2 px-4 text-gray-800 hover:bg-blue-50 font-medium text-base rounded"
                      onClick={() => {
                        setMobilePlatformDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Client Manager
                    </Link>
                    <Link
                      to="/business-automation"
                      className="block py-2 px-4 text-gray-800 hover:bg-blue-50 font-medium text-base rounded"
                      onClick={() => {
                        setMobilePlatformDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Automation Rules
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <Link to="/" className="block py-3 text-base font-semibold text-gray-900 hover:text-yellow-400 transition" onClick={handleMenuToggle}>
              Login
            </Link>
            <Link to="/" className="block py-3 text-base font-semibold text-gray-900 hover:text-yellow-400 transition" onClick={handleMenuToggle}>
              Sign up
            </Link>

            <div className="flex w-full my-3">
              <button className="bg-[#0056FF] hover:bg-[#0044cc] text-white px-5 py-2 rounded-md font-semibold transition">Book a Demo</button>
            </div>
            {/* Main Links for Mobile */}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
