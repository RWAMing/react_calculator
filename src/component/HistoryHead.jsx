import React from 'react';
import changeMenu from './historyMenu';

/** Component - History menu button */
function HistoryMenu(props) {
  const { name, className, log, memory } = props;

  return (
    <button
      type='button'
      className={`button_menu ${className}`}
      onClick={(event) => changeMenu(event.target, propsSend)}>
      {name}
    </button>
  );
}

/** Component - History header(menu bar) */
export default function HistoryHead(props) {
  // 메뉴 변경시마다 : appear 애니메이션

  // Return
  return (
    <div className='head'>
      <HistoryMenu name='기록' className='log' states={props} />
      <HistoryMenu name='메모리' className='memory' states={props} />
    </div>
  );
}
