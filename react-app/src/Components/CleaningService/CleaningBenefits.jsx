import React from "react";
import cleaningFeatures1 from "../../assets/Images/cleaning_features_01.webp";
import cleaningFeatures2 from "../../assets/Images/cleaning_features_02.webp";
import cleaningFeatures3 from "../../assets/Images/cleaning_features_03.webp";

import houseKeeping from "../../assets/Images/service_01_clean.webp";
import officeCleaning from "../../assets/Images/service_02_clean.webp";
import carpetCleaning from "../../assets/Images/service_03_clean.webp";
import buildingCleaning from "../../assets/Images/service_04_clean.webp";
import carWash from "../../assets/Images/service_05_clean.webp";
import laundryService from "../../assets/Images/service_06_clean.webp";
import greenCleaning from "../../assets/Images/service_07_clean.webp";
import windowCleaning from "../../assets/Images/service_08_clean.webp";

const categories = [
  { title: "House Keeping", image: houseKeeping },
  { title: "Office Cleaning", image: officeCleaning },
  { title: "Carpet Cleaning", image: carpetCleaning },
  { title: "Building Cleaning", image: buildingCleaning },
  { title: "Car Wash", image: carWash },
  { title: "Laundry Service", image: laundryService },
  { title: "Green Cleaning", image: greenCleaning },
  { title: "Window Cleaning", image: windowCleaning },
];
const CleaningBenefits = () => {
  return (
    <>
      <div className="bg-white">
        {/* Section 1 */}
        <div className="py-20 px-4 md:px-16">
          <h2 className="text-4xl font-bold text-center mb-16">Organize your entire cleaning business with Trafft scheduling software</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img src={cleaningFeatures1} alt="Booking Benefits" className="max-w-full w-[500px]" />
            </div>

            {/* Right Text Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Prevent double booking with calendar sync </h3>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">Connect your personal Google or Outlook calendars with Trafft, and any unavailable time slots in your personal calendar will automatically be blocked in Trafft, ensuring you have no double bookings or missed appointments. Additionally, your employees can sync their Google or Outlook calendars with Trafft cleaning scheduling software and have all their appointments in one convenient place. This allows for a clear view of their schedule, preventing any potential double bookings or misunderstandings.</p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Create a professional-looking booking page</h2>
              <p className="text-gray-700 text-base leading-relaxed">Our scheduling software for cleaning services functions as a no-code website builder and automatically creates a dedicated booking page. This page serves as a platform to showcase your services and calendar, enabling your clients to conveniently schedule appointments 24/7. Select from a range of predefined themes and personalize them with your brand's colors, patterns, and logo, ensuring a seamless brand experience. Furthermore, you can embed the booking widget on your website and enable clients to book appointments instantly.</p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img src={cleaningFeatures2} alt="Showcase Services" className="max-w-full w-[500px]" />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white py-20 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img src={cleaningFeatures3} alt="Buffer Settings" className="max-w-full w-[500px]" />
            </div>

            {/* Right Text Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Manage a multi-location business from a single app</h3>
              <p className="text-gray-700 text-base leading-relaxed">If your business operates in multiple locations, our cleaning business scheduling software allows you to effortlessly manage all of them in one centralized place. With Trafft, you'll enjoy complete flexibility, enabling you to set up various schedules, locations, and even different time zones, while ensuring seamless functionality across the board.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Who is Trafft for?</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {categories.map((item, index) => (
            <div key={index} className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className={`rounded-[60%] overflow-hidden w-[160px] h-[160px] mb-4 transition-transform duration-300 group-hover:scale-105`} style={{ clipPath: "ellipse(50% 60% at 50% 50%)" }}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CleaningBenefits;
