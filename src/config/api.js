import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

/**
 * Fetch data from the specified endpoint
 * @param {string} endpoint - The endpoint to fetch data from (e.g., "resumes/category/education")
 * @return {Promise<any>} - The data retrieved from the API
 */
export const fetchData = async (endpoint) => {
  try {
    const url = `${API_BASE_URL}/${endpoint}`; 
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`An error occurred while fetching data from ${url}:`, error);
    return null;
  }
};