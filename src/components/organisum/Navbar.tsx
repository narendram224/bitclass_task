import React from 'react';
import { SearchOutline } from 'react-ionicons';
import Brand from '../atoms/Brand';
import HorizontalLine from '../atoms/HorizontalLine';
import IconImage from '../atoms/IconImage';
import Label from '../atoms/Label';
import PrimaryButton from '../atoms/PrimaryButton';
import SearchInput from '../atoms/SearchInput';
import Spacer from '../atoms/Spacer';
import IconButtonTwoLabel from '../molecules/IconButtonTwoLabel';

const Navbar :React.FC = (): JSX.Element => (

  <nav className="flex justify-between items-center bg-white z-30 px-4 py-3 xs:py-4 sm:py-6  w-full fixed top-0 left-0 w-full shadow-shade1">
    <div className="flex flex-grow items-center  justify-between xs:justify-start">
      <IconImage src="/assets/images/humburg.svg" classes="lg:hidden" />
      <Spacer size={10} classes="hidden xs:block" />
      <Brand src="/assets/images/logo.svg" />
      <Spacer size={20} classes="hidden xs:block" />
      <Label text="Tech on Bitclass" classes="hidden md:inline" />
      <Spacer size={8} classes="hidden xs:block" />
      <SearchOutline
        color="#00000"
        width="17px"
        cssClasses="inline xs:hidden"
      />
      <SearchInput placeholder="Search for live workshop/course " classes="hidden xs:block" />
    </div>
    <div className="hidden sm:flex  justify-between items-center  ">

      <IconButtonTwoLabel src="/assets/images/logo-apple.svg" title="App store" subtitle="Download on the" classes="hidden lg:flex" />
      <Spacer size={16} classes="hidden lg:inline" />
      <IconButtonTwoLabel src="/assets/images/play.jpeg" title="Google play" subtitle="Get it on" width={20} classes="hidden lg:flex" />
      <Spacer size={10} classes="hidden lg:inline" />

      <HorizontalLine classes="hidden lg:block" />
      <Spacer size={10} />
      <PrimaryButton label="Log in" />
      <Spacer size={10} />
    </div>
  </nav>
);

export default Navbar;
