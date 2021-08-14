import React from 'react';
import { addClassI } from '../../Interfaces/shareInterface';

 interface spacerType extends addClassI{
    size: number;
    axis?:string;
    delegated?:React.ReactNode;
}

const Spacer: React.FC<spacerType> = ({
  size,
  axis,
  classes,
  delegated,
}): JSX.Element => {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;
  return (
    <span
      style={{
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
      className={`${classes}`}
    >
      {delegated}
    </span>
  );
};
export default Spacer;
