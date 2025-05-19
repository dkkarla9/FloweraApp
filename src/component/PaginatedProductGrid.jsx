import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PaginatedProductGrid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const navigate = useNavigate();

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Load More
  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Generate pagination numbers
  const paginationNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handleProductClick = (title) => {
    navigate(`/product/${title}`);
  };

  return (
    <section className="px-5 py-8 md:px-12 bg-[#F6F5F3]">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentProducts.map((product) => {
          const discountPrice = (
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2);
          const stockStatus =
            product.stock === 0
              ? 'Out of Stock'
              : product.stock <= 20
              ? 'Low Stock'
              : 'In Stock';
          const stockColor =
            stockStatus === 'Out of Stock'
              ? 'bg-red-400'
              : stockStatus === 'Low Stock'
              ? 'bg-yellow-400'
              : 'bg-[#D1C2A1]';

          return (
            <div
              key={product.id}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span
                className={`absolute top-4 right-4 px-3 py-1 text-white text-xs font-semibold rounded-full ${stockColor}`}
              >
                {stockStatus}
              </span>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-56 w-full object-cover rounded-t-2xl transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6 flex flex-col justify-between h-80">
                <div>
                  <div className="flex mb-2 text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`mr-1 ${
                          index < product.rating
                            ? 'text-yellow-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <h3
                    onClick={() => handleProductClick(product.title)}
                    className="text-xl font-semibold text-[#2C3E50] mb-1 cursor-pointer hover:text-[#D4AF37] transition line-clamp-2"
                  >
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#7F8C8D] mb-3">{product.category}</p>
                  <p className="text-sm text-[#5D6D7E] mb-4 line-clamp-3">
                    {product.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-col mb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-[#D4AF37]">
                        ${discountPrice}
                      </span>
                      <span className="text-sm line-through text-[#AAB7B8]">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="w-1/2 bg-[#2C3E50] text-white py-2 rounded-lg hover:bg-[#34495E] transition">
                      Add to Cart
                    </button>
                    <button className="w-1/2 bg-[#D4AF37] text-[#2C3E50] py-2 rounded-lg hover:bg-[#F1C40F] transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col items-center mt-8">
        {currentPage < totalPages && (
          <button
            onClick={handleLoadMore}
            className="mb-4 bg-[#D4AF37] text-[#2C3E50] px-6 py-2 rounded-lg hover:bg-[#F1C40F] transition"
          >
            Load More
          </button>
        )}
        <div className="flex items-center gap-2">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 text-[#2C3E50] hover:text-[#D4AF37]"
            >
              &lt;
            </button>
          )}
          {paginationNumbers().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-full ${
                currentPage === page
                  ? 'bg-[#D4AF37] text-[#2C3E50]'
                  : 'text-[#2C3E50] hover:bg-[#F6F5F3]'
              }`}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <>
              {totalPages > paginationNumbers()[paginationNumbers().length - 1] && (
                <span className="px-3 py-1 text-[#2C3E50]">...</span>
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-1 text-[#2C3E50] hover:text-[#D4AF37]"
              >
                &gt;
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaginatedProductGrid;