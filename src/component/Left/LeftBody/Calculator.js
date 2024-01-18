/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import CalButton from './Calculator/CalButton';

// width: vw,  height: 덜작아짐vh
import sizeWHalfFitH from './Calculator/sizeWHalfFitH';
// width, height: vh 덜작아짐
import sizeHalfFitH from './Calculator/sizeHalfFitH';

// 기본적으로 String 이용 할 것!
export default function Calculator() {
  // 반응형 - 입력된 숫자 크기
  useEffect(() => {
    const props = {
      target: document.querySelector('.cal_num'),
      ref: document.querySelector('.left'),
      refSize: 700,
      vwh: 9,
    };
    window.addEventListener('load', (e) => sizeWHalfFitH(e, props));
    window.addEventListener('resize', (e) => sizeWHalfFitH(e, props));
  }, []);
  // 반응형 - 버튼 크기
  useEffect(() => {
    const props = {
      target: [...document.querySelectorAll('.cal_button')],
      ref: [...document.querySelectorAll('.cal_button')][0],
      refSize: 150,
      vwh: 28,
    };
    window.addEventListener('load', (e) => sizeHalfFitH(e, props));
    window.addEventListener('resize', (e) => sizeHalfFitH(e, props));
  }, []);

  const [calWay, setCalWay] = useState('');
  const [calNum, setCalNum] = useState('0');

  // Calculator 컴포넌트 : 계산기
  return (
    <div className='body calculator colunm'>
      <div className='cal_output colunm'>
        <p className='cal_way'>{calWay}</p>
        <p className='cal_num'>{calNum}</p>
      </div>

      <div className='cal_buttons'>
        <CalButton value='&#37;' sideClass='side' />
        <CalButton value='CE' sideClass='side' />
        <CalButton value='C' sideClass='side' />
        <CalButton
          // prettier-ignore
          value={<i className='material-icons'>
              backspace</i>}
          state={calNum}
          setState={setCalNum}
          sideClass='side backspace'
        />
        <CalButton
          // prettier-ignore
          value={<span className='frasl'>
            <sup>1</sup>
            <span>&frasl;</span>
            x
          </span>}
          sideClass='side'
        />
        <CalButton
          // prettier-ignore
          value={<>x<sup>2</sup></>}
          sideClass='side'
        />
        <CalButton
          // prettier-ignore
          value={
            <span className='radic'>
              <sup>2</sup>
              <span>&radic;</span>
              x
            </span>
          }
          sideClass='side'
        />
        <CalButton value='&#247;' sideClass='side' />
        <CalButton value={'7'} state={calNum} setState={setCalNum} />
        <CalButton value={'8'} state={calNum} setState={setCalNum} />
        <CalButton value={'9'} state={calNum} setState={setCalNum} />
        <CalButton value='&#215;' sideClass='side' />
        <CalButton value={'4'} state={calNum} setState={setCalNum} />
        <CalButton value={'5'} state={calNum} setState={setCalNum} />
        <CalButton value={'6'} state={calNum} setState={setCalNum} />
        <CalButton value='&#8722;' sideClass='side' />
        <CalButton value={'1'} state={calNum} setState={setCalNum} />
        <CalButton value={'2'} state={calNum} setState={setCalNum} />
        <CalButton value={'3'} state={calNum} setState={setCalNum} />
        <CalButton value='+' sideClass='side' />
        <CalButton value='&#177;' state={calNum} setState={setCalNum} />
        <CalButton value={'0'} state={calNum} setState={setCalNum} />
        <CalButton value='.' state={calNum} setState={setCalNum} />
        <CalButton value='&#61;' sideClass='point' />
      </div>
    </div>
  );
}
