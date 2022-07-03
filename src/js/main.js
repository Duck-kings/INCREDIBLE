import '../assets/styles/main.scss';

const wrapper = document.querySelector('.wrapper');
const sidebar = document.querySelector('.sidebar');
const close_btn = document.querySelector('.close__btn');
const burger_btn = document.querySelector('.burger__menu');

burger_btn.addEventListener('click', () => {
    sidebar.classList.add('open');
    wrapper.classList.add('fixed');
    burger_btn.style.display = 'none';
});

close_btn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    wrapper.classList.remove('fixed');
    burger_btn.style.display = 'flex';
});