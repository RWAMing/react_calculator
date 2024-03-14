import React, { useContext, useState, useMemo, useEffect } from 'react';

import Log from './History/Log';
import Memory from './History/Memory';

import HistoryContext from './HistoryContext';

function HistoryNavUI(props) {
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
      <div className='history'>
        <header className='history__header'>
          <nav className='history__nav'>
            <HistoryNavUI name='기록' className='log' />
            <HistoryNavUI name='메모리' className='memory' />
          </nav>
          <div className='history__content'>{history}</div>
        </header>
      </div>
    </HistoryContext.Provider>
  );
}
