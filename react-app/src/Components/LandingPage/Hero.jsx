import React from "react";
import heroImage from "../../assets/Images/hero-image.webp"; // mockup image (phone + desktop)
import heroBg from "../../assets/Images/hero_background-v1.webp"; // wave bg or your custom bg
import ratingCapterra from "../../assets/Images/rating-capterra.webp";
import ratingG2 from "../../assets/Images/rating-getapp.webp";
import ratingTrustpilot from "../../assets/Images/rating-trustpilot.webp";
import ratingPerformer2022a from "../../assets/Images/high-performer.webp";
import ratingPerformer2022b from "../../assets/Images/high-performer.webp";
import ratingGetapp from "../../assets/Images/rating-g2.webp";
import { Users } from "lucide-react";
const HeroSection = () => {
  return (
    <>
      <section
        className="relative bg-[#02042C] text-white overflow-hidden "
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "left bottom", // fix: align bottom-left of image
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              <span className="text-yellow-400">Free Scheduling</span> <span className="text-yellow-400">Software</span> <span className="text-white">to Automate</span> <span className="text-white">Your Business</span>
            </h1>
            <p className="text-gray-300 mb-6 max-w-md mx-auto lg:mx-0">Display services, schedule, and availability on your free booking page, and let customers book appointments at their convenience 24/7.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">Get started for free</button>
              <button className="border border-white hover:bg-white hover:text-[#02042C] text-white px-6 py-3 rounded font-semibold transition">Book a demo</button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
            <img src={heroImage} alt="Hero Device" className="max-w-[480px] w-full rounded-xl shadow-xl" />
          </div>
        </div>
      </section>

      <section className="bg-[#f9fafa] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 flex-wrap">
          {/* Left - Icon + Text */}
          <div className="flex items-center gap-4">
            {/* add users icon lucide react */}
            <Users className="w-12 h-12 bg-[#1D2442] rounded-lg p-2" />
            <div>
              <h3 className="text-2xl font-bold text-[#1D2442]">15500+</h3>
              <p className="text-gray-500 text-sm font-medium">GLOBAL CUSTOMERS</p>
            </div>
          </div>

          {/* Right - Logos & Ratings */}
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <img src={ratingCapterra} alt="Capterra" className="h-8" />
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <img src={ratingG2} alt="G2" className="h-8" />
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <img src={ratingTrustpilot} alt="Trustpilot" className="h-8" />
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <img src={ratingPerformer2022a} alt="High Performer Badge" className="h-10" />
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <img src={ratingPerformer2022b} alt="High Performer Badge" className="h-10" />
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <img src={ratingGetapp} alt="GetApp" className="h-8" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
