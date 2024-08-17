// src/NewsContext.js
// import React, { createContext, useState, useEffect, useRef } from "react";
// import axios from "axios";

// export const NewsContext = createContext();

// export const NewsProvider = ({ category, children }) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const isMounted = useRef(true); // Use a
//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const endpoint = `https://newsdata.io/api/1/latest?apikey=pub_50983d856f7062105b17b35d319cb6693294a&category=${category}&country=eg&language=ar`;
//         const response = await axios.get(endpoint);
//         if (isMounted.current) {
//             console.log(response.status);
            
//           setArticles(response.data.results);
//           setLoading(false);
//         }
//       } catch (error) {
//         if (isMounted.current) {
//           console.error("Error fetching news articles:", error);
//           setError("Error fetching news articles. Please try again later.");
//           setLoading(false);
//         }
//       }
//     };

//     fetchArticles();

//     // Cleanup function to set isMounted to false when the component unmounts
//     return () => {
//       isMounted.current = false;
//     };
//   }, [category]);

//   return (
//     <NewsContext.Provider value={{ articles, loading, error }}>
//       {children}
//     </NewsContext.Provider>
//   );
// };
