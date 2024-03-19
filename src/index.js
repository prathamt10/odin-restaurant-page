import './style.css';
import loadHome from './home';
import loadAbout from './about';
import loadMenu from './menu';

const about_content = document.getElementById('about-content');
const home_content = document.getElementById('home-content');
const menu_content = document.getElementById('menu-content');

home_content.appendChild(loadHome());
about_content.appendChild(loadAbout());
menu_content.appendChild(loadMenu());

menu_content.classList.add('hidden');
about_content.classList.add('hidden');

const home_btn = document.getElementById('home-btn');
const about_btn = document.getElementById('about-btn');
const menu_btn = document.getElementById('menu-btn');

about_btn.classList.add('inactive');
menu_btn.classList.add('inactive');

home_btn.addEventListener('click', () => {
    home_content.classList.remove('hidden');
    about_content.classList.add('hidden');
    menu_content.classList.add('hidden');

    home_btn.classList.remove('inactive');
    about_btn.classList.add('inactive');
    menu_btn.classList.add('inactive');
});

about_btn.addEventListener('click', () => {
    about_content.classList.remove('hidden');
    home_content.classList.add('hidden');
    menu_content.classList.add('hidden');

    about_btn.classList.remove('inactive');
    home_btn.classList.add('inactive');
    menu_btn.classList.add('inactive');
});

menu_btn.addEventListener('click', () => {
    menu_content.classList.remove('hidden');
    home_content.classList.add('hidden');
    about_content.classList.add('hidden');

    menu_btn.classList.remove('inactive');
    home_btn.classList.add('inactive');
    about_btn.classList.add('inactive');
});
