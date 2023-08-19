// useFetchData.js
import { useState, useEffect } from "react";
import { fetchData } from "@config/api";

/**
 * Custom hook to fetch data from a specified endpoint.
 *
 * @param {string} endpoint - The endpoint to fetch data from.
 * @param {function} [transformData] - Optional function to transform the data before setting it to state.
 * @param {object} [params] - Optional parameters to include in the query string.
 * @return {Array} - An array containing the fetched data and loading state.
 */
export const useFetchData = (endpoint, transformData = null, params = null) => {
  // State to hold the fetched data
  const [data, setData] = useState([]);
  // State to manage the loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the given endpoint
    fetchData(endpoint, params)
      .then((fetchedData) => {
        // Transform the fetched data if a transform function is provided
        setData(
          transformData ? transformData(fetchedData) : fetchedData.results
        );
      })
      .catch(() => {
        // Log the error and set the data as empty on error
        console.error(`Error fetching ${endpoint} data`);
        setData([]);
      })
      .finally(() => {
        // Set loading to false once the data has been fetched
        setLoading(false);
      });
    // Depend on endpoint and params, so the hook will re-run if they change
  }, [endpoint, params]);

  return [data, loading];
};
