/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

/**
 * 버튼 =를 눌렀을 때, 적어둔 식(.cal_way)이 계산되는 함수
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 * @prop {String} value =
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnEqual(props) {
  const { value, sideClass } = props;
  const { calWay, calNum, calPrev, calNew } = props.states;

  // =를 누르면
  // 이전값과 입력값을 심볼버튼에 맞춰 계산한 값 => calNum에 띄워야 함
  // 이전값, 심볼, 입력값, '='  => calWay에 띄워야함
  // Log에도 올려야함

  calNew.set('='); // = 입력후, 새번호입력 대기 해제
}
