import React, { FC } from 'react';
import { handleFollowing } from '../../redux';

interface PrimaryButtonI{
    label: string;
    icon?: any;
    variant?: string;
    bgColor?: string;
    img?:boolean;
    imgPath?:string;
    id:string;
}
const IconButton:FC<PrimaryButtonI> = ({
  label, bgColor='primary', variant, icon, img, imgPath,id
}): JSX.Element => {
  

 return (<div className={`relative text-${bgColor}`}>
    {img && <img src={imgPath} alt="icon_img" className="absolute top-0 left-0 " />}
    {icon}
    <button className={`border-${bgColor} border-2 leading-none rounded-primary font-semibold text-base transform transition duration-500 hover:scale-95  text-${bgColor} pl-6 pr-4 py-1 h-8  w-24" type="button`}>
      {label}
    </button>
  </div>

);
}

export default IconButton;
