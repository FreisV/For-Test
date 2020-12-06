const nav = document.querySelector('.menu__nav');
const menuBackground = document.querySelector('.menu__background');
const btn = document.querySelector('.menu__btn');
const swap = document.querySelector('.swap__btn');
const overlay = document.querySelector('.overlay');
const link = document.querySelectorAll('.menu__link');
const card = document.querySelectorAll('.card');

link.forEach((el, idx) => el.addEventListener('click', (e) => {
  if (nav.classList.contains('menu__nav_active')) {
    nav.classList.toggle('menu__nav_active');
    menuBackground.classList.toggle('menu__background_active');
    btn.classList.toggle('menu__btn_active');
    overlay.classList.toggle('overlay_active');

    link.forEach((elem, idx) => {
      if (link[idx].classList.contains('menu__link_active')) {
        link[idx].classList.remove('menu__link_active');
      }
    });

    link[idx].classList.add('menu__link_active');
  }
}));

document
  .querySelector('[data-hamburger="hamburger"]')
  .addEventListener('click', (e) => {
    nav.classList.toggle('menu__nav_active');
    menuBackground.classList.toggle('menu__background_active');
    btn.classList.toggle('menu__btn_active');
    overlay.classList.toggle('overlay_active');
  });

document
  .querySelector('[data-overlay="overlay"]')
  .addEventListener('click', (e) => {
    if (nav.classList.contains('menu__nav_active')) {
      nav.classList.toggle('menu__nav_active');
      menuBackground.classList.toggle('menu__background_active');
      btn.classList.toggle('menu__btn_active');
      overlay.classList.toggle('overlay_active');
    }
  });

document.querySelector('[data-swap="swap"]').addEventListener('click', (e) => {
  swap.classList.toggle('swap__btn_play');
});

document.querySelectorAll('.turn').forEach((el, idx) => {
  el.addEventListener('click', (e) => {
    card[idx].classList.add('card_active');
  });
  card[idx].addEventListener('mouseleave', (e) => {
    card[idx].classList.remove('card_active');
  });
});
