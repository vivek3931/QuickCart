import React from "react";
import { useState, useEffect } from "react";
import samsung from "/src/assets/adsamsung.png";
import samsung4 from "/src/assets/adsamsung4.jpg";
import samsungtab from "/src/assets/adsamsungtab.jpg";
import samsungwatch from "/src/assets/adsamsungwatch.jpg";

import samsungbook from "/src/assets/adsamsungbook.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [samsung, samsungbook, samsungtab, samsungwatch, samsung4];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-[1200px] max-h-[600px] mx-auto relative overflow-hidden mb-10 shadow-2xl rounded-b-xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full relative group">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover lg:min-h-[600px] brightness-95 hover:brightness-100 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:opacity-0 transition-opacity duration-300" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              currentIndex === index
                ? "bg-white scale-110"
                : "bg-gray-400/70 hover:bg-white/70"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
