'use strict';

const header = document.querySelector('.header');
const headerMenuBtn = document.querySelector('.header-menu-btn');
const headerMegaMenu = document.querySelector('.header-mega-menu');
const categoryList = document.querySelectorAll('.category-list li');

window.addEventListener('scroll', () => {

    if (pageYOffset > 50) {
        header.classList.add('small');
    } else {
        header.classList.remove('small');
    }
    
});

function showCategory(data) {
    
    if (data !== '') {

        for (let key of data) {

            const className = document.querySelector('.' + key);
            className.classList.add('active');

        }

    }
}

function showMenu() {
    headerMenuBtn.addEventListener('click', function() {

        if ( headerMegaMenu.classList.contains('active') ) {
            headerMegaMenu.classList.remove('active');
        } else {
            headerMegaMenu.classList.add('active');
        }

    });
}
showMenu();

function clickListener() {
    for (let i = 0; i < categoryList.length; i++) {

        categoryList[i].addEventListener('click', function() {

            if ( categoryList[i].classList.contains('active') ) {
                categoryList[i].classList.remove('active');
            } else {
                categoryList[i].classList.add('active');
            }

        });
    }
}
clickListener();

