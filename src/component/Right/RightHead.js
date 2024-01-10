/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

export default function RightHead() {
  function openWritten() {
    document.querySelector('.written').classList.add('right_open');
  }
  useEffect(() => {
    document.querySelector('.written').addEventListener('click', openWritten);
  }, []);

  return (
    <div className='head'>
      <button type='button' className='button_menu text written right_open'>
        기록
      </button>
      <button type='button' className='button_menu text memory'>
        메모리
      </button>
    </div>
  );
}
