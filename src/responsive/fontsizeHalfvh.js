/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

/**
 * ref에 따라 target 폰트사이즈 조절하는 함수  - width, height: 덜작아지는 vh
 * @property {ElementArray} target 조절시킬 요소
 * @property {Element} ref 조절에 참조할 요소
 * @property {Number} refSize target이 반응할 ref의 최대 width, height
 * @property {Number} vwh 폰트 vw(vh)단위 지정
 */
export default function fontsizeHalfvh(event, props) {
  const { target, ref, refSize, vwh } = props;
  if (!target[0]) {
    // 단수
    adjust(target);
  } else {
    // 복수(배열)
    target.forEach((e) => {
      adjust(e);
    });
  }

  function adjust(e) {
    const element = e;
    const maxSize = (refSize / 100) * vwh; // 폰트 최대 크기(px)

    // 높이가 작을 때만 조정
    if (ref.scrollHeight <= refSize) {
      const vhRight = (ref.scrollHeight / 100) * vwh; // vh에 맞는, 원래 폰트 크기
      const vhSize = maxSize - (maxSize - vhRight) / 2; // vh는 천천히 줄어들게 조정
      element.style.fontSize = `${vhSize}px`;
    }
  }
}
