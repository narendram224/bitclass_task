import React from 'react'
import { addClassI } from '../../Interfaces/shareInterface'
 
interface linkI extends addClassI{
    text:React.ReactNode|string|any;
}

const Link: React.FC<linkI>= ({text,classes}) => {
    return (
        <a href="#" className={`text-white text-lg font-medium transform transition duration-500 hover:scale-110 hover:text-primary ${classes}` }>
            {text}
        </a>
    )
}

export default Link
