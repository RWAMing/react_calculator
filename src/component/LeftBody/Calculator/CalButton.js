/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';

// Function
import btnNum from './function/btnNum';
import btnNumExtra from './function/btnNumExtra';
import btnClear from './function/btnClear';
import btnBack from './function/btnBack';
import btnInverse from './function/btnInverse';
import btnSquare from './function/btnSquare';
import btnRoot from './function/btnRoot';
import btnPercent from './function/btnPercent';
import btnCal from './function/btnCal';
import pressKey from './function/pressKey';
import fontHalfVh from '../../../responsive/fontHalfVh';

/**
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
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
    } else if (p.sideClass.match(/backspace/g)) {
      btnBack(p); // backspace
    } else if (p.sideClass.match(/inverse/g)) {
      btnInverse(p); // 1/x 역수
    } else if (p.sideClass.match(/square/g)) {
      btnSquare(p); // x2 제곱
    } else if (p.sideClass.match(/root/g)) {
      btnRoot(p); // 루트2
    } else if (p.sideClass.match(/percent/g)) {
      btnPercent(p); // %
    } else {
      btnCal(e.target, p); // 계산기호, =
    }
  }

  // Effect
  // .cal_button의 font-size 반응
  useEffect(() => {
    const prpsFtSize = {
      target: [...document.querySelectorAll('.cal_button')],
      ref: [...document.querySelectorAll('.cal_button')][0],
      refSize: 150,
      vwh: 28,
    };
    window.removeEventListener('load', (e) => fontHalfVh(e, prpsFtSize));
    window.addEventListener('load', (e) => fontHalfVh(e, prpsFtSize));
    window.removeEventListener('resize', (e) => fontHalfVh(e, prpsFtSize));
    window.addEventListener('resize', (e) => fontHalfVh(e, prpsFtSize));
    pressKey();
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
