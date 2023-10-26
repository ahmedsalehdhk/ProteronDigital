import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate to the next image
  const nextImage = () => {
    // Check if not at the last image
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    // Check if not at the first image
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative h-full">
      <div className="flex w-screen h-full">
        {images.map((image, index) => {
          let imageTransformClass = "";

          // Customize the image transition classes based on the currentIndex and index
          if (index === currentIndex) {
            imageTransformClass = "translate-x-0"; // Current image
          } else if (index > currentIndex) {
            imageTransformClass = "translate-x-full"; // Next image
          } else {
            imageTransformClass = "-translate-x-full"; // Previous image
          }

          return (
            <div className="w-screen h-full bg-red-900">
              <div
                key={index}
                // Customize the image size and transition classes here
                className={`w-[145%] h-full bg-lime-300 transition-all transform ${imageTransformClass}`}
              >
                <img
                  src={image}
                  alt={`Image ${index}`}
                  // Customize the image size, object-fit, and other properties here
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>

      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded" onClick={prevImage} disabled={currentIndex === 0}>
        Previous
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded" onClick={nextImage} disabled={currentIndex === images.length - 1}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
