import React from 'react';
import './App.css';

import Main from './component/Main';
import History from './component/History';
import Nav from './component/Nav';

export default function App() {
  return (
    <div className='App bg'>
      <Nav />
      <Main />
      <History />
    </div>
  );
}
