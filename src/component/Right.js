/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import RightHead from './RightHead';
import Log from './RightBody/Log';

// Export
export default function Right() {
  // Return
  return (
    <div className='colunm right'>
      <RightHead />
      <Log />
    </div>
  );
}
