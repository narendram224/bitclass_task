import React from 'react';
import { addClassI } from '../../Interfaces/shareInterface';

interface labelProps extends addClassI {
    text:string
}
const Label: React.FC<labelProps> = ({ text, classes }:labelProps)
: JSX.Element => (
  <div className={`${classes}`}>
    <p className="font-normal">{text}</p>
  </div>
);

export default Label;
