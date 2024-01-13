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
  const strNum = String(numberExpected).replace(/-/g, '');
  const strInt = String(numberExpected).replace(/\./g, '');

  // 소숫점 제외, 15자리 이하
  if (strInt.length < 16) {
    return true;
  }
  // 소숫점 제외, 17자리 이상
  if (strInt.length > 16) {
    return false;
  }
  // 소숫점 빼면 16자리이고, 소수점 존재 = OK
  if (strNum.indexOf('.') !== -1) {
    return true;
  }
  // 소수점 없는 16자리는 safeInteger 확인
  const chkSet = {
    min: BigInt(Number.MIN_SAFE_INTEGER),
    bigInt: BigInt(numberExpected),
    max: BigInt(Number.MAX_SAFE_INTEGER),
  };
  return chkSet.min < chkSet.bigInt && chkSet.bigInt < chkSet.max;
}
