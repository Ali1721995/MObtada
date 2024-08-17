import React from 'react'
import App from './../../App';
import MainSection from './MainSection/MainSection';
import AsideContaint from './AsideContant/AsideContaint';

const MainContaint = () => {
  return (
    <>
    <div className="container">
    <div className="row">
     <div className="col-md-8"><MainSection/></div>  
     <div className="col-md-4 "><AsideContaint/></div>
    </div>
    </div>
    
    </>
  )
}

export default MainContaint