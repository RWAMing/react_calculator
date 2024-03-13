import React from 'react';
import changeMenu from './historyMenu';

/** Component - History 메뉴 버튼 */
function HistoryMenu(props) {
  const { name, className, states } = props;

  return (
    <button
      type='button'
      className={`button_menu ${className}`}
      onClick={() => changeMenu(props)}>
      {name}
    </button>
  );
}

/** Component - 헤더 우측(History) 메뉴 바 */
export default function HistoryHead(props) {
  // Effect

  // // 메뉴 변경시마다 : appear 애니메이션
  // useEffect(() => {
  //   document.querySelector(`.right .body.${menu}`).classList.add('appear');
  // }, [menu]);

  // Return
  return (
    <div className='head'>
      <HistoryMenu name='기록' className='log' states={props} />
      <HistoryMenu name='메모리' className='memory' states={props} />
    </div>
  );
}
