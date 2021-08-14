import React, { lazy, Suspense } from 'react';
// import logo from './images';
import './App.css';

const AvatarComponent = lazy(() => import('./pages/HomePage'));

const App: React.FC = (): JSX.Element => (
  <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
      <AvatarComponent />
    </Suspense>
    {/* <HomePage /> */}
  </div>
);

export default App;
