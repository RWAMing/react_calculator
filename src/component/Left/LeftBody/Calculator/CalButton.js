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

/**
 * @prop {String} value 버튼 텍스트
 * @prop {Object} states {calWay, setCalWay, calNum, setCalNum}
 * @prop {*} sideClass 추가 클래스명
 */
export default function CalButton(props) {
  // Props
  const { value, sideClass } = props;

  // Function
  // sideClass 여부에 따라 이름 변경
  function setSideClass() {
    if (!sideClass) return ''; // 입력x => 공백
    return `-${sideClass}`; // 입력o => '-' 붙이기
  }
  // 버튼 종류에 따라 다른 함수 실행 (클릭된요소, props전달)
  function onclickType(e, p) {
    if (!Number.isNaN(parseInt(p.value)) || p.value === '.') {
      btnNum(p); // 0~9 혹은 .
    } else if (!p.sideClass) {
      btnNumExtra(p); // +/-
    } else if (p.value === ('C' || 'CE')) {
      btnClear(p); // CE, C
    } else if (p.sideClass === 'side backspace') {
      btnBack(p); // backspace
    } else if (p.sideClass === 'side') {
      btnSymbol(p); // 계산기호
    } else {
      btnEqual(p); // =
    }
  }

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
