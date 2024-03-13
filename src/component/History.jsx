import React, { createContext, useContext, useState } from 'react';

import Log from './History/Log';
import Memory from './History/Memory';

// context
const HistoryProps = createContext(null);

// component
function HistoryMenu(props) {
  const { name, className } = props;
  const { content, setContent } = useContext(HistoryProps);

  return (
    <button
      type='button'
      className={`button_menu ${className}`}
      onClick={(e) => {
        const bodyName = String(content).match(/[a-z]||[A-Z]/g).toLowCase;
        if (e.currentTarget.className.match(bodyName)) {
          setContent('연습');
        }
      }}
    >
      {name}
    </button>
  );
}

export function HistoryHead() {
  return (
    <div className='head'>
      <HistoryMenu name='기록' className='log' />
      <HistoryMenu name='메모리' className='memory' />
    </div>
  );
}

export default function History() {
  const [content, setContent] = useState(<Log />);

  return (
    <HistoryProps.Provider
      log={<Log />}
      memory={<Memory />}
      content={content}
      setContent={setContent}
    >
      <div className='colunm right'>
        <HistoryHead />
        {content}
      </div>
    </HistoryProps.Provider>
  );
}
