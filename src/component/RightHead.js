/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import Log from './RightBody/Log';
import Memory from './RightBody/Memory';

/**
 * @prop {Object} body - {state, set}
 */
export default function RightHead(props) {
  const [menu, setMenu] = useState('log');

  // Function
  function changeMenu(clicked) {
    const opend = document.querySelector('.open');

    // 해당 메뉴가 close 상태여야 함수 실행
    if (opend !== clicked.target) {
      // 원래 열렸던 요소 숨기기
      document.querySelector('.right .body').classList.add('disappear');

      // 0.2초 뒤
      setTimeout(() => {
        // open <-> close
        const openSoon = clicked.target;
        openSoon.classList.add('open');
        opend.classList.remove('open'); // 원래꺼 클래스 삭제

        console.log(String(openSoon.classList).split(' ')[1]);

        // 페이지 열기
      }, 200);
    }
  }

  // Effect
  useEffect(() => {
    document.querySelectorAll('.right .button_menu').forEach((button) => {
      button.addEventListener('click', changeMenu);
    });
  }, []);
  useEffect(() => {
    document.querySelector('.right .body')?.classList.add('appear');
  }, [menu]);

  // Return
  return (
    <div className='head'>
      <button type='button' className='button_menu log open'>
        기록
      </button>
      <button type='button' className='button_menu memory'>
        메모리
      </button>
    </div>
  );
}
