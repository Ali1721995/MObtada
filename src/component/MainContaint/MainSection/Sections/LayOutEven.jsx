import React from "react";

const LayOutEven = ({ News }) => {
  return (
    <div className="row">
      
        {[...News].slice(0,7).map((article, index) => {
          if (index === 0) {
            return (
              <div className="col-12 p-sm-0">
                <ul className="p-0">
                  <li key={index} className="layout1   ">
                    <div className="card position-relative w-100">
                      <img
                        src={article.image}
                        className="card-img-top img-fluid"
                        alt={article.title}
                      />
                      <div className="card-body position-absolute  bottom-0 text-decoration-none text-light text-center p-0 ">
                        <h3 className="h6 ">
                          <a
                            href="#"
                            className=" hoverBlue "
                          >
                            {article.title}
                          </a> <p className="hoverBlue fs-6">
                          {article.date_published
                            ? new Date(
                                article.date_published
                              ).toLocaleDateString()
                            : "date"}
                        </p>
                        </h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            );
          } else if (index < 5 && index !== 0) {
            return (
              <div className="col-12 p-sm-0">
                {" "}
                <ul className=" p-0">
                  <li
                    key={index}
                    className="layout2  container border-top py-2"
                  >
                    <div className="row ">
                      <div className="col-lg-4
                      col-sm-6 p-sm-0">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="img-fluid card-img"
                        />
                      </div>
                      <div className="col-lg-8 col-sm-6">
                        <div className="card-body">
                          <div className="card-title">
                            <h3 className="h6">
                              <a
                                href="#"
                                className="text-black text-decoration-none"
                              >
                                {article.title}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            );
          }
          return null;
        })}
    
    </div>
  );
};

export default LayOutEven;
