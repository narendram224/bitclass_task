import React from 'react';
import IconButton from '../atoms/IconButton';
import ProfileWithLabel from '../atoms/ProfileWithLabel';
import Title from '../atoms/Title';
import { ArrowForwardOutline } from 'react-ionicons'


 interface upContentI{
    title:string;
    author:string;
    img: string;
    pay: string;
    rating:string;
    productImage:string;
}

const LiveNowContent: React.FC<upContentI> = () => (
  <div className="relative">
      <img src="./assets/images/boy1.jpeg"  alt="product_img" />
      <img src="./assets/images/rect1.png"  alt="product_img" className="absolute top-0 left-0" />  
      <div className="absolute bottom-0 text-white  w-full ">
        <p className=" bg-red-500 p-0.5 w-16 font-bold rounded-md mb-1 ml-4">LIVE</p>
        <Title titleText="Printing Business Secrets | Start Earning Online" classes="text-white text-base text-left font-bold pl-4 pt-3 leading-6" />
        <div className=" relative flex justify-between mx-3.5 mt-4 ">
        <ProfileWithLabel />
        <div className="relative w-18">
        <IconButton
          icon={(
            <p className="w-2 ont-semibold absolute top-0.5 left-3 font-bold text-inherit">+</p>
)}
          label="Follow"
          bgColor="white"
        />
        </div>
        </div>
        <div className="flex bg-primary justify-between rounded-b-md text-white  mb-3 mt-3 mx-2 p-3 cursor-pointer">
          <p className="text-sm font-bold leading-6">What the class now for FREE</p>

<ArrowForwardOutline
  color={'inheriat'} 
  height="25px"
  width="25px"
  cssClasses="  "
/>

        </div>
      </div>
  </div>
);

export default LiveNowContent;
