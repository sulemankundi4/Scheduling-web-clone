import React from "react";
import mobileAppImage from "../../assets/Images/app android.webp"; // your image path

const MobileAppBanner = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-24 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#050F2C] leading-tight mb-6" data-aos="fade-right" data-aos-duration="1000">
            Run your business from anywhere - get the Trafft mobile booking app
          </h2>
          <p className="text-xl text-[#1D2442] leading-relaxed mb-8 opacity-90" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            Download the Trafft app for your Android or iOS mobile device to oversee bookings and business operations from wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-center lg:justify-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <a href="#" className="transform hover:scale-105 transition-transform duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-14 hover:shadow-lg transition-shadow duration-300" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="500" />
            </a>
            <a href="#" className="transform hover:scale-105 transition-transform duration-300">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-14 hover:shadow-lg transition-shadow duration-300" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <img src={mobileAppImage} alt="Mobile App" className="w-full h-auto rounded-2xl shadow-2xl object-cover shadow-3xl transition-shadow duration-300" />
        </div>
      </div>
    </section>
  );
};

export default MobileAppBanner;
