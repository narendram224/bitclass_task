import React from 'react';
import IconButton from '../atoms/IconButton';
import ProfileWithLabel from '../atoms/ProfileWithLabel';
import Title from '../atoms/Title';
import { ArrowForwardOutline } from 'react-ionicons'

import { upContentI } from '../../Interfaces/shareInterface';




const LiveNowContent: React.FC<upContentI> = ({ title, author, img, rating, productImage, pay, follow, id }) => {

  return (<div className="relative w-full h-full ">
    <img src="./assets/images/boy1.jpeg" alt="product_img" className="rounded-xl" />
    <img src="./assets/images/rect1.png" alt="product_img" className="absolute rounded-xl top-0 left-0 w-full h-full " />
    <div className="absolute bottom-0 text-white  w-full ">
      <p className=" bg-red-500 p-0.5 w-16 font-bold rounded-md mb-1 ml-4 text-sm text-center">LIVE</p>
      <Title titleText={title} classes="text-white text-base text-left font-bold pl-4  leading-5" />
      <div className=" relative flex justify-between mx-3.5 mt-3 ">
        <ProfileWithLabel label={author} />
        <div className="relative w-18">
          <IconButton
            id={id}
            icon={(
              <p className="w-2 font-semibold absolute top-0.5 left-6 font-bold text-inherit">+</p>
            )}
            label={follow ? "Followed" : "Follow"}
            bgColor="white"
          />
        </div>
      </div>
      <div className="flex bg-primary justify-between rounded-b-md text-white  mb-1 mt-3   p-3 cursor-pointer transform transition duration-500 hover:scale-95">
        <p className="text-sm font-bold leading-6 ">What the class now for FREE</p>

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
}

export default LiveNowContent;
