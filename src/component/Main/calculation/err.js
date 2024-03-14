/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

/**
 * @param {Object} states
 */
export default function CommonError(states) {
  const { calWay, calNum, calPrev, calNew } = states;
  calNum.set('Err');
  calPrev.set('');
  calWay.set('');
}
