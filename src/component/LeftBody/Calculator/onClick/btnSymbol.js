/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// function
import checkSafe from './checkSafe';
import logging from './logging';
import err from './err';

/**
 * 계산 및 safeInteger체크 후, 계산기에 띄우는 함수
 * @param {EventTarget} button
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 * @prop {String} value +, -, ×, ÷, = ...
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnSymbol(button, props) {
  // Props
  const { value, sideClass, states } = props;
  const { calWay, calNum, calPrev, calNew } = states;

  // 이전 숫자 없음 (이 경우 =는 반응x)
  if (calPrev.state === '' && value !== '=') {
    calPrev.set(calNum.state); // 입력했던 숫자 저장
    calWay.set(`${calNum.state}${value}`); // 입력했던 숫자, 기호 띄우기
  }

  // 이전 숫자가 있음
  else if (calPrev.state !== '') {
    // 계산용 변수
    let prev = Number(calPrev.state);
    const num = Number(calNum.state);
    const bigPrev = BigInt(Math.floor(prev));
    const bigNum = BigInt(Math.floor(num));
    let symbol = '';
    let outputTry = '';
    let output = '';

    // = 버튼 누름
    if (value === '=') {
      if (value !== calWay.state.slice(-1)) {
        symbol = calWay.state.slice(-1); // 계산기호 추출
      } else {
        // 계산기호 추출했더니 =나옴 : 다시 추출
        const posiHead = calWay.state.replace(/^-/, ''); // 맨앞 - 삭제
        const iNaN = posiHead.search(/[^0-9]/); // 숫자아닌 글자의 i
        prev = Number(posiHead.slice(iNaN + 1, -1)); // 두번째 수
        symbol = posiHead[iNaN]; // 심볼 추출
        console.log(posiHead);
        console.log(iNaN);
        console.log(prev);
        console.log(symbol);
      }
    } else {
      symbol = value;
      document.querySelector('.button_use')?.classList.remove('button_use');
      button.classList.add('button_use'); // 버튼 Active 유지하는 척 CSS
    }

    // 계산값 반환
    if (symbol === '+') {
      outputTry = String(bigPrev + bigNum);
      output = String(prev + num);
    } else if (symbol === '−') {
      outputTry = String(bigPrev - bigNum);
      output = String(prev - num);
    } else if (symbol === '×') {
      outputTry = String(bigPrev * bigNum);
      output = String(prev * num);
    } else if (symbol === '÷') {
      outputTry = String(bigPrev / bigNum);
      output = String(prev / num);
    }

    // safe 확인
    if (checkSafe(outputTry)) {
      // 로그에 저장
      logging(prev, symbol, num, output);
      // 계산기에 결과값 띄우기
      calNum.set(output);
      calPrev.set(output);
      if (value === '=') {
        calWay.set(`${prev}${symbol}${num}${value}`); // ex) 'prev ÷ num ='
      } else {
        calWay.set(`${output}${value}`); // ex) 'output ÷'
      }
    } else {
      err(props.states); // 문제시 에러띄우고, 모든 값 지움
    }
  }
  calNew.set(value); // 다음 입력에 참고
}
