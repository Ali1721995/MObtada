import React, { useEffect, useState } from "react";
import style from "./NewsTicker.module.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import Marquee from "react-double-marquee";

const NewsTicker = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  const [children, setChildren] = useState([]);

  const getData = async () => {
    try {
      setLoading(true); // Set loading state to true before fetching data
      const response = await axios.get(
        "https://rss.app/feeds/v1.1/yIOLQfNWisHZ723u.json"
      );

      if (response.data && response.data.items) {
        const fetchedNews = response.data.items;
        setNews(fetchedNews);
        const childrenArray = fetchedNews.slice(0, 10).map((article, index) => (
          <span className={`px-3 ${style.hoverPause}`} key={index}>
            <a
              className="text-decoration-none text-black"
              href={article.url}
            >
              {article.title}
            </a>
          </span>
        ));

        setChildren(childrenArray);
      } else {
        throw new Error("Data format is unexpected or empty.");
      }

      setLoading(false); // Set loading to false after setting the news data
    } catch (error) {
      setError(error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      
      <div
        className={`${style.wrapper} container-fluid`}
        style={{ direction: "rtl" }}
      >
        <div className="row">
          <div className={`${style.blue} blue col-2`}>
            <h2 className="fs-5">أحدث الأخبار</h2>
          </div>
          <div className={`py-1 col-10`}>
            <div className={style.marquee}>
              <Marquee loop="true" scrollWhen="always" direction="left">
                {children}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsTicker;
