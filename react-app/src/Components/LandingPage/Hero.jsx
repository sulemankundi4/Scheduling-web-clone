import React from "react";
import heroImage from "../../assets/Images/hero-image.webp"; // mockup image (phone + desktop)
import heroBg from "../../assets/Images/hero_background-v1.webp"; // wave bg or your custom bg
import HeroStats from "../Shared/HeroStats";
import { Users } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative bg-[#02042C] pb-12 lg:pb-0 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "left bottom", // fix: align bottom-left of image
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-24 lg:pt-42 pb-28 flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right" data-aos-duration="1500">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" data-aos="fade-up" data-aos-delay="200">
              <span className="text-yellow-400">Free Scheduling</span> <span className="text-yellow-400">Software</span> <span className="text-white">to Automate</span> <span className="text-white">Your Business</span>
            </h1>
            <p className="text-gray-300 mb-6 max-w-md mx-auto lg:mx-0" data-aos="fade-right" data-aos-delay="300">
              Display services, schedule, and availability on your free booking page, and let customers book appointments at their convenience 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">Get started for free</button>
              <button className="border border-white hover:bg-white hover:text-[#02042C] text-white px-6 py-3 rounded font-semibold transition">Book a demo</button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex justify-center" data-aos="fade-left" data-aos-duration="1000">
            <img src={heroImage} alt="Hero Device" className="max-w-[480px] w-full rounded-xl shadow-xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
