import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { itemI, RootState } from '../../Interfaces/shareInterface';
import CardComponent from '../atoms/CardComponent';
import Spacer from '../atoms/Spacer';
import LiveNowContent from '../molecules/LiveNowContent';

interface prodcutI{
  courses?: Array<RootState>|null|any;
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

const ProductSlider:React.FC<prodcutI> = ({ courses }): JSX.Element => {
  const actualData = useSelector((state:RootState)=>state['search'])

  return (<div className="flex w-full overflow-auto md:overflow-x-scroll ">
      {courses
        .filter((item:itemI) => item.title.toLowerCase().includes(actualData.searchTerm.toLowerCase()))
        .map((item:itemI)=>{
            return (<Fragment key={item['id']}>
            <CardComponent >
      <LiveNowContent title={item['title']} author={item['author']} img={staticData.img} pay={item['price']} rating={item['rating']} follow={item['follow']} productImage={staticData.productImage} />
    </CardComponent>
    <Spacer size={10} />
            </Fragment>)
        })
      }
{/* 
<CardComponent>
      <UpcommentContent title={staticData.title} author={staticData.author} img={staticData.img} pay={staticData.pay} rating={staticData.rating} productImage={staticData.productImage} />
    </CardComponent>
    <Spacer size={10} /> */}
{/* 
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
    <Spacer size={10} /> */}

  </div>
);
  }

export default ProductSlider;
