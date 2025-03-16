import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import LearningPath from "./components/LearningPath";
import { Menu } from "lucide-react"; // Import menu icon

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white">
      {/* Sidebar - Hidden on Mobile, Shows when Opened */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:relative md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        {/* Mobile Menu Button */}
        <button
          className="absolute top-4 left-4 text-white p-2 bg-gray-800 rounded-md md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>

        <LearningPath />
      </div>
    </div>
  );
}

export default App;