import React from "react";
import bg from "../../assets/Images/Footer-bg.webp";
import { Facebook, Instagram, Linkedin, Youtube, X, Music2 } from "lucide-react";
import logo from "../../assets/Images/quickly_booked_logo_all_blue.png";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center">
      <section className="py-24 px-6 text-center text-white relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">Your efficiency starts here.</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Join thousands of businesses that trust Trafft for their scheduling needs.</p>
          <button className="bg-[#0056FF] hover:bg-[#0044cc] px-8 py-4 text-white text-base font-semibold rounded-md transition transform hover:scale-105 shadow-lg hover:shadow-xl">Try Now For Free</button>
          <div className="w-full max-w-3xl mx-auto mt-12">
            <hr className="border-t border-white/10" />
          </div>
        </div>
      </section>

      <footer className="text-gray-300 pt-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Contact */}
            <div className="space-y-6">
              <div className="text-2xl font-bold flex items-center space-x-2">
                <img src={logo} alt="Trafft" className="w-50 h-12 object-contain" />
              </div>{" "}
              <div>
                <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
                <div className="space-y-2">
                  <p className="hover:text-white transition cursor-pointer">support@quicklybooked.app</p>
                  <p className="hover:text-white transition cursor-pointer">US: +1 302 307 2377</p>
                  <p className="hover:text-white transition cursor-pointer">UK: +44 7400 321338</p>
                  <p className="hover:text-white transition cursor-pointer">Europe: +381 60 4070 370</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-white transition">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Who's it for */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Who's it for</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white transition cursor-pointer">Beauty Salons</li>
                <li className="hover:text-white transition cursor-pointer">Barbershop</li>
                <li className="hover:text-white transition cursor-pointer">Cleaning services</li>
                <li className="hover:text-white transition cursor-pointer">Fitness & Sports</li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white transition cursor-pointer">Documentation</li>
                <li className="hover:text-white transition cursor-pointer">Suggest a feature</li>
                <li className="hover:text-white transition cursor-pointer">Become Affiliate Partner</li>
                <li className="hover:text-white transition cursor-pointer">Blog</li>
                <li className="hover:text-white transition cursor-pointer">About</li>
                <li className="hover:text-white transition cursor-pointer">Contact us</li>
                <li className="hover:text-white transition cursor-pointer">Investors</li>
                <li className="hover:text-white transition cursor-pointer">Partners</li>
                <li className="hover:text-white transition cursor-pointer">FAQ</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and features.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-500" />
                <button className="bg-[#0056FF] hover:bg-[#0044cc] px-4 py-2 text-white text-sm font-semibold rounded-md transition">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">All Rights Reserved ® Quickly Booked 2025</p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
