/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';

/**
 * 양수/음수 전환 버튼
 * @prop {String} value +/-
 * @prop {Object} states {calWay, setCalWay, calNum, setCalNum}
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnNumExtra(props) {
  const { value, states, sideClass } = props;
  const { calWay, setCalWay, calNum, setCalNum } = states;

  // 0아님
  if (calNum !== 0) {
    // 음수인데, 끝자리 . 혹은 0
    if (calNum[0] === '-') {
      setCalNum(calNum.slice(1));
    }
    // 끝자리 .에 양수임
    else {
      setCalNum(`-${calNum}`);
    }
  }
}
