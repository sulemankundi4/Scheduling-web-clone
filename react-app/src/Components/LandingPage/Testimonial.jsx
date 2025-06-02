import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { User, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bookingIcon from "../../assets/Images/light-booking.webp";

const testimonials = [
  {
    name: "Burak D.",
    content: "If you want to manage appointments in your company, you can't and shouldn't avoid this appointment schedule software. The simple and intuitive user interface and the management of multiple users is what puts Trafft ahead of the competition. It's really easy to use and very customizable. And then on top of that, the price, simply unbeatable!",
  },
  {
    name: "Sophia M.",
    content: "Trafft has completely changed the way I manage bookings. I love how customizable it is and how easy it is for clients to schedule with me.",
  },
  {
    name: "James K.",
    content: "The platform is smooth, reliable, and intuitive. It saves me hours every week and my team loves using it.",
  },
];

const logos = ["https://trafft.com/static/logo1-light-42cfe13e5d872601930c750c890d3cc4.svg", "https://trafft.com/static/logo2-light-65ab0b49fbe9877a0203b2b48b5cf18e.svg", "https://trafft.com/static/logo4-light-91ed716d35bd2313be214147058a2f9c.svg", "https://trafft.com/static/logo1-light-42cfe13e5d872601930c750c890d3cc4.svg", "https://trafft.com/static/logo1-light-42cfe13e5d872601930c750c890d3cc4.svg", "https://trafft.com/static/logo1-light-42cfe13e5d872601930c750c890d3cc4.svg"];

const TestimonialSection = () => {
  return (
    <>
      <section className="bg-[#050F2C] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} loop autoplay={{ delay: 5000 }} spaceBetween={30} slidesPerView={1} className="w-full">
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#0A153A] text-white rounded-xl px-8 py-10 max-w-3xl mx-auto shadow-xl min-h-[400px] flex flex-col justify-center transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-600 p-4 rounded-full">
                      <User size={32} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                  <div className="flex justify-center mb-4 text-yellow-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={16} fill="#facc15" stroke="#facc15" className="mx-[1px]" />
                      ))}
                  </div>
                  <p className="text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">{testimonial.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-[#050F2C] py-12">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h3 className="text-gray-400 text-4xl font-medium mb-10">Featured on</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-8 opacity-70 hover:opacity-100 cursor-pointer transition" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050F2C] text-white py-20 px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          The most intuitive and easy-to-use <br />
          online booking system
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">No training is needed to use Trafft. You and your customers will love how simple it is to use this appointment scheduling tool</p>
      </section>

      <section className="bg-[#050F2C] py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Image takes more width */}
          <div className="w-full lg:w-7/12">
            <img
              src={bookingIcon} // Replace with your image path
              alt="Appointment Booking"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>

          {/* Feature Cards take less space */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            {[
              {
                title: "Responsive",
                description: "Manage your business on your mobile while you are lying on your cozy couch. Let your clients book appointments the same way.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M7 16V8a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                title: "Customizable",
                description: "Choose from predefined light and dark themes and fine-tune them to your preferences. Create a booking page that aligns with your brand.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2h-1.382a2 2 0 00-1.342.447L12 6l-3.276-2.553A2 2 0 007.382 3H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L6 10l-1.553 3.276A2 2 0 004 14.618V16a2 2 0 002 2h1.382a2 2 0 001.342-.447L12 14l3.276 2.553A2 2 0 0016.618 17H18a2 2 0 002-2v-1.382a2 2 0 00-.447-1.342L18 10z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A153A] p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1D2442] p-3 rounded-lg">{item.icon}</div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
