/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

import CalBtn from './Calculator/CalBtn';

export default function Calculator() {
  const [calWay, setcalWay] = useState('');
  const [calNum, setcalNum] = useState(0);
  return (
    <div className='calculator'>
      <div className='cal_output'>
        <p className='cal_way'>{calWay}</p>
        <p className='cal_num'>{calNum}</p>
      </div>
      <div className='cal_buttons'>
        <CalBtn v='&#37;' />
        <CalBtn v='CE' />
        <CalBtn v='C' />
        <CalBtn v='<x]' />
        <CalBtn v='1/x' />
        <CalBtn v='x2' />
        <CalBtn v='2루트x' />
        <CalBtn v='+' />
        <CalBtn v='7' />
        <CalBtn v='8' />
        <CalBtn v='9' />
        <CalBtn v='×' />
        <CalBtn v='4' />
        <CalBtn v='5' />
        <CalBtn v='6' />
        <CalBtn v='-' />
        <CalBtn v='1' />
        <CalBtn v='2' />
        <CalBtn v='3' />
        <CalBtn v='+' />
        <CalBtn v='±' />
        <CalBtn v='0' />
        <CalBtn v='.' />
        <CalBtn v='=' />
      </div>
    </div>
  );
}
