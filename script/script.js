'use strict';

const navbar = document.getElementById('navbar');

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
  } else {
    navbar.classList.add('top');
  }
};
