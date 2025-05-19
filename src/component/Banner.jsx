import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Placeholder images (replace with your own URLs or pass via props)
  const images = [
    'https://images.unsplash.com/photo-1655707063496-e1c00b3280de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  // Image carousel handlers
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-[#F6F5F3] md:py-6 md:px-4">
      <div className="max-w-6xl mx-auto bg-white md:rounded-2xl shadow-sm overflow-hidden lg:flex">
        {/* Left: Title and Description */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
           Our Exclusive Collection
          </h1>
          <p className="text-[#5D6D7E] text-base leading-relaxed">
            Discover exclusive products crafted with elegance and precision. Elevate your style with our curated collection.
          </p>
        </div>

        {/* Right: Image Slider */}
        <div className="lg:w-1/2 relative">
          <div className="relative h-64 md:h-80 bg-gray-100">
            <img
              src={images[currentImageIndex]}
              alt={`Banner ${currentImageIndex + 1}`}
              className="w-full h-full object-cover rounded-r-2xl transition-transform duration-500 hover:scale-105"
            />
            {/* Carousel Controls */}
            {images.length > 1 && (
              <div className="flex justify-between absolute top-1/2 w-full transform -translate-y-1/2 px-4">
                <button
                  onClick={prevImage}
                  className="bg-[#2C3E50]/70 text-white p-2 rounded-full hover:bg-[#D4AF37] transition"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-[#2C3E50]/70 text-white p-2 rounded-full hover:bg-[#D4AF37] transition"
                >
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>
          {/* Thumbnail Gallery */}
          {images.length > 1 && (
            <div className="flex gap-2 p-4 justify-center">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`w-12 h-12 object-cover rounded-md cursor-pointer border-2 ${
                    currentImageIndex === idx
                      ? 'border-[#D4AF37]'
                      : 'border-gray-200'
                  } hover:border-[#D4AF37] transition`}
                  onClick={() => setCurrentImageIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;