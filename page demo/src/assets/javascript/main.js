let menu = document.querySelector('.header__menu');
let btn_toggle = document.querySelector('.btn--toggle');
btn_toggle.addEventListener('click', function(){
    menu.classList.toggle('show');
    menu.classList.toggle('show-menu');
    menu.style.transition = ' all 0.5s';
    console.log('click');
});