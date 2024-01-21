/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';

/**
 * C 혹은 CE 누르면 입력된 숫자 지우기
 * @prop {Object} states { calWay, calNum, calPrev }
 * @prop {String} value C 혹은 CE
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnClear(props) {
  const { value, sideClass } = props;
  const { calWay, calNum, calPrev } = props.states;

  // 0은 아니어야함
  if (calNum.value !== '0') {
    calNum.set('0');
    if (value === 'C' && calWay.value !== '') {
      calWay.set('');
    }
  }
}
