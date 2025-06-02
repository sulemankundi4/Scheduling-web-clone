import React, { useState } from "react";
import { Instagram, Share2, Code2, Globe, QrCode, Search } from "lucide-react";

// Images to show on left
import imageInstagram from "../../assets/Images/instagram.webp";
import imageShare from "../../assets/Images/Sharebookinglink.webp";
import imageEmbed from "../../assets/Images/yourbookingwebsite.webp";
import imageTrafftPage from "../../assets/Images/BookingPage20byTrafft.webp";

const channels = [
  {
    id: "instagram",
    title: "Instagram",
    description: "Share your available hours and time slots in your Instagram story or bio for instant bookings.",
    image: imageInstagram,
    icon: <Instagram size={20} className="text-blue-600" />,
  },
  {
    id: "share",
    title: "Share booking link",
    description: "Get a booking link from Trafft and share it on Facebook, Twitter, LinkedIn, or via email.",
    image: imageShare,
    icon: <Share2 size={20} className="text-blue-600" />,
  },
  {
    id: "embed",
    title: "Embed",
    description: "Embed a booking form on any page of your website and allow customers to easily schedule.",
    image: imageEmbed,
    icon: <Code2 size={20} className="text-blue-600" />,
  },
  {
    id: "trafft",
    title: "Booking page by Trafft",
    description: "No website? Use a free Trafft-hosted booking page to take appointments easily.",
    image: imageTrafftPage,
    icon: <Globe size={20} className="text-blue-600" />,
  },
  {
    id: "qr",
    title: "Book with QR code",
    description: "Share QR codes that lead to your booking form for instant appointment access.",
    image: imageShare,
    icon: <QrCode size={20} className="text-blue-600" />,
  },
  {
    id: "google",
    title: "Reserve with Google",
    description: "Let customers book you directly via Google Search and Maps integration.",
    image: imageEmbed,
    icon: <Search size={20} className="text-blue-600" />,
  },
];

const BookingChannels = () => {
  const [active, setActive] = useState(channels[0]);

  return (
    <section className="bg-[#f9fafa] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1D2442] mb-16">All your booking channels</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          {/* Left Image */}
          <div className="flex-1 w-full max-w-[480px] mx-auto lg:mx-0 transition-all duration-500 ease-in-out">
            <img src={active.image} alt={active.title} className="rounded-xl w-full h-auto shadow-lg" />
          </div>

          {/* Right Cards */}
          <div className="flex-1 w-full grid sm:grid-cols-2 gap-6">
            {channels.map((channel) => (
              <div
                key={channel.id}
                onClick={() => setActive(channel)}
                className={`cursor-pointer border rounded-2xl px-6 py-8 text-center transition-all duration-300 ease-in-out
                  ${active.id === channel.id ? "border-blue-500 bg-blue-50 shadow-sm" : "border-gray-200 bg-white hover:shadow-md"}`}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#E8F0FF] rounded-full flex items-center justify-center">{channel.icon}</div>
                <h3 className={`text-sm font-semibold ${active.id === channel.id ? "text-blue-600" : "text-[#1D2442]"}`}>{channel.title}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingChannels;
