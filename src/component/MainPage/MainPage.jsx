import React from "react";
import Carousel from "../banner/Carousel";
import MostReading from "../MostReading/MostReading";
import MainContaint from './../MainContaint/MainContaint';
import MetaTags from './../Helmet';
const MainPage = () => {
  return (
    <>
      <MetaTags />
      <div className="container pb-5">
        <div className="row g-2">
          <div className="col-lg-6 p-2 col-md-12">
            {/* <NewsProvider> */}
            <Carousel
              id="carousel1"
              category="bWM97911n2VxTWz7"
              TimeInterval="10000"
            />
            {/* </NewsProvider> */}
          </div>
          <div className="col-lg-3 d-flex flex-column mt-3 h-100   col-md-12">
            {/* <NewsProvider> */}
            <Carousel
              id="carousel2"
              category="qpdh6NN6eO3uwmln"
              TimeInterval="12000"
            />
            {/* </NewsProvider> */}
            {/* <NewsProvider> */}
            <Carousel
              id="carousel3"
              category="9vdn125jYYFB7BP6"
              TimeInterval="8000"
            />
            {/* </NewsProvider> */}
          </div>
          <div className="col-lg-3 col-md-12 ">
            {/* <NewsProvider> */}
            <MostReading />
            {/* </NewsProvider> */}
          </div>
        </div>
      </div>
      <MainContaint></MainContaint>
    </>
  );
};
export default MainPage;
