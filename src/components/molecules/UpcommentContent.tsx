import React from 'react';
import { CalendarOutline, StarOutline } from 'react-ionicons';
import { upContentI } from '../../Interfaces/shareInterface';
import IconButton from '../atoms/IconButton';
import ProfileWithLabel from '../atoms/ProfileWithLabel';


const UpcommentContent: React.FC<upContentI> = ({
  title, author, img, rating, pay, productImage,follow,id
}): JSX.Element => (
  <div className="flex flex-col ">
    <div className="relative">
      <img src={productImage} alt="product_image" className="product_image rounded-xl" />
      <div className="absolute bottom-0 left-0 bg-white flex justify-between w-full rounded-b-md flex  p-2 rounded-b-xl ">
        <ProfileWithLabel label={author} />
        <IconButton
          id={id}
          icon={(
            <p className="w-2 ont-semibold absolute top-0.5 left-6  font-bold text-inherit">+</p>
)}
          label={follow?"Followed":"Follow"}
        />
      </div>
    </div>
    <div className="">
      <h1 className="text-white text-left font-bold pl-4 pt-3">{title}</h1>
      <div className="flex text-white item-center pl-4 pt-3">
        <CalendarOutline
          color="#ffffff"
          height="18px"
          width="18px"
        />
        <p className=" pl-1 text-sm text-gray-300 self-start">Multiple Classes every week</p>

      </div>
      <div className="flex justify-between text-white p-4">
        <p className="text-white">{pay==="free"?"Free":`INR ${pay}/-`}</p>
        <p className="text-white mr-12  line-through text-gray-500">INR 399/-</p>

        <p className="flex">
          <StarOutline
            color="#F69F1B"
            height="20px"
            width="20px"
            cssClasses="order-2 transform transition duration-500 hover:scale-110 "
          />
          {rating}
        </p>

      </div>
    </div>
  </div>
);

export default UpcommentContent;
