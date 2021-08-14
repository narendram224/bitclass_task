import React from 'react';
import { SearchOutline } from 'react-ionicons';
import { addClassI } from '../../Interfaces/shareInterface';

interface SearchInputProps extends addClassI{
    placeholder: string
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, classes }:SearchInputProps): JSX.Element => (
  <div className={`relative bg-red-200  w-1/2  ${classes}`}>
    <SearchOutline
      color="#00000"
      width="17px"
      cssClasses="absolute top-3 left-3  "
    />
    <input type="text" placeholder={placeholder} className="py-2 h-11 w-full text-sm border-2  bg-white rounded-md pl-10 border-gray-700 focus:outline-none  focus:border-primary  focus:text-gray-900" />
  </div>
);

export default SearchInput;
