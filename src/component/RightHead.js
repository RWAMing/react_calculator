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
      opend.classList.add('disappear');

      // 0.2초 뒤
      setTimeout(() => {
        const opendName = String(opend.classList).split(' ')[1];
        const opendPage = document.querySelector(`.right .body.${opendName}`);
        opendPage.style.display = 'none'; // 요소 숨기기
        opend.classList.remove('disappear'); // 효과용 클래스 삭제
        opend.classList.remove('open'); // 원래꺼 클래스 삭제
        console.log(`원래 열려있던 페이지 클래스 네임 : ${opendName}`);

        // 메뉴 활성화 변경
        const openSoon = clicked.target;
        openSoon.classList.add('open');

        // 페이지 열기
        const openName = String(openSoon.classList).split(' ')[1];
        console.log(`이제 열릴 페이지 클래스 네임 : ${opendName}`);
        const openPage = document.querySelector(`.right .body.${openName}`);
        openPage.style.display = 'flex'; // 요소 드러내기

        // useState 변경 (useEffect 실행)
        setMenu(openName);
      }, 200);
    }
  }

  // Effect
  // 마운트 : 메뉴 버튼 누르면 바뀌는 이벤트 리스너 심기
  useEffect(() => {
    document.querySelectorAll('.right .button_menu').forEach((button) => {
      button.addEventListener('click', changeMenu);
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
