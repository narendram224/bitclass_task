import React from 'react'
import SearchInput from './SearchInput'
import { CloseCircleOutline } from 'react-ionicons'



interface searchInputI{
    display:boolean;
    onChange(val:boolean):void; 
}
const PopupInput: React.FC<searchInputI>= ({display=false,onChange}): JSX.Element=> {
    return (
        <div className={`bg-white w-full fixed h-24 pt-4 left-0 top-0 shadow-shade1 xs:hidden  cursor-pointer ${display?'block':'hidden'}`}>
            <div className="my-0 m-auto w-5/6">
            <SearchInput placeholder="Search for live workshop/course"  />

            </div>
            <button type="button" onClick={()=>onChange(!display)} className="absolute  left-1/2 pr-5   -bottom-3" >
            <CloseCircleOutline
  color={'#079893'} 
  height="30px"
  width="30px"
  cssClasses="hover:text-red cursor-pointer"
/>
            </button>
        </div>
    )
}

export default PopupInput
