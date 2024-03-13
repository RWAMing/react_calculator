import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';

import Log from './History/Log';
import Memory from './History/Memory';

// context
const HistoryProps = createContext(null);

// 버튼 컴포넌트
function HistoryMenu(props) {
  const { name, className } = props;
  const { setContent, contentName, setContentName } = useContext(HistoryProps);
  // 컨텐츠 이름 바뀌면, 실제 컨텐츠를 바꿈
  useEffect(() => {
    if (contentName === 'log') {
      setContent(<Log />);
    } else {
      setContent(<Memory />);
    }
  }, [contentName]);
  return (
    <button
      type='button'
      className={`button_menu ${className}`}
      onClick={(e) => {
        const buttonName = e.currentTarget.className.split(` `)[1];
        // (버튼 이름 = 컨텐츠 이름)일 경우, 이미 컨텐츠 노출중이므로 실행 X
        if (buttonName !== contentName) {
          // 컨텐츠 이름(String) 변경
          setContentName(buttonName);
        }
      }}
    >
      {name}
    </button>
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
        <div className='head'>
          <HistoryMenu name='기록' className='log' />
          <HistoryMenu name='메모리' className='memory' />
        </div>
        {content}
      </div>
    </HistoryProps.Provider>
  );
}
