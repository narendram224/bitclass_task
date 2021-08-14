import React, { lazy, Suspense } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
const HomeComponent = lazy(() => import('./pages/HomePage'));


const App: React.FC = (): JSX.Element => {

    return <Provider store={store}>
   <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
      <HomeComponent />
    </Suspense>
  </div>
  </Provider>
};

export default App;
