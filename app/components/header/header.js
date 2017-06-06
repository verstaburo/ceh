import $ from 'jquery';

export default () => {
  const burger = $('.header__burger');
  const navbar = $('.header__navbar');
  const visible = 'header__navbar_visible';
  const open = 'header__burger_open';

  burger.on('click', () => {
    burger.toggleClass(open);
    navbar.toggleClass(visible);
  });
};
