import React from "react";
import { Star } from "lucide-react";
import capteraLogo from "../../assets/Images/rating-capterra.webp";
import getAppLogo from "../../assets/Images/rating-getapp.webp";
import g2Logo from "../../assets/Images/rating-g2.webp";
import trustpilotLogo from "../../assets/Images/rating-trustpilot.webp";

import EmailCard from "../../assets/Images/EmailFeatureCard.webp";
import smsCard from "../../assets/Images/SmsFeatureCard.webp";
import whatsappCard from "../../assets/Images/whatsapp.webp";
import googleCalendarCard from "../../assets/Images/google-calendar.webp";
import outLookCard from "../../assets/Images/outlook-calendar.webp";
import mailChimpCard from "../../assets/Images/mailchimp.webp";
import sendFox from "../../assets/Images/sendfox.webp";
import zapierCard from "../../assets/Images/zapier.webp";
import bgImage from "../../assets/Images/testimonial-bg.webp";

const testimonials = [
  {
    name: "Ms D.",
    title: "Great booking system, awesome support",
    text: `"I love trafft! It's an amazing appointment booking system that makes my life so much easier. I can easily book appointments with my clients, and I know that trafft will handle the rest. The system is very user-friendly, and I love the fact that it integrates with my calendar. Overall, I highly recommend trafft!"`,
    logo: capteraLogo,
    platform: "on Capterra",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Jayaprakash B.",
    title: "Excellent scheduling software",
    text: `"Seamlessly integrates with calendar, zoom and other solutions with extensible features through APIs and webhooks. Excellent support from the team which has been very agile."`,
    logo: getAppLogo,
    platform: "on GetApp",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "James R.",
    title: "The one software I have referred more people to than any other software I've ever bought",
    text: `"It's straightforward to use and has so many features. The quality of support is excellent, and it seems like they are always adding more features."`,
    logo: g2Logo,
    platform: "Rating on G2",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

const reviews = [
  {
    logo: capteraLogo,
  },
  {
    logo: g2Logo,
  },
  {
    logo: trustpilotLogo,
  },
  {
    logo: getAppLogo,
  },
];

const features = [
  { title: "Email", image: EmailCard, description: "Configure and customize your email notifications to suit your needs. Edit notifications for upcoming appointments, appointment follow-ups, status changes, and more." },
  { title: "SMS", image: smsCard, description: "Configure and customize your SMS notifications to suit your needs. Edit notifications for upcoming appointments, appointment follow-ups, status changes, and more." },
  { title: "Whatsapp", image: whatsappCard, description: "Trafft’s integration with WhatsApp allows you to send your customers and employees notifications about upcoming appointments through WhatsApp. This integration will help you retain your customers and reduce no-shows." },
  { title: "Google Calendar", image: googleCalendarCard, description: "Sync your and your employees' personal and professional events by connecting Google calendars. Appointments booked in Trafft will be added to Google calendars, and Google calendar's busy slots will not be available for booking in Trafft." },
  { title: "Outlook Calendar", image: outLookCard, description: "Sync your and your employees' personal and professional events by connecting Outlook calendars. Appointments booked in Trafft will be added to Outlook calendars, and Outlook calendar's busy slots will not be available for booking in Trafft." },
  { title: "Mailchimp", image: mailChimpCard, description: "With just a few clicks, you can effortlessly send customer data, including names and emails, directly from your Trafft account to MailChimp. This integration enables you to leverage lead nurturing and retention strategies effectively." },
  { title: "SendFox", image: sendFox, description: "Grow your audience and create targeted email campaigns in SendFox. Automatically transfer customers' data from Trafft to SendFox." },
  { title: "Zapier", image: zapierCard, description: "Use integration with Zapier to connect with any other third-party application supported by Zapier and send data after events in Trafft such as booking the appointment, rescheduling, etc." },
];

const BusinessProcessAutomationTestimonials = () => {
  return (
    <>
      <div className="bg-[#020c2b] py-20 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-16">See what our customers have to say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full mb-4" />
              <h4 className="font-semibold text-lg">{item.name}</h4>
              <div className="flex items-center justify-center gap-1 my-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-sm mb-2">{item.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.text}</p>
              <div className="flex items-center gap-2 mt-auto pt-2">
                <img src={item.logo} alt={item.platform} className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">{item.platform}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#020c2b] py-12 px-4 md:px-16 text-center">
          <h4 className="text-gray-300 text-sm font-semibold mb-6">See more reviews on</h4>

          <div className="flex flex-wrap justify-center gap-6">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-5 py-3 flex items-center gap-3 shadow-sm min-w-[220px]
                transform transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
              >
                <img src={item.logo} alt={item.label} className="transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="relative bg-[#020c2b] text-white py-20 px-4 md:px-16"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Make your business <span className="text-yellow-400">thrive through automation</span>
        </h2>

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
    </>
  );
};

export default BusinessProcessAutomationTestimonials;
