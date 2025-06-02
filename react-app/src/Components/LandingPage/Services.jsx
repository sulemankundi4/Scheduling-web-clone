import React, { useState } from "react";
import { BrainCircuit, GraduationCap, Scissors, UserRound, Dumbbell, FileText, HeartPulse, CalendarCheck, BookOpen, School, CarFront, BriefcaseBusiness } from "lucide-react";
import bgImage from "../../assets/Images/bg-image.webp";
import brand1 from "../../assets/Images/brand1.webp";
import brand2 from "../../assets/Images/perfect-booking-experience-2.webp";
import brand3 from "../../assets/Images/perfect-booking-experience-3.webp";
import brand4 from "../../assets/Images/perfect-booking-experience-4.webp";
import brand5 from "../../assets/Images/perfect-booking-experience-5.webp";
import brand6 from "../../assets/Images/perfect-booking-experience-6.webp";
import brand7 from "../../assets/Images/perfect-booking-experience-7.webp";
import brand8 from "../../assets/Images/perfect-booking-experience-8.webp";
import { Calendar, Rocket, TrendingUp, ClipboardCheck } from "lucide-react";
const SERVICES = [
  {
    id: "coaching",
    label: "Coaching & Consulting",
    icon: <BrainCircuit size={18} />,
    cards: [
      { icon: <CalendarCheck size={20} />, title: "Life Coaching", text: "Empower clients with personalized sessions and flexible scheduling." },
      { icon: <BriefcaseBusiness size={20} />, title: "Business Consulting", text: "Help teams optimize processes and drive results through smart booking." },
      { icon: <BookOpen size={20} />, title: "Executive Mentoring", text: "Offer structured mentoring programs with efficient time slots." },
      { icon: <CalendarCheck size={20} />, title: "Financial Coaching", text: "Simplify financial planning sessions with online scheduling." },
    ],
  },
  {
    id: "education",
    label: "Education & Teaching",
    icon: <GraduationCap size={18} />,
    cards: [
      { icon: <UserRound size={20} />, title: "Private Tutors", text: "Streamline private classes with automated bookings." },
      { icon: <School size={20} />, title: "Language Teachers", text: "Offer remote sessions with clear availability slots." },
      { icon: <GraduationCap size={20} />, title: "Universities", text: "Enable online booking for lectures or academic advising." },
      { icon: <CarFront size={20} />, title: "Driving Schools", text: "Let students schedule behind-the-wheel training with ease." },
    ],
  },
  {
    id: "salons",
    label: "Salons",
    icon: <Scissors size={18} />,
    cards: [
      { icon: <UserRound size={20} />, title: "Hair Salons", text: "Enable clients to book haircuts, colors, and styles." },
      { icon: <UserRound size={20} />, title: "Nail Technicians", text: "Automate nail appointments and reduce no-shows." },
      { icon: <UserRound size={20} />, title: "Barbershops", text: "Simplify chair bookings and walk-ins." },
      { icon: <UserRound size={20} />, title: "Massage Therapists", text: "Let clients choose from multiple services with defined slots." },
    ],
  },
  {
    id: "personal",
    label: "Personal Services",
    icon: <UserRound size={18} />,
    cards: [
      { icon: <UserRound size={20} />, title: "Life Coaches", text: "Deliver transformation with structured scheduling." },
      { icon: <UserRound size={20} />, title: "Fitness Trainers", text: "Set your availability and allow clients to choose what works." },
      { icon: <UserRound size={20} />, title: "Astrologers", text: "Offer virtual sessions with seamless booking flow." },
      { icon: <UserRound size={20} />, title: "Makeup Artists", text: "Automate bridal or event bookings." },
    ],
  },
  {
    id: "sports",
    label: "Sports & Training",
    icon: <Dumbbell size={18} />,
    cards: [
      { icon: <Dumbbell size={20} />, title: "Gyms", text: "Book personal training or classes easily." },
      { icon: <Dumbbell size={20} />, title: "Yoga Instructors", text: "Manage class slots and special events effortlessly." },
      { icon: <Dumbbell size={20} />, title: "Martial Arts", text: "Allow parents or students to book recurring sessions." },
      { icon: <Dumbbell size={20} />, title: "Swimming Coaches", text: "Create group or private session slots for swimmers." },
    ],
  },
  {
    id: "government",
    label: "Government & Administration",
    icon: <FileText size={18} />,
    cards: [
      { icon: <FileText size={20} />, title: "Permit Offices", text: "Schedule citizen appointments for paperwork or licenses." },
      { icon: <FileText size={20} />, title: "Public Services", text: "Let constituents book office hours efficiently." },
      { icon: <FileText size={20} />, title: "Social Services", text: "Organize case management meetings." },
      { icon: <FileText size={20} />, title: "City Inspections", text: "Allow inspectors to track their daily bookings online." },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: <HeartPulse size={18} />,
    cards: [
      { icon: <HeartPulse size={20} />, title: "Therapists", text: "Let patients book appointments based on your availability." },
      { icon: <HeartPulse size={20} />, title: "Chiropractors", text: "Reduce administrative overhead with automated bookings." },
      { icon: <HeartPulse size={20} />, title: "Clinics", text: "Manage all patient flows from one scheduling dashboard." },
      { icon: <HeartPulse size={20} />, title: "Dentists", text: "Patients can select time slots from your custom calendar." },
    ],
  },
];

const Services = () => {
  const [active, setActive] = useState(SERVICES[0]);

  return (
    <>
      <section className="bg-[#050F2C] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">All service-based businesses can benefit from Trafft</h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">Trafft is simple yet powerful appointment scheduling software flexible enough to adapt to different industries and business types.</p>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Buttons */}
            <div className="flex flex-col gap-3 w-full lg:w-64">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActive(service)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                  ${active.id === service.id ? "bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-600 text-white/80"}`}
                >
                  {service.icon}
                  {service.label}
                </button>
              ))}
            </div>

            {/* Right Cards */}
            <div className="grid gap-6 sm:grid-cols-2 flex-1">
              {active.cards.map((card, index) => (
                <div key={index} className="bg-[#0B143D] rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 border border-white/5 flex flex-col gap-2">
                  <div className="text-blue-400">{card.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-gray-400">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition text-white text-sm">Explore {active.label}</button>
          </div>
        </div>
      </section>

      <section
        className="relative text-white py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="bg-black/50 absolute inset-0 z-0" /> Optional overlay */}
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 leading-snug">Trusted by thousands of companies</h2>
          <p className="text-3xl sm:text-5xl font-medium mb-16">around the world</p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
            <div className="text-center max-w-xs">
              <h3 className="text-5xl font-bold mb-2">50k+</h3>
              <p className="text-base sm:text-lg">Businesses and individual entrepreneurs from a variety of industries use our booking software solutions.</p>
            </div>
            <div className="text-center max-w-xs">
              <h3 className="text-5xl font-bold mb-2">8m+</h3>
              <p className="text-base sm:text-lg">Appointments and events worldwide have been processed with the help of our appointment booking software.</p>
            </div>
            <div className="text-center max-w-xs">
              <h3 className="text-5xl font-bold mb-2">$1.5m+</h3>
              <p className="text-base sm:text-lg">Worth of online payments for bookings is being processed via our online booking software monthly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050F2C] text-white py-20 px-8">
        <div className="max-w-7xl mx-auto bg-[#0A153A] rounded-2xl p-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Design a booking website that matches your brand</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-sm sm:text-base">Trafft comes with dark and light mode and eight base themes that you can further fine-tune and customize to make the look & feel of the booking process completely unique.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="rounded overflow-hidden shadow-lg">
              <img src={brand1} alt="Theme 1" className="w-full" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img src={brand2} alt="Theme 2" className="w-full" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img src={brand3} alt="Theme 3" className="w-full" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img src={brand4} alt="Theme 4" className="w-full" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img src={brand5} alt="Theme 5" className="w-full" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img src={brand6} alt="Theme 6" className="w-full" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img src={brand7} alt="Theme 7" className="w-full" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img src={brand8} alt="Theme 8" className="w-full" />
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition">Get started for free</button>
        </div>
      </section>

      <section className="bg-[#050F2C] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Focus on your work, we <br /> will take care of the rest
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-16 text-sm sm:text-base">Our online booking software helps you optimize your daily schedule and have more time to do what you do best.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Left Card */}
            <div className="bg-[#0A153A] p-6 rounded-xl text-left shadow-md">
              <div className="mb-4 flex flex-wrap justify-start gap-4">
                <img src="https://cdn-icons-png.flaticon.com/512/906/906338.png" className="w-8" alt="zapier" />
                <img src="https://cdn-icons-png.flaticon.com/512/888/888853.png" className="w-8" alt="gmail" />
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" className="w-8" alt="outlook" />
                <img src="https://cdn-icons-png.flaticon.com/512/888/888870.png" className="w-8" alt="meet" />
                <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png" className="w-8" alt="analytics" />
                <img src="https://cdn-icons-png.flaticon.com/512/888/888846.png" className="w-8" alt="zoom" />
                <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" className="w-8" alt="calendar" />
                <img src="https://cdn-icons-png.flaticon.com/512/888/888849.png" className="w-8" alt="paypal" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Connect your productivity tools with Trafft</h3>
              <p className="text-gray-400 text-sm">Trafft integrates with online tools like calendars, payments, Google Meet, Zoom, and more. If your tool isn’t here, let us know and we’ll do our best to support it.</p>
            </div>

            {/* Right Card */}
            <div className="bg-[#0A153A] p-6 rounded-xl text-left shadow-md flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-xl mb-2">Manage all the schedules in one calendar</h3>
                <p className="text-gray-400 text-sm">Forget about checking availability for each team member manually. Integrate your team's calendars with Trafft and manage all schedules in one place.</p>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-[#0A153A] p-6 rounded-xl text-left">
              <Calendar className="text-white mb-3" size={20} />
              <h4 className="font-semibold text-base mb-1">Save time</h4>
              <p className="text-gray-400 text-sm">Ditch paper bookings and let your clients schedule appointments online, freeing up hours for what matters most.</p>
            </div>
            <div className="bg-[#0A153A] p-6 rounded-xl text-left">
              <Rocket className="text-white mb-3" size={20} />
              <h4 className="font-semibold text-base mb-1">Boost productivity</h4>
              <p className="text-gray-400 text-sm">Minimize admin work and focus more on customer experience with streamlined scheduling.</p>
            </div>
            <div className="bg-[#0A153A] p-6 rounded-xl text-left">
              <TrendingUp className="text-white mb-3" size={20} />
              <h4 className="font-semibold text-base mb-1">Increase revenue</h4>
              <p className="text-gray-400 text-sm">Stay open 24/7. Let clients book anytime and watch your business grow without limits.</p>
            </div>
            <div className="bg-[#0A153A] p-6 rounded-xl text-left">
              <ClipboardCheck className="text-white mb-3" size={20} />
              <h4 className="font-semibold text-base mb-1">Improve satisfaction</h4>
              <p className="text-gray-400 text-sm">Give customers the power to book when it’s convenient for them—online and hassle-free.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
