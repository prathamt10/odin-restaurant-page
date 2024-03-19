import location_img_src from './images/restaurant-location.png';

function loadAbout() {
    const about = document.createElement('div');
    const p1 = document.createElement('p');
    p1.textContent = 'Phone Num: 123 456 7890';
    about.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = 'Address: Hollywood Boulevard 42, Los Angeles, USA';
    about.appendChild(p2);

    const location_img = document.createElement('img');
    location_img.src = location_img_src;
    location_img.style.height = '50%';
    about.appendChild(location_img);

    about.classList.add('card');

    return about;
}

export default loadAbout;