/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

/**
 * 로그에 계산한 값을 기록하는 함수. 오른쪽은 예시.
 * @param {Number} prev 이전값 1
 * @param {String} symbol 계산기호 +
 * @param {Number} num 입력된값 2
 * @param {String} output 결과값 3
 */
export default function logging(prev, symbol, num, output) {
  const newLog = document.createElement('li');
  newLog.classList.add('output_list');

  const newLogWay = document.createElement('p');
  newLogWay.classList.add('way');
  newLogWay.innerText = `${prev}${symbol}${num}=`;
  newLog.appendChild(newLogWay);

  const newLogOutput = document.createElement('p');
  newLogOutput.innerText = `${output}`;
  newLog.appendChild(newLogOutput);

  document
    .querySelector('.body.log')
    .insertBefore(newLog, document.querySelector('.body.log *:first-child'));
}
