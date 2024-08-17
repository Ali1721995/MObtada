import React from 'react'

const LayOutOdd = ({News}) => {
  return (
    <div className="row">
      {News.map((article, index) => {
        return index === 0 ? (
          <div key={index} className="col-lg-6 col-sm-12 h-100">
            <a
              href={article.url}
              className="card  border-0 text-decoration-none text-black"
            >
              <img
                src={article.image}
                className="card-img-top img-fluid"
                alt={article.title}
              />
              <div className="card-body">
                <h4 className="card-title">
                  <a
                    style={{ fontSize: "15px", lineHeight: "18px" }}
                    className="text-black text-decoration-none fw-bolder"
                    href="#"
                  >
                    {article.title}
                  </a>
                </h4>
                <span className="card-subtitle">
                  {
                    article.date_published
                      .replace("T", "  ")
                      .trim()
                      .split(".")[0]
                  }
                </span>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "normal",
                    fontFamily: "HelveticaNeue, Helvetica, Arial, sans-serif",
                  }}
                  className="card-text"
                >
                  {article.content_text}
                </p>
              </div>
            </a>
          </div>
        ) : null;
      })}
      <div className="col-lg-6    ">
       <div className="row"> {[...News].slice(0,10).map((article, index) => {
          return index < 5 && index !== 0 ? (
            <div key={index} className="col-6  ">
              <a
                href={article.url}
                className="card rounded-0 border-0 text-decoration-none text-black"
              >
                <img
                  src={article.image}
                  className="card-img-top img-fluid"
                  alt={article.title}
                />
                <div className="card-body p-0 pt-2">
                  <p
                    className="card-text"
                    style={{
                      fontSize: "17px",
                      lineHeight: "normal",
                      fontFamily: "HelveticaNeue, Helvetica, Arial, sans-serif",
                      direction: "rtl",
                    }}
                  >
                    {article.title}
                  </p>
                </div>
              </a>
            </div>
          ) : null;
        })}</div>
      </div>
    </div>
  );
}

export default LayOutOdd