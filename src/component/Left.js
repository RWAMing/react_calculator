/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

import LeftHead from './Left/LeftHead';
import Calculator from './Left/Calculator';

export default function Left() {
  return (
    <div className='body left'>
      <LeftHead />
      <Calculator />
    </div>
  );
}
