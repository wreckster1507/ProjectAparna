import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
];

const PageContentOne = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <>
      <div className="relative">
        <div className="carousel relative overflow-hidden w-full h-[500px] bg-white rounded-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide absolute inset-0 w-full h-full transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={goPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Pagination */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`block w-3 h-3 rounded-full ${
                index === activeIndex
                  ? "bg-blue-500"
                  : "bg-white border border-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PageContentOne;
