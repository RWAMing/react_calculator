/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import Log from './RightBody/Log.jsx';
import Memory from './RightBody/Memory.jsx';

/**
 * @prop {Object} body - {state, set}
 */
export default function HistoryHead(props) {
  const [menu, setMenu] = useState('log');

  // Function
  function changeMenu(clicked) {
    const opendMenu = document.querySelector('.open');

    // 해당 메뉴가 close 상태여야 함수 실행
    if (opendMenu !== clicked.target) {
      // 원래 열렸던 요소 숨기기
      const opendName = String(opendMenu.classList).split(' ')[1]; // 클래스 이름 추출
      const opendPage = document.querySelector(`.right .body.${opendName}`); // body 반환
      opendPage.classList.add('disappear'); // body 안보이게 애니

      // 0.2초 뒤
      setTimeout(() => {
        opendMenu.classList.remove('open'); // 메뉴 클래스 삭제
        opendPage.style.display = 'none'; // body 보관
        opendPage.classList.remove('disappear'); // body 애니 삭제

        // 메뉴 open 변경
        const openMenu = clicked.target;
        openMenu.classList.add('open');

        // 페이지 열기
        const openName = String(openMenu.classList).split(' ')[1]; // 클래스 이름 추출
        const openPage = document.querySelector(`.right .body.${openName}`); // body 반환
        openPage.style.display = 'flex'; // body 노출 (애니는 useEffect가 해줌)

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
