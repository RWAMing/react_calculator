/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';

// Export
export default function MainHead() {
  // State
  const [titleName, setTitleName] = useState('표준');
  const [title, setTitle] = useState(<h1 className='title'>{titleName}</h1>);
  const [isOpen, setIsOpen] = useState();

  // Effect
  useEffect(() => {
    const nav = document.querySelector('nav');
    if (isOpen === true) {
      nav.classList.add('open_nav');
      nav.classList.add('wait');
      setTimeout(() => {
        console.log(String(nav.classList).search('wait'));
        nav.classList.remove('wait');
        nav.querySelectorAll('*').forEach((element) => {
          element.style.display = 'block';
        });
        nav.style.width = '600px';
        nav.classList.remove('open_nav');
      }, 500);
    } else if (isOpen === false) {
      nav.classList.add('close_nav');
      nav.classList.add('wait');
      setTimeout(() => {
        console.log(String(nav.classList).search('wait'));
        nav.classList.remove('wait');
        nav.querySelectorAll('*').forEach((element) => {
          element.style.display = 'none';
        });
        nav.style.width = '0';
        nav.classList.remove('close_nav');
      }, 500);
    }
  }, [isOpen]);

  // Function
  function opanClose() {
    const nav = document.querySelector('nav');
    if (String(nav.classList).length === 0) {
      if (isOpen === true) {
        console.log('true -> false');
        setIsOpen(false);
      } else {
        console.log('false -> true');
        setIsOpen(true);
      }
    }
  }

  // Return
  return (
    <div className='head'>
      <button
        type='button'
        className='button_menu button_nav'
        onClick={opanClose}>
        &equiv;
      </button>
      {title}
    </div>
  );
}
