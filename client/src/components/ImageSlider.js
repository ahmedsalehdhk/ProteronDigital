import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const transformValue = -currentImage * (100 / images.length);

  return (
    <div className="relative w-full h-full">
      <div className="w-48% mx-2% flex items-center justify-center transition-transform duration-300 transform translate-x-0" style={{ transform: `translateX(${transformValue}%)` }}>
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full" />
      </div>
      <div className="w-48% mx-2% flex items-center justify-center transition-transform duration-300 transform translate-x-full" style={{ transform: `translateX(${transformValue - 100}%)` }}>
        <img src={images[currentImage + 1]} alt={`Image ${currentImage + 2}`} className="w-full" />
      </div>
      <div className="w-48% mx-2% flex items-center justify-center transition-transform duration-300 transform translate-x-2xl" style={{ transform: `translateX(${transformValue - 200}%)` }}>
        <img src={images[currentImage + 2]} alt={`Image ${currentImage + 3}`} className="w-full" />
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-500 rounded-full text-white text-2xl"
        onClick={handlePrev}
      >
        &larr;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-500 rounded-full text-white text-2xl"
        onClick={handleNext}
      >
        &rarr;
      </button>
    </div>
  );
};

export default ImageCarousel;
