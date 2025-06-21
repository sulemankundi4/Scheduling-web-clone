import React from "react";

import zoom from "../../../../assets/Images/zoom.webp";
import google from "../../../../assets/Images/google-calendar.webp";
import outlook from "../../../../assets/Images/outlook-calendar.webp";
import apple from "../../../../assets/Images/apple.webp";
import square from "../../../../assets/Images/square.webp";
import paypal from "../../../../assets/Images/paypal.webp";
import stripe from "../../../../assets/Images/stripe.webp";
import mollie from "../../../../assets/Images/mollie.webp";
import authorize from "../../../../assets/Images/authorize.webp";

import wordpress from "../../../../assets/Images/wordpress.webp";
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

const Integrations = ({ searchTerm = "" }) => {
  const integration = [
    { title: "Zoom Integration", image: zoom, description: "When booking an appointment, Trafft automatically generates Zoom meetings for the linked account. Both the customer and employee will receive a booking confirmation email containing the Zoom meeting details, ensuring seamless virtual meetings." },
    { title: "Google Calendar and Google Meet", image: google, description: "Sync your and your employees' personal and professional events by connecting Google calendars. Enable Google Meet if you want to automatically add meeting links to Google Events." },
    { title: "Outlook Calendar and Microsoft Teams", image: outlook, description: "Sync your and your employees personal and professional events by connecting multiple Outlook calendars. Schedule virtual meetings with ease using MS Teams." },
    { title: "Apple Calendar", image: apple, description: "Sync your or your employees' working hours with Apple Calendar to prevent scheduling conflicts between personal and business calendars. Trafft updates your Apple Calendar with all appointments, ensuring Trafft won't accept reservations during your busy times." },
    { title: "Square Payment", image: square, description: "Accept secure online payments for your appointment bookings with Square. Available in both free and paid plans." },
    { title: "PayPal", image: paypal, description: "Allow your customers to make quick payments with PayPal at the moment of booking with just one click, ensuring a seamless payment experience." },
    { title: "Stripe", image: stripe, description: "By enabling and integrating Stripe, your customers can pay with any credit or debit card at the time of booking. For seamless payment processing, they also have the option to use Google Pay or Apple Pay via Stripe." },
    { title: "Mollie", image: mollie, description: "Seamlessly accept online payments from customers during the booking process through Trafft's integration with the Mollie payment gateway. Please note that Mollie supports transactions in Euro currency only." },
    { title: "Authorize.Net", image: authorize, description: "With Authorize.net integration, you can accept credit cards, contactless payments, and eChecks in person and on the go. Integrate with Trafft to provide customers with the convenience of paying when booking their appointments." },
    { title: "WordPress", image: wordpress, description: "Download the Trafft WordPress plugin for free and add a booking form to any page of your website." },
    { title: "Reserve with Google", image: reserveGoogle, description: "Activate Trafft's integration with Reserve with Google and start accepting bookings directly from Google Search and Google Maps." },
    { title: "Facebook Pixel", image: facebookPixel, description: "Enhance your advertising efforts by adding a Facebook Pixel code to your Trafft booking page. This enables you to track conversions from Facebook ads and optimize your advertising strategies based on the collected data." },
    { title: "Google Analytics", image: googleAnalytics, description: "Gain valuable insights into your visitors' behavior by adding a simple Google Analytics tracking code to your Trafft booking page." },
    { title: "Google Tag Manager", image: googleAds, description: "Effortlessly incorporate a Google Tag Manager tracking code into your Trafft booking page to effectively monitor and track visitors' activity." },
    { title: "Mailchimp", image: mailchimp, description: "Streamline your lead nurturing and retention efforts by seamlessly transferring customers' data, including names and emails, from your Trafft account to MailChimp in just a few clicks." },
    { title: "SendFox", image: sendfox, description: "Expand your audience and create targeted email campaigns using SendFox. Automatically transfer customers' data from Trafft to SendFox for effective customer engagement." },
    { title: "WhatsApp", image: whatsapp, description: "Improve customer communication and reduce no-shows by integrating Trafft with WhatsApp. Send notifications about upcoming appointments to your customers and employees through WhatsApp, enhancing customer retention and engagement." },
    { title: "Acumbamail", image: acumbamail, description: "Automate communication with your customers through Trafft's integration with Acumbamail. Create customer lists and easily send email and SMS campaigns." },
    { title: "API", image: api, description: "Empower your business with our API, giving you the flexibility to build custom integrations and shape a booking experience tailored to your needs." },
    { title: "Zapier", image: zapier, description: "Utilize Zapier integration to connect with a vast array of third-party applications supported by Zapier. Seamlessly send data from Trafft, such as appointment bookings and rescheduling, to other connected applications." },
    { title: "WebHooks", image: webhooks, description: "Leverage the power of WebHooks to connect with other web applications and effortlessly send automated messages and updates to custom URLs. Seamlessly transfer data from Trafft to any other connected application using WebHooks." },
  ];

  const filterItems = (items) => {
    if (!searchTerm.trim()) return items;
    return items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const filteredIntegrations = filterItems(integration);

  return (
    <>
      {searchTerm && filteredIntegrations.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No results found for "{searchTerm}"</p>
        </div>
      )}

      {filteredIntegrations.length > 0 && (
        <>
          <h2 className="text-4xl font-bold mb-16">Integrations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredIntegrations.map((item, index) => (
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

export default Integrations;
