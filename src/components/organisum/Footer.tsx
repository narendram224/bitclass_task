import React from 'react'
import IconImage from '../atoms/IconImage';
import Link from '../atoms/Link';
import Spacer from '../atoms/Spacer';
import Title from '../atoms/Title';

interface linkCI{
    icon: string;
    label: string;
}
const LinkContent: React.FC<linkCI>= ({icon,label})=>{
    return <h1 className="flex bg-green-400 ">
            <img src={icon} className="pr-2 pb-1" alt="product_img" />
        {label}
</h1>
}

const FooterComponent: React.FC= (): JSX.Element=> {
    return (
        <footer className="p-4">
            <div className="flex justify-between bg-black">
                <section className="l">
                     <IconImage src="./assets/images/logo1.svg" width={40} />
                     <Title titleText="sdssfsf" classes="text-white" />
                </section>
                <section className="m flex flex-col">
                    <Title titleText="ssfsffs" classes="text-white" />
                    <Spacer size={50} />
                <Link text="Home" />
                <Link text="Blog" />
                <Link text="About" />
                <Link text="Contact" />
                <Link text="Careers" />
                </section>
                <section className="m1">
                <Title titleText="ssfsffs" classes="text-white" />
                <Spacer size={50} />

                </section>
                <section className="r">
                <Title titleText="ssfsffs" classes="text-white" />
                <Spacer size={50} />
                <Link text={<LinkContent icon="./assets/images/phone.svg" label="3 rd floor, 688
22nd Cross Rd, Parangi Palaya
Sector 2, HSR Layout, Bengaluru, Karnataka 560102" />} />

                </section>

            </div>
        </footer>
    )
}

export default FooterComponent