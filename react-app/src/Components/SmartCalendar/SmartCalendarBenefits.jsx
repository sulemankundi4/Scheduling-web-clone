import React from "react";
import calendar from "../../assets/Images/Calendar.webp";
import timeZones from "../../assets/Images/TimeZones.webp";
import profit from "../../assets/Images/Profit.webp";
import location from "../../assets/Images/Location.webp";
const SmartCalendarBenefits = () => {
  return (
    <div className="bg-white">
      {/* Section 1 */}
      <div className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-16">Organize your work days with ease and flexibility</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={calendar} alt="Booking Benefits" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Have all your booked appointments in one calendar</h3>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">Add services and available time slots, set up your and your team’s schedules and working hours, and have a daily, weekly, or monthly overview of all appointments in one calendar. Connect your Google or Outlook Calendar with Trafft, and the booked time slots in your personal calendar will be automatically marked as unavailable time slots in the Trafft calendar. To avoid any last-minute bookings and cancellations, you can set a minimum time required before booking, canceling, or rescheduling appointments.</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Schedule meetings in multiple time zones</h2>
            <p className="text-gray-700 text-base leading-relaxed">Create schedules in your time zone, and when your clients book appointments, the available times will be automatically shown in their own time zone. That helps avoid confusion during the scheduling process and prevents misunderstandings or missed appointments. Trafft also has integrations with Zoom and Google Meet, so you can easily hold online appointments.</p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={timeZones} alt="Showcase Services" className="max-w-full w-[500px]" />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={profit} alt="Buffer Settings" className="max-w-full w-[500px]" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Upsell services and gain more profit</h3>
            <p className="text-gray-700 text-base leading-relaxed">Offer your clients additional services during the booking process or give them the option to add extra durations or items that can be combined with the service they are booking. When your clients book an appointment, they will see these additional services available to enhance their experience. This way, you can ensure customers have everything they need for a well-rounded experience.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#f7f9fb] py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Manage multiple business locations</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">Manage all your business locations effortlessly with Trafft. Set up custom schedules and manage bookings for each location from a single dashboard. Additionally, use Trafft’s days off and special days features and easily make all the necessary changes in your team’s schedules. Whether you or your team members require a day off or won't be available for a certain period, you can easily make the necessary adjustments through Trafft. This ensures that those specific hours are not available for booking, streamlining your scheduling process.</p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={location} alt="Group Booking" className="max-w-full w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartCalendarBenefits;
