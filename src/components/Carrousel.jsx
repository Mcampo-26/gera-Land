import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
  ];

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="relative">
        <img src={images[currentIndex]} alt="Carousel" className="w-full" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
          <button onClick={prevImage} className="text-white absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 px-3 py-1 rounded-md">
            <BsChevronLeft />
          </button>
          <button onClick={nextImage} className="text-white absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 px-3 py-1 rounded-md">
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
