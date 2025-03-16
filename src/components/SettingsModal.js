import React, { useState } from "react";

const SettingsModal = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("Messages & media");

  const categories = [
    "Notifications", "Navigation", "Home", "Appearance", "Messages & media",
    "Language & region", "Accessibility", "Mark as read", "Audio & video",
    "Connected accounts", "Privacy & visibility", "Advanced"
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-50">
      <div className="bg-gray-800 text-white w-full h-full max-w-4xl md:max-h-[90%] rounded-lg shadow-xl flex flex-col md:flex-row">
        
        {/* Sidebar */}
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-700 p-6">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>
          <div className="h-auto md:h-[400px] overflow-auto">
            <ul className="space-y-2">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`p-2 cursor-pointer rounded ${selectedCategory === category ? "bg-gray-700" : "hover:bg-gray-600"}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
          <h3 className="text-xl font-semibold">{selectedCategory}</h3>
          <p className="text-gray-300">Settings options for {selectedCategory} will appear here.</p>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
