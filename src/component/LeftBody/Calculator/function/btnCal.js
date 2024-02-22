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
 * 계산 및 safe체크 후, 계산기에 띄우는 함수
 * @param {EventTarget} button
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 * @prop {String} value +, -, ×, ÷, = ...
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnCal(button, props) {
  // Props
  const { value, sideClass, states } = props;
  const { calWay, calNum, calPrev, calNew } = states;

  // 이전 숫자가 없거나 직전 =이고, +−×÷를 입력
  // -> 식제 띄워진 숫자 + 기호 넣기
  if ((calPrev.state === '' || calNew.state === '=') && value !== '=') {
    calPrev.set(calNum.state); // 띄워진 숫자 저장
    calWay.set(`${calNum.state} ${value}`); // 띄워진 숫자, 기호 띄우기
    button.classList.add('button_use'); // 버튼 Active 유지하는 척 CSS
  }

  // 이전 숫자가 있음.
  // -> 계산
  else if (calPrev.state !== '') {
    // 계산용 변수
    let prev = Number(calPrev.state);
    let num = Number(calNum.state);
    const bigPrev = BigInt(Math.floor(prev));
    const bigNum = BigInt(Math.floor(num));
    let symbol;
    let outputTry;
    let output;

    // 계산기호 추출
    if (calWay.state.slice(-1) !== '=') {
      // 직전이 =가 아니었음.
      symbol = calWay.state.slice(-1); // 계산기호 추출
    } else {
      // 직전에 계산이 =로 끝났음. +-×÷ 다시 찾기
      const posiHead = calWay.state.replace(/^-/, ''); // 맨앞 - 삭제
      const iNaN = posiHead.search(/[^.0-9\s]/); // 숫자,공백, .아닌 글자의 i
      prev = num;
      num = Number(posiHead.trim().slice(iNaN + 1, -1)); // (공백빼고)두번째 수
      symbol = posiHead[iNaN]; // 심볼 추출
    }

    // 단순 기호 변경 만들어야함

    // 계산
    if (symbol === '+') {
      outputTry = String(bigPrev + bigNum);
      output = String(prev + num);
    } else if (symbol === '−') {
      outputTry = String(bigPrev - bigNum);
      output = String(prev - num);
    } else if (symbol === '×') {
      outputTry = String(bigPrev * bigNum);
      output = String(prev * num);
    } else if (symbol === '÷' && num === 0) {
      err(props.states); // 0으로 나눌 경우 에러
      return; // 나머지 취소
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
        calWay.set(`${prev} ${symbol} ${num} ${value}`); // ex) 'prev ÷ num ='
      } else {
        calWay.set(`${output} ${value}`); // ex) 'output ÷'
      }
    } else {
      err(props.states); // 문제시 에러띄우고, 모든 값 지움
    }

    // 버튼 CSS
    if (value !== '=') {
      // +-×÷
      document.querySelector('.button_use')?.classList.remove('button_use');
      button.classList.add('button_use'); // Active 유지하는 척 CSS
    } else {
      // =
      document.querySelector('.button_use')?.classList.remove('button_use'); // 스타일 지움
    }
  }
  calNew.set(value); // 다음 계산시, 직전에 누른 버튼 참고
}
