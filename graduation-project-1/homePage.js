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



function toggleSubMenu(event) {
  event.preventDefault();
  // Получаем родителя текущего элемента (li.menu-bottom-list)
  let parentElement = event.currentTarget.closest('.menu-bottom-list');
  // Получаем элемент sub-menu внутри родителя
  let subMenu = parentElement.querySelector('.sub-menu');
  // Проверяем, есть ли у sub-menu класс open
  if (subMenu.classList.contains('open')) {
    // Если уже открыто, то закрываем только текущее sub-menu
    subMenu.classList.remove('open');
  } else {
    // Добавляем класс open только к текущему sub-menu
    subMenu.classList.add('open');
  }
}
// Находим все ссылки с классом bottom-list и навешиваем на них событие click
document.querySelectorAll('.bottom-list').forEach(element => {
  element.addEventListener('click', toggleSubMenu);
});
// Добавляем обработчик события click на документ, чтобы закрывать sub-menu при клике вне области sub-menu
document.addEventListener('click', function (event) {
  if (!event.target.closest('.menu-bottom-list')) {
    document.querySelectorAll('.sub-menu').forEach(element => {
      element.classList.remove('open');
    });
  }
});