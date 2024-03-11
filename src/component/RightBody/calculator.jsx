import React, { useState, useEffect } from 'react';

export default function Log({ addData }) {
  return <button onClick={() => addData(123)}></button>;
}
