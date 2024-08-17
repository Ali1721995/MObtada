import React from "react";
import Logo from "../../img/resize-ezgif.com-webp-to-jpg-converter.jpg";
import { Helmet } from "react-helmet";
import style from "./Navbar.module.css";  
import NewsTicker from './../Newsticker/NewsTicker';

const Navbar = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Arabic Page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Arabic page from right to left" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Content-Language" content="ar" />
          <meta name="direction" content="rtl" />
          <style>{`
                    body {
                        direction: rtl;
                        text-align: right;
                    }
                `}</style>
        </Helmet>
        <img src={Logo} alt="Logo" className="img-fluid p-3" />
        <nav className={`navbar ${style.blue} navbar-expand-lg`}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.mobtada.com">
                    <i className="fa fa-home"></i>&nbsp;الرئيسية
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.mobtada.com/egypt">
                    مصر
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.mobtada.com/politics">
                    سياسة
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.mobtada.com/world">
                    شؤون دولية
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/videos">
                    فيديو
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/9090fm">
                    9090FM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.mobtada.com/economy">
                    اقتصاد وبنوك
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.mobtada.com/sports">
                    رياضة
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.mobtada.com/talk-show">
                    توك شو
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.mobtada.com/lifestyle">
                    لايف ستايل
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.mobtada.com/health">
                    صحتك
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.mobtada.com/culture">
                    فن وثقافة
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.mobtada.com/crime">
                    حوادث
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    المزيد...
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/cases" className="nav-link">
                        ملفات
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/zaman">
                        زمان
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/services">
                        خدمات
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/sciences">
                        هاى تك
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/her">
                        هى
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/photos">
                        صور
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="https://www.mobtada.com/opinions">
                        وجهة نظر
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="https://www.mobtada.com/editor-in-chief">
                        رئيس التحرير
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form action="https://www.mobtada.com/search" className="header--search-form float--right active" data-form="validate">
                <input type="search" name="q" placeholder="بحث..." className="rounded-4 form-control" required />
              </form>
            </div>
          </div>
        </nav>
      </div>
      <NewsTicker />
    </>
  );
};

export default Navbar;