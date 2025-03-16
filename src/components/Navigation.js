import React, { useState, useRef, useEffect } from "react";
import { Search, Home, MessageSquareMore } from "lucide-react";
import NavItem from "./NavItem";

const navItems = [
  { icon: Search, label: "Search" },
  { icon: MessageSquareMore, label: "Ask AI" },
  { icon: Home, label: "Home", active: true }
];

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  // Close search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className="p-2 relative">
      {/* Responsive Bottom Navigation Bar */}
      <div className="fixed bottom-0 w-full bg-gray-900 text-white py-3 px-4 rounded-t-lg shadow-md flex justify-around md:static md:justify-center md:gap-10">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            Icon={item.icon}
            label={item.label}
            active={item.active}
            onClick={item.label === "Search" ? () => setIsSearchOpen(true) : undefined}
          />
        ))}
      </div>

      {/* Search Popup (Mobile & Desktop Responsive) */}
      {isSearchOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div
            ref={searchRef}
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-xs md:max-w-md lg:max-w-lg text-white relative"
          >
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-200 text-2xl"
            >
              &times;
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-black"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;