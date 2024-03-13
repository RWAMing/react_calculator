/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import Log from './History/Log.jsx';
import Memory from './History/Memory.jsx';

/**
 * @prop {Object} body - {state, set}
 */
export default function HistoryHead(props) {
  // Effect
  // 마운트 : 메뉴 버튼 누르면 바뀌는 이벤트 리스너 심기
  useEffect(() => {
    document.querySelectorAll('.right .button_menu').forEach((button) => {
      button.addEventListener('click', changeMenu);
      return () => {
        button.removeEventListener('click', changeMenu);
      };
    });
    // 처음엔 기록 페이지 보여주기
    document.querySelector('.right .body.log').style.display = 'flex';
  }, []);

  // 메뉴 변경시마다 : appear 애니메이션
  useEffect(() => {
    document.querySelector(`.right .body.${menu}`).classList.add('appear');
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
