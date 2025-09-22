import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; // Assuming you have a CSS file for styling

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatic rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change image every 3 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images]); // Dependency array includes 'images' to reset the effect if the image list changes

  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Carousel image ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      <div className="carousel-controls">
        <button className="carousel-button prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;