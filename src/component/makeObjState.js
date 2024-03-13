/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

export default function makeObjState(value) {
  // false로 인한 오류 방지
  const [state, set] = useState(value === false ? false : value ?? '');
  return { state, set };
}
