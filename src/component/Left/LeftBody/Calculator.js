/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

import CalButton from './Calculator/CalButton';

export default function Calculator() {
  const [calWay, setcalWay] = useState('');
  const [calNum, setcalNum] = useState(1234567890123456);

  function responsive() {
    const left = document.querySelector('.left');
    if (left.scrollWidth < 700) {
      document.querySelector('.cal_num').style.fontSize = `${
        (left.scrollWidth / 100) * 9
      }px`;
    } else {
      document.querySelector('.cal_num').style.fontSize = '63px';
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
