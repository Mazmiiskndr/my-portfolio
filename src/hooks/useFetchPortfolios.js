// import { useState, useEffect } from "react";
// import { fetchData } from "@config/api";

// export const useFetchSkills = (params) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Membangun query string dari objek params
//     const queryString = Object.keys(params)
//       .map(
//         (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
//       )
//       .join("&");
//     const url = `skills${queryString ? `?${queryString}` : ""}`;

//     fetchData(url)
//       .then((data) => {
//         setData(data.results);
//       })
//       .catch(() => {
//         console.error(`Error fetching Skills data`);
//         setData([]); // Set data as empty on error
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [params]); // Tambahkan params sebagai dependency

//   return [data, loading];
// };


// TODO: 

// USAGE : 
// const [data, loading] = useFetchSkills({ category: "dsadsa", otherParam: "value" });
