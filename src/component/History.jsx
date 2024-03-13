import React, { createContext, useContext, useState } from 'react';

// Component
import HistoryHead from './HistoryHead.jsx';
import Log from './History/Log.jsx';
import Memory from './History/Memory.jsx';

const HistoryContext = useContext(createContext(null));

export default function History() {
  /*
  1. 버튼 클릭 감지 = onclick
  2. 무슨 버튼인지 확인
  3. 해당 body로 바꾸기
  */

  const [historyBody, setHistoryBody] = useState(<Log />);

  return (
    <HistoryContext.Provider
      body={historyBody}
      setBody={setHistoryBody}
      log={<Log />}
      memory={<Memory />}>
      <div className='colunm right'>
        <HistoryHead />
        {historyBody}
      </div>
    </HistoryContext.Provider>
  );
}
