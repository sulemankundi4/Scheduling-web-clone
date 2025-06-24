import React from "react";
import Navbar from "../Shared/Navbar";
import HeroStats from "../Shared/HeroStats";
import heroBg from "../../assets/Images/gymhero.webp";
import capterraLogo from "../../assets/Images/rating-capterra.webp";
import { User } from "lucide-react";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="relative bg-cover bg-center text-white min-h-screen" style={{ backgroundImage: `url(${heroBg})` }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#010a2c]/20 z-0"></div>

        <div className="relative z-10">
          <Navbar />

          <div className="container mx-auto px-4 py-38 flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <span className="inline-block bg-white text-[#010a2c] text-sm font-semibold rounded-full px-4 py-1 mb-4">Fitness and Sports</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">Fitness scheduling software</span> that keeps your gym full
              </h1>
              <p className="text-lg text-gray-300 mb-6 max-w-xl">Trafft fitness and gym booking system enables online booking and management and allows gym and fitness studio owners and private coaches to stay in the gym rather than by phone or handbook.</p>
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

      <div className="w-full bg-gradient-to-br from-pink-600 to-pink-400 py-20 px-4">
        <div className="max-w-4xl mx-auto bg-[#4b1248]/80 rounded-2xl text-center text-white p-10 shadow-xl">
          <div className="flex flex-col items-center">
            {/* User Icon */}
            <div className="bg-pink-500 rounded-full p-4 mb-4">
              <User className="h-10 w-10 text-white" />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold">Isabella Scherabon</h3>

            {/* Stars */}
            <div className="flex gap-1 justify-center mt-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold mb-4">Trafft - Strong recommendation</h2>

            {/* Testimonial */}
            <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-6">
              “Trafft is like having someone taking care of the always-the-same mail-work around the booking process. It is easy to set up, great to <span className="text-white font-semibold">adapt to your own style</span>, looks stylish and fresh – and the support is stellar! Thanks and keep up the good work!”
            </p>

            {/* Capterra Logo */}
            <div className="flex items-center justify-center gap-2 text-sm text-white">
              <img src={capterraLogo} alt="Capterra" className="h-5" />
              <span>on Capterra</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
