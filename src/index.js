import './js/modal';
import './js/carousel';
import './sass/styles.scss';
import './js/notification';
import './js/tippy';
import './js/slimselect';
import './js/chart';
import './js/plyr';
import './js/local';
import './js/template';

import { AvatarGenerator } from 'random-avatar-generator';
const generator = new AvatarGenerator();

const form = document.querySelector('#js-form');

form.addEventListener('submit', event => {
  const avatar = generator.generateRandomAvatar('');

  form.insertAdjacentHTML('afterend', `<img src="${avatar}" alt="">`);
});

const randomRef = document.querySelector('#random-form');
const areaRef = document.querySelector('#random-area');

randomRef.addEventListener('submit', event => {
  event.preventDefault();

  if (!event.currentTarget.elements.random.value) {
    return;
  }

  const arr = [];

  arr.push(areaRef.value.replace(/\r\n/g, '\n').split('\n'));

  console.log();

  checkWinner(arr);
});

function checkWinner(array) {
  const winner = array[Math.floor(Math.random() * array.length)];

  return console.log(winner);
}

import * as basicLightbox from 'basiclightbox';

const instance = basicLightbox.create(`
    <iframe width="727" height="409" src="https://www.youtube.com/embed/rWfZAeEnn2I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);

instance.show();