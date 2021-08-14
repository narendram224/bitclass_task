import React from 'react';

type logoType ={
    src:string
}
const Brand: React.FC<logoType> = ({ src }): JSX.Element => (
  <div>
    <img src={src} alt="logo_bitclass" />
  </div>

);

export default Brand;
