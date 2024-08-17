import React, { useEffect, useState } from "react";
import axios from "axios";
import MetaTags from './../../../Helmet';
import "./Section.css"
import LayOutOdd from "./LayOutOdd";
import LayOutEven from "./LayOutEven";
const Sections = ({ id,category }) => {
  const [News, setNews] = useState([]);
  const [Title, setTitle] = useState();

  const getData = async () => {
    try {
      const response = await axios.get(
        ` https://rss.app/feeds/v1.1/${category}.json`
      );
      setTitle(
        response.data.title
          .replace("Google", "")
          .trim()
          .replace(" - أخبار", "")
          .trim()
          .replace("أخبار", "")
          .trim()
      );
      setNews(response.data.items);
  
    } catch (error) {
   
   
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <MetaTags />
      <div className="mb-3 mt-1">
        <h2 className="h4 pt-2">
          <a className="text-black-50 text-decoration-none " href="#">{Title}</a>
        </h2>
      </div>
      <div className="container-fluid pb-3">
        {id % 2 === 1 ? (
          //  if id is odd
          <LayOutOdd News={News} />
        ) : (
          // If id is even
          <LayOutEven News={News} />
        )}
      </div>
    </>
  );
};

export default Sections;
