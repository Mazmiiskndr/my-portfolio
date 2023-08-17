import { useState, useEffect } from "react";
import { fetchData } from "@config/api";

export const useFetchServices = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(`what_i_do`)
      .then((data) => {
        setData(data.results);
      })
      .catch(() => {
        console.error(`Error fetching what i do data`);
        setData([]); // Set data as empty on error
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [data, loading];
};
