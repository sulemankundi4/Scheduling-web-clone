import React from "react";

import embededBookingForm from "../../../../assets/Images/Embeddable booking form.webp";
import custBookingPage from "../../../../assets/Images/Customize the Booking Form or Page.webp";
import autoTimeZone from "../../../../assets/Images/Auto-Detect Time Zones.webp";
import profile from "../../../../assets/Images/Customer Profile.webp";
import cusotmerField from "../../../../assets/Images/Custom Fields (PRO).webp";
import addAppointment from "../../../../assets/Images/Add Appointment to Calendar for Customers (Free).webp";
import shareAppt from "../../../../assets/Images/Share Appointments (Free).webp";
import templateBooking from "../../../../assets/Images/templates_booking.webp";
import customDomain from "../../../../assets/Images/custom domain.webp";
import socialMedia from "../../../../assets/Images/Dates via Social Media.webp";
import dataEmail from "../../../../assets/Images/Dates via Email.webp";
import multilingual from "../../../../assets/Images/MultilingualSupport.webp";
import ratingReview from "../../../../assets/Images/Ratings & Reviews.webp";
import customerPanel from "../../../../assets/Images/Customer Panel Access.webp";
import chatBot from "../../../../assets/Images/Chat Bot.webp";

const BookingWebsite = ({ searchTerm = "" }) => {
  const bookingWebsite = [
    { title: "Embeddable Booking Form", image: embededBookingForm, description: "If you have a website, you can easily embed a booking form into any page using an iframe. This enables your clients to book appointments directly on your website." },
    { title: "Booking Website", image: bookingWebsite, description: "Trafft functions as a no-code website builder, automatically generating a booking page accessible through the Trafft dashboard. You can embed this page into your website, share it directly with clients, or even place it on your social media accounts." },
    { title: "Customize the Booking Form or Page", image: custBookingPage, description: "Choose from multiple themes for the booking page and customize the design. You can also edit the order of steps in the booking form and translate it into various languages." },
    { title: "Auto-Detect Time Zones", image: autoTimeZone, description: "Trafft detects the time zone from your customers' computers, ensuring that available slots are displayed in their local time. Meanwhile, you can view the slots in your own time zone." },

    { title: "Customer Profile", image: profile, description: "Your clients can create profiles by clicking on the Login button in the upper right corner of your booking website. Under their customer profile, they can easily manage their appointments" },
    { title: "Custom Fields (Intake Forms)", image: cusotmerField, description: "Gather additional information during booking by configuring custom fields (intake forms) for appointments and customers. Choose between several types of inputs: Text, Text Area, Text Content, Selectbox, Checkbox, Radio Button, Date Picker, Address and Attachment." },
    { title: "Add Appointment to Calendar for Customers", image: addAppointment, description: "After scheduling an appointment, customers can conveniently add the details to their calendars by clicking on the 'add to calendar' button. The appointment will automatically be added to their Google, Outlook, or iCal calendars." },
    { title: "Share Appointments", image: shareAppt, description: "On the Appointments page, you'll find a 'Share Booking Form' button. This allows you to quickly share appointment details with your customers." },

    { title: "Variety of Templates for the Booking Page", image: templateBooking, description: "Choose from eight predefined themes for the booking page, available in light or dark versions, and customize it with primary and background colors, patterns, fonts, and object themes. This ensures that the appearance matches your brand's look and feel." },

    { title: "Custom domain", image: customDomain, description: "If you have your own domain, you have the option to host your Trafft booking page on that domain instead of having 'trafft.com' in the URL." },

    { title: "Share Time Slots/Dates via Social Media", image: socialMedia, description: "Select your free dates and/or time slots and generate a picture you can share on Social media to collect more bookings." },

    { title: "Share Time Slots/Dates via Email", image: dataEmail, description: "Share your free dates and/or time slots with customers via email." },

    { title: "Multilingual Support", image: multilingual, description: "Translate your booking website into multiple languages, and your customers will be able to select a language of their choice when they visit your booking website. They will also receive notifications and reminders in the selected language." },

    { title: "ChatBot", image: chatBot, description: "Activate Trafft Chatbot to seamlessly integrate it into your booking form, enabling clients to schedule appointments through the Chatbot interface. Name your Chatbot and customize its appearance." },

    { title: "Ratings & Reviews", image: ratingReview, description: "Enhance trust and insight by allowing customers to leave ratings and reviews for services or employees. Decide their visibility and organization on your booking site, sorted by either date or rating." },

    { title: "Customer Panel Access", image: customerPanel, description: "When creating a customer profile, you can send customers an email with login details. This enables them to set a password and access their profile, where they can view all their appointments, make payments, leave reviews, and more." },
  ];

  // Filter function to search in title and description
  const filterItems = (items) => {
    if (!searchTerm.trim()) return items;
    return items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  // Filter the bookingWebsite array
  const filteredBookingWebsite = filterItems(bookingWebsite);

  return (
    <>
      {searchTerm && filteredBookingWebsite.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No results found for "{searchTerm}"</p>
        </div>
      )}

      {filteredBookingWebsite.length > 0 && (
        <>
          <h2 className="text-4xl font-bold mb-16">Booking website and form builder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBookingWebsite.map((item, index) => (
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
        </>
      )}
    </>
  );
};

export default BookingWebsite;
