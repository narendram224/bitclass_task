import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../components/atoms/MainLayout';
import Title from '../components/atoms/Title';
import FooterComponent from '../components/organisum/Footer';
import Navbar from '../components/organisum/Navbar';
import ProductSlider from '../components/organisum/ProductSlider';
import { itemI, RootState } from '../Interfaces/shareInterface';
import { fetchActualData } from '../redux';
interface Props {
}

const HomePage: React.FC<Props> = ()=> {

  const actualData = useSelector((state:RootState)=>state['search'])
  const [filteredData, setfilteredData] = useState<itemI[]|[]|any>(actualData['allProduct'])
  const disptach = useDispatch();
useEffect(() => {
    disptach(fetchActualData())
  },[disptach])   
  useEffect(() => {
    if (actualData.searchTerm.length>0) {
      let tempArr =actualData.allProduct;
      setfilteredData(tempArr.filter((item:itemI) =>item.title.toLowerCase().includes(actualData.searchTerm.toLowerCase())
      ))
    }
  }, [actualData.searchTerm,actualData.allProduct])
  
  return (<div>
    <Navbar />
    <MainLayout>
      <header className="xs:mt-10 mt-2 mb-2 xs:mb-10">
        {actualData.searchTerm.length > 0&&<Title titleText={`${filteredData.length} result found`} spanText={`"${actualData.searchTerm}"`} classes="font-bold text-3xl leading-6" />}
      </header>
      <section className="mt-2 border-b-2 border-gray-600 w-11/12 flex">
        <p className="p-2 text-gray-700 font-medium active:text-primary ">All</p>
        <p className="p-2 text-gray-700 font-medium ">All</p>
        <p className="p-2 text-gray-700 font-medium ">All</p>
        <p className="p-2 text-gray-700 font-medium ">All</p>

      </section>

      <div className="align-left mb-6 ml-2 mt-6">
        <Title titleText="Live now" classes="font-bold text-2xl leading-6" />
      </div>
      <ProductSlider courses={actualData['allProduct']} live={true} />
      <div className="align-left mb-6 ml-2 mt-6">
        <Title titleText="Upcomming Workshop" classes="font-bold text-2xl leading-6" />
      </div>
      <ProductSlider courses={actualData['allProduct']}  />
    </MainLayout>
    <FooterComponent />
  </div>
)
  };

export default HomePage;
