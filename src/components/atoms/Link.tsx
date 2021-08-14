import React from 'react'
 
interface linkI{
    text:React.ReactNode|string|any;
}

const Link: React.FC<linkI>= ({text}) => {
    return (
        <a href="#" className={`text-white text-lg font-medium`}>
            {text}
        </a>
    )
}

export default Link
