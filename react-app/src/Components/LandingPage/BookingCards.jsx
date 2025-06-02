import React from "react";

// Import card images
import booking1 from "../../assets/Images/Provide-online-card1.webp";
import booking2 from "../../assets/Images/Provide-online-card1.webp";
import booking3 from "../../assets/Images/Provide-online-card1.webp";
import booking4 from "../../assets/Images/Provide-online-card1.webp";
import Card from "../Shared/Card";

const BookingCards = () => {
  const cards = [
    {
      image: booking1,
      title: "Provide online bookings 24/7",
      description: "A scheduling app keeps your business available for booking 24/7, allowing your customers to book at their convenience. Provide an exceptional booking experience and gain more loyal customers.",
    },
    {
      image: booking2,
      title: "Organize employees with flexibility",
      description: "Create flexible and specific schedules for your employees. Manage all staff calendars from one dashboard or allow them to self-schedule.",
    },
    {
      image: booking3,
      title: "Take care of your customers",
      description: "Trafft’s CRM enables you to create customer lists and maintain customer data. Learn about your customers' favorite services, send them birthday greetings or loyalty coupons, and provide the best experience.",
    },
    {
      image: booking4,
      title: "Manage multi-location business",
      description: "If you have more than one business location, you don’t need a different tool for each one. Manage all your locations with Trafft and have the entire business organized in one place.",
    },
    {
      image: booking1,
      title: "Provide online bookings 24/7",
      description: "A scheduling app keeps your business available for booking 24/7, allowing your customers to book at their convenience. Provide an exceptional booking experience and gain more loyal customers.",
    },
    {
      image: booking2,
      title: "Organize employees with flexibility",
      description: "Create flexible and specific schedules for your employees. Manage all staff calendars from one dashboard or allow them to self-schedule.",
    },
    {
      image: booking3,
      title: "Take care of your customers",
      description: "Trafft’s CRM enables you to create customer lists and maintain customer data. Learn about your customers' favorite services, send them birthday greetings or loyalty coupons, and provide the best experience.",
    },
    {
      image: booking4,
      title: "Manage multi-location business",
      description: "If you have more than one business location, you don’t need a different tool for each one. Manage all your locations with Trafft and have the entire business organized in one place.",
    },
  ];

  return (
    <>
      <section className="bg-[#f9fafa] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2442] mb-4">Booking and Beyond</h2>
          <p className="text-gray-600  max-w-3xl text-xl mx-auto">Trafft isn’t just another online appointment booking app. It’s a comprehensive solution for organizing your entire business.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Card key={index} image={card.image} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      <div className="px-6 bg-[#f9fafa]">
        <section className="bg-[#e8f0ff] rounded-2xl mx-4 md:mx-auto max-w-7xl px-6 sm:px-12 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
            {/* Left Text Block */}
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D2442] leading-snug">
                Automate your business with Trafft for <span className="text-blue-600 font-bold">FREE</span>
              </h2>
              <p className="text-base sm:text-lg text-[#1D2442] mt-3">Trafft offers a forever-free plan that is perfect for teams of up to 5. Get started and scale your business.</p>
            </div>

            {/* Right CTA Button */}
            <div className="w-full md:w-auto flex justify-center md:justify-end">
              <a href="#" className="bg-[#0056FF] hover:bg-[#0044cc] text-white px-8 py-3 rounded-md font-semibold text-sm sm:text-base transition text-center">
                Get started for free
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookingCards;
