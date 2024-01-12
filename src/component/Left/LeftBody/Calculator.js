/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

import CalButton from './Calculator/CalButton';

export default function Calculator() {
  const [calWay, setcalWay] = useState('');
  const [calNum, setcalNum] = useState(1234567890123456);

  function responsive() {
    const left = document.querySelector('.left');
    const showNum = document.querySelector('.cal_num');

    const stopPoint = 700; // 폰트가 반응하는, left의 최대 width, height
    const vwh = 9; // 폰트 vw(vh) 지정

    const maxSize = (stopPoint / 100) * vwh; // 폰트 최대 크기(px)
    const vwSize = (left.scrollWidth / 100) * vwh;

    // 높이가 작음
    if (left.scrollHeight <= stopPoint) {
      const vhRight = (left.scrollHeight / 100) * vwh; // vh에 맞는, 원래 폰트 크기
      const vhSize = maxSize - (maxSize - vhRight) / 2; // vh는 천천히 줄어들게 조정
      // vh사이즈가 vw를 안 넘어가게 함
      if (vwSize < vhSize) {
        showNum.style.fontSize = `${vwSize}px`;
      } else {
        showNum.style.fontSize = `${vhSize}px`;
      }
    }
    // 높이는 큰데 너비가 작음
    else if (left.scrollWidth <= stopPoint) {
      showNum.style.fontSize = `${vwSize}px`;
    }
    // 너비높이 다 크면, 최대사이즈로 고정
    else {
      showNum.style.fontSize = `${maxSize}px`;
    }
  }

  useEffect(() => {
    responsive();
    window.addEventListener('resize', responsive);
  }, []);

  return (
    <div className='body calculator colunm'>
      <div className='cal_output colunm'>
        <p className='cal_way'>{calWay}</p>
        <p className='cal_num'>{calNum}</p>
      </div>
      <div className='cal_buttons'>
        <CalButton v='&#37;' style='side' />
        <CalButton v='CE' style='side' />
        <CalButton v='C' style='side' />
        <CalButton
          v={
            <i
              className='material-icons'
              style={{ fontSize: '3.5vh', verticalAlign: '-0.3vh' }}>
              backspace
            </i>
          }
          style='side'
        />
        <CalButton
          v={
            <>
              <sup>1</sup>
              <span style={{ fontSize: '2.5vh', verticalAlign: '0.8vh' }}>
                &frasl;
              </span>
              x
            </>
          }
          style='side'
        />
        <CalButton
          v={
            <>
              x<sup>2</sup>
            </>
          }
          style='side'
        />
        <CalButton
          v={
            <>
              <sup>2</sup>
              <span
                style={{
                  display: 'inline-block',
                  width: '1.2vh',
                  textIndent: '-0.7vh',
                  transform: 'scaleY(0.8)',
                }}>
                &radic;
              </span>
              x
            </>
          }
          style='side'
        />
        <CalButton v='&#247;' style='side' />
        <CalButton v='7' />
        <CalButton v='8' />
        <CalButton v='9' />
        <CalButton v='&#215;' style='side' />
        <CalButton v='4' />
        <CalButton v='5' />
        <CalButton v='6' />
        <CalButton v='&#8722;' style='side' />
        <CalButton v='1' />
        <CalButton v='2' />
        <CalButton v='3' />
        <CalButton v='&#43;' style='side' />
        <CalButton v='&#177;' />
        <CalButton v='0' />
        <CalButton v='&#46;' />
        <CalButton v='&#61;' style='point' />
      </div>
    </div>
  );
}
