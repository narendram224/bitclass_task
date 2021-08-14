import React, { useState } from 'react';
import MainLayout from '../components/atoms/MainLayout';
import Spacer from '../components/atoms/Spacer';
import Title from '../components/atoms/Title';
import Navbar from '../components/organisum/Navbar';
import ProductSlider from '../components/organisum/ProductSlider';

const HomePage: React.FC = () => (
  <div>
    <Navbar />
    <MainLayout>
      <header className="xs:mt-10 mt-2 mb-2 xs:mb-10">
        <Title titleText="12 result found" spanText='"Mradana"' classes="font-bold text-3xl leading-6" />
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
      <ProductSlider />
      <div className="align-left mb-6 ml-2 mt-6">
        <Title titleText="Upcomming Workshop" classes="font-bold text-2xl leading-6" />
      </div>
      <ProductSlider />
    </MainLayout>
  </div>

);

export default HomePage;
