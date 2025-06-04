import React from "react";
import businessProcessAutomation01 from "../../assets/Images/Business Process Automation_01.webp";
import businessProcessAutomation02 from "../../assets/Images/Business Process Automation_02.webp";
import businessProcessAutomation03 from "../../assets/Images/Business Process Automation_03.webp";
const BusinessProcessAutomationBenefits = () => {
  return (
    <div className="bg-white">
      {/* Section 1 */}
      <div className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-16">Reap the benefits of business process automation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={businessProcessAutomation01} alt="Booking Benefits" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Reduce no-shows with automatic notifications</h3>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">Keep your clients up to date about the status of their appointments with automatic SMS, Email, or WhatsApp notifications. Send reminders, follow-ups, loyalty boost messages and other action-triggered or scheduled notifications. That way, you will keep your employees and customers engaged and informed and avoid misunderstandings.</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Connect your productivity tools with Trafft</h2>
            <p className="text-gray-700 text-base leading-relaxed">With customer stats that Trafft provides, you can see how many appointments every customer booked and what their favorite services and employees are. Use this information to surprise your loyal customers with a coupon or send them birthday greetings to build relationships that last.</p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={businessProcessAutomation02} alt="Showcase Services" className="max-w-full w-[500px]" />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={businessProcessAutomation03} alt="Buffer Settings" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Get paid for your services easily and on time</h3>
            <p className="text-gray-700 text-base leading-relaxed">Automate payment processes completely. Customize invoice templates with your logo and brand's colors and automatically send them to your customers. Also, enable your customers to pay for the services through secure payment gateways - PayPal, Stripe, Mollie and Authorize.net.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProcessAutomationBenefits;
