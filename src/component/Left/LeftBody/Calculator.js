/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import CalButtonBox from './Calculator/CalButtonBox';

// Function
import fontsizeVwHalfvh from './fontsizeVwHalfvh';

/**
 * 계산기 컴포넌트
 */
export default function Calculator() {
  // State
  const [calWay, setCalWay] = useState('');
  const [calNum, setCalNum] = useState('0');

  // Effect
  // .cal_num 요소의 font-size 반응형
  useEffect(() => {
    const props = {
      target: document.querySelector('.cal_num'),
      ref: document.querySelector('.left'),
      refSize: 700,
      vwh: 9,
    };
    window.addEventListener('load', (e) => fontsizeVwHalfvh(e, props));
    window.addEventListener('resize', (e) => fontsizeVwHalfvh(e, props));
  }, []);

  // Return
  return (
    <div className='body calculator colunm'>
      <div className='cal_output colunm'>
        <p className='cal_way'>{calWay}</p>
        <p className='cal_num'>{calNum}</p>
      </div>
      <CalButtonBox states={(calWay, setCalWay, calNum, setCalNum)} />
    </div>
  );
}
