import React, { useState } from "react";
import { ChevronDown, Pencil } from "lucide-react";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("Hariprasath");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-4 border-b border-gray-800 relative">
      {/* Profile Summary */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
          HP
        </div>
        <div className="text-sm">{username}</div>
        <ChevronDown className="w-4 h-4 ml-auto text-gray-400" />
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-200 text-2xl"
            >
              &times;
            </button>

            <div className="text-center">
              <div className="text-xs text-gray-400 mb-2">hari@example.com</div>

              {/* Editable Username with Edit Icon */}
              <div className="flex items-center justify-center gap-2">
                {isEditing ? (
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    onBlur={() => setIsEditing(false)}
                    autoFocus
                  />
                ) : (
                  <div
                    className="text-lg text-white cursor-pointer flex items-center gap-1"
                    onClick={() => setIsEditing(true)}
                  >
                    {username}
                    <Pencil className="w-4 h-4 text-gray-400 hover:text-gray-200" />
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;