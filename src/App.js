/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './component/Nav';
import Left from './component/Left';
import Right from './component/Right';

export default function App() {
  const [right, setRight] = useState();

  function responsive() {
    const app = document.querySelector('.App');
    if (app.scrollWidth < 930) {
      setRight();
      document.querySelector('.left').style.flexGrow = '1';
    } else {
      setRight(<Right />);
      document.querySelector('.left').style.flexGrow = '0';
    }
  }
  useEffect(() => {
    responsive();
    window.addEventListener('resize', responsive);
  }, []);

  return (
    <div className='App bg text'>
      <Nav />
      <Left />
      {right}
    </div>
  );
}
