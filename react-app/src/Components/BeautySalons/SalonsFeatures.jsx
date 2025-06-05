import React, { useState } from "react";
import { Clock, CreditCard, Mail, MapPin } from "lucide-react";
import advantage1 from "../../assets/Images/advantages_01.webp";
import advantage2 from "../../assets/Images/advantages_02.webp";
import advantage3 from "../../assets/Images/advantages_03.webp";
import advantage4 from "../../assets/Images/advantages_04.webp";

import resceduling from "../../assets/Images/Rescheduling and Canceling.webp";
import coupons from "../../assets/Images/Coupons (PRO).webp";
import smsEmailNotif from "../../assets/Images/SMS and Email Notifications (Free).webp";
import extras from "../../assets/Images/Extras_(PRO).webp";
import customFields from "../../assets/Images/Custom Fields (PRO).webp";
import multipleLocations from "../../assets/Images/Multiple Locations (PRO).webp";
import recurringAppt from "../../assets/Images/Recurring Appointments (PRO).webp";
import customRoles from "../../assets/Images/Custom Roles (PRO).webp";
const features = [
  { title: "Rescheduling and Canceling", image: resceduling },
  { title: "Coupons", image: coupons },
  { title: "SMS and Email Notifications (Free)", image: smsEmailNotif },
  { title: "Extras ", image: extras },
  { title: "Custom Fields", image: customFields },
  { title: "Multiple Locations", image: multipleLocations },
  { title: "Recurring Appointments", image: recurringAppt },
  { title: "Custom Roles", image: customRoles },
];

const saloonFeatures = [
  {
    icon: <Clock className="w-6 h-6" />,
    placeholder: "24/7 booking",
    title: "Get booked even after your working hours",
    description: `Boost your sales by making your salon available for booking 24/7 with Trafft salon booking software. Our salon booking app enhances your online presence and increases bookings by allowing anyone who discovers you online to instantly schedule an appointment.With the Trafft salon booking system, you can eliminate the need for answering phone calls and engaging in back-and-forth messages just to book a single appointment. Our scheduling software for salons empowers your clients to view your calendar and available time slots, enabling them to book appointments at their convenience. This significantly improves the client experience.`,
    image: advantage1,
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    placeholder: "Online payments",
    title: "Get paid for your services instantly and securely",
    description: `Managing payments and invoices takes a lot of time. Trafft salon appointment software enables you to get paid for your services online and on-site and sends invoices automatically. Trafft seamlessly integrates with trusted payment providers such as PayPal, Stripe, Mollie, and Authorize.net, making it effortless to collect payments online in a fast, secure, and user-friendly manner.`,
    image: advantage2,
  },
  {
    icon: <Mail className="w-6 h-6" />,
    placeholder: "Automated reminders",
    title: "Make sure your clients never forget about appointments",
    description: `How often do your clients book an appointment and never show up? Sending reminders before an appointment reduces no-shows to a great extent. But manual reminders take a lot of time. With our salon online booking system, you can send Emails, SMS, or WhatsApp reminders before an appointment automatically and notify your clients about the upcoming appointment.
`,
    image: advantage3,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    placeholder: "Multiple locations",
    title: "Manage a multi-location business from a single app",
    description: `If your business operates in multiple locations, our salon booking app allows you to effortlessly manage all of them in one centralized place. With Trafft, you'll enjoy complete flexibility, enabling you to set up various schedules, locations, and even different time zones, while ensuring seamless functionality across the board.`,
    image: advantage4,
  },
];

const SalonsFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default: "Automated reminders"

  return (
    <div className="bg-gray-50 py-20 px-4">
      {/* Feature Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {saloonFeatures.map((feature, index) => (
          <button key={index} onClick={() => setActiveIndex(index)} className={`cursor-pointer flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${activeIndex === index ? "bg-pink-700 text-white" : "bg-pink-100 text-pink-700 hover:bg-pink-200"}`}>
            {feature.icon}
            <span className="text-sm">{feature.placeholder}</span>
          </button>
        ))}
      </div>

      {/* Google-style horizontal rule */}
      <div className="w-full flex items-center justify-center mb-12">
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Dynamic Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 transition-all duration-500 ease-in-out">
        {/* Text */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{activeIndex === 2 ? "Make sure your clients never forget about appointments" : saloonFeatures[activeIndex].title}</h2>
          <p className="text-gray-700 text-lg">{saloonFeatures[activeIndex].description}</p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img src={saloonFeatures[activeIndex].image} alt={saloonFeatures[activeIndex].title} className="max-w-full h-auto rounded-xl shadow-lg transition-all duration-500" />
        </div>
      </div>

      <div className="relative py-20 px-4 md:px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Key features you need to automate salon business management</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div key={index} className="bg-[#eef4ff] rounded-lg overflow-hidden shadow-sm text-black transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="h-[180px] bg-white flex items-center justify-center overflow-hidden">
                <img src={item.image} alt={item.title} className="object-contain h-full w-full" />
              </div>
              <div className="p-4 font-medium text-center">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalonsFeatures;
