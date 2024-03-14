import React, { useMemo, useState } from 'react';

import CalculatorBtn from './CalculatorBtn';

import CalculatorContext from './CalculatorContext';

export default function Calculator() {
  const [prevInput, setPrevInput] = useState();
  const [newInput, setNewInput] = useState('0');
  const [way, setWay] = useState();
  const [lastState, setLastState] = useState('first');

  const calculatorValue = useMemo(
    () => ({
      prevInput,
      setPrevInput,
      newInput,
      setNewInput,
      way,
      setWay,
      lastState,
      setLastState,
    }),
    [],
  );

  return (
    <CalculatorContext.Provider value={calculatorValue}>
      <div className='main__calculator colunm'>
        <div className='main__calculator-output colunm'>
          <p className='main__calculator-way'>{way}</p>
          <p className='main__calculator-input'>{newInput}</p>
        </div>
        <CalculatorBtn />
      </div>
    </CalculatorContext.Provider>
  );
}

// Effect
// useEffect(() => {
//   // .cal_num 요소 font-size 반응형
//   const props = {
//     target: document.querySelector('.cal_num'),
//     ref: document.querySelector('.left'),
//     refSize: 700,
//     vwh: 9,
//   };
//   window.addEventListener('load', (e) => fontVwHalfVh(e, props));
//   window.addEventListener('resize', (e) => fontVwHalfVh(e, props));

//   return () => {
//     window.removeEventListener('load', (e) => fontVwHalfVh(e, props));
//     window.removeEventListener('resize', (e) => fontVwHalfVh(e, props));
//   };
// }, []);
