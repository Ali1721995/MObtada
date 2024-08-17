import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircleLoader } from "react-spinners";
import style from"./Carosuel.module.css";

export const Carousel = ({ id, category, TimeInterval }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://rss.app/feeds/v1.1/${category}.json`
      );
      setNews(response.data.items);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!loading && news.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % news.length);
      }, TimeInterval); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [loading, news]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <CircleLoader color="#36d7b7" />
      </div>
    );
  }

  if (error) {
    return (
      <div id={id} className="carousel slide" data-bs-touch="false">
        <div className="carousel-inner">
          <div
            className={`carousel-item w-100 h-100 ${
              id === "carousel1" ? "my-lg-3 " : "my-lg-2"
            } active`}
          >
            <img
              src={"https://placehold.co/800x400"}
              className="d-block img-fluid"
              alt="loading"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>[please wait ...]</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }

  return (
    <div id={id} className="carousel slide h-100" data-bs-touch="false">
      <div className="carousel-inner h-100">
        {[...news].slice(0, 20).map((article, index) => (
          <div
            key={index}
            className={`carousel-item ${style["news-item"]} w-100 ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <img
              src={article.image || "https://placehold.co/800x400"}
              className="d-block w-100"
              alt={article.title}
            />
            <div
              className="carousel-caption news-title rounded p-1"
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <h5>{article.title}</h5>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? news.length - 1 : prevIndex - 1
          )
        }
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
        onClick={() =>
          setActiveIndex((prevIndex) => (prevIndex + 1) % news.length)
        }
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
