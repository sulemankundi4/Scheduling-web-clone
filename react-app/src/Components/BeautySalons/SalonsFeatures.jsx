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
  { title: "Rescheduling and Canceling", image: resceduling, description: "Reduce no-shows and prevent last-minute cancellations by allowing your customers to cancel and reschedule an appointment in the salon appointments software in a few clicks." },
  { title: "Coupons", image: coupons, description: "Offering discounts or free appointments to your customers is hassle-free with Trafft scheduling software for salons. Simply define the value of each coupon to provide exclusive deals." },
  { title: "SMS and Email Notifications (Free)", image: smsEmailNotif, description: "No-shows are very common in beauty salon businesses. Make sure your clients come to the scheduled appointment by sending automatic SMS, Email, or WhatsApp reminders. Create custom notifications and follow-ups and interact with your customers in your brand voice." },
  { title: "Extras ", image: extras, description: "To provide additional services and up-sell to your clients, you can add Extras to your existing services. Extras can extend the duration, increase the price, or even be offered for free without affecting the allotted time." },
  { title: "Custom Fields", image: customFields, description: "Customize the booking form further by configuring custom fields such as dropdowns, radio buttons, and checkboxes to collect any additional information you require from your customers." },
  { title: "Multiple Locations", image: multipleLocations, description: "If you have salons in multiple locations, you can manage all your business locations with one Trafft account. Also, your employees can work in a few locations and you can create their schedule for different locations." },
  { title: "Recurring Appointments", image: recurringAppt, description: "Regular visitors to your salon can secure their spot on time. They can book an appointment that repeats by selecting the time and date for the first appointment and then choosing the type of recurrence." },
  { title: "Custom Roles", image: customRoles, description: "Manage and create different roles for your employees. For example, limit the permissions and pages your users can access and create different levels of authority and management within your team." },
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

export default SalonsFeatures;
