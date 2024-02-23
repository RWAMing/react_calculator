/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';

// Function
import onclickType from './function/onclickType';
import fontHalfVh from '../../../responsive/fontHalfVh';

/**
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 * @prop {String} value 버튼 텍스트
 * @prop {*} sideClass 추가 클래스명
 */
export default function CalButton(props) {
  // Props
  const { value, sideClass, states } = props;

  // Function
  // sideClass 여부에 따라 이름 변경
  function setSideClass() {
    if (!sideClass) return ''; // 입력x => 공백
    return `_${sideClass}`; // 입력o => '_' 붙이기
  }

  // Effect
  // .cal_button의 font-size 반응
  useEffect(() => {
    const prpsFtSize = {
      target: [...document.querySelectorAll('.cal_button')],
      ref: [...document.querySelectorAll('.cal_button')][0],
      refSize: 150,
      vwh: 28,
    };
    window.addEventListener('load', (e) => fontHalfVh(e, prpsFtSize));
    window.addEventListener('resize', (e) => fontHalfVh(e, prpsFtSize));

    return () => {
      window.removeEventListener('load', fontHalfVh);
      window.removeEventListener('resize', fontHalfVh);
    };
  }, []);

  // Return
  return (
    <button
      type='button'
      className={`cal_button button${setSideClass()}`}
      onClick={(e) => onclickType(e, props)}>
      {value}
    </button>
  );
}
