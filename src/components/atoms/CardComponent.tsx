import React from 'react';
import { addClassI } from '../../Interfaces/shareInterface';

interface cardPropsI extends addClassI{
    content?:any
}
const CardComponent: React.FC<cardPropsI> = ({ children, classes }) => (
  <section className="flex bg-black p-2 border-px border-black box-border  shadow-shade2 rounded-xl min-w-11 xs:min-w-12 w-2/5">
    {children}
  </section>
);

export default CardComponent;
