"use strict";

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-line');
const totalSlides = slides.length;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = 'none'; // Сначала скрываем все слайды
  });
  slides[n].style.display = 'flex'; // Показываем нужный слайд
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; // Получаем следующий индекс слайда
  showSlide(currentSlide); // Показываем нужный слайд
}
setInterval(nextSlide, 3200); // автоматическая смена слайдов каждые 3 секунды
showSlide(currentSlide); // Показываем первый слайд при загрузке страницы



function changeText(link, newText) {
  if (link.textContent === newText) {
    link.textContent = link.getAttribute('data-default-text');
  } else {
    link.setAttribute('data-default-text', link.textContent);
    link.textContent = newText;
  }
}
// onclick="changeText(this, 'Ещё в разработке.')"



function addStateOpenClass() {
  const headerMobile = document.querySelector('.header-mobile');
  headerMobile.classList.add('state-open');
}
function removeStateOpenClass() {
  const headerMobile = document.querySelector('.header-mobile');
  headerMobile.classList.remove('state-open');
}



// function addOpenClassToSubMenu(event) {
//   const clickedMenu = event.currentTarget;
//   const subMenu = clickedMenu.querySelector('.sub-menu');

//   if (subMenu) {
//     subMenu.classList.toggle('open');
//   }
// }
// const menuBottomLists = document.querySelectorAll('.menu-bottom-list');
// menuBottomLists.forEach(menuBottomList => {
//   menuBottomList.addEventListener('click', addOpenClassToSubMenu);
// });

function addOpenClassToParentSubMenu(event) {
  const clickedLink = event.currentTarget;
  const subMenu = clickedLink.closest('.sub-menu');

  if (subMenu) {
      subMenu.classList.toggle('open');
  }
}
const bottomLists = document.querySelectorAll('.bottom-list');
bottomLists.forEach(bottomList => {
  bottomList.addEventListener('click', addOpenClassToParentSubMenu);
});