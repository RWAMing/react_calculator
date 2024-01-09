/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

export default function CalButton(prop) {
  return (
    <button
      type='button'
      className={`cal_button button${
        prop.style === undefined ? '' : `-${prop.style}`
      }`}>
      {prop.v}
    </button>
  );
}
