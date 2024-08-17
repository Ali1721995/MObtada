import React from 'react'

const ImgWidget = ({Href,Src ,Alt}) => {
  return (
    <div className="widget">
      
      <a 
        href={Href}
        className="text-decoration-none"
      >
        <img
          src={Src}
          alt={Alt}
          className="img-fluid "
        />
      </a>
    </div>
  );
}

export default ImgWidget