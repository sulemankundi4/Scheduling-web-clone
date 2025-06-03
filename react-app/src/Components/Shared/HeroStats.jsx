import React from "react";
import ratingCapterra from "../../assets/Images/rating-capterra.webp";
import ratingG2 from "../../assets/Images/rating-getapp.webp";
import ratingTrustpilot from "../../assets/Images/rating-trustpilot.webp";
import ratingPerformer2022a from "../../assets/Images/high-performer.webp";
import ratingPerformer2022b from "../../assets/Images/high-performer.webp";
import ratingGetapp from "../../assets/Images/rating-g2.webp";
import { Users } from "lucide-react";
const HeroStats = () => {
  return (
    <section className="bg-[#f9fafa] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 flex-wrap">
        {/* Left - Icon + Text */}
        <div className="flex items-center gap-4">
          {/* add users icon lucide react */}
          <Users className="w-12 text-white h-12 bg-[#1D2442] rounded-lg p-2" />
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
  );
};

export default HeroStats;
