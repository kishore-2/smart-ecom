// This file provides functions for CRUD operations related to products, such as fetching the product list and adding new products.

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:7071/api/products';

// Fetch all products
export const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Add a new product
export const addProduct = async (product) => {
    const response = await axios.post(API_URL, product);
    return response.data;
};

// Update an existing product
export const updateProduct = async (id, product) => {
    const response = await axios.put(`${API_URL}/${id}`, product);
    return response.data;
};

// Delete a product
export const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};