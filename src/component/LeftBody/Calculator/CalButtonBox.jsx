/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

// Component
import CalButton from './CalButton.jsx';

/**
 * 계산기 버튼 박스 컴포넌트
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 */
export default function CalButtonBox(props) {
  // Props
  const { states } = props;

  // Return
  return (
    <div className='cal_button_box'>
      <CalButton states={states} value='&#37;' sideClass='side' />
      <CalButton states={states} value='CE' sideClass='side' />
      <CalButton states={states} value='C' sideClass='side' />
      <CalButton
        // prettier-ignore
        states={states}
        value={<i className='material-icons'>backspace</i>}
        sideClass='side backspace'
      />
      <CalButton
        states={states}
        // prettier-ignore
        value={<span className='frasl'>
            <sup>1</sup>
            <span>&frasl;</span>
            x
          </span>}
        sideClass='side'
      />
      <CalButton
        states={states}
        // prettier-ignore
        value={<>x<sup>2</sup></>}
        sideClass='side'
      />
      <CalButton
        states={states}
        // prettier-ignore
        value={<span className='radic'>
            <sup>2</sup>
            <span>&radic;</span>
            x
          </span>}
        sideClass='side'
      />
      <CalButton states={states} value='&#247;' sideClass='side' />
      <CalButton states={states} value='7' />
      <CalButton states={states} value='8' />
      <CalButton states={states} value='9' />
      <CalButton states={states} value='&#215;' sideClass='side' />
      <CalButton states={states} value='4' />
      <CalButton states={states} value='5' />
      <CalButton states={states} value='6' />
      <CalButton states={states} value='&#8722;' sideClass='side' />
      <CalButton states={states} value='1' />
      <CalButton states={states} value='2' />
      <CalButton states={states} value='3' />
      <CalButton states={states} value='+' sideClass='side' />
      <CalButton states={states} value='&#177;' />
      <CalButton states={states} value='0' />
      <CalButton states={states} value='.' />
      <CalButton states={states} value='&#61;' sideClass='point' />
    </div>
  );
}
