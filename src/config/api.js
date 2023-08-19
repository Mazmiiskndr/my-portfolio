import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

/**
 * Fetch data from the specified endpoint
 * @param {string} endpoint - The endpoint to fetch data from (e.g., "portfolios")
 * @param {object} [params] - Optional parameters to include in the query string
 * @return {Promise<any>} - The data retrieved from the API
 */
export const fetchData = async (endpoint, params = null) => {
  try {
    const response = await api.get(`/${endpoint}`, { params });
    return response.data;
  } catch (error) {
    console.error(
      `An error occurred while fetching data from ${endpoint}:`,
      error
    );
    return null;
  }
};
