/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';

/**
 * 버튼 backspace를 눌렀을 때, 숫자 끝이 삭제되는 함수
 * @property {String} value backspace
 * @property {state} state 기존값
 * @property {setState} setState state 변경함수
 * @property {*} sideClass CSS용 클래스명
 */
export default function btnBack(props) {
  const { value, state, setState, sideClass } = props;

  // 0도 아니어야하고, string(기호입력후)도 아니어야함
  if (state !== 0 && typeof state !== 'string') {
    // 마지막 글자를 제거 후, Number형으로 변경
    const newState = Number(String(state).slice(0, String(state).length - 1));
    setState(newState);
  }
}
