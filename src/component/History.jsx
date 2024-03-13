import React from 'react';

// Component
import HistoryHead from './HistoryHead.jsx';
import Log from './History/Log.jsx';
import Memory from './History/Memory.jsx';

// Export
export default function History() {
  // Return
  return (
    <div className='colunm right'>
      <HistoryHead />
      <Log />
      <Memory />
    </div>
  );
}
