/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

/**
 * 버튼 =를 눌렀을 때, 적어둔 식(.cal_way)이 계산되는 함수
 * @prop {Object} states { calWay, setCalWay, calNum, setCalNum, ready, setReady }
 * @prop {String} value =
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnEqual(props) {
  const { value, sideClass } = props;
  const { calWay, setCalWay, calNum, setCalNum, ready, setReady } =
    props.states;
}
