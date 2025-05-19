import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../utlis/productsApi.js';
import SearchAndFilter from './SearchAndFilter';
import PaginatedProductGrid from './PaginatedProductGrid';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      setProducts(data);
      setFilteredProducts(data);
    })();
  }, []);

  return (
    <>
      <SearchAndFilter products={products} onFilterChange={setFilteredProducts} />
      <PaginatedProductGrid products={filteredProducts} />
    </>
  );
};

export default ProductList;