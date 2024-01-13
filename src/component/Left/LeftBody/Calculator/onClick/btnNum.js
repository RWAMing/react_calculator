/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

import checkSafe from './checkSafe';

/**
 * 숫자(0~9) 버튼을 눌렀을 때, 숫자를 입력하는 함수
 * @property {Number} value 0 ~ 9
 * @property {state} state 기존값
 * @property {setState} setState state 변경함수
 * @property {*} sideClass CSS용 클래스명
 */
export default function btnNum(props) {
  const { value, state, setState, sideClass } = props;
  // 출력할 숫자(String형)
  const strOutput = `${state}${value}`;

  // 숫자크기 괜찮으면 실행
  if (checkSafe(strOutput)) {
    // 0일 때,
    if (state === 0) {
      setState(value); // 새 입력
    }
    // 값이 '.'일때
    else if (value === '.') {
      setState(strOutput); // String형
    }
    // 이미 입력값이 있고, 끝이 .도 아닐때
    else {
      setState(Number(strOutput)); // Number형
    }
  }
}
