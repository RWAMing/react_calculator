/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

import Nav from './Left/Nav';
import LeftHead from './Left/LeftHead';
import Calculator from './Left/Calculator';

export default function Left() {
  return (
    <div className='left'>
      <Nav />
      <div className='left_content'>
        <LeftHead />
        <Calculator />
      </div>
    </div>
  );
}
