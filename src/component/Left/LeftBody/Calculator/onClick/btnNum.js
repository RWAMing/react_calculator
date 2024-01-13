/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

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
    // .입력 아니고, 기존값 0
    if (value !== '.' && state === 0) {
      setState(value); // 새 입력
    }
    // .인데, 소수점 X || 0인데, 소수점 존재
    else if (
      (value === '.' && String(state).indexOf('.') === -1) ||
      (value === 0 && String(state).indexOf('.') !== -1)
    ) {
      setState(strOutput); // String
    }
    // .아님
    else if (value !== '.') {
      setState(Number(strOutput)); // Number형
    }
    // .인데, 소수점 존재 => 반응 없음
  }
}
