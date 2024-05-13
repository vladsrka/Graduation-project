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



function changeTextP(link, newText) {
  var paragraph = link.querySelector('p');
  if (paragraph.textContent === newText) {
    paragraph.textContent = paragraph.getAttribute('data-default-text');
  } else {
    paragraph.setAttribute('data-default-text', paragraph.textContent);
    paragraph.textContent = newText;
  }
}
// onclick="changeTextP(this, 'Ещё в разработке.')"



function changeTextH(link, newText) {
  var header = link.querySelector('h1, h2, h3, h4, h5, h6');
  if (header.textContent === newText) {
    header.textContent = header.getAttribute('data-default-text');
  } else {
    header.setAttribute('data-default-text', header.textContent);
    header.textContent = newText;
  }
}
// onclick="changeTextH(this, 'Ещё в разработке.')"



function addStateOpenClass() {
  const headerMobile = document.querySelector('.header-mobile');
  headerMobile.classList.add('state-open');
}
function removeStateOpenClass() {
  const headerMobile = document.querySelector('.header-mobile');
  headerMobile.classList.remove('state-open');
}



// function toggleSubMenu(event) {
//   event.preventDefault();
//   // Получаем родителя текущего элемента (li.menu-bottom-list)
//   let parentElement = event.currentTarget.closest('.menu-bottom-list');
//   // Получаем элемент sub-menu внутри родителя
//   let subMenu = parentElement.querySelector('.sub-menu');
//   // Проверяем, есть ли у sub-menu класс open
//   if (subMenu.classList.contains('open')) {
//     // Если уже открыто, то закрываем только текущее sub-menu
//     subMenu.classList.remove('open');
//   } else {
//     // Добавляем класс open только к текущему sub-menu
//     subMenu.classList.add('open');
//   }
// }
// // Находим все ссылки с классом bottom-list и навешиваем на них событие click
// document.querySelectorAll('.bottom-list').forEach(element => {
//   element.addEventListener('click', toggleSubMenu);
// });
// // Добавляем обработчик события click на документ, чтобы закрывать sub-menu при клике вне области sub-menu
// document.addEventListener('click', function (event) {
//   if (!event.target.closest('.menu-bottom-list')) {
//     document.querySelectorAll('.sub-menu').forEach(element => {
//       element.classList.remove('open');
//     });
//   }
// });



function toggleSubMenu(event) {
  event.preventDefault();
  let parentElement = event.currentTarget.closest('.menu-bottom-list');
  let subMenu = parentElement.querySelector('.sub-menu');

  if (subMenu.classList.contains('open')) {
    subMenu.classList.remove('open');
  } else {
    subMenu.classList.add('open');
  }

  // Находим ближайшее изображение к родительскому элементу
  let image = parentElement.querySelector('img');

  if (image) {
    if (image.classList.contains('rotated')) {
      // Убираем класс rotated, чтобы можно было снова повернуть вниз
      image.style.transition = 'transform 0.3s';
      image.style.transform = 'rotate(0deg)';
      setTimeout(() => {
        image.classList.remove('rotated');
      }, 500);
    } else {
      // Добавляем класс rotated, чтобы запомнить, что изображение повернуто
      image.style.transition = 'transform 0.3s';
      image.style.transform = 'rotate(180deg)';
      image.classList.add('rotated');
    }
  }
}

document.querySelectorAll('.bottom-list').forEach(element => {
  element.addEventListener('click', toggleSubMenu);
});

document.addEventListener('click', function (event) {
  if (!event.target.closest('.menu-bottom-list')) {
    document.querySelectorAll('.sub-menu').forEach(element => {
      element.classList.remove('open');
    });

    document.querySelectorAll('.menu-bottom-list img').forEach(image => {
      image.style.transition = 'none'; // Сбрасываем анимацию при закрытии
    });
  }
});



window.addEventListener('load', function (e) {
  var slider = new Swiper('.promotions-slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    watchOverflow: true,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1060: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    },
  });
});


