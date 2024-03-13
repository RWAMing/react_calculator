import React, { createContext, useContext, useState, useMemo } from 'react';

import Log from './History/Log';
import Memory from './History/Memory';

// context
const HistoryProps = createContext(null);

// component
function HistoryMenu(props) {
  const { name, className } = props;
  const { setContent, contentName, setContentName } = useContext(HistoryProps);

  return (
    <button
      type='button'
      className={`button_menu ${className}`}
      onClick={(e) => {
        const buttonName = e.currentTarget.className.split(` `)[1];

        if (buttonName !== contentName) {
          if (buttonName === 'log') {
            setContent(<Log />);
          } else {
            setContent(<Memory />);
          }
          setContentName(buttonName);
          console.log(buttonName);
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
  const [contentName, setContentName] = useState('log');
  const value = useMemo(
    () => ({ setContent, contentName, setContentName }),
    [setContent, contentName, setContentName],
  );

  return (
    <HistoryProps.Provider value={value}>
      <div className='colunm right'>
        <HistoryHead />
        {content}
      </div>
    </HistoryProps.Provider>
  );
}
