/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

import CalButton from './Calculator/CalButton';

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
        <CalButton v='&#37;' style='side' />
        <CalButton v='CE' style='side' />
        <CalButton v='C' style='side' />
        <CalButton v='<x]' style='side' />
        <CalButton v='1/x' style='side' />
        <CalButton
          v={
            <span>
              x<sup style={{ fontSize: '10px' }}>2</sup>
            </span>
          }
          style='side'
        />
        <CalButton v='&radic;x' style='side' />
        <CalButton v='+' style='side' />
        <CalButton v='7' />
        <CalButton v='8' />
        <CalButton v='9' />
        <CalButton v='&#215;' style='side' />
        <CalButton v='4' />
        <CalButton v='5' />
        <CalButton v='6' />
        <CalButton v='&#8722;' style='side' />
        <CalButton v='side' />
        <CalButton v='2' />
        <CalButton v='3' />
        <CalButton v='+' style='side' />
        <CalButton v='&#177;' />
        <CalButton v='0' />
        <CalButton v='.' />
        <CalButton v='=' style='point' />
      </div>
    </div>
  );
}
