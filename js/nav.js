const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

const menuSocs = document.querySelectorAll('.menu-soc');
const menuIcons = document.querySelectorAll('.menu-soc__icons');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    menuSocs.forEach(soc => soc.classList.add('open'));
    menuIcons.forEach(soc => icon.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    menuSocs.forEach(soc => soc.classList.remove('open'));
    menuIcons.forEach(soc => icon.classList.remove('open'));

    showMenu = false;
  }
}