/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';

/**
 * 양수/음수 전환 버튼
 * @property {String} value +/-
 * @property {state} state 기존값
 * @property {setState} setState state 변경함수
 * @property {*} sideClass CSS용 클래스명
 */
export default function btnNumExtra(props) {
  const { value, state, setState, sideClass } = props;
  console.log(typeof state.slice(-1));
  console.log(state.slice(-1));
  // 0아님
  if (state !== 0) {
    // 음수인데, 끝자리 . 혹은 0
    if (state[0] === '-') {
      console.log('양수, 끝글자 .이나 0');
      setState(state.slice(1));
    }
    // 끝자리 .에 양수임
    else {
      console.log('양수, 끝글자 .이나 0');
      setState(`-${state}`);
    }
  }
}
