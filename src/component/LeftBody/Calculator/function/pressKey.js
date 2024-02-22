/* eslint-disable no-console */
import btnNum from './btnNum';

let wait;
let ing;

function down(e) {
  const number = e.key;
  console.log(number);
  const keyProps = { states: 'states', number, sideClass: 'key' };
  if (!Number.isNaN(Number(number))) {
    // 이거 states 넣어야함
    btnNum(keyProps);
    wait = setTimeout(() => {
      ing = setInterval(btnNum(keyProps), 300);
    }, 1500);
  }
}

function up() {
  clearInterval(wait);
  clearTimeout(ing);
}

export default function pressKey() {
  console.log('remove');
  window.removeEventListener('keydown', (e) => down(e));
  window.addEventListener('keydown', (e) => down(e));
  window.removeEventListener('keyup', (e) => up(e));
  window.addEventListener('keyup', (e) => up(e));
  console.log('set');
}
