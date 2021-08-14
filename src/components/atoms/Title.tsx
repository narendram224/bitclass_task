import React from 'react';
import { addClassI } from '../../Interfaces/shareInterface';

interface titleProps extends addClassI {
    titleText:string;
    align?:string;
    spanText?:string;

}
const Title: React.FC<titleProps> = ({
  titleText, align = 'left', classes, spanText,
}): JSX.Element => (
  <h1 className={`text-grey-200  text-${align} leading-3 ${classes}`}>
    {titleText}
    {' '}
    {spanText && <span className="font-extrabold leading-10 pt-2">{spanText}</span>}
    {' '}
  </h1>
);

export default Title;
