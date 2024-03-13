/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import RightHead from './RightHead.jsx';
import Log from './RightBody/Log.jsx';
import Memory from './RightBody/Memory.jsx';

// Export
export default function Right() {
  // Return
  return (
    <div className='colunm right'>
      <RightHead />
      <Log />
      <Memory />
    </div>
  );
}
