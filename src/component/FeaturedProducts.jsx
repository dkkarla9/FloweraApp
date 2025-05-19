import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { getAllProducts } from '../utlis/productsApi.js';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const totalSlides = 6; // Fetch 6 products
  const productsToShow = 3; // Desktop: 3 products at a time

  // Fetch products from API
  useEffect(() => {
    (async () => {
      try {
        const allProducts = await getAllProducts();
        const selectedProducts = allProducts.slice(0, totalSlides); // Take first 6
        setProducts([...selectedProducts, ...selectedProducts]); // Duplicate for infinite loop
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setProducts([]);
      }
    })();
  }, []);

  // Reset animation for seamless loop
  const resetAnimation = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animation = 'none';
      sliderRef.current.offsetHeight; // Trigger reflow
      sliderRef.current.style.animation = `slide ${products.length * 2}s linear infinite ${isPaused ? 'paused' : ''}`;
    }
  };

  // Pause/resume animation on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'running';
    }
  };

  // Manual navigation
  const nextSlide = () => {
    if (sliderRef.current) {
      setIsPaused(true);
      sliderRef.current.style.animation = 'none';
      sliderRef.current.style.transform = `translateX(-${(100 / productsToShow) * 1}%)`;
      setTimeout(() => {
        const firstChild = sliderRef.current.children[0];
        sliderRef.current.appendChild(firstChild);
        sliderRef.current.style.transform = 'translateX(0)';
        setIsPaused(false);
        resetAnimation();
      }, 500);
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      setIsPaused(true);
      sliderRef.current.style.animation = 'none';
      const lastChild = sliderRef.current.children[products.length - 1];
      sliderRef.current.prepend(lastChild);
      sliderRef.current.style.transform = `translateX(-${(100 / productsToShow) * 1}%)`;
      setTimeout(() => {
        sliderRef.current.style.transform = 'translateX(0)';
        setIsPaused(false);
        resetAnimation();
      }, 500);
    }
  };

  if (!products.length) {
    return <div className="text-center py-12 text-[#2C3E50] text-lg">Loading...</div>;
  }

  return (
    <div className="bg-white py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-6 text-center">
          Featured Collection
        </h2>
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex will-change-transform"
            style={{
              animation: `slide ${products.length * 2}s linear infinite ${isPaused ? 'paused' : ''}`,
            }}
          >
            {products.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2"
                onClick={() => navigate(`/product/${encodeURIComponent(product.title)}`)}
              >
                <div className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300 cursor-pointer overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-40 sm:h-48 object-cover"
                    loading="lazy"
                    onError={() => console.error(`Failed to load image: ${product.thumbnail}`)}
                  />
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-medium text-[#2C3E50] truncate">
                      {product.title}
                    </h3>
                    <div className="flex items-center mt-2">
                      <span className="text-[#D4AF37] font-semibold text-sm sm:text-base">
                        ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                      </span>
                      {product.discountPercentage > 0 && (
                        <span className="text-xs sm:text-sm line-through text-[#AAB7B8] ml-2">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#2C3E50]/60 text-[#FFFFFF] p-2 rounded-full hover:bg-[#D4AF37] transition duration-200"
            aria-label="Previous Slide"
          >
            <FaArrowLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#2C3E50]/60 text-[#FFFFFF] p-2 rounded-full hover:bg-[#D4AF37] transition duration-200"
            aria-label="Next Slide"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(products.length / 2) * (100 / productsToShow)}%);
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturedProducts;