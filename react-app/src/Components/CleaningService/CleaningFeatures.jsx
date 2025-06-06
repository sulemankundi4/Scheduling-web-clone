import React, { useState } from "react";
import { Calendar, Clock, CreditCard, CreditCardIcon, Mail, MapPin, Recycle } from "lucide-react";
import cleaningAdvantages1 from "../../assets/Images/cleaning_advantages_01.webp";
import cleaningAdvantages2 from "../../assets/Images/cleaning_advantages_02.webp";
import cleaningAdvantages3 from "../../assets/Images/cleaning_advantages_03.webp";
import cleaningAdvantages4 from "../../assets/Images/cleaning_advantages_04.webp";

import smsEmailNotif from "../../assets/Images/SMS and Email Notifications (Free).webp";
import customFields from "../../assets/Images/Custom Fields (PRO).webp";
import coupons from "../../assets/Images/Coupons (PRO).webp";
import invoices from "../../assets/Images/Invoices.webp";
import resceduling from "../../assets/Images/Rescheduling and Canceling.webp";
import dashboard from "../../assets/Images/Insightful Dashboard (Free).webp";
import multipleLocations from "../../assets/Images/Multiple Locations (PRO).webp";
import onlinePayments from "../../assets/Images/online ps.webp";

const features = [
  { title: "SMS and Email Notifications (Free)", image: smsEmailNotif, description: "Make sure your clients never forget about appointments by sending automatic SMS, Email, or WhatsApp reminders. Create custom notifications and follow-ups and interact with your customers in your brand voice." },
  { title: "Custom Fields", image: customFields, description: "Customize the booking form further by configuring custom fields such as dropdowns, radio buttons, and checkboxes to collect any additional information you require from your clients." },
  { title: "Coupons", image: coupons, description: "Offering discounts or free appointments to your customers is hassle-free with Trafft scheduling app for cleaning business. Simply define the value of each coupon to provide exclusive deals." },
  { title: "Invoices", image: invoices, description: "Send invoices automatically to your patients from the medical scheduling software and make sure you get paid for your services. Choose one of the invoice templates, change colors, add your logo and customize it to represent your brand." },
  { title: "Rescheduling and Canceling", image: resceduling, description: "Prevent last-minute cancellations by allowing your clients to cancel and reschedule an appointment in the scheduling software for cleaning services in a few clicks." },
  { title: "Insightful Dashboard (Free)", image: dashboard, description: "The KPI Dashboard provides insights into your business's performance. Widgets display key metrics such as the number of new customers, revenue generated during a specific period, employee occupancy, daily occupancy, and other important data for a successful business." },
  { title: "Multiple Locations", image: multipleLocations, description: "With Trafft, managing businesses across multiple locations, even in different cities or time zones, is a breeze. You can efficiently handle all locations within a single tool, while employees have the flexibility to work in various places." },
  { title: "Online Payments", image: onlinePayments, description: "Offer your clients to pay for services online through fast and secure payment gateways - PayPal, Stripe, Mollie, and Authorize.net. Collect payments online quickly and easily with the scheduling software for cleaning services." },
];

const saloonFeatures = [
  {
    icon: <Calendar className="w-6 h-6" />,
    placeholder: "Easy & flexible ",
    title: "Manage your staff’s schedules with ease and flexibility",
    description: `Organizing schedules and tracking employee availability can be time-consuming for cleaning service agencies. With Trafft scheduling software for cleaning companies, you can efficiently manage your entire team using a single application.Trafft's cleaning scheduling software offers flexible scheduling options for each employee. Set up their working hours, assign specific services and locations, customize prices, and effortlessly manage all employee-related tasks. What's more, a quick glance at the Trafft calendar provides a comprehensive view of your employees' booked appointments and available time slots.`,
    image: cleaningAdvantages4,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    placeholder: "Available 24/7",
    title: "Get new clients with 24/7 online booking",
    description: `Say goodbye to phone calls and endless email exchanges with customers to find the perfect time slot that suits both parties. Trafft scheduling software for cleaning companies keeps your business available for booking 24/7 and increases bookings by allowing anyone who discovers you online to schedule an appointment instantly.`,
    image: cleaningAdvantages3,
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    placeholder: "Recurring appointments",
    title: "Let your clients book appointments that repeat",
    description: `If you have clients who regularly book appointments with you, you can offer them the convenience of creating recurring appointments in a single booking process, ensuring an exceptional customer experience. They simply need to choose the date and time for the initial appointment, and then select the desired recurrence pattern and the number of repetitions.`,
    image: cleaningAdvantages2,
  },
  {
    icon: <CreditCardIcon className="w-6 h-6" />,
    placeholder: "Online payments",
    title: "Get paid for your services online instantly and securely",
    description: `Managing payments and invoices takes a lot of time. Trafft cleaning services scheduling software enables you to get paid for your services online and on-site and sends invoices automatically. Trafft seamlessly integrates with trusted payment providers such as PayPal, Stripe, Mollie, and Authorize.net, making it effortless to collect payments online in a fast, secure, and user-friendly manner.`,
    image: cleaningAdvantages1,
  },
];

const CleaningFeatures = () => {
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

export default CleaningFeatures;
