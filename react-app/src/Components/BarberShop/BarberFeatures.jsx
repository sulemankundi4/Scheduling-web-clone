import React, { useState } from "react";
import { Calendar, Calendar1, Clock, CreditCard, CreditCardIcon, Inbox, Mail, MapPin, Recycle, Star } from "lucide-react";

import barberShopAdvantages1 from "../../assets/Images/barbershop_advantage_01.webp";
import barberShopAdvantages2 from "../../assets/Images/barbershop_advantage_02.webp";
import barberShopAdvantages3 from "../../assets/Images/barbershop_advantage_03.webp";
import barberShopAdvantages4 from "../../assets/Images/barbershop_advantage_04.webp";

import smsEmailNotif from "../../assets/Images/SMS and Email Notifications (Free).webp";
import coupons from "../../assets/Images/Coupons (PRO).webp";
import extras from "../../assets/Images/Extras_(PRO).webp";
import multipleServices from "../../assets/Images/Multiple Services (Free).webp";
import resceduling from "../../assets/Images/Rescheduling and Canceling.webp";
import specialDays from "../../assets/Images/Special Days for Employees (PRO).webp";
import embededForm from "../../assets/Images/Embeddable booking form.webp";
import manageingAppts from "../../assets/Images/Managing Appointments (Free).webp";
import samiAzrakImg from "../../assets/Images/barber.webp";

import demoImg from "../../assets/Images/Demo_01.webp";
const features = [
  { title: "SMS and Email Notifications", image: smsEmailNotif, description: "No-shows are very common in salon businesses and barbershops. Make sure your clients come to the scheduled appointment by sending automatic SMS, Email, or WhatsApp reminders. Create custom notifications and follow-ups and interact with your customers in your brand voice." },
  { title: "Coupons", image: coupons, description: "Offering discounts or free appointments to your customers is hassle-free with Trafft barbershop scheduling software. Simply define the value of each coupon to provide exclusive deals." },
  { title: "Extras", image: extras, description: "To provide additional services and up-sell to your clients, you can add Extras to your existing services. Extras can extend the duration, increase the price, or even be offered for free without affecting the allotted time." },
  { title: "Multiple Services", image: multipleServices, description: "Managing multiple services and service categories is effortless with Trafft. You have the flexibility to edit the appearance, locations, duration, price, taxes, and even create hidden (private) services for specific needs." },
  { title: "Rescheduling and Cancelling", image: resceduling, description: "Reduce no-shows and prevent last-minute cancelations by allowing your customers to cancel and reschedule an appointment in the barbershop booking app in a few clicks." },
  { title: "Special Days for Employees", image: specialDays, description: "The special days feature allows you to set customized working schedules for specific employees on one or more days. This overrides the employees' general working schedules, ensuring flexibility when needed." },
  { title: "Embeddable booking form", image: embededForm, description: "If you have a website, you can easily embed a booking form into any page using an iframe. This enables your clients to book appointments directly on your website." },
  { title: "Managing Appointments", image: manageingAppts, description: "From the admin page, you can easily create, browse, and edit appointments, as well as change their statuses. Exporting data of your appointments or customers is also a simple process." },
];

const saloonFeatures = [
  {
    icon: <Inbox className="w-6 h-6" />,
    placeholder: "Automated Reminders",
    title: "Reduce no-shows with automated reminders",
    description: `How often do your clients book an appointment and never show up? Sending reminders before an appointment reduces no-shows to a great extent.But manual reminders take a lot of time. With our barbershop appointment app, you can automatically send Emails, SMS, or WhatsApp reminders before an appointment and notify your clients about the upcoming appointment.`,
    image: barberShopAdvantages4,
  },
  {
    icon: <Calendar1 className="w-6 h-6" />,
    placeholder: "Booking Website",
    title: "Showcase your services on a branded booking page",
    description: `Trafft automatically generates a personalized booking page for your barbershop, which you can further customize to align with your website and brand. Showcase your services, prices, calendar, team, and locations, and enable your clients to conveniently schedule appointments 24/7.Embed a booking form on your website or share a link to your booking page on your social media, put it in your Instagram bio or send it directly to your customers and provide seamless appointment booking around the clock.`,
    image: barberShopAdvantages3,
  },
  {
    icon: <CreditCardIcon className="w-6 h-6" />,
    placeholder: "Online Payments",
    title: "Get paid for your services instantly and securely",
    description: `Managing payments and invoices takes a lot of time. Trafft barbershop management system enables you to get paid for your services online and on-site and sends invoices automatically. Trafft seamlessly integrates with trusted payment providers such as PayPal, Stripe, Mollie, and Authorize.net, making it effortless to collect payments online in a fast, secure, and user-friendly manner.`,
    image: barberShopAdvantages2,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    placeholder: "Online booking 24/7",
    title: "Attract new clients with 24/7 online booking",
    description: `Say goodbye to phone calls, back-and-forth emails and social media messages just to book a single appointment. Share your Trafft booking page online and let your customers easily find you and book an appointment with you.Trafft barber booking app makes your business available for booking 24/7 and allows anyone who discovers you online to instantly schedule an appointment.With Trafft barbershop appointment software, you’ll offer your clients the freedom to book at their convenience, but you’ll still have complete control over your appointments`,
    image: barberShopAdvantages1,
  },
];

const BarberFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default: "Automated reminders"

  return (
    <div className="bg-gray-50 py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Streamline your salon with barber booking software</h2>
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

      <div className="bg-[#fdf1e3] py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={samiAzrakImg} alt="Barber Working" className="rounded-xl max-w-full h-auto" />
          </div>

          {/* Right Content */}
          <div className="bg-[#1e1e1e] text-white rounded-xl p-8">
            <div className="text-4xl mb-6 text-yellow-400">“</div>
            <h3 className="text-xl font-semibold mb-4">A customer that doesn't show up is a lost resource</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">“Time is our most valuable resource. Trafft helps us manage our appointments and our time in a much better and more efficient manner. A customer that doesn't show up is a lost resource. Trafft always sends notifications to customers to remember them they have an appointment, which helps us reduce no-shows.”</p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img src={samiAzrakImg} alt="Sami Azrak" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">Sami Azrak</p>
                <p className="text-sm text-gray-400 mb-1">Founder of Shave Barbers & Spa</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20 px-4 md:px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Key features you need to automate barbershop business management</h2>

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

      <div className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1b3d] mb-6">See it in action: Barbershop booking software demo</h2>
            <p className="text-gray-700 text-lg mb-6 max-w-xl">Take a firsthand look at our intuitive barbershop booking software with our demo of a barbershop booking page. See how it streamlines the booking process and enhances your barbershop business, making scheduling effortless for both you and your clients.</p>

            {/* Label Arrow */}
            <div className="mt-6 relative">
              <span className="inline-block bg-[#816245] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">BARBERSHOP BOOKING PAGE IS RIGHT HERE</span>
              <div className="absolute left-[calc(100%-20px)] top-1/2 w-20 h-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,100 C50,-30 80,120 100,60" stroke="#816245" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Image (Mockup or Screenshot) */}
          <div className="rounded-xl shadow-lg overflow-hidden border bg-white">
            <img
              src={demoImg} // Replace with your demo screenshot
              alt="Barbershop Booking Demo"
              className="w-full h-auto"
            />
            <div className="p-4 border-t text-[#0f1b3d] font-medium text-sm">Barbershop</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberFeatures;
