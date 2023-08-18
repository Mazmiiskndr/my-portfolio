import { useState, useEffect } from "react";
import { fetchData } from "@config/api";

export const useFetchPortfolios = (params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("portfolios", params)
      .then((data) => {
        setData(data.results);
      })
      .catch(() => {
        console.error(`Error fetching Portfolios data`);
        setData([]); // Set data as empty on error
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return [data, loading];
};
