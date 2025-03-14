import React, { useState } from "react";
import { Star } from "lucide-react";

const LearningNode = ({
  text,
  description = "This is a brief description about the topic.",
  link = "#",
  images = [],
  onFavoriteToggle, // Receiving function as a prop
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to toggle favorite
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    if (onFavoriteToggle) {
      onFavoriteToggle(text, !isFavorite); // Send title to Collections.js
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-800 text-white px-6 py-3 rounded-lg text-center shadow-md max-w-xs hover:scale-105 transition-transform m-2"
      >
        {text}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full text-center relative text-white">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-200 text-xl"
            >
              &times;
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg text-center shadow-md max-w-xs hover:bg-gray-700 hover:scale-105 transition-transform m-2"
            >
              {text}
            </button>
            <button
              onClick={handleFavoriteClick}
              className="absolute top-2 left-3 text-yellow-400 hover:text-yellow-500"
            >
              <Star fill={isFavorite ? "yellow" : "none"} stroke="white" />
            </button>

            <h2 className="text-2xl font-bold mb-2 text-purple-400">{text}</h2>
            <p className="text-gray-300 mb-4">{description}</p>

            {images.length > 0 && (
              <div className="flex space-x-2 overflow-x-auto mb-4">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={text}
                    className="w-24 h-24 object-cover rounded-lg shadow-md border border-gray-700"
                  />
                ))}
              </div>
            )}

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LearningNode;
