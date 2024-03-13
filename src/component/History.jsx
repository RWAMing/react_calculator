import React, { useState } from 'react';

// Component
import HistoryHead from './HistoryHead.jsx';
import Log from './History/Log.jsx';
import Memory from './History/Memory.jsx';

// Export
export default function History() {
  /*
  1. 버튼 클릭 감지 = onclick
  2. 무슨 버튼인지 확인
  3. 해당 body로 바꾸기
  */

  const [menu, setMenu] = useState('log');

  const [historyBody, setHistoryBody] = useState(<Log />);
  // Return
  return (
    <div className='colunm right'>
      <HistoryHead />
      {historyBody}
    </div>
  );
}
