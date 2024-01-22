/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import RightHead from './RightHead';
import Log from './RightBody/Log';
import Memory from './RightBody/Memory';

// Function
import makeObjState from './makeObjState';

// Export
export default function Right() {
  const rightBody = makeObjState();

  // Return
  return (
    <div className='colunm right'>
      <RightHead body={rightBody} />
      <Log />
      <Memory />
    </div>
  );
}
