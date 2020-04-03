import { pageLoad } from "./page-load.js";

function guestPage() {
    pageLoad();
    document.querySelector('.info').innerHTML = `"This diner, and its extraordinarily good coffee and pie, has become, I admit, something of an obsession for me."<br>
    ―Dale Cooper`;
    document.querySelector('.sideimg').src = '../dist/img/thumbup.jpg'
    document.querySelector('.visuals').style.backgroundImage = 'url(../dist/img/rr-interior.jpg)';
    document.querySelector('.info').style.fontStyle = 'italic';
    document.querySelector('.info').style.textAlign = 'start';
    document.querySelector('.info').style.fontSize = '18px';
    document.querySelector('.info').style.marginTop = '50px';
    document.querySelector('.info').style.width = '350px';
    document.querySelector('.info').style.alignSelf = 'center';


};

export { guestPage }