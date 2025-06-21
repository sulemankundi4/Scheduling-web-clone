import React from "react";

import socialMedia from "../../../../assets/Images/Dates via Social Media.webp";
import dataEmail from "../../../../assets/Images/Dates via Email.webp";
import multilingual from "../../../../assets/Images/MultilingualSupport.webp";
import ratingReview from "../../../../assets/Images/Ratings & Reviews.webp";
import customerPanel from "../../../../assets/Images/Customer Panel Access.webp";
import chatBot from "../../../../assets/Images/Chat Bot.webp";
import resources from "../../../../assets/Images/resources.webp";
import empCommision from "../../../../assets/Images/employee_commission.webp";
import employeeTime from "../../../../assets/Images/Employees Time Zone.webp";
import companyDays from "../../../../assets/Images/Company Days Off.webp";

import apptNotes from "../../../../assets/Images/Appointment Notes.webp";
import refundPayment from "../../../../assets/Images/Refund Option.webp";
import square from "../../../../assets/Images/square.webp";

import wordpress from "../../../../assets/Images/wordpress.webp";
import reserveGoogle from "../../../../assets/Images/reserve with google.webp";
import acumbamail from "../../../../assets/Images/acumba.webp";

import api from "../../../../assets/Images/API.webp";

const New = ({ searchTerm = "" }) => {
  const NewTab = [
    { title: "Employee Commission", image: empCommision, description: "This feature simplifies and streamlines the calculation of employee payouts. You can apply global settings or configure custom commissions for each employee." },
    { title: "Resources", image: resources, description: "Set up resources like rooms, equipment, vehicles, or other limited assets to be shared across employees, services, or locations. When a specific resource is not available, Trafft will automatically remove that time slot from your booking form." },
    { title: "API", image: api, description: "Empower your business with our API, giving you the flexibility to build custom integrations and shape a booking experience tailored to your needs." },
    { title: "Square Payment", image: square, description: "Accept secure online payments for your appointment bookings with Square. Available in both free and paid plans." },
    { title: "ChatBot", image: chatBot, description: "Activate Trafft Chatbot to seamlessly integrate it into your booking form, enabling clients to schedule appointments through the Chatbot interface. Name your Chatbot and customize its appearance." },
    { title: "Ratings & Reviews", image: ratingReview, description: "Enhance trust and insight by allowing customers to leave ratings and reviews for services or employees. Decide their visibility and organization on your booking site, sorted by either date or rating." },
    { title: "Customer Panel Access", image: customerPanel, description: "When creating a customer profile, you can send customers an email with login details. This enables them to set a password and access their profile, where they can view all their appointments, make payments, leave reviews, and more." },
    { title: "WordPress", image: wordpress, description: "Download the Trafft WordPress plugin for free and add a booking form to any page of your website." },
    { title: "Reserve with Google", image: reserveGoogle, description: "Activate Trafft's integration with Reserve with Google and start accepting bookings directly from Google Search and Google Maps." },
    { title: "Employees Time Zone", image: employeeTime, description: "Each team member can define their preferred Time Zone within the platform, enabling seamless collaboration and harmonious workflow." },
    { title: "Appointment Notes", image: apptNotes, description: "Add notes about an appointment and have all appointment details in one place." },
    { title: "Share Time Slots/Dates via Social Media", image: socialMedia, description: "Select your free dates and/or time slots and generate a picture you can share on Social media to collect more bookings." },
    { title: "Share Time Slots/Dates via Email", image: dataEmail, description: "Share your free dates and/or time slots with customers via email." },
    { title: "Company Days Off", image: companyDays, description: "Set global company days off that will be applied to all employees." },
    { title: "Acumbamail", image: acumbamail, description: "Automate communication with your customers through Trafft's integration with Acumbamail. Create customer lists and easily send email and SMS campaigns." },
    { title: "Multilingual Support", image: multilingual, description: "Translate your booking website into multiple languages, and your customers will be able to select a language of their choice when they visit your booking website. They will also receive notifications and reminders in the selected language." },
    { title: "Refund Payment", image: refundPayment, description: "Increase bookings and build customer trust by offering your customers a refund in the case of cancellation." },
  ];

  const filterItems = (items) => {
    if (!searchTerm.trim()) return items;
    return items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const filteredNewTab = filterItems(NewTab);

  return (
    <>
      {searchTerm && filteredNewTab.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No results found for "{searchTerm}"</p>
        </div>
      )}

      {filteredNewTab.length > 0 && (
        <>
          <h2 className="text-4xl font-bold mb-16">New</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredNewTab.map((item, index) => (
              <div key={index} className="relative group bg-[#eef4ff] rounded-xl overflow-hidden shadow-md text-black transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                <div className="h-[200px] bg-white flex items-center justify-center overflow-hidden">
                  <img src={item.image} alt={item.title} className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4 font-semibold text-center">{item.title}</div>
                <div className="absolute inset-0 bg-white/90 px-4 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-xl text-sm text-gray-800">
                  <div>
                    <h4 className="font-bold text-base mb-2">{item.title}</h4>
                    <p className="leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default New;
