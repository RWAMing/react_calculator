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
  // Props
  const { value, sideClass, states } = props;
  const { calWay, calNum, calPrev, calNew } = states;

  const strOutput = `${calNum.state}${value}`;

  // 숫자크기 괜찮으면 실행
  if (checkSafe(strOutput)) {
    // 새번호 대기거나, 직전 =였거나, 숫자를 누름
    if (value !== '.' && (calNew.state !== false || calNew.state === '=')) {
      console.log('새번호 대기거나, 직전 =였거나, 숫자를 누름');
      calNum.set(value); // 새 숫자 입력
    }

    // 소수점X, .입력
    // 소수점O, 숫자입력 -> 출력
    else if (
      (calNum.state.indexOf('.') === -1 && value === '.') ||
      (calNum.state.indexOf('.') !== -1 && value !== '.')
    ) {
      calNum.set(strOutput);
    }

    // 소수점X, 숫자 입력 -> 맨앞에 0 지우기
    else if (calNum.state.indexOf('.') === -1 && value !== '.') {
      calNum.set(strOutput.replace(/^0/, ''));
    }
    // 소수점 O, .입력 -> 실행X

    calNew.set(false); // 새 번호 입력 후, 대기 해제
  }
}
