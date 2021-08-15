import React from 'react';
import IconImage from '../atoms/IconImage';
import SubTitle from '../atoms/SubTitle';
import Title from '../atoms/Title';

type iBProps={
    src: string;
    title: string;
    subtitle: string;
    width?: number;
    classes?:string;
}

const IconButtonTwoLabel: React.FC<iBProps> = ({
  src, title, subtitle, width = 25, classes,
}):JSX.Element => (
  <div className={`flex item-center justify-between border-2 border-black rounded-md px-2 py-1.5 cursor-pointer ${classes}`}>
    <IconImage src={src} width={width} />
    <div className="pl-1">
      <SubTitle subtitleText={subtitle} align="left" />
      <Title titleText={title} align="left" classes="leading-3" />
    </div>

  </div>
);

export default IconButtonTwoLabel;
