/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

// Component
import CalButton from './CalButton';

// Function
import fontsizeHalfvh from '../../../responsive/fontsizeHalfvh';

/**
 * 계산기의 버튼을 모아둔 박스 컴포넌트
 * @prop {Object} states {calWay, setCalWay, calNum, setCalNum}
 */
export default function CalButtonBox(props) {
  // Props
  const { states } = props;

  // Effect
  // .cal_button요소들의 font-size 반응형
  useEffect(() => {
    const propsFontSize = {
      target: [...document.querySelectorAll('.cal_button')],
      ref: [...document.querySelectorAll('.cal_button')][0],
      refSize: 150,
      vwh: 28,
    };
    window.addEventListener('load', (e) => fontsizeHalfvh(e, propsFontSize));
    window.addEventListener('resize', (e) => fontsizeHalfvh(e, propsFontSize));
  }, []);

  // Return
  return (
    <div className='cal_button_box'>
      <CalButton value='&#37;' states={states} sideClass='side' />
      <CalButton value='CE' states={states} sideClass='side' />
      <CalButton value='C' states={states} sideClass='side' />
      <CalButton
        // prettier-ignore
        value={<i className='material-icons'>
              backspace</i>}
        states={states}
        sideClass='side backspace'
      />
      <CalButton
        // prettier-ignore
        value={<span className='frasl'>
            <sup>1</sup>
            <span>&frasl;</span>
            x
          </span>}
        states={states}
        sideClass='side'
      />
      <CalButton
        // prettier-ignore
        value={<>x<sup>2</sup></>}
        states={states}
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
        states={states}
        sideClass='side'
      />
      <CalButton value='&#247;' states={states} sideClass='side' />
      <CalButton value={'7'} states={states} />
      <CalButton value={'8'} states={states} />
      <CalButton value={'9'} states={states} />
      <CalButton value='&#215;' states={states} sideClass='side' />
      <CalButton value={'4'} states={states} />
      <CalButton value={'5'} states={states} />
      <CalButton value={'6'} states={states} />
      <CalButton value='&#8722;' states={states} sideClass='side' />
      <CalButton value={'1'} states={states} />
      <CalButton value={'2'} states={states} />
      <CalButton value={'3'} states={states} />
      <CalButton value='+' states={states} sideClass='side' />
      <CalButton value='&#177;' states={states} />
      <CalButton value={'0'} states={states} />
      <CalButton value='.' states={states} />
      <CalButton value='&#61;' states={states} sideClass='point' />
    </div>
  );
}
