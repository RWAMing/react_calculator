// function
import btnNum from './calculation/btnNum';
import btnNumExtra from './calculation/btnNumExtra';
import btnClear from './calculation/btnClear';
import btnBack from './calculation/btnBack';
import btnInverse from './calculation/btnInverse';
import btnSquare from './calculation/btnSquare';
import btnRoot from './calculation/btnRoot';
import btnPercent from './calculation/btnPercent';
import btnCal from './calculation/btnCal';

export default function calculationType(e, props) {
  if (!Number.isNaN(parseInt(props.value, 10)) || props.value === '.') {
    btnNum(props); // 0~9 혹은 .
  } else if (!props.sideClass) {
    btnNumExtra(props); // +/-
  } else if (props.value === 'C' || props.value === 'CE') {
    btnClear(props); // CE, C
  } else if (props.sideClass.match(/backspace/g)) {
    btnBack(props); // backspace
  } else if (props.sideClass.match(/inverse/g)) {
    btnInverse(props); // 1/x 역수
  } else if (props.sideClass.match(/square/g)) {
    btnSquare(props); // x2 제곱
  } else if (props.sideClass.match(/root/g)) {
    btnRoot(props); // 루트2
  } else if (props.sideClass.match(/percent/g)) {
    btnPercent(props); // %
  } else {
    btnCal(e.target, props); // 계산기호, =
  }
}
