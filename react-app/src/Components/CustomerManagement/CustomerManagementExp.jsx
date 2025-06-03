import React from "react";
import customerMangement1 from "../../assets/Images/Customer Management_01.webp";
import customerMangement2 from "../../assets/Images/Customer Management_02.webp";
import customerMangement3 from "../../assets/Images/Customer Management_03.webp";
const CustomerManagementExp = () => {
  return (
    <div className="bg-white">
      {/* Section 1 */}
      <div className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-16">Maximize your customer experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={customerMangement1} alt="Booking Benefits" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Manage all customers from a single dashboard</h3>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">Creating customer lists has never been easier. Add new customers, edit, or delete existing ones with just a few clicks. Say goodbye to the hassle of searching through multiple sheets and documents for that one name you need. Simply select your existing lists and effortlessly drag and drop them into Trafft. The process is just as seamless when exporting lists from Trafft. This streamlines customer management, saving you valuable hours each day.</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get to really know your customers</h2>
            <p className="text-gray-700 text-base leading-relaxed">With customer stats that Trafft provides, you can see how many appointments every customer booked and what their favorite services and employees are. Use this information to surprise your loyal customers with a coupon or send them birthday greetings to build relationships that last.</p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={customerMangement2} alt="Showcase Services" className="max-w-full w-[500px]" />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={customerMangement3} alt="Buffer Settings" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Keep your customers engaged and boost your business</h3>
            <p className="text-gray-700 text-base leading-relaxed">Offer your customers the convenience of 24/7 booking and boost your bookings by up to 20%. Once customers schedule an appointment with you, they can sync their calendar with Trafft, and see all their appointments with a single look at the calendar. Additionally, you can increase customer loyalty by sending automated SMS and email reminders, notifications, and follow-ups and keeping your customers informed every step of the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerManagementExp;
