import React, { useState } from 'react';
import { SearchOutline } from 'react-ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Interfaces/shareInterface';
import { handleChangeSearch } from '../../redux';
import Brand from '../atoms/Brand';
import HorizontalLine from '../atoms/HorizontalLine';
import IconImage from '../atoms/IconImage';
import Label from '../atoms/Label';
import PopupInput from '../atoms/PopupInput';
import PrimaryButton from '../atoms/PrimaryButton';
import SearchInput from '../atoms/SearchInput';
import Spacer from '../atoms/Spacer';
import IconButtonTwoLabel from '../molecules/IconButtonTwoLabel';

const Navbar: React.FC = (): JSX.Element => {
  const [display, setdisplay] = useState(false)

  // const searchTer = actualData.searchTerm;


  return <nav className="flex justify-between items-center bg-white z-30 px-4 py-3 xs:py-4 sm:py-6  w-full fixed top-0 left-0 w-full shadow-shade1">
    <div className="flex flex-grow items-center  justify-between xs:justify-start">
      <IconImage src="/assets/images/humburg.svg" classes="lg:hidden mt-3.5 hover:scale-0" />
      <Spacer size={10} classes="hidden xs:block" />
      <Brand src="/assets/images/logo.svg" />
      <Spacer size={20} classes="hidden xs:block" />
      <Label text="Tech on Bitclass" classes="hidden md:inline cursor-pointer" />
      <Spacer size={8} classes="hidden xs:block" />
      <PopupInput display={display} onChange={setdisplay} />
      <SearchOutline
        color="#00000"
        width="17px"
        cssClasses="inline cursor-pointer xs:hidden"
        onClick={() => setdisplay(!display)}
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
};

export default Navbar;
