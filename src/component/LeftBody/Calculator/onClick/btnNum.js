/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';

import checkSafe from './checkSafe';

/**
 * 숫자(0~9), 소수점(.) 버튼을 눌렀을 때, 값을 입력하는 함수
 * @prop {Object} states { calWay, calNum, calPrev }
 * @prop {String} value 숫자(0~9), 소수점(.)
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnNum(props) {
  const { value, sideClass } = props;
  const { calWay, calNum, calPrev } = props.states;

  const strOutput = `${calNum.value}${value}`;

  // 숫자크기 괜찮으면 실행
  if (checkSafe(strOutput)) {
    // 기존값 0 (최초입력)
    if (calNum.value === '0') {
      calNum.set(value); // 새 숫자 입력
    }
    // 숫자버튼 || .버튼 , 소수점 없는 상황
    else if (
      (value === '.' && calNum.value.indexOf('.') === -1) ||
      value !== '.'
    ) {
      calNum.set(strOutput);
    }
    // .인데, 소수점 존재 => 반응 없음
  }
}
