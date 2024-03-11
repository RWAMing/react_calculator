import { useState } from 'react';
import log from './log';
import calculator from './calculator';

export default function Main() {
  const [data, setData] = useState([]);

  function addData(payoad) {
    setData((prev) => [...prev, payload]);
  }

  return;
}
