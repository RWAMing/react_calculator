/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import './App.css';

// Component
import Nav from './component/Nav';
import Left from './component/Left';
import Right from './component/Right';

// Export
export default function App() {
  // Function
  function responsiveLayout() {
    const app = document.querySelector('.App');
    if (app.scrollWidth < 930) {
      document.querySelector('.left').style.flexBasis = '930px';
      document.querySelector('.left').style.minWidth = '';
      document.querySelector('.right').style.display = 'none';
    } else {
      document.querySelector('.left').style.flexBasis = '800px';
      document.querySelector('.left').style.minWidth = '800px';
      document.querySelector('.right').style.display = 'flex';
    }
  }

  // Effect
  useEffect(() => {
    window.addEventListener('load', responsiveLayout);
    window.addEventListener('resize', responsiveLayout);
    return () => {
      window.removeEventListener('load', responsiveLayout);
      window.removeEventListener('resize', responsiveLayout);
    };
  }, []);

  // Return
  return (
    <div className='App bg'>
      <Nav />
      <Left />
      <Right />
    </div>
  );
}
