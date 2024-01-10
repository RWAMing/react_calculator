/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

import LeftHead from './Left/LeftHead';
import Calculator from './Left/LeftBody/Calculator';

export default function Left() {
  const [leftBody, setLeftBody] = useState(<Calculator />);

  return (
    <div className='colunm left'>
      <LeftHead />
      {leftBody}
    </div>
  );
}
