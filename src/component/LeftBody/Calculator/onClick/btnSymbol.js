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

  // 심볼 클릭시
  // 1. calNum : calPrev랑 calNum이랑 계산한 것
  // 2. calPrev : calNum
  // 3. calWay : calNum + value
  // 4. 기록
  //   4-1. calWay에 아무것도 없었음 : X
  //   4-2. calWay에 무언가 있음 : calPrev + 기호 + 입력숫자 + '=' + 결과
  // 그다음 숫자 입력시
  // 1. calNum : 새 입력

  const prev = Number(calPrev.state);
  const num = Number(calNum.state);

  // 저장된 숫자 없거나, 새번호 입력 전
  if (prev === 0 || calNew.state === true) {
    calPrev.set(calNum.state); // 입력했던 숫자 저장
    calWay.set(`${calNum.state}${value}`); // 입력했던 숫자, 기호 띄우기
  }

  // 저장된 숫자 있음 + 새번호 입력 준비아님 => 계산
  else {
    let calTry = '';
    let output = '';
    const bigPrev = BigInt(Math.floor(prev));
    const bigNum = BigInt(Math.floor(num));
    // 더하기
    if (value === '+') {
      calTry = String(bigPrev + bigNum);
      output = String(prev + num);
    }
    // 빼기
    else if (value === '−') {
      calTry = String(bigPrev - bigNum);
      output = String(prev - num);
    }
    // 곱하기
    else if (value === '×') {
      calTry = String(bigPrev - bigNum);
      output = String(prev - num);
    }
    // 나누기
    else if (value === '÷') {
      calTry = String(bigPrev / bigNum);
      output = String(prev / num);
    }

    // 안전체크 후 세팅
    if (checkSafe(calTry)) {
      calNum.set(output); // 결과값 띄우기
      calPrev.set(output); // 결과값 저장
      calWay.set(`${output}${value}`); // 결과값, 기호 띄우기
    } else {
      calNum.set('Err');
      calPrev.set('');
      calWay.set('');
    }
  } // 계산 끝

  // 공통
  document.querySelector('.button_use')?.classList.remove('button_use');
  button.classList.add('button_use');
  calNew.set(true);
}
