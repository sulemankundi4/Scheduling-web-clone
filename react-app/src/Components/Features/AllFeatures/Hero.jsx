import React from "react";
import { Users } from "lucide-react";
import heroBg from "../../../assets/Images/featurespage_hero-2.webp";
import Navbar from "../../Shared/Navbar";
const Hero = () => {
  return (
    <>
      <div className=" bg-[#010a2c] text-white">
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 py-38 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <span className="inline-block bg-white text-[#010a2c] text-sm font-semibold rounded-full px-4 py-1 mb-4">Features and integrations</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Features and integrations</h1>
            <p className="text-lg text-gray-300 mb-6 max-w-xl">Keep your business running 24/7 with Trafft features and integrations</p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Try for free</button>
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
