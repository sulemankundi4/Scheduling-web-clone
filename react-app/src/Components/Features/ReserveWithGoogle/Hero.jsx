import React from "react";
import { Users } from "lucide-react";
import heroBg from "../../../assets/Images/hero image.webp";
import Navbar from "../../Shared/Navbar";
const Hero = () => {
  return (
    <>
      <div className=" bg-[#010a2c] text-white">
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 py-38 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <span className="inline-block bg-white text-[#010a2c] text-sm font-semibold rounded-full px-4 py-1 mb-4">Reserve with Google</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get more bookings with <br /> <span className="text-yellow-400">Reserve with Google</span>
            </h1>{" "}
            <p className="text-lg text-gray-300 mb-6 max-w-xl">Increase your online visibility by accepting bookings via Google Maps and Google Search. Your clients will find you more easily and be able to make a booking right away.</p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Get Started Free</button>
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
