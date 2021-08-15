import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { itemI, RootState } from '../../Interfaces/shareInterface';
import CardComponent from '../atoms/CardComponent';
import Spacer from '../atoms/Spacer';
import Title from '../atoms/Title';
import LiveNowContent from '../molecules/LiveNowContent';
import UpcommentContent from '../molecules/UpcommentContent';

interface prodcutI{
  courses?: Array<RootState>|null|any;
  live?:boolean|false;
  categoryData?:string;
}


const staticData = {
  title: 'Printing Business Secrets | Start Earning Online',
  author: 'Vishav Sharma',
  img: '/assets/images/profile.svg',
  pay: '99',
  rating: '4.7',
  productImage: '/assets/images/product1.jpg',
};

const ProductSlider:React.FC<prodcutI> = ({ courses ,live=false,categoryData}): JSX.Element => {
  const actualData = useSelector((state:RootState)=>state['search'])
  const [filtered, setfiltered] = useState([])
useEffect(() => {
  setfiltered(courses);
},[courses])
useEffect(() => {
   setfiltered(courses
    .filter((item:itemI) => {
      if (item.title.toLowerCase().includes(actualData.searchTerm.toLowerCase().trim()) && categoryData?.toLowerCase()===item['category'].toLowerCase()){
        return true;
      }else if (item.title.toLowerCase().includes(actualData.searchTerm.toLowerCase().trim())&&categoryData?.toLowerCase()==="all"){
        return true;
      }
    }))

  
},[actualData.searchTerm,categoryData])

  return (<div className="flex w-full overflow-auto md:overflow-x-scroll ">
      {
        filtered.length>0?filtered.map((item:itemI)=>{
            return (<Fragment key={item['id']}>

            <CardComponent >
      {live?<LiveNowContent id={item['id']} title={item['title']} author={item['author']} img={staticData.img} pay={item['price']} rating={item['rating']} follow={item['follow']} productImage={staticData.productImage} />
      :<UpcommentContent id={item['id']} title={item['title']} author={item['author']} img={staticData.img} pay={item['price']} rating={item['rating']} follow={item['follow']} productImage={staticData.productImage} />
      }
    </CardComponent>
    <Spacer size={10} />
            </Fragment>)
        }):< Title titleText="No Data Found" classes="text-2xl font-bold text-primary m-2 text-center" />
      }
  </div>
);
  }

export default ProductSlider;
