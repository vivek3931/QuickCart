import React from "react";
import { useState, useEffect } from "react";
import vivo from "/src/assets/advivo.png";
import samsung from "/src/assets/adsamsung.png";
import samsung2 from "/src/assets/adsamsung2.png";
import honor from "/src/assets/adhonor.png";
import pixel from "/src/assets/adpixel.png";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [vivo, samsung, honor, pixel, samsung2];

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
    <div className="max-w-[1200px] max-h-[600px] mx-auto relative overflow-hidden mb-10 rounded-b-3xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover lg:min-h-[600px] "
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
