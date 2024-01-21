/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// function
import checkSafe from './checkSafe';

/**
 * 계산 기호 버튼을 클릭했을 때 실행하는 함수
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 * @prop {String} value 계산 기호 (+, -...)
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnSymbol(props, button) {
  const { value, sideClass } = props;
  const { calWay, calNum, calPrev, calNew } = props.states;

  // 공통
  document.querySelector('.button_use')?.classList.remove('button_use');
  button.classList.add('button_use');
  calNew.set(true); // 계산기호 누른 후, 새 번호 입력 대기

  // 심볼 클릭시
  // 1. calNum : calPrev랑 calNum이랑 계산한 것
  // 2. calPrev : calNum
  // 3. calWay : calNum + value
  // 4. 기록
  //   4-1. calWay에 아무것도 없었음 : X
  //   4-2. calWay에 무언가 있음 : calPrev + 기호 + 입력숫자 + '=' + 결과
  // 그다음 숫자 입력시
  // 1. calNum : 새 입력

  const bigPrev = BigInt(Number(calPrev.state));
  const bigNum = BigInt(Number(calNum.state));

  console.log(value);

  let output = '';

  if (calPrev.state !== '') {
    // 더하기
    if (value === '+') {
      output = String(bigPrev + bigNum);
    }
    // 빼기
    else if (value === '−') {
      output = String(bigPrev - bigNum);
    }
    // 곱하기
    else if (value === '×') {
      output = String(bigPrev * bigNum);
    }
    // 나누기
    // else if (value === '÷') {
    //   if (checkSafe(String(bigPrev / bigNum))) {
    //     output = String(Number(calPrev.state) / Number(calNum.state));
    //   } else {
    //     calNum.set('Err');
    //     calPrev.set('');
    //     calWay.set('');
    //     return;
    //   }
    // }

    // 숫자 안전
    if (checkSafe(output)) {
      calNum.set(output); // 결과값 띄우기
      calPrev.set(output); // 결과값 저장
      calWay.set(`${output}${value}`); // 결과값, 기호 띄우기
    } else {
      calNum.set('Err');
      calPrev.set('');
      calWay.set('');
    }
  }

  // 저장된 숫자 없음
  else {
    calPrev.set(calNum.state); // 입력했던 숫자 저장
    calWay.set(`${calNum.state}${value}`); // 입력했던 숫자, 기호 띄우기
  }
}
