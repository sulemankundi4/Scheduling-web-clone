import React from "react";
import bg from "../../assets/Images/cta-img.webp";

const Cta = () => {
  return (
    <section className="bg-cover bg-center py-24 px-6 flex justify-center items-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-white text-[#121212] max-w-3xl p-10 rounded-md shadow-xl w-full">
        <h2 className="text-4xl font-bold mb-6">We’re here for you</h2>
        <p className="text-lg text-[#1d1f2b] mb-8">If you have any questions about Trafft features or if you’re experiencing any issues, feel free to contact our support team and they will provide you with the answer as soon as possible. Also, if you need any help during onboarding, our support team will be happy to help.</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#0056FF] hover:bg-[#0044cc] text-white font-semibold text-sm px-6 py-3 rounded-md">Book a Demo</button>
          <button className="border border-blue-600 text-blue-600 font-semibold text-sm px-6 py-3 rounded-md hover:bg-blue-50">Need help?</button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
