/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

/**
 * 계산 기호 버튼을 클릭했을 때 실행하는 함수
 * @prop {String} value 계산 기호(+, -...)
 * @prop {Object} states {calWay, setCalWay, calNum, setCalNum}
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnSymbol(props) {
  const { value, states, sideClass } = props;
  const { calWay, setCalWay, calNum, setCalNum } = states;
}
