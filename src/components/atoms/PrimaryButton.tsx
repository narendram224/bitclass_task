import React, { FC } from 'react';

interface PrimaryButtonI{
    label: string;
}
const PrimaryButton:FC<PrimaryButtonI> = ({ label }): JSX.Element => (
  <button className="bg-primary rounded-primary font-semibold text-base text-white px-3 py-1.75 h-12 w-28 transform transition duration-500 hover:scale-95" type="button">
    {label}
  </button>
);

export default PrimaryButton;
