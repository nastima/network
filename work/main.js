'use strict';

let buttonHidden = document.querySelector('.button_hidden');
let arrowUp = document.querySelector('.button_up');
let text = document.querySelector('.button_text');
let section = document.querySelector('.section');
let sectionIcons = section.querySelectorAll('.section_icon');
let hiddenIcons = document.querySelectorAll('.section_icon.section_icon-hidden');

// Устанавливаем начальный текст кнопки при загрузке страницы
function setInitialButtonText() {
    const isMobile = window.innerWidth <= 768;
    text.textContent = isMobile ? 'Показать все' : 'Скрыть'; // Изначально для мобильных кнопка "Показать все"
    arrowUp.classList.toggle('arrow--rotated', isMobile);  // Стрелка вниз на мобильных
}

// Вызов функции при загрузке страницы
setInitialButtonText();

// Обработчик события для кнопки
buttonHidden.addEventListener('click', function () {
    const isMobile = window.innerWidth <= 768;
    const isShowMode = text.textContent === 'Показать все';

    // Меняем текст кнопки
    text.textContent = isShowMode ? 'Скрыть' : 'Показать все';
    // Поворачиваем стрелку
    arrowUp.classList.toggle('arrow--rotated', !isShowMode);

    if (isMobile) {
        // Для мобильных устройств показываем/скрываем иконки с 6 по 11
        hiddenIcons.forEach(icon => {
            icon.classList.toggle('section_icon-hidden', !isShowMode);
        });
    } else {
        // Для десктопа скрываем последние 3 иконки
        for (let i = sectionIcons.length - 3; i < sectionIcons.length; i++) {
            sectionIcons[i].classList.toggle('hidden', !isShowMode);
        }
    }
});

// Устанавливаем начальный текст при изменении размера окна
window.addEventListener('resize', setInitialButtonText);
