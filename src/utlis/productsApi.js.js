// src/api/productsApi.js
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data.products;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};
