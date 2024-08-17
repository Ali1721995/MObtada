import React from 'react'
import ImgWidget from './ImgWidget';
import ServiceWidget from './ServiceWidget';
import { Carousel } from './../../banner/Carousel';
import CreatorWidget from './CreatorWidget';



const AsideContaint = () => {
  return (
    <>
      <div className="position-relative h-75 ">
        <div className="imgWidget">
          <ImgWidget
            Href="https://www.mobtada.com/tag/%D9%85%D9%87%D8%B1%D8%AC%D8%A7%D9%86-%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A%D9%86-2024"
            Src="https://www.mobtada.com/assets/banners/1720459540.jpg"
            Alt="العالم علمين"
          />
          <br />
          <ImgWidget
            Href="https://www.mobtada.com/tag/%D8%A7%D9%84%D8%AA%D8%AD%D8%A7%D9%84%D9%81-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%89-%D9%84%D9%84%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%A3%D9%87%D9%84%D9%89-%D9%88%D8%A7%D9%84%D8%AA%D9%86%D9%85%D9%88%D9%89"
            Src="	https://www.mobtada.com/assets/banners/1710431948.jpg"
            Alt="التحالف الوطني"
          />
          <br />
          <ImgWidget
            Href="https://www.mobtada.com/tag/%D8%A7%D9%84%D8%B1%D8%A7%D8%AF%D9%8A%D9%88-9090"
            Src="https://www.mobtada.com/assets/banners/1714559707.jpg"
            Alt="الراديو 9090"
          />
        </div>

        <div className="serviceWidget " style={{ height: "10%" }}>
          <h2 class="h4">خدمات </h2>
          <div style={{ height: "75%" }}>
            <ServiceWidget />
          </div>
        </div>

        <div className="Carosulewidget">
          <Carousel
            id="carousel3"
            category="9vdn125jYYFB7BP6"
            TimeInterval="8000"
          />
        </div>

        <CreatorWidget />
      </div>
    </>
  );
}

export default AsideContaint