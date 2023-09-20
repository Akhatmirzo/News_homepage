const menu = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.menu-close');
const hamburMenu = document.querySelector('.hambur');

menu.addEventListener('click', () => {
    hamburMenu.classList.add('active');
})
menuClose.addEventListener('click', () => {
    hamburMenu.classList.remove('active');
})