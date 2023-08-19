// useFetchData.js
import { useState, useEffect, useMemo } from "react";
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

  // Memoize the parameters to prevent unnecessary re-renders
  const memoizedParams = useMemo(() => params, Object.values(params || {}));

  useEffect(() => {
    fetchData(endpoint, memoizedParams)
      .then((fetchedData) => {
        setData(
          transformData ? transformData(fetchedData) : fetchedData.results
        );
      })
      .catch(() => {
        console.error(`Error fetching ${endpoint} data`);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
    // Depend on endpoint and memoizedParams, so the hook will re-run if they change
  }, [endpoint, memoizedParams]);

  return [data, loading];
};
