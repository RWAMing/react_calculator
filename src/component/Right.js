/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

import RightHead from './Right/RightHead';
import RightBody from './Right/RightBody';

export default function Right() {
  return (
    <div className='body'>
      <RightHead />
      <RightBody />
    </div>
  );
}
