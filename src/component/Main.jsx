/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// Component
import MainHead from './MainHead';
import Calculator from './Main/Calculator';

// Export
export default function Main() {
  // State
  const [leftBody, setLeftBody] = useState(<Calculator />);

  // Return
  return (
    <div className='colunm left'>
      <MainHead />
      {leftBody}
    </div>
  );
}
