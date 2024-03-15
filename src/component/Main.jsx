import React, { useState, useMemo } from 'react';

import Calculator from './Main/Calculator';

import MainContext from './MainContext';

export default function Main() {
  const [main, setMain] = useState(<Calculator />);
  const [mainName, setMainName] = useState('표준');
  const mainValue = useMemo(
    () => ({ main, setMain, mainName, setMainName }),
    [],
  );
  return (
    <MainContext.Provider value={mainValue}>
      <main className='main'>
        <header className='main__header'>
          <nav className='main__nav' />
          <button
            type='button'
            className='main__nav-open'
            onClick={() => {
              // 클릭시 nav 오픈
            }}
          >
            &equiv;
          </button>
          <h1 className='main__name'>{mainName}</h1>
        </header>
        <div className='main__content'>{main}</div>
      </main>
    </MainContext.Provider>
  );
}
