import { useState, useEffect } from "react";
import { fetchData } from "@config/api";

export const useFetchAbout = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(`about`)
      .then((data) => {
        setData(data.results);
      })
      .catch(() => {
        console.error(`Error fetching about data`);
        setData([]); // Set data as empty on error
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [data, loading];
};
