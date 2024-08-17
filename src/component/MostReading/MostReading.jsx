import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const MostReading = () => {
 
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [News, setNews] = useState([]);
 const getData = async () => {
   try {
     const response = await axios.get(
       "https://rss.app/feeds/v1.1/mf2muIzZW6ZzkqqL.json"
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
  

  return   <>
      <div className="  rounded-2 py-lg-2 py-sm-5">
        <ul className="p-0">
          {[...News].slice(0, 5).map((artical, index) => {
            return<li
                  key={index}
                  className="d-flex justify-content-center  align-items-center bg-light  rounded-2 px-2  "
                >
                  <div className="d-flex align-items-center ">
                    <div>
                      <h6
                        style={{
                          fontSize: "20px",
                          fontFamily: "HelveticaNeue,Halvetica",
                        }}
                        className="mb-0 py-3"
                      >
                        {artical.title}
                      </h6>
                    </div>
                  </div>
                </li>
             
          })}
        </ul>
      </div>
    </>
  
};

export default MostReading;
