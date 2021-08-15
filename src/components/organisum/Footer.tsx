import React from 'react'
import { addClassI } from '../../Interfaces/shareInterface';
import IconImage from '../atoms/IconImage';
import Link from '../atoms/Link';
import Spacer from '../atoms/Spacer';
import Title from '../atoms/Title';

interface linkCI extends addClassI{
    icon: string;
    label: string;
}

interface linkContainerI{
children:React.ReactNode
}

const LinkContent: React.FC<linkCI>= ({icon,label,classes})=>{
    return <h1 className={`flex  items-end  ${classes}`}>
            <img src={icon} className="pr-2 pb-1 pt-2 self-start" alt="product_img" />
        {label}
</h1>
}
const LinkContainer: React.FC<linkContainerI>=({children})=>{
    return  <section className="r flex flex-col  w-full md:w-1/5">
        {children}
    </section>
}

const FooterComponent: React.FC= (): JSX.Element=> {
    return (
        <footer className="p-12 mt-8 bg-black">
            <div className="flex justify-between flex-wrap ">
                <section className="l flex flex-col w-full lg:w-2/5  ">
                     <IconImage src="./assets/images/logo1.svg" width={40} classes="self-start" />
                     <Spacer size={30} />
                     <Title titleText="BitClass helps individual teachers, trainers and coaches setup and grow their online live teaching business successfully." classes="text-gray-600 leading-5  " />
                     <Spacer size={20} />
                    
                    <div className="flex  ">
                     <IconImage src="./assets/images/LinkedIn.svg" width={20} classes="mr-3 transition duration-500 hover:scale-110" />
                     <IconImage src="./assets/images/instagram.svg" width={20} classes="mr-3" />
                     <IconImage src="./assets/images/twitter.svg" width={20} classes="mr-3" />
                     <IconImage src="./assets/images/facebook.svg" width={20} classes="" />


                    </div>
                    <Spacer size={20} />

                </section>
                <LinkContainer>
                <Title titleText="Pages" classes="text-gray-500 text-lg font-bold hover:translate-y-4 " />
                <Link text="Home"  classes="mt-4 sm:mt-6  lg:mt-12 text-base" />
                <Link text="Blog" classes="text-base" />
                <Link text="About" classes="text-base" />
                <Link text="Contact"  classes="text-base"/>
                <Link text="Careers" classes="mb-4 xs:mb-6 text-base" />
                </LinkContainer>
               
                <LinkContainer>
                <Title titleText="Contact Us" classes="text-gray-500 text-lg font-bold " />
                <Link text={<LinkContent classes="mt-4 sm:mt-6  lg:mt-12 text-base"  icon="./assets/images/phone.svg" label="+91-6464646666" />} />
                <Link text={<LinkContent icon="./assets/images/phone.svg" classes="text-base" label="+91-6464646666" />} />
                <Link  text={<LinkContent classes="mt-4 mb-4 xs:mt-6 xs:mb-6 sm:mt-10 text-base"  icon="./assets/images/mail.svg" label="hello@bitclass.live" />} />

                </LinkContainer>
                <LinkContainer>
                <Title titleText="Address" classes="text-gray-500 text-lg font-bold" />
                <Link text={<LinkContent classes="mt-4 sm:mt-6  lg:mt-12 text-base" icon="./assets/images/location.svg" label="3 rd floor, 688
22nd Cross Rd, Parangi Palaya
Sector 2, HSR Layout, Bengaluru, Karnataka 560102" />} />

                </LinkContainer>

            </div>
            <h1 className=" text-gray-600 mt-4 text-xl  font-semibold">Livestream Infra Technologies Pvt Ltd © 2020</h1>
        </footer>
    )
}

export default FooterComponent