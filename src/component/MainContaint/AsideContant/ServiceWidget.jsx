import React from 'react'
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";
const ServiceWidget = () => {
  return (
    <div className="h-25  ">
      <div
        className="my-3"
        style={{ height: "3px ", backgroundColor: "#002f79", width: "100%" }}
      ></div>
      <VerticalTicker duration={20000} easing="ease-in-out">
        <div>
          <ul>
            <li>
              <a
                className="text-decoration-none text-black"
                href="/services/1144939/الاستعلام-عن-لقاح-كورونا"
              >
                الاستعلام عن لقاح كورونا
              </a>
            </li>
            <br />
            <li>
              <a
                className="text-decoration-none text-black"
                href="/services/1144936/استعلام-عن-بطاقة-التموين"
              >
                استعلام عن بطاقة التموين
              </a>
            </li>
            <br />
            <li>
              <a
                className="text-decoration-none text-black"
                href="/services/1144934/الاستعلام-عن-العلاوات-الخمس"
              >
                الاستعلام عن العلاوات الخمس
              </a>
            </li>
            <br />
            <li>
              <a
                className="text-decoration-none text-black"
                href="/services/1144930/استعلام-المخالفات-المرورية-برقم-اللوحة"
              >
                استعلام المخالفات المرورية برقم اللوحة
              </a>
            </li>
            <br />
            <li>
              <a
                className="text-decoration-none text-black"
                href="/services/1135587/مفاتيح-السعادة-الزوجية-4-نصائح-لأسرة-مستقرة-إنفوجراف"
              >
                مفاتيح السعادة الزوجية .. 4 نصائح لأسرة مستقرة (إنفوجراف)
              </a>
            </li>
            <br />
            <li>
              <a 
                className="text-decoration-none text-black"
                href="/services/1125649/8-سنن-للجمعة-يستحب-القيام-بها-احرص-عليها-إنفوجراف"
              >
                8 سنن للجمعة يستحب القيام بها .. احرص عليها (إنفوجراف)
              </a>
            </li>{" "}
            <br />
          </ul>
          
        </div>
      </VerticalTicker>
      <div
        className="my-3"
        style={{ height: "3px ", backgroundColor: "#002f79", width: "100%" }}
      ></div>   
    </div>
  );
}

export default ServiceWidget