import React, { useState } from "react";
import All from "./TabsComponents/All";

const tabs = [
  { name: "All", key: "all" },
  { name: "New", key: "new" },
  { name: "Popular", key: "popular" },
  { name: "Features", key: "features" },
  { name: "Integrations", key: "integrations" },
  { name: "Booking website", key: "booking" },
];

const AllFeaturesCards = () => {
  const [activeTab, setActiveTab] = useState("all");

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "all":
        return <All />;
      // Add cases for other tabs here
      default:
        return <All />; // Default to All if no specific tab is matched
    }
  };

  return (
    <>
      <div className="py-10 px-4">
        <div className="max-w-7xl mx-auto relative py-20 px-4">
          <div className="flex items-center justify-between mb-16 bg-gray-100 p-2 rounded-lg">
            <div className="flex space-x-0">
              {tabs.map((tab) => (
                <button key={tab.key} className={`px-6 py-2 transition-colors duration-300 ${activeTab === tab.key ? "bg-blue-500 text-white outline-none ring-2 ring-blue-500" : "bg-white text-black hover:bg-blue-100"} rounded-lg mx-1 focus:outline-none focus:ring-2 focus:ring-blue-500`} onClick={() => setActiveTab(tab.key)}>
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="ml-auto">
              <input type="text" placeholder="Search" className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          {renderActiveTabContent()}
        </div>
      </div>
    </>
  );
};

export default AllFeaturesCards;
