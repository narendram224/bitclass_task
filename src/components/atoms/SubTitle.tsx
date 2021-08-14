import React from 'react';
import { addClassI } from '../../Interfaces/shareInterface';

interface subTitleProps extends addClassI{
    subtitleText: string;
    align?:string;
}
const SubTitle: React.FC<subTitleProps> = ({ subtitleText, align, classes }): JSX.Element => (
  <h6 className={`text-xss text-gray-700 leading-3 text-${align} ${classes}`}>{subtitleText}</h6>
);

export default SubTitle;
