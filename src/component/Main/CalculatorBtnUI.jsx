import React from 'react';

import calculationType from './calculationType';

export default function CalculatorBtnUI(props) {
  const { value, sideClass } = props;

  function setSideClass() {
    if (!sideClass) return ''; // 입력x => 공백
    return `-${sideClass}`; // 입력o => '_' 붙이기
  }

  return (
    <button
      type='button'
      className={`main__calculator-button--${setSideClass()}`}
      onClick={(e) => calculationType(e, props)}
    >
      {value}
    </button>
  );
}

// // Effect
// // .cal_button의 font-size 반응
// useEffect(() => {
//   const prpsFtSize = {
//     target: [...document.querySelectorAll('.cal_button')],
//     ref: [...document.querySelectorAll('.cal_button')][0],
//     refSize: 150,
//     vwh: 28,
//   };
//   window.addEventListener('load', (e) => fontHalfVh(e, prpsFtSize));
//   window.addEventListener('resize', (e) => fontHalfVh(e, prpsFtSize));

//   return () => {
//     window.removeEventListener('load', fontHalfVh);
//     window.removeEventListener('resize', fontHalfVh);
//   };
// }, []);
