/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Left from './component/Left';
import Right from './component/Right';

export default function App() {
  return (
    <div className='App bg text'>
      <Left />
      <Right />
    </div>
  );
}
