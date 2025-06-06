import React, { useState } from "react";
import { Calendar, Calendar1, Clock, CreditCard, CreditCardIcon, Globe, Globe2, Inbox, Mail, MapPin, Recycle } from "lucide-react";

import fitnessAdvantages1 from "../../assets/Images/advantages_01-fitnees.webp";
import fitnessAdvantages2 from "../../assets/Images/advantages_02-fitnees.webp";
import fitnessAdvantages3 from "../../assets/Images/advantages_03-fitness.webp";
import fitnessAdvantages4 from "../../assets/Images/advantages_04-fitneeswebp.webp";

import coupons from "../../assets/Images/Coupons (PRO).webp";
import resceduling from "../../assets/Images/Rescheduling and Canceling.webp";
import multipleLocations from "../../assets/Images/Multiple Locations (PRO).webp";
import onlinePayments from "../../assets/Images/online ps.webp";
import smsEmailNotif from "../../assets/Images/SMS and Email Notifications (Free).webp";
import invoices from "../../assets/Images/Invoices.webp";
import extras from "../../assets/Images/Extras_(PRO).webp";
import customRoles from "../../assets/Images/Custom Roles (PRO).webp";

const features = [
  { title: "Coupons", image: coupons, description: "Offering discounts or free appointments to your customers is hassle-free with Trafft gym booking software. Simply define the value of each coupon to provide exclusive deals." },
  { title: "Rescheduling and Cancelling", image: resceduling, description: "Prevent last-minute cancellations and no-shows by allowing your gym members and fitness practitioners to cancel and reschedule an appointment in a few clicks in the scheduling software for fitness and sports." },
  { title: "Multiple Locations", image: multipleLocations, description: "If you have a gym or fitness studio in multiple locations, you can manage all your business locations with one Trafft account. Also, your coaches can work in a few locations and you can create their schedule for different locations." },
  { title: "Online Payments", image: onlinePayments, description: "Offer your members to pay their membership fees online through fast and secure payment gateways - PayPal, Stripe, Mollie, and Authorize.net. Collect payments online quickly and easily with the fitness and sports scheduling software." },
  { title: "SMS and Email Notifications", image: smsEmailNotif, description: "Make sure your clients never forget about appointments by sending automatic SMS, Email, or WhatsApp reminders. Create custom notifications and follow-ups and interact with your members in your brand voice." },
  { title: "Invoices", image: invoices, description: "Offer your patients to pay for services online through fast and secure payment gateways - PayPal, Stripe, Mollie, and Authorize.net. Collect payments online quickly and easily with the medical scheduling app." },
  { title: "Extras", image: extras, description: "To provide additional services and up-sell to your clients, you can add Extras to your existing services. Extras can extend the duration, increase the price, or even be offered for free without affecting the allotted time." },
  { title: "Custom Roles", image: customRoles, description: "Manage and create different roles for your employees. For example, limit the permissions and pages your users can access and create different levels of authority and management within your team." },
];
const saloonFeatures = [
  {
    icon: <Calendar1 className="w-6 h-6" />,
    placeholder: "Schedule & Automate",
    title: "Manage your coaches’ schedules or let them self-manage",
    description: `Organizing schedules and tracking employee availability can be time-consuming for gym and fitness centers. With Trafft scheduling software for fitness and sports, you can efficiently manage your entire team using a single application.Trafft's booking software for fitness and sports offers flexible scheduling options for each employee. Set up their working hours, assign specific services and locations, customize prices, and effortlessly manage all employee-related tasks.What's more, a quick glance at the Trafft calendar provides a comprehensive view of your employees' booked appointments and available time slots.`,
    image: fitnessAdvantages4,
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    placeholder: "Available 24/7",
    title: "Let your members book training 24/7",
    description: `Boost your sales by making your gym or fitness center available for booking 24/7 with Trafft scheduling software for fitness and gym. Our fitness booking software enhances your online presence and increases bookings by allowing anyone who discovers you online to instantly schedule an appointment.With the Trafft fitness appointment scheduling software, you can eliminate the need for answering phone calls and engaging in back-and-forth messages just to book a single appointment. Our scheduling software for fitness and sports empowers your clients to view your calendar and available time slots, enabling them to book appointments at their convenience. This significantly improves the client experience.`,
    image: fitnessAdvantages3,
  },
  {
    icon: <Inbox className="w-6 h-6" />,
    placeholder: "Automated reminders",
    title: "Reduce no-shows with automated reminders",
    description: `How often do your clients book an appointment and never show up? Sending reminders before an appointment reduces no-shows to a great extent. But manual reminders take a lot of time. With our fitness and gym booking system, you can send Emails, SMS, or WhatsApp reminders before an appointment automatically and notify your clients about the upcoming appointment.`,
    image: fitnessAdvantages2,
  },

  {
    icon: <Globe2 className="w-6 h-6" />,
    placeholder: "Meet Online",
    title: "Offer your members the benefit of online training",
    description: `Online training has become increasingly popular, offering practitioners the convenience of receiving training from the comfort of their own homes or any location of their choice. With Trafft's integrations for Zoom and Google Meet, holding online trainings and classes has never been easier. This allows you to support your clients in maintaining their progress, even if they are unable to physically attend your gym or fitness center.`,
    image: fitnessAdvantages1,
  },
];

const FitnessFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default: "Automated reminders"

  return (
    <div className="bg-gray-50 py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Organize your gym or fitness center online with fitness and gym booking system</h2>
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
        <h2 className="text-4xl font-bold text-center mb-16">Features you need to effortlessly manage your gym or fitness center online</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div key={index} className="relative group bg-[#eef4ff] rounded-xl overflow-hidden shadow-md text-black transition-transform duration-300 transform hover:scale-105 cursor-pointer">
              {/* Image Container */}
              <div className="h-[200px] bg-white flex items-center justify-center overflow-hidden">
                <img src={item.image} alt={item.title} className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105" />
              </div>

              {/* Title */}
              <div className="p-4 font-semibold text-center">{item.title}</div>

              {/* Hover Description Layer */}
              <div className="absolute inset-0 bg-white/90 px-4 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-xl text-sm text-gray-800">
                <div>
                  <h4 className="font-bold text-base mb-2">{item.title}</h4>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FitnessFeatures;
