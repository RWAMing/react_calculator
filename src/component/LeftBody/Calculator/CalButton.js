/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';

// Component
import btnNum from './onClick/btnNum';
import btnNumExtra from './onClick/btnNumExtra';
import btnClear from './onClick/btnClear';
import btnBack from './onClick/btnBack';
import btnSymbol from './onClick/btnSymbol';
import btnEqual from './onClick/btnEqual';

// Function
import fontsizeHalfvh from '../../../responsive/fontsizeHalfvh';

/**
 * @prop {Object} states { calWay, setCalWay, calNum, setCalNum, calPrev, setCalPrev }
 * @prop {String} value 버튼 텍스트
 * @prop {*} sideClass 추가 클래스명
 */
export default function CalButton(props) {
  // Props
  const { value, sideClass, states } = props;

  // Function
  // sideClass 여부에 따라 이름 변경
  function setSideClass() {
    if (!sideClass) return ''; // 입력x => 공백
    return `_${sideClass}`; // 입력o => '_' 붙이기
  }
  // 버튼 종류에 따라 다른 함수 실행 (클릭된요소, props전달)
  function onclickType(e, p) {
    if (!Number.isNaN(parseInt(p.value)) || p.value === '.') {
      btnNum(p); // 0~9 혹은 .
    } else if (!p.sideClass) {
      btnNumExtra(p); // +/-
    } else if (p.value === 'C' || p.value === 'CE') {
      btnClear(p); // CE, C
    } else if (p.sideClass === 'side backspace') {
      btnBack(p); // backspace
    } else if (p.sideClass === 'side') {
      document.querySelectorAll('.button_use').forEach((use) => {
        use.classList.remove('button_use');
      });
      e.target.classList.add('button_use');
      btnSymbol(p); // 계산기호
    } else {
      btnEqual(p); // =
    }
  }

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
    <button
      type='button'
      className={`cal_button button${setSideClass()}`}
      onClick={(e) => onclickType(e, props)}>
      {value}
    </button>
  );
}
