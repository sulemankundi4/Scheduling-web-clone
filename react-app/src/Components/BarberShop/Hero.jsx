import React from "react";
import Navbar from "../Shared/Navbar";
import HeroStats from "../Shared/HeroStats";
import heroBg from "../../assets/Images/barber-hero.webp";
import capterraLogo from "../../assets/Images/rating-capterra.webp";
import { User } from "lucide-react";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen text-white overflow-hidden">
        <img src={heroBg} alt="Background" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
        <div className="absolute inset-0 bg-[#010a2c]/40 z-20"></div>
        <div className="relative z-30">
          <Navbar />

          <div className="container mx-auto px-4 py-38 flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <span className="inline-block bg-white text-[#010a2c] text-sm font-semibold rounded-full px-4 py-1 mb-4">Barbershop</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">Barbershop </span> appointments software
              </h1>
              <p className="text-lg text-gray-300 mb-6 max-w-xl">Take your barbershop business online and let your customers easily find you and book an appointment with you.</p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Sign up for free</button>
                <button className="text-white border-white border px-6 py-3 rounded-lg">Book a demo</button>
              </div>
            </div>

            {/* Right Placeholder (optional or can be removed) */}
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
      {/* Success Story Section */}
      <div className="bg-black text-white px-4 py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Video Embed */}
          <div className="flex-1 w-full">
            <div className="aspect-w-16 aspect-h-9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/sL3iCtFga3Q?si=OKH7OkZZRFWR5FPZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-6 leading-snug">
              Turning passion into profit
              <br />
              with <span className="text-yellow-400">Trafft</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">Discover how Sami Azrak, the founder of Shave Barbers and Spa, turned his passion for grooming into a profitable venture and how he incorporated Trafft barbershop booking app into his incredible success story.</p>

            {/* Callout */}
            <div className="flex items-center gap-2 mt-4">
              <div className="w-32 h-px bg-yellow-400"></div>
              <span className="bg-yellow-500 text-black text-sm font-semibold px-4 py-1 rounded-full shadow-md">INSPIRING STORY IS RIGHT HERE!</span>
            </div>
          </div>
        </div>
      </div>
      <HeroStats />
    </>
  );
};

export default Hero;
