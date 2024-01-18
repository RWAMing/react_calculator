/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';

import checkSafe from './checkSafe';

/**
 * 숫자(0~9), 소수점(.) 버튼을 눌렀을 때, 값을 입력하는 함수
 * @property {String} value 0 ~ 9 혹은 .
 * @property {state} state 기존값
 * @property {setState} setState state 변경함수
 * @property {*} sideClass CSS용 클래스명
 */
export default function btnNum(props) {
  const { value, state, setState, sideClass } = props;
  const strOutput = `${state}${value}`;

  // 숫자크기 괜찮으면 실행
  if (checkSafe(strOutput)) {
    // 기존값 0 (최초입력)
    if (state === '0') {
      setState(value); // 새 숫자 입력
    }
    // 숫자버튼 || .버튼 , 소수점 없는 상황
    else if ((value === '.' && state.indexOf('.') === -1) || value !== '.') {
      setState(strOutput);
    }
    // .인데, 소수점 존재 => 반응 없음
  }
}
