import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("Hariprasath");
  const [isEditing, setIsEditing] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="p-4 border-b border-gray-800 relative">
      {/* Profile Summary */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
        <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">HP</div>
        <div>
          <div className="text-sm">{username}</div>
        </div>
        <ChevronDown className={`w-4 h-4 ml-auto text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 shadow-lg rounded-lg p-3 border border-gray-700">
          <div className="text-xs text-gray-400">hari@example.com</div>

          {/* Editable Username */}
          <div className="mt-2">
            {isEditing ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-1 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                onBlur={() => setIsEditing(false)} // Save on blur
                autoFocus
              />
            ) : (
              <div
                className="text-sm text-white cursor-pointer hover:underline"
                onClick={() => setIsEditing(true)}
              >
                {username}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
