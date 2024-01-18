/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable radix */

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

  // 0은 아니어야함
  if (state !== '0') {
    // 마지막 글자를 제거해서 입력
    const newState = String(state).slice(0, -1);

    // 제거했더니 -뿐이거나, 공백으로 나옴
    if (Number.isNaN(parseInt(newState)) || newState === '') {
      setState('0'); // 0으로 입력
    }
    // 아니면 끝글자 지운 값 입력
    else {
      setState(newState);
    }
  }
}
