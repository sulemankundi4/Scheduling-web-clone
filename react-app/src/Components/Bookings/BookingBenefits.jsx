import React from "react";
import bookingCore from "../../assets/Images/Booking Core_01.webp";
import bookingCore2 from "../../assets/Images/Booking Core_02.webp";
import bufferSettings from "../../assets/Images/Booking Core_03.webp";
import groupBookingImage from "../../assets/Images/Booking Core_04.webp";
const BookingBenefits = () => {
  return (
    <div className="bg-white">
      {/* Section 1 */}
      <div className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-16">Streamline your booking and scheduling process</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={bookingCore} alt="Booking Benefits" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Save time with effortless online booking</h3>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">Forget about phone calls, notebooks, and back-and-forth communication with clients to book a single appointment. Streamline your booking process with Trafft and save several hours per day. Trafft not only helps you book appointments but allows you to configure everything to the last detail. Edit or delete appointments, search through the list from a convenient panel or export the appointment list to a CSV.</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Showcase your services on your branded booking page</h2>
            <p className="text-gray-700 text-base leading-relaxed">Present your services in the best possible way on your booking page. Divide services into categories, add service name and image, select employees that provide the service, set duration and price, customize the look, and add a description your customers can read and get more information about the service.</p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={bookingCore2} alt="Showcase Services" className="max-w-full w-[500px]" />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={bufferSettings} alt="Buffer Settings" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Add buffer time before or after the appointments</h3>
            <p className="text-gray-700 text-base leading-relaxed">If you and your employees need time before or after a service to prepare or clean everything up, you can add buffer time, and that time slot will not be available for booking.</p>
            <p className="text-gray-700 text-base mt-4 leading-relaxed">To ensure your customers appear on the scheduled appointment, add deposit payments and ask for a certain amount upfront. Also, if needed, you can add taxes to some services.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Book recurring or group appointments</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">Enable the recurring appointments option and give your clients a chance to immediately book an appointment that repeats. Configure upfront how often you want the appointments to repeat, limit the number of recurring appointments, and set up everything related to payments.</p>
            <p className="text-gray-700 text-base leading-relaxed">With Trafft, you can offer group appointments and set the minimum and maximum number of attendees. And if you have a service you want to offer only to particular customers, enable the private service option and create an appointment only for those customers.</p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={groupBookingImage} alt="Group Booking" className="max-w-full w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBenefits;
