/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */

import React, { useState, useEffect } from 'react';

export default function LeftHead() {
  const [titleName, setTitleName] = useState('표준');
  const [title, setTitle] = useState(<h1 className='title'>{titleName}</h1>);

  return (
    <div className='head'>
      <button type='button' className='button_menu'>
        <span className='button_nav text'>&equiv;</span>
      </button>
      {title}
    </div>
  );
}
