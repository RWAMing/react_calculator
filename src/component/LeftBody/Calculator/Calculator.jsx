/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import CalButtonBox from './CalButtonBox.jsx';

// Function
import fontVwHalfVh from '../../../responsive/fontVwHalfVh';
import makeObjState from '../../makeObjState';

/**
 * 계산기 컴포넌트
 */
export default function Calculator() {
  // State
  const calWay = makeObjState();
  const calPrev = makeObjState();
  const calNum = makeObjState('0');
  const calNew = makeObjState('first');

  // Effect
  useEffect(() => {
    // .cal_num 요소 font-size 반응형
    const props = {
      target: document.querySelector('.cal_num'),
      ref: document.querySelector('.left'),
      refSize: 700,
      vwh: 9,
    };
    window.addEventListener('load', (e) => fontVwHalfVh(e, props));
    window.addEventListener('resize', (e) => fontVwHalfVh(e, props));

    return () => {
      window.removeEventListener('load', (e) => fontVwHalfVh(e, props));
      window.removeEventListener('resize', (e) => fontVwHalfVh(e, props));
    };
  }, []);

  // Return
  const states = { calWay, calNum, calPrev, calNew };
  return (
    <div className='body calculator colunm'>
      <div className='cal_output colunm'>
        <p className='cal_way'>{calWay.state}</p>
        <p className='cal_num'>{calNum.state}</p>
      </div>
      <CalButtonBox states={states} />
    </div>
  );
}
