/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

/**
 * 양수/음수 전환 버튼, 소숫점 버튼을 눌렀을 때 작동하는 함수
 * @property {String} value +/- 혹은 .
 * @property {state} state 기존값
 * @property {setState} setState state 변경함수
 * @property {*} sideClass CSS용 클래스명
 */
export default function btnNumExtra(props) {
  const { value, state, setState, sideClass } = props;
  if (state === 0 || typeof state === 'string') {
    // 0 혹은 string임
    if (value === '&#177;') setState(state * -1); // +/-
  }
}
