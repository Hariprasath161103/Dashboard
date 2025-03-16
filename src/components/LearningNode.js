import React, { useState } from "react";
import { Star, X } from "lucide-react";

const LearningNode = ({
  text,
  description = "This is a brief description about the topic.",
  link = "#",
  images = [],
  onFavoriteToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    if (onFavoriteToggle) {
      onFavoriteToggle(text, !isFavorite);
    }
  };

  return (
    <>
      {/* Button to Open Panel */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-800 text-white px-6 py-3 rounded-lg text-center shadow-md max-w-xs hover:scale-105 transition-transform m-2"
      >
        {text}
      </button>

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-gray-900 shadow-lg p-6 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 text-xl"
        >
          <X />
        </button>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 left-3 text-yellow-400 hover:text-yellow-500"
        >
          <Star fill={isFavorite ? "yellow" : "none"} stroke="white" />
        </button>

        {/* Content */}
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

        {/* Learn More Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Learn More
        </a>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 w-full"
        >
          Close
        </button>
      </div>
    </>
  );
};

export default LearningNode;