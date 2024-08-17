import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container contant-wrapper">
        <div className="">
          <h3 style={{ fontSize: "17px" }}>
            حقوق النشر محفوظة لمبتدا 2024© | تم التصميم والتطوير بواسطة فريق عمل
            مبتدا
          </h3>
        </div>
        <div className="footerLinks d-flex">
          <h2>
            <a
              className="text-black text-decoration-none"
              href=""
              style={{ fontSize: "17px" }}
            >
              {" "}
              سياسة الخصوصية &#160; | &#160;
            </a>
          </h2>
          <h2>
            <a
              className="text-black text-decoration-none"
              href=""
              style={{ fontSize: "17px" }}
            >
              {" "}
              عن الموقع &#160; | &#160;{" "}
            </a>
          </h2>
          <h2>
            <a
              className="text-black text-decoration-none"
              href=""
              style={{ fontSize: "17px" }}
            >
              {" "}
              من نحن &#160;
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer