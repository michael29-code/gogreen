const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function () {
    console.log('open hamburger');

    if (header.classList.contains('open')) { //cllose burger
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else {
        body.classList.add('noscroll');
        header.classList.add('open');//open
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    }
});

overlay.addEventListener('click', function () {
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeElems.forEach(function (element) {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
});


// animation
var animation = bodymovin.loadAnimation({
    container: document.querySelector('.hero__image'),

    // Set your ID to something that you'll associate with the animation you're using //
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'asset/hero.json'

    // Make sure your path has the same filename as your animated SVG's JSON file //
});