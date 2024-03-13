/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// Component
import Calculator from './Main/Calculator';

// Export
export default function Main() {
  // State
  const [leftBody, setLeftBody] = useState(<Calculator />);
  const [titleName, setTitleName] = useState('표준');

  // Return
  return (
    <div className='colunm left'>
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
        <h1 className='title'>{titleName}</h1>
      </div>
      {leftBody}
    </div>
  );
}
