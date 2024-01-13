/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';

/**
 * 출력하기 전, 숫자가 safe_integer인지 확인하는 함수
 * @param {*} numberExpected Number 혹은 String
 */
export default function checkSafe(numberExpected) {
  // 자릿수 파악용 : String으로 변경후 -랑 . 삭제
  const strInt = String(numberExpected).replace(/[-.]/g, '');

  // 15자리 이하
  if (strInt.length < 16) {
    return true;
  }
  // 17자리 이상
  if (strInt.length > 16) {
    return false;
  }
  // 딱 16자리
  const chkSet = {
    min: BigInt(Number.MIN_SAFE_INTEGER),
    bigInt: BigInt(numberExpected),
    max: BigInt(Number.MAX_SAFE_INTEGER),
  };

  return chkSet.min < chkSet.bigInt && chkSet.bigInt < chkSet.max;
}
