"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="pt-2 md:pt-4 lg:pt-6 relative w-full max-w-7xl mx-auto h-[650px] sm:h-[600px] overflow-hidden rounded-lg shadow-lg">
      {/* Image Container */}
      <div
        className="flex justify-around transition-transform duration-400 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-[650px] sm:h-[600px] flex-shrink-0 relative items-center"
          >
            <Image
              src={"/logo.jpeg"}
              alt={`Gallery ${index + 1}`}
              width={1200}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CustomCarousel;
