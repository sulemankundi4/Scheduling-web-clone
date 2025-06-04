import React from "react";
import paymentProcessing from "../../assets/Images/Payment Processing_01.webp";
import paymentProcessing2 from "../../assets/Images/Payment Processing_02.webp";
import paymentProcessing3 from "../../assets/Images/Payment Processing_03.webp";
import paymentProcessing4 from "../../assets/Images/Payment Processing_04.webp";
const PaymentProcessingManamgement = () => {
  return (
    <div className="bg-white">
      {/* Section 1 */}
      <div className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-16">Simplify payment processing and get paid faster</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={paymentProcessing} alt="Booking Benefits" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Get paid for your services always and on time</h3>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">Forget about phone calls, notebooks, and back-and-forth communication with clients to book a single appointment. Streamline your booking process with Trafft and save several hours per day. Trafft not only helps you book appointments but allows you to configure everything to the last detail. Edit or delete appointments, search through the list from a convenient panel or export the appointment list to a CSV.</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Reduce no-shows with deposit payments</h2>
            <p className="text-gray-700 text-base leading-relaxed">Present your services in the best possible way on your booking page. Divide services into categories, add service name and image, select employees that provide the service, set duration and price, customize the look, and add a description your customers can read and get more information about the service.</p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={paymentProcessing2} alt="Showcase Services" className="max-w-full w-[500px]" />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={paymentProcessing3} alt="Buffer Settings" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Create and deliver invoices automatically</h3>
            <p className="text-gray-700 text-base leading-relaxed">Trafft helps automate your payment processes, ensuring customers can easily and timely pay for your services. Enable the automatic invoice option, and it will be sent to customers along with their appointment notifications. Trafft also provides simple tax management for your services. Choose whether to include the tax in the price or add it separately, set it as the default for all services or apply it selectively to specific services and extras.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Have a clear overview of your transactions</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">Managing finances has never been easier. Trafft dashboard provides a clear insight into the payment status for each service, appointment, customer, and employee. That way, you will always know how, where and when the payment is coming. Additionally, Trafft offers an overview of the total revenue generated over your specified time period.</p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={paymentProcessing4} alt="Group Booking" className="max-w-full w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessingManamgement;
