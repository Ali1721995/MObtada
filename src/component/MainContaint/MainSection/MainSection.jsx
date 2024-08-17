import React from 'react'
import Sections from './Sections/Sections';
import style from'./MainSection.module.css';

const MainSection = () => {
  return (
    <>
      <div className="line w-100 "></div>
      <Sections id={1} category="qpdh6NN6eO3uwmln" />
      <div className="constainer">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="line w-100 "></div>
            <Sections id={2} category="SSwOhDcE2XIZjZMI" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="line w-100 "></div>
            <Sections id={2} category="RtH3obegWSG1g5HL" />
          </div>
        </div>
      </div>
      <div className="line w-100 "></div>
      <Sections id={1} category="qiI9yTjAkh3ciOrx" />
      <div className="constainer">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="line w-100 "></div>
            <Sections id={2} category="zU3dbmAIiDbKr8AW" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="line w-100 "></div>
            <Sections id={2} category="9vdn125jYYFB7BP6" />
          </div>
        </div>
      </div>
      <div className="line w-100 "></div>
      <Sections id={1} category="lGmgGKLZ0exBS8oK" />
    </>
  );
  
}

export default MainSection