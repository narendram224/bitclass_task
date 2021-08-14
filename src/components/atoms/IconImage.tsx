import React from 'react';
import { addClassI } from '../../Interfaces/shareInterface';

interface logoType extends addClassI{
    src:string;
    width?:number;
    height?:number;
}
const IconImage: React.FC<logoType> = ({
  src, width = 20, height = 20, classes,
}): JSX.Element => (
  <div className="self-center">
    <img src={src} width={`${width}px`} height={`${height}px`} alt="img_bitclass" className={`${classes}`} />
  </div>

);

export default IconImage;
