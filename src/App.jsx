import React, { useMemo, useState } from 'react';
import './App.css';

import Nav from './component/Nav';
import Main from './component/Main';
import Calculator from './component/Main/Calculator';
import History from './component/History';

import MainContext from './component/context/MainContext';

// Export
export default function App() {
  const [main, setMain] = useState(<Calculator />);
  const [mainName, setMainName] = useState('표준');

  const mainValue = useMemo(
    () => ({ main, setMain, mainName, setMainName }),
    [],
  );

  return (
    <MainContext.Provider value={mainValue}>
      <div className='App bg'>
        <Nav />
        <Main />
        <History />
      </div>
    </MainContext.Provider>
  );
}
