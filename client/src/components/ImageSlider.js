// src/components/ImageSlider.js

import React, { useState } from 'react';

import img1 from '../assets/home-slider-images/slider-image-1.png'
import img2 from '../assets/home-slider-images/slider-image-2.jpg'
import img3 from '../assets/home-slider-images/slider-image-3.png'

const ImageSlider = () => {
  const images = [ img1, img2, img3 ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const isAtFirstSlide = currentIndex === 0;
  const isAtLastSlide = currentIndex === images.length - 1;

  return (
    <div className="relative h-full w-full">

      <div className="slides-container h-full w-full bg-accent">
        <div className="flex gap-5 h-full w-screen bg-lightAccent" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-3/5 h-full">
              <img src={image} alt={`Slide ${index + 1}`} className="object-cover h-full w-full"/>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className={`absolute top-1/2 left-2 text-white bg-gray-500 rounded-full p-2 transform -translate-y-1/2 ${isAtFirstSlide ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isAtFirstSlide}
      >
        Previous
      </button>

      <button
        onClick={nextSlide}
        className={`absolute top-1/2 right-2 text-white bg-gray-500 rounded-full p-2 transform -translate-y-1/2 ${isAtLastSlide ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isAtLastSlide}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
