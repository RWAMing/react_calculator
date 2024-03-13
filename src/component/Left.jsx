/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// Component
import LeftHead from './LeftHead.jsx';
import Calculator from './LeftBody/Calculator/Calculator.jsx';

// Export
export default function Left() {
  // State
  const [leftBody, setLeftBody] = useState(<Calculator />);

  // Return
  return (
    <div className='colunm left'>
      <LeftHead />
      {leftBody}
    </div>
  );
}
