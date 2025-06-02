import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { User, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const TestimonialSection = () => {
  return (
    <section className="bg-[#050F2C] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop spaceBetween={30} slidesPerView={1} className="w-full">
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
  );
};

export default TestimonialSection;
