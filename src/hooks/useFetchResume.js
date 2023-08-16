import { useState, useEffect } from "react";
import { fetchData } from "@config/api";

export const useFetchResume = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(`resumes/category/${category}`)
      .then((data) => {
        setData(data.results[0].resumes);
      })
      .catch(() => {
        console.error(`Error fetching ${category} data`);
        setData([]); // Set data as empty on error
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return [data, loading];
};
