// Плагин для слайдера

import Siema from 'siema';

const siema = new Siema({
  selector: '.siema',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

const prevBtnRef = document.querySelector('.js-prev');
const nextBtnRef = document.querySelector('.js-next');

prevBtnRef.addEventListener('click', () => siema.prev());
nextBtnRef.addEventListener('click', () => siema.next());
