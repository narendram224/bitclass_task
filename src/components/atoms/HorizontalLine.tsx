import React from 'react';
import { addClassI } from '../../Interfaces/shareInterface';

type HlI = addClassI
const HorizontalLine: React.FC<HlI> = ({ classes }):JSX.Element => (
  <div className={`h-12 w-px bg-gray-200 ${classes}`} />
);

export default HorizontalLine;
