/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';

/**
 * 양수/음수 전환 버튼
 * @prop {Object} states { calWay, calNum, calPrev }
 * @prop {String} value +/-
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnNumExtra(props) {
  const { value, sideClass } = props;
  const { calWay, calNum, calPrev } = props.states;

  // 0아님
  if (calNum.value !== 0) {
    // 음수인데, 끝자리 . 혹은 0
    if (calNum.value[0] === '-') {
      calNum.set(calNum.value.slice(1));
    }
    // 끝자리 .에 양수임
    else {
      calNum.set(`-${calNum.value}`);
    }
  }
}
