import React from "react";

import embededBookingForm from "../../../../assets/Images/Embeddable booking form.webp";
import bookingWebsite from "../../../../assets/Images/booking-website.webp";
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
import zoom from "../../../../assets/Images/zoom.webp";
import google from "../../../../assets/Images/google-calendar.webp";
import outlook from "../../../../assets/Images/outlook-calendar.webp";
import apple from "../../../../assets/Images/apple.webp";
import square from "../../../../assets/Images/square.webp";
import paypal from "../../../../assets/Images/paypal.webp";
import stripe from "../../../../assets/Images/stripe.webp";
import mollie from "../../../../assets/Images/mollie.webp";
import authorize from "../../../../assets/Images/authorize.webp";

import googleAds from "../../../../assets/Images/tag-manager.webp";
import reserveGoogle from "../../../../assets/Images/reserve with google.webp";
import facebookPixel from "../../../../assets/Images/facebook-pixel.webp";
import googleAnalytics from "../../../../assets/Images/google-analytics.webp";
import whatsapp from "../../../../assets/Images/whatsapp.webp";
import acumbamail from "../../../../assets/Images/acumba.webp";
import sendfox from "../../../../assets/Images/sendfox.webp";
import mailchimp from "../../../../assets/Images/mailchimp.webp";

import api from "../../../../assets/Images/API.webp";
import zapier from "../../../../assets/Images/zapier.webp";
import webhooks from "../../../../assets/Images/webhoocks.webp";

const All = ({ searchTerm = "" }) => {
  const bookingWebsiteAndFormBuilder = [
    // Booking website and form builder
    // Booking website and form builder

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

  const AdminAndEmployeeManagement = [
    { title: "Resources", image: resources, description: "Set up resources like rooms, equipment, vehicles, or other limited assets to be shared across employees, services, or locations. When a specific resource is not available, Trafft will automatically remove that time slot from your booking form." },
    { title: "Employee Commission", image: empCommision, description: "This feature simplifies and streamlines the calculation of employee payouts. You can apply global settings or configure custom commissions for each employee." },
    { title: "Unlimited Customers", image: unlimitedCustomer, description: "Admin and employees have the ability to efficiently manage customers, edit their information, track loyal customers, and import/export customer lists." },
    { title: "Admin's Page and Calendar View", image: adminPage, description: "Admin's page can be used by account owners and each employee, depending on the role settings. In addition, Admin can view all bookings with breakdowns by employees in the overview calendar." },

    { title: "Insightful Dashboard", image: dashboard, description: "The KPI Dashboard provides insights into your business's performance. Widgets display key metrics such as the number of new customers, revenue generated during a specific period, employee occupancy, daily occupancy, and other important data for a successful business." },
    { title: "Special Days for Employees", image: specialDays, description: "The special days feature allows you to set customized working schedules for specific employees on one or more days. This overrides the employees' general working schedules, ensuring flexibility when needed." },
    { title: "Custom Roles", image: customRoles, description: "Manage and create different roles for your employees. For example, limit the permissions and pages your users can access and create different levels of authority and management within your team." },
    { title: "SMS and Email Notifications", image: smsEmail, description: "Customize and modify email and SMS notifications for different events, such as upcoming appointments, appointment follow-ups, and status changes." },

    ////////////////////////////

    { title: "Invoices", image: invoice, description: "Export invoices or send them directly to customers once they have completed payment for services. Choose from four invoice templates, customize them with your logo and colors, and adjust settings such as invoice title and number. The invoice page provides a comprehensive list of all transactions conducted in Trafft." },
    { title: "Taxes", image: taxes, description: "From the admin dashboard, easily create and manage taxes related to your service prices. Add taxes to the price or include taxes within the price, and specify whether the tax should be set as default, applied to all services, or applied to all extras." },
    { title: "Employees Time Zone", image: employeeTime, description: "Each team member can define their preferred Time Zone within the platform, enabling seamless collaboration and harmonious workflow." },
    { title: "Company Days Off", image: companyDays, description: "Set global company days off that will be applied to all employees." },
  ];

  const Appointments = [
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

  const CalendarVideoConference = [
    { title: "Zoom Integration", image: zoom, description: "When booking an appointment, Trafft automatically generates Zoom meetings for the linked account. Both the customer and employee will receive a booking confirmation email containing the Zoom meeting details, ensuring seamless virtual meetings." },
    { title: "Google Calendar and Google Meet", image: google, description: "Sync your and your employees' personal and professional events by connecting Google calendars. Enable Google Meet if you want to automatically add meeting links to Google Events." },
    { title: "Outlook Calendar and Microsoft Teams", image: outlook, description: "Sync your and your employees personal and professional events by connecting multiple Outlook calendars. Schedule virtual meetings with ease using MS Teams." },
    { title: "Apple Calendar", image: apple, description: "Sync your or your employees' working hours with Apple Calendar to prevent scheduling conflicts between personal and business calendars. Trafft updates your Apple Calendar with all appointments, ensuring Trafft won't accept reservations during your busy times." },
  ];

  const Payment = [
    { title: "Square Payment", image: square, description: "Accept secure online payments for your appointment bookings with Square. Available in both free and paid plans." },
    { title: "PayPal", image: paypal, description: "Allow your customers to make quick payments with PayPal at the moment of booking with just one click, ensuring a seamless payment experience." },
    { title: "Stripe", image: stripe, description: "By enabling and integrating Stripe, your customers can pay with any credit or debit card at the time of booking. For seamless payment processing, they also have the option to use Google Pay or Apple Pay via Stripe." },
    { title: "Mollie", image: mollie, description: "Seamlessly accept online payments from customers during the booking process through Trafft's integration with the Mollie payment gateway. Please note that Mollie supports transactions in Euro currency only." },
    { title: "Authorize.Net", image: authorize, description: "With Authorize.net integration, you can accept credit cards, contactless payments, and eChecks in person and on the go. Integrate with Trafft to provide customers with the convenience of paying when booking their appointments." },
  ];

  const MarketingTools = [
    { title: "Reserve with Google", image: reserveGoogle, description: "Activate Trafft's integration with Reserve with Google and start accepting bookings directly from Google Search and Google Maps." },
    { title: "Facebook Pixel", image: facebookPixel, description: "Enhance your advertising efforts by adding a Facebook Pixel code to your Trafft booking page. This enables you to track conversions from Facebook ads and optimize your advertising strategies based on the collected data." },
    { title: "Google Analytics", image: googleAnalytics, description: "Gain valuable insights into your visitors' behavior by adding a simple Google Analytics tracking code to your Trafft booking page." },
    { title: "Google Tag Manager", image: googleAds, description: "Effortlessly incorporate a Google Tag Manager tracking code into your Trafft booking page to effectively monitor and track visitors' activity." },
    { title: "Mailchimp", image: mailchimp, description: "Streamline your lead nurturing and retention efforts by seamlessly transferring customers' data, including names and emails, from your Trafft account to MailChimp in just a few clicks." },
    { title: "SendFox", image: sendfox, description: "Expand your audience and create targeted email campaigns using SendFox. Automatically transfer customers' data from Trafft to SendFox for effective customer engagement." },
    { title: "WhatsApp", image: whatsapp, description: "Improve customer communication and reduce no-shows by integrating Trafft with WhatsApp. Send notifications about upcoming appointments to your customers and employees through WhatsApp, enhancing customer retention and engagement." },
    { title: "Acumbamail", image: acumbamail, description: "Automate communication with your customers through Trafft's integration with Acumbamail. Create customer lists and easily send email and SMS campaigns." },
  ];

  const ApiAndConnectors = [
    { title: "API", image: api, description: "Empower your business with our API, giving you the flexibility to build custom integrations and shape a booking experience tailored to your needs." },
    { title: "Zapier", image: zapier, description: "Utilize Zapier integration to connect with a vast array of third-party applications supported by Zapier. Seamlessly send data from Trafft, such as appointment bookings and rescheduling, to other connected applications." },
    { title: "WebHooks", image: webhooks, description: "Leverage the power of WebHooks to connect with other web applications and effortlessly send automated messages and updates to custom URLs. Seamlessly transfer data from Trafft to any other connected application using WebHooks." },
  ];

  // Filter function to search in title and description
  const filterItems = (items) => {
    if (!searchTerm.trim()) return items;
    return items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  // Filter all arrays
  const filteredBookingWebsiteAndFormBuilder = filterItems(bookingWebsiteAndFormBuilder);
  const filteredAdminAndEmployeeManagement = filterItems(AdminAndEmployeeManagement);
  const filteredAppointments = filterItems(Appointments);
  const filteredCalendarVideoConference = filterItems(CalendarVideoConference);
  const filteredPayment = filterItems(Payment);
  const filteredMarketingTools = filterItems(MarketingTools);
  const filteredApiAndConnectors = filterItems(ApiAndConnectors);

  // Check if any results exist
  const hasResults = filteredBookingWebsiteAndFormBuilder.length > 0 || filteredAdminAndEmployeeManagement.length > 0 || filteredAppointments.length > 0 || filteredCalendarVideoConference.length > 0 || filteredPayment.length > 0 || filteredMarketingTools.length > 0 || filteredApiAndConnectors.length > 0;

  return (
    <>
      {searchTerm && !hasResults && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No results found for "{searchTerm}"</p>
        </div>
      )}

      {filteredBookingWebsiteAndFormBuilder.length > 0 && (
        <>
          <h2 className="text-4xl font-bold mb-16">Booking website and form builder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBookingWebsiteAndFormBuilder.map((item, index) => (
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

      {filteredAdminAndEmployeeManagement.length > 0 && (
        <>
          <h2 className="text-4xl font-bold my-16">Admin and employee management</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAdminAndEmployeeManagement.map((item, index) => (
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

      {filteredAppointments.length > 0 && (
        <>
          <h2 className="text-4xl font-bold my-16">Appointments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAppointments.map((item, index) => (
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

      {filteredCalendarVideoConference.length > 0 && (
        <>
          <h2 className="text-4xl font-bold my-16">Calendar & Video Conference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCalendarVideoConference.map((item, index) => (
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

      {filteredPayment.length > 0 && (
        <>
          <h2 className="text-4xl font-bold my-16">Payment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPayment.map((item, index) => (
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

      {filteredMarketingTools.length > 0 && (
        <>
          <h2 className="text-4xl font-bold my-16">Marketing Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMarketingTools.map((item, index) => (
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

      {filteredApiAndConnectors.length > 0 && (
        <>
          <h2 className="text-4xl font-bold my-16">API & Connectors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredApiAndConnectors.map((item, index) => (
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

export default All;
