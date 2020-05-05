'use strict';

let burger = document.getElementById('hamburger');
let menu = document.getElementById('menu');
let menuItem = document.querySelectorAll('.header__navigation a');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

menuItem.forEach(item => {
    item.addEventListener('click', function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    })
});




