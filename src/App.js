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
  // State
  const [right, setRight] = useState();

  // Function
  function responsiveLayout() {
    const app = document.querySelector('.App');
    if (app.scrollWidth < 930) {
      setRight();
      document.querySelector('.left').style.flexGrow = '1';
    } else {
      setRight(<Right />);
      document.querySelector('.left').style.flexGrow = '0';
    }
  }

  // Effect
  useEffect(() => {
    window.addEventListener('load', responsiveLayout);
    window.addEventListener('resize', responsiveLayout);
  }, []);

  // Return
  return (
    <div className='App bg text'>
      <Nav />
      <Left />
      {right}
    </div>
  );
}
