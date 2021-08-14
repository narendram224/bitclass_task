import React from 'react';
import CardComponent from '../atoms/CardComponent';
import Spacer from '../atoms/Spacer';
import LiveNowContent from '../molecules/LiveNowContent';
import UpcommentContent from '../molecules/UpcommentContent';

interface prodcutI{
        item?: [];
}
//
const staticData = {
  title: 'Printing Business Secrets | Start Earning Online',
  author: 'Vishav Sharma',
  img: '/assets/images/profile.svg',
  pay: '99',
  rating: '4.7',
  productImage: '/assets/images/product1.jpg',
};

const ProductSlider:React.FC<prodcutI> = ({ item }): JSX.Element => (
  <div className="flex w-full overflow-auto md:overflow-x-scroll ">

    <CardComponent>
      <LiveNowContent title={staticData.title} author={staticData.author} img={staticData.img} pay={staticData.pay} rating={staticData.rating} productImage={staticData.productImage} />
    </CardComponent>
    <Spacer size={10} />

    <CardComponent>
      <UpcommentContent title={staticData.title} author={staticData.author} img={staticData.img} pay={staticData.pay} rating={staticData.rating} productImage={staticData.productImage} />
    </CardComponent>
    <Spacer size={10} />
    <CardComponent>
      <UpcommentContent title={staticData.title} author={staticData.author} img={staticData.img} pay={staticData.pay} rating={staticData.rating} productImage={staticData.productImage} />
    </CardComponent>
    <Spacer size={10} />
    <CardComponent>
      <UpcommentContent title={staticData.title} author={staticData.author} img={staticData.img} pay={staticData.pay} rating={staticData.rating} productImage={staticData.productImage} />
    </CardComponent>
    <Spacer size={10} />
    <CardComponent>
      <UpcommentContent title={staticData.title} author={staticData.author} img={staticData.img} pay={staticData.pay} rating={staticData.rating} productImage={staticData.productImage} />
    </CardComponent>
    <Spacer size={10} />
    <CardComponent>
      <UpcommentContent title={staticData.title} author={staticData.author} img={staticData.img} pay={staticData.pay} rating={staticData.rating} productImage={staticData.productImage} />
    </CardComponent>
    <Spacer size={10} />
    <CardComponent>
      <UpcommentContent title={staticData.title} author={staticData.author} img={staticData.img} pay={staticData.pay} rating={staticData.rating} productImage={staticData.productImage} />
    </CardComponent>
    <Spacer size={10} />
    <CardComponent>
      <UpcommentContent title={staticData.title} author={staticData.author} img={staticData.img} pay={staticData.pay} rating={staticData.rating} productImage={staticData.productImage} />
    </CardComponent>
    <Spacer size={10} />

  </div>
);

export default ProductSlider;
