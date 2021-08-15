import React from 'react';

type logoType ={
    src:string
}
const Brand: React.FC<logoType> = ({ src }): JSX.Element => (
  <div className="cursor-pointer">
    <img src={src} alt="logo_bitclass"  className="transform transition duration-500 hover:scale-110"/>
  </div>

);

export default Brand;
