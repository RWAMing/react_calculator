/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';

import btnNum from './onClick/btnNum';
import btnNumExtra from './onClick/btnNumExtra';
import btnAddcal from './onClick/btnAddcal';
import btnBack from './onClick/btnBack';
import btnEqual from './onClick/btnEqual';

/**
 * @property {Number||String} value 0 ~ 9 혹은 기호
 * @property {state} state 기존값
 * @property {setState} setState state 변경함수
 * @property {*} sideClass CSS용 클래스명
 */
export default function CalButton(props) {
  const { value, sideClass } = props;

  // sideClass 여부에 따라, 텍스트 내용 수정
  function hasSideClass() {
    if (!sideClass) return ''; // sideClass X =>  ''
    return `-${sideClass}`; // sideClass O => '-이름'
  }

  // 버튼 종류에 따라, 실행할 함수 결정
  function onclickType(e, p) {
    if (typeof p.value === 'number' || p.value === '.') {
      // 0~9 혹은 .
      btnNum(p);
    } else if (!p.sideClass) {
      // +/-
      btnNumExtra(p);
    } else if (p.sideClass === 'side') {
      // 계산기호
      btnAddcal(p);
    } else if (p.sideClass === 'side backspace') {
      // backspace
      btnBack(p);
    } else {
      // equal
      btnEqual(p);
    }
  }

  // CalButtton 컴포넌트 : 계산기 버튼
  return (
    <button
      type='button'
      // prettier-ignore
      className={`cal_button button${hasSideClass()}`}
      onClick={(e) => onclickType(e, props)}>
      {value}
    </button>
  );
}
