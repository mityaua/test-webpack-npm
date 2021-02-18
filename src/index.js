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
