import React, { useState } from "react";
import All from "./TabsComponents/All";
import New from "./TabsComponents/New";
import Popular from "./TabsComponents/Popular";
import Features from "./TabsComponents/Features";
import Integrations from "./TabsComponents/Integrations";

const tabs = [
  { name: "All", key: "all" },
  { name: "New", key: "new" },
  { name: "Popular", key: "popular" },
  { name: "Features", key: "features" },
  { name: "Integrations", key: "integrations" },
  { name: "Booking website", key: "booking" }, // You can implement Booking tab later
];

const AllFeaturesCards = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "all":
        return <All searchTerm={searchTerm} />;
      case "new":
        return <New searchTerm={searchTerm} />;
      case "popular":
        return <Popular searchTerm={searchTerm} />;
      case "features":
        return <Features searchTerm={searchTerm} />;
      case "integrations":
        return <Integrations searchTerm={searchTerm} />;
      default:
        return <All searchTerm={searchTerm} />;
    }
  };

  return (
    <div className="py-10 px-4">
      <div className="max-w-7xl mx-auto relative py-20 px-4">
        {/* Tabs + Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-4 bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-200">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200
                  ${activeTab === tab.key ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50"}`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-auto">
            <input type="text" placeholder="Search features..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full md:w-64 px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          </div>
        </div>

        {/* Tab Content */}
        {renderActiveTabContent()}
      </div>
    </div>
  );
};

export default AllFeaturesCards;
