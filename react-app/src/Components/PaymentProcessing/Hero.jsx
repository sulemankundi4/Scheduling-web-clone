import React from "react";
import Navbar from "../Shared/Navbar";
import { Users } from "lucide-react";
import heroBg from "../../assets/Images/Payment Processing_hero.webp";
import HeroStats from "../Shared/HeroStats";
const Hero = () => {
  return (
    <>
      <div className="bg-[#010a2c] text-white min-h-screen">
        <Navbar />

        <div className="container mx-auto px-4 py-38 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <span className="inline-block bg-white text-[#010a2c] text-sm font-semibold rounded-full px-4 py-1 mb-4">Payment Processing</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Cover <span className="text-yellow-400">payments online </span>instantly and securely
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-xl">Accept online payments through secure payment gateways, send invoices automatically and get paid for your services easily, safely and on time.</p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Sign up for free</button>
              <button className="text-white border-white px-6 py-3 rounded-lg">Book a demo</button>
            </div>
          </div>

          {/* Right Content (Phone Image, Boxes, Cards) */}
          <div className="flex-1 flex justify-center relative">
            <img src={heroBg} alt="Phone UI" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
