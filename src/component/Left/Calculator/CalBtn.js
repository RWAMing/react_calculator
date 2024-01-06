/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

export default function CalBtn(prop) {
  return (
    <button type='button' className='cal_btn'>
      {prop.v}
    </button>
  );
}
