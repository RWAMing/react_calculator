/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import Log from './RightBody/Log';
import Memory from './RightBody/Memory';

/**
 * @prop {Object} body - {state, set}
 */
export default function RightHead(props) {
  // Function
  function openWritten(clicked) {
    const closeToOpen = document.querySelector('.right_close');
    if (closeToOpen === clicked.target) {
      const openToClose = document.querySelector('.right_open');
      openToClose.classList.add('right_close');
      console.log(document.querySelector('.right .body'));
      document.querySelector('.right .body').classList.add('disappear');
      setTimeout(() => {
        openToClose.classList.remove('right_open');
        closeToOpen.classList.add('right_open');
        closeToOpen.classList.remove('right_close');
        if (clicked.target === document.querySelector('.log')) {
          props.body.set(<Log />);
        } else {
          props.body.set(<Memory />);
        }
      }, 200);
    }
  }

  // Effect
  useEffect(() => {
    props.body.set(<Log />);
    document.querySelectorAll('.right .button_menu').forEach((button) => {
      button.addEventListener('click', openWritten);
    });
  }, []);
  useEffect(() => {
    document.querySelector('.right .body')?.classList.add('appear');
  }, [props.body.state]);

  // Return
  return (
    <div className='head'>
      <button type='button' className='button_menu text log right_open'>
        기록
      </button>
      <button type='button' className='button_menu text memory right_close'>
        메모리
      </button>
    </div>
  );
}
