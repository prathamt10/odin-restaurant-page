import chef_img_src from './images/chef.jpg';

function loadHome() {
    const home = document.createElement('div');
    const p1 = document.createElement('p');
    p1.textContent = 'Best Chinese Restaurant in your country';
    home.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = 'Made with passion since 1908';
    home.appendChild(p2);

    const chef_img = document.createElement('img');
    chef_img.src = chef_img_src;
    chef_img.style.height = '80%';
    home.appendChild(chef_img);
    
    const p3 = document.createElement('p');
    p3.textContent = 'Order online or visit us!';
    home.appendChild(p3);

    home.classList.add('card');

    return home;
}

export default loadHome;