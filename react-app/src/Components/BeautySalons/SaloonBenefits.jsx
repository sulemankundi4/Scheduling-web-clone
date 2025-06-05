import React from "react";
import beautyFeatures1 from "../../assets/Images/beauty_features_01.webp";
import beautyFeatures2 from "../../assets/Images/beauty_features_02.webp";
import beautyFeatures3 from "../../assets/Images/beauty_features_03.webp";
import hairSalons from "../../assets/Images/service_01.webp";
import beautySalons from "../../assets/Images/service_02.webp";
import spaSalons from "../../assets/Images/service_03.webp";
import nailSalons from "../../assets/Images/service_04.webp";
import barbers from "../../assets/Images/service_05.webp";
import browSalons from "../../assets/Images/service_06.webp";
import tattooStudios from "../../assets/Images/service_07.webp";
import massageTherapists from "../../assets/Images/service_08.webp";
const categories = [
  { title: "Hair Salons", image: hairSalons },
  { title: "Beauty Salons", image: beautySalons },
  { title: "Spa Salons", image: spaSalons },
  { title: "Nail Salons", image: nailSalons },
  { title: "Barbers", image: barbers },
  { title: "Brow Salons", image: browSalons },
  { title: "Tattoo Studios", image: tattooStudios },
  { title: "Massage Therapists", image: massageTherapists },
];
const SalonBenefits = () => {
  return (
    <>
      <div className="bg-white">
        {/* Section 1 */}
        <div className="py-20 px-4 md:px-16">
          <h2 className="text-4xl font-bold text-center mb-16">Make your beauty salon stand out with the best salon management software</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img src={beautyFeatures1} alt="Booking Benefits" className="max-w-full w-[500px]" />
            </div>

            {/* Right Text Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Manage your salon professionals' working schedules</h3>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">Maximize salon efficiency by effortlessly setting schedules, vacations, days off, and special days with our salon scheduling app. Say goodbye to errors in scheduling and delight your clients with the ease of the booking process.</p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Showcase your services on a branded booking page</h2>
              <p className="text-gray-700 text-base leading-relaxed">Our salon scheduling software functions as a no-code website builder and automatically creates a dedicated booking page. This page serves as a platform to showcase your services and calendar, enabling your clients to conveniently schedule appointments 24/7. Select from a range of predefined themes and personalize them with your brand's colors, patterns, and logo, ensuring a seamless brand experience. Furthermore, you can embed the booking widget on your website and enable clients to book appointments instantly.</p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img src={beautyFeatures2} alt="Showcase Services" className="max-w-full w-[500px]" />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white py-20 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img src={beautyFeatures3} alt="Buffer Settings" className="max-w-full w-[500px]" />
            </div>

            {/* Right Text Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Prevent double bookings with calendar sync</h3>
              <p className="text-gray-700 text-base leading-relaxed">Connect your personal Google or Outlook calendars with Trafft, and any unavailable time slots in your personal calendar will automatically be blocked in Trafft, ensuring you have no double bookings or missed appointments. Additionally, your employees can sync their Google or Outlook calendars with Trafft software for salon management and have all their appointments in one convenient place. This allows for a clear view of their schedule, preventing any potential double bookings or misunderstandings.</p>
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

export default SalonBenefits;
