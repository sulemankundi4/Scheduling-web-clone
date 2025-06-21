import React, { useRef, useState } from "react";
import phoneMap from "../../../assets/Images/why it matters.webp";
import setupIntegration from "../../../assets/Images/setup integration.webp";
import getStarted from "../../../assets/Images/get started.webp";

const Details = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: "How can I know if I qualify for Reserve with Google?",
      answer: "Trafft’s integration with Reserve with Google is currently available for Wellness, Spa, Fitness, Beauty, and Financial services and is limited to certain countries. You can find detailed information on their website.",
    },
    {
      question: "Is Reserve with Google available on all Trafft plans?",
      answer: "Yes, Reserve with Google is supported on all active Trafft plans with integration capabilities.",
    },
    {
      question: "How does Reserve with Google work?",
      answer: "Once connected, your Trafft services will be shown on Google Search & Maps, allowing customers to book directly without visiting your site.",
    },
    {
      question: "Does Trafft's integration with Reserve with Google have any limitations?",
      answer: "Yes, the integration is available only for specific service categories and may not be supported in some countries. Please refer to Google's documentation for current eligibility.",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* Section 1 */}
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <div className="flex-shrink-0 mb-10 md:mb-0">
          <div className="w-40 h-40 rounded-full bg-white shadow flex items-center justify-center mx-auto md:mx-0">
            <div className="text-xl font-medium text-gray-700">
              <p>Reserve with</p>
              <p className="text-4xl font-bold text-[#4285F4]">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#DB4437]">o</span>
                <span className="text-[#F4B400]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#0F9D58]">l</span>
                <span className="text-[#DB4437]">e</span>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl md:ml-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What is Reserve with Google?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">Reserve with Google is a feature that allows users to book appointments or make reservations directly through Google Search or Google Maps. It streamlines the booking process and increases a business's online visibility, making it convenient for customers to book services without leaving the Google platform.</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-7xl mx-auto py-8 px-6 md:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Reserve with Google integration matters</h2>
        <p className="text-gray-700 text-lg max-w-5xl mx-auto">Trafft’s integration with Reserve with Google offers your customers quick and easy access to your services and lets them book immediately when they find you online.</p>
      </div>

      {/* Section 3 */}
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex">
          <div className="w-full h-auto lg:h-full">
            <img src={phoneMap} alt="Reserve with Google mobile example" className="rounded-xl shadow-lg w-full h-auto lg:h-full object-cover" />
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "↗",
              title: "Increases visibility and bookings",
              desc: "Reserve with Google helps you reach millions of potential customers by showcasing your services and availability directly on Google Search and Maps.",
            },
            {
              icon: "📅",
              title: "Streamlines the booking process",
              desc: "Reserve with Google simplifies the booking process for your customers. They can book appointments, classes, or services directly through Google Maps, eliminating the need to navigate other platforms.",
            },
            {
              icon: "👁️",
              title: "Drives customer growth",
              desc: "By integrating Reserve with Google, businesses can attract more customers who are already searching for services like yours.",
            },
            {
              icon: "💡",
              title: "Boosts brand credibility",
              desc: "Appear directly in Google results with booking functionality, enhancing user trust and ease of access.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow text-left h-full transform transition-transform duration-300 hover:scale-105">
              <div className="mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">{item.icon}</span>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-7xl mx-auto py-8 px-6 md:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to enable appointment booking through Google Search and Maps?</h2>
        <p className="text-gray-700 text-lg max-w-5xl mx-auto">To seamlessly enable appointment bookings via Google Search and Maps, follow these simple steps using Trafft:</p>
      </div>

      {/* Section 4 */}
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Setup integration with Trafft:</h3>
          <p className="text-gray-700 mb-6">
            Connect your Trafft account to your Google Business Profile for a unified booking experience. If you haven't created a Google Business Profile yet, you can set one up{" "}
            <a href="#" className="text-blue-600 underline">
              here
            </a>
            .
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Start accepting bookings:</h3>
          <ul className="list-decimal list-inside text-gray-700 mb-6 space-y-1">
            <li>Access your Trafft account and activate the Reserve with Google integration.</li>
            <li>Sign in to your Google account or choose the linked account.</li>
            <li>Connect your Trafft locations with their corresponding Google locations.</li>
          </ul>

          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-gray-800 text-sm">
              Once the locations are successfully linked, a prominent <span className="font-semibold text-blue-700">"Book Now"</span> button will appear on your Google Business Profile, allowing customers to easily make bookings <span className="font-semibold">directly from Google.</span>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img src={setupIntegration} alt="Integration Instructions" className="rounded-xl shadow-lg w-full object-cover" />
        </div>
      </div>

      {/* Section 5 */}
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img src={getStarted} alt="Google Booking Preview" className="rounded-2xl w-full object-cover shadow-md" />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Get started with Google bookings today and seamlessly manage appointments through Trafft's integration with Google Search and Maps.</h2>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 mb-6">Try for free</button>

          <div className="bg-gray-100 border border-gray-200 text-sm text-gray-800 p-4 rounded-xl">
            <div className="flex items-start gap-2">
              <span className="text-blue-700 mt-0.5 text-xl">ℹ️</span>
              <p>
                It is important to note that Reserve with Google is not available in specific countries and Trafft’s integration with Reserve with Google is exclusively permitted for <span className="font-semibold">Wellness, Spa, Fitness, Beauty, and Financial services</span>. You can find detailed information regarding these restrictions at{" "}
                <a href="#" className="text-blue-600 underline">
                  this link
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#050F2C] text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently asked questions</h2>

          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-[#1f2b4a] py-6 cursor-pointer" onClick={() => toggleFAQ(index)}>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-blue-500 text-2xl">{openIndex === index ? "−" : "+"}</span>
              </div>
              <div ref={(el) => (contentRefs.current[index] = el)} className={`transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-96 mt-4" : "max-h-0"}`}>
                <p className="text-sm text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
