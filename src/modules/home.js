import { pageLoad } from "./page-load.js";

function homePage() {
    pageLoad();
    document.querySelector('.info').textContent = `Welcome! RR Diner is a great place for food, folks and fun. You'll find a menu filled with delightful food in a great atmosphere the whole family will enjoy. Hot cherry pie, fried chicken & mash potatoes, milkshakes yummy as can be and the best coffee in town!`;
    document.querySelector('.sideimg').src = 'img/rr-exterior.jpg';
    document.querySelector('.visuals').style.backgroundImage = 'url(../dist/img/pie2.jpg)';
}

export { homePage }