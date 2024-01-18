/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import LeftHead from './LeftHead';
import Calculator from './LeftBody/Calculator/Calculator';

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
