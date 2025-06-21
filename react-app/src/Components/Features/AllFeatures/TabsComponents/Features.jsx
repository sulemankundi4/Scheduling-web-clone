import React from "react";

import resources from "../../../../assets/Images/resources.webp";
import empCommision from "../../../../assets/Images/employee_commission.webp";
import unlimitedCustomer from "../../../../assets/Images/Unlimited Customer.webp";
import adminPage from "../../../../assets/Images/Admin’s Page and Calendar View (Free).webp";
import dashboard from "../../../../assets/Images/business dashboard_1.webp";
import specialDays from "../../../../assets/Images/Special Days for Employees (PRO).webp";
import customRoles from "../../../../assets/Images/Custom Roles (PRO).webp";
import smsEmail from "../../../../assets/Images/SMS and Email Notifications (Free).webp";
import invoice from "../../../../assets/Images/Invoices.webp";
import taxes from "../../../../assets/Images/taxes.webp";
import employeeTime from "../../../../assets/Images/Employees Time Zone.webp";
import companyDays from "../../../../assets/Images/Company Days Off.webp";

import multipleServices from "../../../../assets/Images/Multiple Services (Free).webp";
import managingAppts from "../../../../assets/Images/Managing Appointments (Free).webp";
import groupBooking from "../../../../assets/Images/Group Booking (PRO).webp";
import extras from "../../../../assets/Images/Extras_(PRO).webp";
import multipleLocations from "../../../../assets/Images/Multiple Locations (PRO).webp";
import coupons from "../../../../assets/Images/Coupons (PRO).webp";
import recurringAppts from "../../../../assets/Images/Recurring Appointments (PRO).webp";
import rescheduling from "../../../../assets/Images/Rescheduling and Canceling.webp";
import apptNotes from "../../../../assets/Images/Appointment Notes.webp";
import depositPayment from "../../../../assets/Images/Deposit payment(Free).webp";
import refundPayment from "../../../../assets/Images/Refund Option.webp";

const Features = ({ searchTerm = "" }) => {
  const features = [
    { title: "Resources", image: resources, description: "Set up resources like rooms, equipment, vehicles, or other limited assets to be shared across employees, services, or locations. When a specific resource is not available, Trafft will automatically remove that time slot from your booking form." },
    { title: "Employee Commission", image: empCommision, description: "This feature simplifies and streamlines the calculation of employee payouts. You can apply global settings or configure custom commissions for each employee." },
    { title: "Unlimited Customers", image: unlimitedCustomer, description: "Admin and employees have the ability to efficiently manage customers, edit their information, track loyal customers, and import/export customer lists." },
    { title: "Admin's Page and Calendar View", image: adminPage, description: "Admin's page can be used by account owners and each employee, depending on the role settings. In addition, Admin can view all bookings with breakdowns by employees in the overview calendar." },
    { title: "Insightful Dashboard", image: dashboard, description: "The KPI Dashboard provides insights into your business's performance. Widgets display key metrics such as the number of new customers, revenue generated during a specific period, employee occupancy, daily occupancy, and other important data for a successful business." },
    { title: "Special Days for Employees", image: specialDays, description: "The special days feature allows you to set customized working schedules for specific employees on one or more days. This overrides the employees' general working schedules, ensuring flexibility when needed." },
    { title: "Custom Roles", image: customRoles, description: "Manage and create different roles for your employees. For example, limit the permissions and pages your users can access and create different levels of authority and management within your team." },
    { title: "SMS and Email Notifications", image: smsEmail, description: "Customize and modify email and SMS notifications for different events, such as upcoming appointments, appointment follow-ups, and status changes." },
    { title: "Invoices", image: invoice, description: "Export invoices or send them directly to customers once they have completed payment for services. Choose from four invoice templates, customize them with your logo and colors, and adjust settings such as invoice title and number. The invoice page provides a comprehensive list of all transactions conducted in Trafft." },
    { title: "Taxes", image: taxes, description: "From the admin dashboard, easily create and manage taxes related to your service prices. Add taxes to the price or include taxes within the price, and specify whether the tax should be set as default, applied to all services, or applied to all extras." },
    { title: "Employees Time Zone", image: employeeTime, description: "Each team member can define their preferred Time Zone within the platform, enabling seamless collaboration and harmonious workflow." },
    { title: "Company Days Off", image: companyDays, description: "Set global company days off that will be applied to all employees." },
    { title: "Multiple Services", image: multipleServices, description: "Managing multiple services and service categories is effortless with Trafft. You have the flexibility to edit the appearance, locations, duration, price, taxes, and even create hidden (private) services for specific needs." },
    { title: "Managing Appointments", image: managingAppts, description: "From the admin page, you can easily create, browse, and edit appointments, as well as change their statuses. Exporting data of your appointments or customers is also a simple process." },
    { title: "Group Booking", image: groupBooking, description: "If you need to host sessions for groups, Trafft allows you to define the minimum and maximum available slots for each appointment, ensuring smooth group bookings." },
    { title: "Extras", image: extras, description: "To provide additional services and up-sell to your clients, you can add Extras to your existing services. Extras can extend the duration, increase the price, or even be offered for free without affecting the allotted time." },
    { title: "Multiple Locations", image: multipleLocations, description: "With Trafft, managing businesses across multiple locations, even in different cities or time zones, is a breeze. You can efficiently handle all locations within a single tool, while employees have the flexibility to work in various places." },
    { title: "Coupons", image: coupons, description: "Offering discounts or free appointments to your customers is hassle-free with Trafft. Simply define the value of each coupon to provide exclusive deals." },
    { title: "Recurring Appointments", image: recurringAppts, description: "Recurring Appointments feature enables customers to easily book appointments that repeat. They can select the date and time for the first appointment and then specify the type of recurrence and the number of repeats, all in a single booking process." },
    { title: "Rescheduling and Canceling", image: rescheduling, description: "Customer profiles and email notifications offer convenient options for customers to cancel or reschedule appointments with just a few clicks. This reduces no-shows and ensures smooth appointment management." },
    { title: "Appointment Notes", image: apptNotes, description: "Add notes about an appointment and have all appointment details in one place." },
    { title: "Deposit Payment", image: depositPayment, description: "When deposit payments are set, customers will be required to pay a certain amount during the booking, while the remaining balance can be paid on the spot. Trafft allows you to add fixed or variable prices for deposits and enables deposit options for all services or individual ones." },
    { title: "Refund Payment", image: refundPayment, description: "Increase bookings and build customer trust by offering your customers a refund in the case of cancellation." },
  ];

  const filterItems = (items) => {
    if (!searchTerm.trim()) return items;
    return items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const filteredFeatures = filterItems(features);

  return (
    <>
      {searchTerm && filteredFeatures.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No results found for "{searchTerm}"</p>
        </div>
      )}

      {filteredFeatures.length > 0 && (
        <>
          <h2 className="text-4xl font-bold mb-16">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFeatures.map((item, index) => (
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

export default Features;
