/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// function
import checkSafe from './checkSafe';
import logging from './logging';

/**
 * 계산 기호 버튼을 클릭했을 때 실행하는 함수
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 * @prop {String} value 계산 기호 (+, -...)
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnSymbol(props, button) {
  const { value, sideClass } = props;
  const { calWay, calNum, calPrev, calNew } = props.states;

  const prev = Number(calPrev.state);
  const num = Number(calNum.state);

  // 저장된 숫자 없거나, 새번호 입력 전
  if (prev === 0 || calNew.state !== false) {
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
      calTry = String(bigPrev * bigNum);
      output = String(prev * num);
    }
    // 나누기
    else if (value === '÷') {
      calTry = String(bigPrev / bigNum);
      output = String(prev / num);
    }

    // 안전체크 후 세팅
    if (checkSafe(calTry)) {
      // 로그에 먼저 저장
      logging(prev, value, num, output);

      // 계산기에 결과값 띄우기
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
  calNew.set(value);
}
