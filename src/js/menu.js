import template from '../templates/menu.hbs';
import menuList from '../menu.json';

const layout = template(menuList);

const menu = document.querySelector('.js-menu');
menu.insertAdjacentHTML('beforeend', layout);
