import React from "react";
import businessDashboard01 from "../../assets/Images/business dashboard_1.webp";
import businessDashboard02 from "../../assets/Images/business dashboard_2.webp";
import businessDashboard03 from "../../assets/Images/business dashboard_3.webp";
const BusinessDashboardBenefits = () => {
  return (
    <div className="bg-white">
      {/* Section 1 */}
      <div className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-16">Monitor your business performance easily</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={businessDashboard01} alt="Booking Benefits" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Learn about your business occupancy and earned revenue</h3>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">Keeping a detailed record of your business performance helps you have a clear insight into where your business is heading and what you can do to increase sales. With a quick glance at the Trafft dashboard, you'll have access to information on booked and canceled appointments, service occupancy rates, and revenue generated within your specified timeframe.</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Discover your returning customer rate</h2>
            <p className="text-gray-700 text-base leading-relaxed">The Trafft dashboard offers valuable information on the number of new customers and the percentage of returning customers, enabling you to effortlessly monitor your retention rate. You can access data for up to six previous months and have a comprehensive overview of your customer trends over time.</p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={businessDashboard02} alt="Showcase Services" className="max-w-full w-[500px]" />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={businessDashboard03} alt="Buffer Settings" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Easily identify your most in-demand employees and services</h3>
            <p className="text-gray-700 text-base leading-relaxed">Under the Performance section in the Trafft dashboard, you can easily track the number of bookings and revenue generated by each employee during the selected period. Additionally, you can monitor the occupancy rate of each service and identify the most in-demand service within your business.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboardBenefits;
