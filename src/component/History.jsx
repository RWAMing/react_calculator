import React, { useContext, useState, useMemo, useEffect } from 'react';

import Log from './History/Log';
import Memory from './History/Memory';

import HistoryContext from './HistoryContext';

function HistoryMenu(props) {
  const { name, className } = props;
  const { setHistory, historyName, setHistoryName } =
    useContext(HistoryContext);
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
      className={`history__menu-${className}`}
      onClick={(e) => {
        const buttonName = e.currentTarget.className.split(`-`)[-1];
        if (buttonName !== historyName) {
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
      <div className='history column'>
        <div className='history__menu'>
          <HistoryMenu name='기록' className='log' />
          <HistoryMenu name='메모리' className='memory' />
        </div>
        <div className='history__content'>{history}</div>
      </div>
    </HistoryContext.Provider>
  );
}
