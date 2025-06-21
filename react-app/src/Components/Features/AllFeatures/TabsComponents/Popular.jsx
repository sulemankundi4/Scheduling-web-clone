import React from "react";

import shareAppt from "../../../../assets/Images/Share Appointments (Free).webp";
import specialDays from "../../../../assets/Images/Special Days for Employees (PRO).webp";
import smsEmail from "../../../../assets/Images/SMS and Email Notifications (Free).webp";
import groupBooking from "../../../../assets/Images/Group Booking (PRO).webp";
import extras from "../../../../assets/Images/Extras_(PRO).webp";
import multipleLocations from "../../../../assets/Images/Multiple Locations (PRO).webp";
import recurringAppts from "../../../../assets/Images/Recurring Appointments (PRO).webp";
import depositPayment from "../../../../assets/Images/Deposit payment(Free).webp";
import google from "../../../../assets/Images/google-calendar.webp";
import paypal from "../../../../assets/Images/paypal.webp";
import zapier from "../../../../assets/Images/zapier.webp";

const Popular = ({ searchTerm = "" }) => {
  const popular = [
    { title: "SMS and Email Notifications", image: smsEmail, description: "Customize and modify email and SMS notifications for different events, such as upcoming appointments, appointment follow-ups, and status changes." },
    { title: "Group Booking", image: groupBooking, description: "If you need to host sessions for groups, Trafft allows you to define the minimum and maximum available slots for each appointment, ensuring smooth group bookings." },
    { title: "Multiple Locations", image: multipleLocations, description: "With Trafft, managing businesses across multiple locations, even in different cities or time zones, is a breeze. You can efficiently handle all locations within a single tool, while employees have the flexibility to work in various places." },
    { title: "Google Calendar and Google Meet", image: google, description: "Sync your and your employees' personal and professional events by connecting Google calendars. Enable Google Meet if you want to automatically add meeting links to Google Events." },
    { title: "Extras", image: extras, description: "To provide additional services and up-sell to your clients, you can add Extras to your existing services. Extras can extend the duration, increase the price, or even be offered for free without affecting the allotted time." },
    { title: "Share Appointments", image: shareAppt, description: "On the Appointments page, you'll find a 'Share Booking Form' button. This allows you to quickly share appointment details with your customers." },
    { title: "Special Days for Employees", image: specialDays, description: "The special days feature allows you to set customized working schedules for specific employees on one or more days. This overrides the employees' general working schedules, ensuring flexibility when needed." },
    { title: "Zapier", image: zapier, description: "Utilize Zapier integration to connect with a vast array of third-party applications supported by Zapier. Seamlessly send data from Trafft, such as appointment bookings and rescheduling, to other connected applications." },
    { title: "PayPal", image: paypal, description: "Allow your customers to make quick payments with PayPal at the moment of booking with just one click, ensuring a seamless payment experience." },
    { title: "Recurring Appointments", image: recurringAppts, description: "Recurring Appointments feature enables customers to easily book appointments that repeat. They can select the date and time for the first appointment and then specify the type of recurrence and the number of repeats, all in a single booking process." },
    { title: "Deposit Payment", image: depositPayment, description: "When deposit payments are set, customers will be required to pay a certain amount during the booking, while the remaining balance can be paid on the spot. Trafft allows you to add fixed or variable prices for deposits and enables deposit options for all services or individual ones." },
  ];

  const filterItems = (items) => {
    if (!searchTerm.trim()) return items;
    return items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const filteredPopular = filterItems(popular);

  return (
    <>
      {searchTerm && filteredPopular.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No results found for "{searchTerm}"</p>
        </div>
      )}

      {filteredPopular.length > 0 && (
        <>
          <h2 className="text-4xl font-bold mb-16">Popular</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPopular.map((item, index) => (
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

export default Popular;
