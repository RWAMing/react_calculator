/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './component/Nav';
import Left from './component/Left';
import Right from './component/Right';

export default function App() {
  return (
    <div className='App bg text'>
      <div className='center'>
        <Nav />
        <Left />
        <Right />
      </div>
    </div>
  );
}
