/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

/**
 * 출력하기 전, 숫자가 safe_integer인지 확인하는 함수
 * @param {String} numberExpected 예상되는 숫자 String형
 */
export default function checkSafe(numberExpected) {
  // 자릿수 파악용 : String으로 변경후 -랑 . 삭제
  const strNum = numberExpected.replace(/-/g, '');
  const strInt = numberExpected.replace(/\./g, '');

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
  const chk = {
    min: BigInt(Number.MIN_SAFE_INTEGER),
    int: BigInt(numberExpected),
    max: BigInt(Number.MAX_SAFE_INTEGER),
  };
  return chk.min < chk.int && chk.int < chk.max;
}
