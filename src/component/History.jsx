import React, { useContext, useState, useMemo, useEffect } from 'react';

import Log from './History/Log';
import Memory from './History/Memory';

import HistoryContext from './context/HistoryContext';

// context

// 버튼 컴포넌트
function HistoryMenu(props) {
  const { name, className } = props;
  const { setHistory, historyName, setHistoryName } =
    useContext(HistoryContext);
  // 컨텐츠 이름 바뀌면, 실제 컨텐츠를 바꿈
  useEffect(() => {
    if (historyName === 'log') {
      setHistory(<Log />);
    } else {
      setHistory(<Memory />);
    }
  }, [historyName]);
  return (
    <button
      type='button'
      className={`button_menu ${className}`}
      onClick={(e) => {
        const buttonName = e.currentTarget.className.split(` `)[1];
        // (버튼 이름 = 컨텐츠 이름)일 경우, 이미 컨텐츠 노출중이므로 실행 X
        if (buttonName !== historyName) {
          // 컨텐츠 이름(String) 변경
          setHistoryName(buttonName);
        }
      }}
    >
      {name}
    </button>
  );
}

export default function History() {
  const [history, setHistory] = useState(<Log />);
  const [historyName, setHistoryName] = useState('log');
  const historyValue = useMemo(
    () => ({ setHistory, historyName, setHistoryName }),
    [],
  );

  return (
    <HistoryContext.Provider value={historyValue}>
      <div className='colunm right'>
        <div className='head'>
          <HistoryMenu name='기록' className='log' />
          <HistoryMenu name='메모리' className='memory' />
        </div>
        {history}
      </div>
    </HistoryContext.Provider>
  );
}
