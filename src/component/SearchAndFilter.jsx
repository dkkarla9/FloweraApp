import React, { useState, useMemo, useEffect, useRef } from 'react';

const SearchAndFilter = ({ products, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [minRating, setMinRating] = useState('0'); // Changed to single value (0 = all)
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const searchInputRef = useRef(null);

  // Calculate min and max prices
  const priceLimits = useMemo(() => {
    const prices = products.map((p) => p.price * (1 - p.discountPercentage / 100));
    return {
      min: Math.floor(Math.min(...prices) || 0),
      max: Math.ceil(Math.max(...prices) || 1000),
    };
  }, [products]);

  // Initialize price range
  useEffect(() => {
    setPriceRange([priceLimits.min, priceLimits.max]);
  }, [priceLimits]);

  // Get unique categories
  const categories = useMemo(() => {
    const unique = [...new Set(products.map((p) => p.category))];
    return ['all', ...unique];
  }, [products]);

  // Search suggestions (top 5 matching titles, categories, or tags)
  const suggestions = useMemo(() => {
    if (!searchQuery) return [];
    return products
      .filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.tags &&
            p.tags.some((tag) =>
              tag.toLowerCase().includes(searchQuery.toLowerCase())
            ))
      )
      .map((p) => p.title)
      .slice(0, 5);
  }, [searchQuery, products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.tags &&
            p.tags.some((tag) =>
              tag.toLowerCase().includes(searchQuery.toLowerCase())
            ))
      );
    }

    // Rating filter (minimum rating)
    if (minRating !== '0') {
      result = result.filter((p) => p.rating >= parseInt(minRating));
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    result = result.filter((p) => {
      const discountedPrice = p.price * (1 - p.discountPercentage / 100);
      return discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1];
    });

    // Sorting
    switch (sortOption) {
      case 'newest':
        result.sort((a, b) => (b.id || 0) - (a.id || 0));
        break;
      case 'oldest':
        result.sort((a, b) => (a.id || 0) - (b.id || 0));
        break;
      case 'price-low':
        result.sort(
          (a, b) =>
            a.price * (1 - a.discountPercentage / 100) -
            b.price * (1 - b.discountPercentage / 100)
        );
        break;
      case 'price-high':
        result.sort(
          (a, b) =>
            b.price * (1 - b.discountPercentage / 100) -
            a.price * (1 - a.discountPercentage / 100)
        );
        break;
      default:
        break;
    }

    return result;
  }, [products, searchQuery, minRating, priceRange, selectedCategory, sortOption]);

  // Notify parent of filtered products
  useEffect(() => {
    onFilterChange(filteredProducts);
  }, [filteredProducts, onFilterChange]);

  // Clear filters
  const clearFilters = () => {
    setSearchQuery('');
    setMinRating('0');
    setPriceRange([priceLimits.min, priceLimits.max]);
    setSelectedCategory('all');
    setSortOption('default');
  };

  // Handle suggestion click
  const handleSuggestionClick = (title) => {
    setSearchQuery(title);
    setIsSearchFocused(false);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className=" bg-white  md:rounded-lg shadow-sm px-5 py-5 md:px-12 max-w-6xl mx-auto md:m-8 transition-all duration-300">
      {/* Mobile Toggle Button */}
      <div className="lg:hidden mb-3">
        <button
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
          className="w-full bg-gray-100 text-[#2C3E50] text-sm py-1.5 rounded-md hover:bg-gray-200 transition duration-150"
        >
          {isFilterExpanded ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Filter Bar */}
      <div
        className={`flex flex-col lg:flex-row lg:items-center lg:gap-3 transition-all duration-300 ${
          isFilterExpanded
            ? 'max-h-[300px] opacity-100'
            : 'max-h-0 opacity-0 lg:max-h-[300px] lg:opacity-100'
        } overflow-hidden lg:overflow-visible`}
      >
        {/* Search Box */}
        <div className="relative w-full lg:w-48 mb-2 lg:mb-0">
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            placeholder="Search..."
            className="w-full p-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-gray-50 text-[#2C3E50] placeholder-gray-400 transition-all duration-150 hover:bg-white"
          />
          {isSearchFocused && suggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-100 rounded-md mt-1 shadow-sm max-h-40 overflow-auto">
              {suggestions.map((title, idx) => (
                <li
                  key={idx}
                  onMouseDown={() => handleSuggestionClick(title)}
                  className="px-2 py-1.5 text-sm text-[#2C3E50] hover:bg-gray-50 cursor-pointer transition duration-100"
                >
                  {title}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Rating Filter */}
        <div className="w-full lg:w-32 mb-2 lg:mb-0">
          <select
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            className="w-full p-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-gray-50 text-[#2C3E50] transition duration-150 hover:bg-white"
          >
            <option value="0">All Ratings</option>
            <option value="1">1★ & Up</option>
            <option value="2">2★ & Up</option>
            <option value="3">3★ & Up</option>
            <option value="4">4★ & Up</option>
            <option value="5">5★</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="w-full lg:w-64 mb-2 lg:mb-0">
          <div className="flex items-center gap-2 text-xs text-[#2C3E50]">
            <span>${priceRange[0]}</span>
            <input
              type="range"
              min={priceLimits.min}
              max={priceLimits.max}
              step="1"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([parseInt(e.target.value), priceRange[1]])
              }
              className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:bg-[#D4AF37] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none"
            />
            <input
              type="range"
              min={priceLimits.min}
              max={priceLimits.max}
              step="1"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:bg-[#D4AF37] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none"
            />
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="w-full lg:w-40 mb-2 lg:mb-0">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-gray-50 text-[#2C3E50] transition duration-150 hover:bg-white"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div className="w-full lg:w-40 mb-2 lg:mb-0">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full p-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-gray-50 text-[#2C3E50] transition duration-150 hover:bg-white"
          >
            <option value="default">Sort By</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="price-low">Price: Low</option>
            <option value="price-high">Price: High</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <div className="w-full lg:w-auto">
          <button
            onClick={clearFilters}
            className="w-full lg:w-auto px-3 py-1.5 text-sm bg-gray-100 text-[#2C3E50] rounded-md hover:bg-gray-200 transition duration-150"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;