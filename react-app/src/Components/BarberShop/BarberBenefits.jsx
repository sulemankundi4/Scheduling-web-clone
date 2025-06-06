import React from "react";

import haiSaloon from "../../assets/Images/barber-service_01.webp";
import beautySaloon from "../../assets/Images/barber-service_02.webp";
import spaSaloon from "../../assets/Images/barber-service_03.webp";
import nailSaloon from "../../assets/Images/barber-service_04.webp";
import barberShop from "../../assets/Images/barber-service_05.webp";
import therapyStudio from "../../assets/Images/barber-service_06.webp";
import tatoo from "../../assets/Images/barber-service_07.webp";
import massage from "../../assets/Images/barber-service_08.webp";

import calendar from "../../assets/Images/calendar sync.webp";
import multiLocation from "../../assets/Images/multi-location.webp";
import marketing from "../../assets/Images/marketing.webp";
const categories = [
  { title: "Hair Salon", image: haiSaloon },
  { title: "Beauty Salon", image: beautySaloon },
  { title: "Spa Saloon", image: spaSaloon },
  { title: "Nail Salon", image: nailSaloon },
  { title: "Barber Shop", image: barberShop },
  { title: "Therapy Studio", image: therapyStudio },
  { title: "Tatoo and piercing", image: tatoo },
  { title: "Massage studio", image: massage },
];
const BarberBenefits = () => {
  return (
    <>
      <div className="bg-white">
        {/* Section 1 */}
        <div className="py-20 px-4 md:px-16">
          <h2 className="text-4xl font-bold text-center mb-16">All-in-one booking app for your barbershop business</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img src={calendar} alt="Booking Benefits" className="max-w-full w-[500px]" />
            </div>

            {/* Right Text Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Prevent double bookings with calendar sync</h3>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">Connect your own Google, Outlook, or Apple calendar with Trafft, and have all your booked appointments in one convenient place. Any unavailable time slots in your personal calendar will be automatically marked as busy in the Trafft barber appointment app. This way, you'll never have to worry about double bookings or missed appointments. What's more, your team members can also sync their Google, Outlook or Apple calendars with Trafft, and eliminate the chance of double bookings or misunderstandings.</p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Manage a multi-location barbershop business from a single app</h2>
              <p className="text-gray-700 text-base leading-relaxed">If your business operates in multiple locations, our barbershop software allows you to effortlessly manage all of them in one centralized place. With Trafft, you'll enjoy complete flexibility, enabling you to set up various schedules, locations, and even different time zones, while ensuring seamless functionality across the board.</p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img src={multiLocation} alt="Showcase Services" className="max-w-full w-[500px]" />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white py-20 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img src={marketing} alt="Buffer Settings" className="max-w-full w-[500px]" />
            </div>

            {/* Right Text Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Promote your barbershop online with effective marketing</h3>
              <p className="text-gray-700 text-base leading-relaxed">Use Trafft’s marketing tools and integrations to your advantage and promote your business online. Engage and retain your clients by sending email campaigns, newsletters, and promotions through Mailchimp or SendFox. Connect your favorite apps with Trafft through Zapier and unlock their potential for promoting your business.</p>
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

export default BarberBenefits;
