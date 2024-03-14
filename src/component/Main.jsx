import React, { useContext } from 'react';

import MainContext from './context/MainContext';

export default function Main() {
  const { main, mainName } = useContext(MainContext);
  return (
    <div className='colunm main'>
      <div className='head'>
        <button
          type='button'
          className='button_menu button_nav'
          onClick={() => {
            // 클릭시 nav 오픈
          }}
        >
          &equiv;
        </button>
        <h1 className='title'>{mainName}</h1>
      </div>
      <main>{main}</main>
    </div>
  );
}
