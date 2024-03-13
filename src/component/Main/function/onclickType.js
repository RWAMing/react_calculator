// function
import btnNum from './btnNum';
import btnNumExtra from './btnNumExtra';
import btnClear from './btnClear';
import btnBack from './btnBack';
import btnInverse from './btnInverse';
import btnSquare from './btnSquare';
import btnRoot from './btnRoot';
import btnPercent from './btnPercent';
import btnCal from './btnCal';

/** 버튼 종류에 따라 다른 함수 실행 (클릭된요소, props전달)
 * @param {Event} e event
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 * @prop {String} value 버튼 텍스트
 * @prop {*} sideClass 추가 클래스명
 */
export default function onclickType(e, p) {
  if (!Number.isNaN(parseInt(p.value, 10)) || p.value === '.') {
    btnNum(p); // 0~9 혹은 .
  } else if (!p.sideClass) {
    btnNumExtra(p); // +/-
  } else if (p.value === 'C' || p.value === 'CE') {
    btnClear(p); // CE, C
  } else if (p.sideClass.match(/backspace/g)) {
    btnBack(p); // backspace
  } else if (p.sideClass.match(/inverse/g)) {
    btnInverse(p); // 1/x 역수
  } else if (p.sideClass.match(/square/g)) {
    btnSquare(p); // x2 제곱
  } else if (p.sideClass.match(/root/g)) {
    btnRoot(p); // 루트2
  } else if (p.sideClass.match(/percent/g)) {
    btnPercent(p); // %
  } else {
    btnCal(e.target, p); // 계산기호, =
  }
}
