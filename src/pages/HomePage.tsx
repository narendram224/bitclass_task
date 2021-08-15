import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../components/atoms/MainLayout';
import Title from '../components/atoms/Title';
import FooterComponent from '../components/organisum/Footer';
import Navbar from '../components/organisum/Navbar';
import ProductSlider from '../components/organisum/ProductSlider';
import { itemI, RootState } from '../Interfaces/shareInterface';
import { fetchActualData,handleChangeCategory } from '../redux';
interface Props {
}


const HomePage: React.FC<Props> = ()=> {

  const actualData = useSelector((state:RootState)=>state['search'])
  const [filteredData, setfilteredData] = useState<itemI[]|[]|any>(actualData['allProduct'])

  const allButtons = ['all', ...new Set(actualData['allProduct'].map((item:itemI) => item.category))]
const categoryData = actualData['active'];
  const disptach = useDispatch();
useEffect(() => {
    disptach(fetchActualData())
  },[disptach])   
  useEffect(() => { 
    if (actualData.searchTerm.toLowerCase().trim().length>0) {
      let tempArr =actualData.allProduct;
      setfilteredData(tempArr.filter((item:itemI) =>item.title.toLowerCase().includes(actualData.searchTerm.toLowerCase().trim())
      ))
    }
  }, [actualData.searchTerm,actualData.allProduct])
  
  const handleCategoryFilter =(val:string)=>{
      disptach(handleChangeCategory(val))
  }
  return (<div>
    <Navbar />
    <MainLayout>
      <header className="xs:mt-10 mt-2 mb-2 xs:mb-10">
        {actualData.searchTerm.length > 0&&<Title titleText={`${filteredData.length} result found`} spanText={`"${actualData.searchTerm}"`} classes="font-bold text-3xl leading-6" />}
      </header>
      <section className="mt-2 border-b-2 border-gray-600 w-11/12 flex">
        {
          allButtons.map((item:string)=>{
            return <p className={`p-2 text-gray-700 font-medium capitalize cursor-pointer transform transition duration-500 hover:scale-110 hover:text-primary ${categoryData===item&&"text-primary font-bold border-b-2 border-primary transform transition duration-500 scale-110"} `} key={item} onClick={()=>handleCategoryFilter(item)} >{item}</p>
          })
        }
       

      </section>

      <div className="align-left mb-6 ml-2 mt-6">
        <Title titleText="Live now" classes="font-bold text-2xl leading-6" />
      </div>
      <ProductSlider courses={actualData['allProduct']} live={true} categoryData={categoryData} />
      <div className="align-left mb-6 ml-2 mt-6">
        <Title titleText="Upcomming Workshop" classes="font-bold text-2xl leading-6" />
      </div>
      <ProductSlider courses={actualData['allProduct']} categoryData={categoryData}  />
    </MainLayout>
    <FooterComponent />
  </div>
)
  };

export default HomePage;
