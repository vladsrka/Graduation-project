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



