import React from 'react';
import { CalendarOutline, StarOutline, AddOutline } from 'react-ionicons';
import IconButton from '../atoms/IconButton';
import IconImage from '../atoms/IconImage';
import ProfileWithLabel from '../atoms/ProfileWithLabel';

interface upContentI{
    title:string;
    author:string;
    img: string;
    pay: string;
    rating:string;
    productImage:string;
}

const UpcommentContent: React.FC<upContentI> = ({
  title, author, img, rating, pay, productImage,
}): JSX.Element => (
  <div className="flex flex-col ">
    <div className="relative">
      <img src="./assets/images/product1.jpg" alt="product_image" className="product_image rounded-xl" />
      <div className="absolute bottom-0 left-0 bg-white flex justify-between w-full rounded-b-md flex  p-2 rounded-b-xl ">
        <ProfileWithLabel />
        <IconButton
          icon={(
            <p className="w-2 ont-semibold absolute top-0.5 left-3  font-bold text-inherit">+</p>
)}
          label="Follow"
        />
      </div>
    </div>
    <div className="">
      <h1 className="text-white text-left font-bold pl-4 pt-3">Printing Business Secrets | Start Earning Online</h1>
      <div className="flex text-white item-center pl-4 pt-3">
        <CalendarOutline
          color="#ffffff"
          height="18px"
          width="18px"
        />
        <p className=" pl-1 text-sm text-gray-300 self-start">Multiple Classes every week</p>

      </div>
      <div className="flex justify-between text-white p-4">
        <p className="text-white">INR 99/-</p>
        <p className="text-white mr-16  line-through text-gray-500">INR 399/-</p>

        <p className="flex">
          <StarOutline
            color="#F69F1B"
            height="20px"
            width="20px"
            cssClasses="order-2"
          />
          4.7
        </p>

      </div>
    </div>
  </div>
);

export default UpcommentContent;
