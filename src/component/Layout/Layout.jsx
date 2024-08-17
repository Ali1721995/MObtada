import React from "react";
import Navbar from "../Navbar/Navbar";
import { Carousel } from "../banner/Carousel";
import MostReading from "../MostReading/MostReading";
import { Helmet } from "react-helmet";
// import { NewsProvider } from "../Context/NewsContext";
import MainPage from './../MainPage/MainPage';
import Footer from './../Footer/Footer';

export default function Layout() {
  return (
    <>
     
        <Navbar />
        <MainPage />
        <Footer/>
     
    </>
  );
}

// api https://gnews.io/api/v4/top-headlines?category=general&lang=ar&apikey=91b47b2fdb1ddf711ee7d438b180ae2c
