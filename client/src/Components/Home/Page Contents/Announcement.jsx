import React, { useState } from "react";

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-between gap-4 bg-gray-100 px-4 py-3 text-gray-900 rounded-bl-lg rounded-br-lg">
      <div className="flex-grow text-center">
        <p className="text-sm font-medium">
          Flats for Sale 🎉🎉
          <a href="#" className="inline-block underline">
            Check the details now
          </a>
        </p>
      </div>

      <button
        aria-label="Dismiss"
        className="shrink-0 ml-4 rounded-lg bg-white/30 p-2 border-2 border-transparent hover:border-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out"
        onClick={() => setIsVisible(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Announcement;
