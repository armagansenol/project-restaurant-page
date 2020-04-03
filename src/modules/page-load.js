import { contactPage } from './contact.js'
import { guestPage } from './guestbook.js'
import { homePage } from './home.js'

function pageLoad() {

const content = document.querySelector('.content');

while (content.firstChild) {
    content.removeChild(content.lastChild);
}

const sidebar = document.createElement('div');
sidebar.className = 'sidebar';

const visuals = document.createElement('div');
visuals.className = 'visuals';

const headLine = document.createElement('h1');
headLine.className = 'headline';
headLine.textContent = 'Double R Diner'

const info = document.createElement('h2');
info.className = 'info';

const main = document.createElement('div');
main.className = 'main';

const image = document.createElement('img');
image.className = 'sideimg';

const links = document.createElement('div');
links.className = 'links';

const homeLink = document.createElement('a');
homeLink.textContent = 'Home'
homeLink.className = 'home';

const guestLink = document.createElement('a');
guestLink.textContent = `Guestbook`;
guestLink.className = 'guestbook';

const contactLink = document.createElement('a');
contactLink.textContent = 'Contact';
contactLink.className = 'contact';

content.appendChild(sidebar);
sidebar.appendChild(main);
main.appendChild(headLine);
main.appendChild(info);
sidebar.appendChild(image);
sidebar.appendChild(links);
links.appendChild(homeLink);
links.appendChild(guestLink);
links.appendChild(contactLink);
content.appendChild(visuals);

const contact = document.querySelector('.contact');
contact.addEventListener('click', contactPage);

const home = document.querySelector('.home');
home.addEventListener('click', homePage);

const guestbook = document.querySelector('.guestbook');
guestbook.addEventListener('click', guestPage)

}

export { pageLoad };