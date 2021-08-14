import React, {
   ReactFragment, ReactPortal, ReactChild,
} from 'react';

type mainI = {
    children?:ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
}

const MainLayout: React.FC<mainI> = ({ children }):JSX.Element => (
  <main className="pl-12 pt-24  ">
    {children}
  </main>
);

export default MainLayout;
