import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="cursor-pointer bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left h-full transform transition-transform duration-300 ease-in-out hover:scale-105">
      <img src={image} alt={title} className="w-full h-auto mb-4 rounded-md" />
      <h3 className="text-lg font-semibold text-[#1D2442] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Card;
