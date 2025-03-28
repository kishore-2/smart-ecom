// This file contains functions for fetching personalized product recommendations for the user.

import axios from 'axios';

const API_URL = '/api/recommendations';

export const fetchRecommendations = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        throw error;
    }
};