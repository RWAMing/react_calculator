/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

/**
 * ref에 따라 target 폰트사이즈 조절하는 함수
 * @property {ElementArray} target 조절시킬 요소
 * @property {Element} ref 조절에 참조할 요소
 * @property {Number} refSize target이 반응할 ref의 최대 width, height
 * @property {Number} vwh 폰트 vw(vh)단위 지정
 */
export default function sizeWHalfFitH(event, props) {
  const { target, ref, refSize, vwh } = props;
  if (!target[0]) {
    adjust(target);
  } else {
    target.forEach((e) => {
      adjust(e);
    });
  }

  function adjust(e) {
    const element = e;
    const maxSize = (refSize / 100) * vwh; // 폰트 최대 크기(px)
    const vwSize = (ref.scrollWidth / 100) * vwh;

    // 높이가 작음
    if (ref.scrollHeight <= refSize) {
      const vhRight = (ref.scrollHeight / 100) * vwh; // vh에 맞는, 원래 폰트 크기
      const vhSize = maxSize - (maxSize - vhRight) / 2; // vh는 천천히 줄어들게 조정
      // vh사이즈가 vw를 안 넘어가게 함
      if (vwSize < vhSize) {
        element.style.fontSize = `${vwSize}px`;
      } else {
        element.style.fontSize = `${vhSize}px`;
      }
    }
    // 높이는 큰데 너비가 작음
    else if (ref.scrollWidth <= refSize) {
      element.style.fontSize = `${vwSize}px`;
    }
    // 너비높이 다 크면, 최대사이즈로 고정
    else {
      element.style.fontSize = `${maxSize}px`;
    }
  }
}
