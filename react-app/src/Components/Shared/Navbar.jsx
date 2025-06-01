import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [{ label: "Features", hasDropdown: true }, { label: "Demos" }, { label: "Who’s it for", hasDropdown: true }, { label: "Resources", hasDropdown: true }, { label: "About us", hasDropdown: true }, { label: "Pricing" }];

  return (
    <header className="bg-[#050F2C] text-white w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Top Row - Logo and Auth */}
        <div className="flex items-center justify-between">
          {/* Logo */}

          <div className="text-2xl font-bold flex items-center space-x-2"></div>

          {/* Auth Desktop */}
          <div className="hidden lg:flex justify-end items-center space-x-6 text-sm">
            <a href="#" className="hover:text-yellow-400">
              Log in
            </a>
            <a href="#" className="hover:text-yellow-400">
              Sign up
            </a>
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
          <div className="text-2xl font-bold flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full" />
            <span>Trafft</span>
          </div>
          <nav className="flex space-x-8 text-sm">
            {navLinks.map((item, idx) => (
              <a key={idx} href="#" className="flex items-center hover:text-yellow-400 transition">
                {item.label}
                {item.hasDropdown && <span className="ml-1">›</span>}
              </a>
            ))}
          </nav>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md text-sm">
            Book a Demo
          </a>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden bg-[#050F2C] text-sm transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 overflow-hidden opacity-0"}`}>
          {/* Auth */}
          <div className="space-x-4 pb-3 flex justify-start items-center px-4">
            <a href="#" className="hover:text-yellow-400">
              Log in
            </a>
            <a href="#" className="hover:text-yellow-400">
              Sign up
            </a>
          </div>
          <hr className="border-white/10 mb-3" />

          {/* Links */}
          <div className="space-y-3 px-4">
            {navLinks.map((item, idx) => (
              <a key={idx} href="#" className="block py-1 hover:text-yellow-400 transition">
                {item.label} {item.hasDropdown && <span className="ml-1">›</span>}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="px-4 pt-4">
            <a href="#" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition">
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
