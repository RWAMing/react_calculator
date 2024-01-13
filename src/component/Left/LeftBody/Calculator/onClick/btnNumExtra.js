/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

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
  const strState = String(state);
  // 0아님
  if (state !== 0) {
    // 끝자리가 .이나 0 둘 다 아님 = number가능
    if (strState.slice(-1) !== ('.' && '0')) {
      setState(state * -1); // Number
    }
    // 음수인데, 끝자리 . 혹은 0
    else if (strState[0] === '-') {
      setState(strState.slice(1)); // +String
      console.log(typeof strState.slice(1));
    }
    // 끝자리 .에 양수임
    else {
      setState(`-${strState}`); // -String
      console.log(typeof `-${strState}`);
    }
  }
}
