import React from 'react';

import CalculatorBtnUI from './CalculatorBtnUI';

export default function CalculatorBtn() {
  return (
    <div className='main__calculator-button'>
      <CalculatorBtnUI value='&#37;' sideClass='side' />
      <CalculatorBtnUI value='CE' sideClass='side' />
      <CalculatorBtnUI value='C' sideClass='side' />
      <CalculatorBtnUI
        value={<i className='material-icons'>backspace</i>}
        sideClass='side backspace'
      />
      <CalculatorBtnUI
        value={
          <span className='frasl'>
            <sup>1</sup>
            <span>&frasl;</span>x
          </span>
        }
        sideClass='side'
      />
      <CalculatorBtnUI
        value={
          <>
            x<sup>2</sup>
          </>
        }
        sideClass='side'
      />
      <CalculatorBtnUI
        // prettier-ignore
        value={(
          <span className='radic'>
            <sup>2</sup>
            <span>&radic;</span>
            x
          </span>
)}
        sideClass='side'
      />
      <CalculatorBtnUI value='&#247;' sideClass='side' />
      <CalculatorBtnUI value='7' />
      <CalculatorBtnUI value='8' />
      <CalculatorBtnUI value='9' />
      <CalculatorBtnUI value='&#215;' sideClass='side' />
      <CalculatorBtnUI value='4' />
      <CalculatorBtnUI value='5' />
      <CalculatorBtnUI value='6' />
      <CalculatorBtnUI value='&#8722;' sideClass='side' />
      <CalculatorBtnUI value='1' />
      <CalculatorBtnUI value='2' />
      <CalculatorBtnUI value='3' />
      <CalculatorBtnUI value='+' sideClass='side' />
      <CalculatorBtnUI value='&#177;' />
      <CalculatorBtnUI value='0' />
      <CalculatorBtnUI value='.' />
      <CalculatorBtnUI value='&#61;' sideClass='point' />
    </div>
  );
}
