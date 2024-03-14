import React, { useContext } from 'react';

import MainContext from './MainContext';

export default function Main() {
  const { main, mainName } = useContext(MainContext);
  return (
    <main className='colunm main'>
      <div className='head'>
        <button
          type='button'
          className='main__menu-open'
          onClick={() => {
            // 클릭시 nav 오픈
          }}
        >
          &equiv;
        </button>
        <h1 className='main__menu-name'>{mainName}</h1>
      </div>
      <div className='main__content'>{main}</div>
    </main>
  );
}
