/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';

import checkSafe from './checkSafe';

/**
 * 숫자(0~9), 소수점(.) 버튼을 눌렀을 때, 값을 입력하는 함수
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 * @prop {String} value 숫자(0~9), 소수점(.)
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnNum(props) {
  const { value, sideClass } = props;
  const { calWay, calNum, calPrev, calNew } = props.states;

  const strOutput = `${calNum.state}${value}`;

  // 숫자크기 괜찮으면 실행
  if (checkSafe(strOutput)) {
    // 기존값 0 (최초입력)
    if (calNum.state === '0' || calNew.state === true) {
      calNum.set(value); // 새 숫자 입력
    }
    // 숫자버튼 || .버튼 , 소수점 없는 상황
    else if (
      (value === '.' && calNum.state.indexOf('.') === -1) ||
      value !== '.'
    ) {
      calNum.set(strOutput);
    }
    // .인데, 소수점 존재 => 반응 없음
  }
}
