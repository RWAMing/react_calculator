/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

export default function RightHead(clicked) {
  function openWritten() {
    const openToClose = document.querySelector('.right_open');
    const closeToOpen = document.querySelector('.right_close');
    openToClose.classList.add('right_close');
    setTimeout(() => {
      openToClose.classList.remove('right_open');
      closeToOpen.classList.add('right_open');
      closeToOpen.classList.remove('right_close');
    }, 200);
  }
  useEffect(() => {
    document.querySelectorAll('.right .button_menu').forEach((button) => {
      button.addEventListener('click', openWritten);
    });
  }, []);

  return (
    <div className='head'>
      <button type='button' className='button_menu text written right_open'>
        기록
      </button>
      <button type='button' className='button_menu text memory right_close'>
        메모리
      </button>
    </div>
  );
}
