/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';

/**
 * 양수/음수 전환 버튼
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 * @prop {String} value +/-
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnNumExtra(props) {
  // Props
  const { value, sideClass, states } = props;
  const { calWay, calNum, calPrev, calNew } = states;

  // 0아님
  if (calNum.state !== '0') {
    // 음수인데, 끝자리 . 혹은 0
    if (calNum.state[0] === '-') {
      calNum.set(calNum.state.slice(1));
    }
    // 끝자리 .에 양수임
    else {
      calNum.set(`-${calNum.state}`);
    }
  }
}
