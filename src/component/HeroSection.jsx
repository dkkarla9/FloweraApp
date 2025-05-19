import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Placeholder images (replace with your own URLs)
 const images = [
    'https://images.unsplash.com/photo-1655707063496-e1c00b3280de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentImageIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, isTransitioning]);

  // Image carousel handlers
  const nextImage = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  }, [isTransitioning, images.length]);

  const prevImage = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  }, [isTransitioning, images.length]);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] bg-[#F6F5F3] overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Hero ${idx + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentImageIndex === idx ? 'opacity-100' : 'opacity-0'
            }`}
            onError={() => console.error(`Failed to load image: ${img}`)}
          />
        ))}
        <div className="absolute inset-0 bg-[#2C3E50]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-3 md:mb-4 drop-shadow-md">
          Elevate Your Style
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-[#D1C2A1] mb-4 md:mb-6 max-w-xl drop-shadow-md">
          Discover our exclusive collection of premium products.
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="px-6 py-2 md:px-8 md:py-3 bg-[#D4AF37] text-[#2C3E50] text-sm md:text-base font-semibold rounded-lg hover:bg-[#F1C40F] transition duration-300 shadow-md hover:shadow-lg"
        >
          Shop Now
        </button>
      </div>

      {/* Carousel Controls */}
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-8 md:bottom-12 flex justify-between px-4 md:px-12 z-10">
          
         
        </div>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => !isTransitioning && setCurrentImageIndex(idx)}
              className={`w-2 h-2 rounded-full transition ${
                currentImageIndex === idx ? 'bg-[#D4AF37]' : 'bg-[#AAB7B8]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSection;