import $ from 'jquery';

export default () => {
  const burger = $('.header__burger');
  const navbar = $('.header__navbar');
  const visible = 'header__navbar_visible';
  const open = 'header__burger_open';

  // Freeze page content scrolling
  function freeze() {
    let top;

    if ($('html').css('position') !== 'fixed') {
      top = $('html').scrollTop() ? $('html').scrollTop() : $('body').scrollTop();
      if (window.innerWidth > $('html').width()) {
        $('html').css('overflow-y', 'scroll');
      }
      $('html').css({ width: '100%', height: '100%', position: 'fixed', top: -top });
    }
  }

// Unfreeze page content scrolling
  function unfreeze() {
    if ($('html').css('position') === 'fixed') {
      $('html').css('position', 'static');
      $('html, body').scrollTop(-parseInt($('html').css('top')));
      $('html').css({ position: '', width: '', height: '', top: '', 'overflow-y': '' });
    }
  }

  burger.on('click', () => {
    burger.toggleClass(open);
    navbar.toggleClass(visible);
    if (burger.hasClass(open)) {
      freeze();
    } else {
      unfreeze();
    }
  });
};
