import { createContext, useContext, useState } from 'react';

// Component
import Log from './History/Log';
import Memory from './History/Memory';
// function
import changeMenu from './changeMenu';

// context
const HistoryContext = useContext(createContext(null));

/** Component - History menu button */
function HistoryMenu(props) {
  const { name, className } = props;

  return (
    <button
      type='button'
      className={`button_menu ${className}`}
      onClick={() => changeMenu()}
    >
      {name}
    </button>
  );
}

export function HistoryHeadBar() {
  return (
    <div className='head'>
      <HistoryMenu name='기록' className='log' />
      <HistoryMenu name='메모리' className='memory' />
    </div>
  );
}

export default function History() {
  /*
  done 1. 버튼 클릭 감지 = onclick
  2. 무슨 버튼인지 확인
  3. 해당 body로 바꾸기
  */
  // 메뉴 변경시마다 : appear 애니메이션

  const [historyBody, setHistoryBody] = useState(<Log />);

  return (
    <HistoryContext.Provider
      log={<Log />}
      memory={<Memory />}
      body={historyBody}
      setBody={setHistoryBody}
    >
      <div className='colunm right'>
        <HistoryHeadBar />
        {historyBody}
      </div>
    </HistoryContext.Provider>
  );
}
