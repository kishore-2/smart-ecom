// This file contains functions for handling user authentication, including login and registration.

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:7071/api/auth';

export const login = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};

export const register = async (username: string, email: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data;
};