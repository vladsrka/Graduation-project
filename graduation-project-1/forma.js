"use strict";

document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('forma');
    let unameField = form.querySelector('input[name="uname"]');
    let uphoneField = form.querySelector('input[name="uphone"]');
    let ucompanyField = form.querySelector('input[name="ucompany"]');
    let umailField = form.querySelector('input[name="umail"]');
    let umessageField = form.querySelector('textarea[name="umessage"]');

    // Функция для сброса состояния поля ввода
    function resetInputField(inputField) {
        inputField.placeholder = inputField.name === 'uname' ? 'Укажите имя' : '+375 (__) ___-___-_';
        inputField.classList.remove('input-error');
    }

    // Обработчики событий focus для сброса placeholder и класса ошибки
    unameField.addEventListener('focus', function () {
        resetInputField(unameField);
    });
    uphoneField.addEventListener('focus', function () {
        resetInputField(uphoneField);
    });

    // Функция для добавления класса active
    function toggleActiveClass(add) {
        let responseOutput = document.querySelector('.response-output');
        if (add) {
            responseOutput.classList.add('active');
        } else {
            responseOutput.classList.remove('active');
            responseOutput.textContent = ''; // Очищаем текст
        }
    }

    form.onsubmit = function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Создаем объект values для хранения данных формы
        let values = {
            uname: unameField.value,
            uphone: uphoneField.value,
            ucompany: ucompanyField.value,
            umail: umailField.value,
            umessage: umessageField.value
        };

        // Сохраняем значение uname в локальное хранилище под ключом 'test'
        localStorage.setItem('test', values.uname);

        // Сбрасываем placeholder и класс ошибки для всех полей
        resetInputField(unameField);
        resetInputField(uphoneField);

        // Проверяем, заполнены ли поля uname и uphone
        let isUnameFilled = unameField.value.trim() !== '';
        let isUphoneFilled = uphoneField.value.trim() !== '';

        // Если поля не заполнены, устанавливаем placeholder и класс ошибки
        if (!isUnameFilled) {
            unameField.placeholder = 'Поле обязательно для заполнения';
            unameField.classList.add('input-error');
        }
        if (!isUphoneFilled) {
            uphoneField.placeholder = 'Поле обязательно для заполнения';
            uphoneField.classList.add('input-error');
        }

        // Если оба поля заполнены, добавляем класс active и текст в .response-output
        if (isUnameFilled && isUphoneFilled) {
            console.log(values); // Выводим объект values в консоль (для отладки)

            // Добавляем класс active и текст
            toggleActiveClass(true);
            document.querySelector('.response-output').textContent = localStorage.getItem('test') + ' ваше сообщение успешно доставлено. Надеемся на дальнейшее сотрудничество.';
        } else {
            // Если поля не заполнены, удаляем класс active
            toggleActiveClass(false);
        }
    };
    document.addEventListener('click', function (event) {
        let isClickInsideForm = form.contains(event.target);

        if (!isClickInsideForm) {
            toggleActiveClass(false);
        }
    });
});

